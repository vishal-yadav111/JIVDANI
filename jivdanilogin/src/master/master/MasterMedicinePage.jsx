import React, { useState, useEffect } from "react";



import { MasterApi } from "../masterApi/MasterApi";


import { Loader } from "./Loader";

import useDebounce from "../../useDebounce/useDebounce/useDebounce";
import { DeleteApi } from "../masterApi/DeleteApi";
import { AddEditMedicine } from "../masterApi/AddEditMedicine";
import { TableFooter } from "../master/TableFooter";
import { Color } from "../../visitConstant/Color";
import { TableHeader } from "./TableHeader";
import Categories from "../../visitConstant/Categories";
import {
  MedicineHeader,
  DiagnosisHeader,
  InvestigationHeader,
  Complaints,
  generalExaminations,

  
  PHYSICAL_INFO_HEADER,
  MENSTRUAL_INFO_HEADER,
  Whens_header,
  Lab_Test_Header,
  TESTS_REQUESTED_HEADER,
  ALLERGIES_HEADER,
  PERSONAL_HISTORY_HEADER,
  PAST_MEDICAL_HISTORY_HEADER,
  DOSAGE_HEADER,
  UNITS_HEADER,
  FREQUENCY_HEADER,
  DURATION_HEADER,
  NOTE_HEADER,
  PREGNANCY_OUTCOME_HEADER,
  ENT_HEADER,
  PA_HEADER,
  CNS_HEADER,
  RS_HEADER,
  CVS_HEADER,
  
} from "./HeaderData";


import { Reactnativedatahshow } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Medication from "../../modal/AddMedication";



import ToastFist from "../../Toast/ToastFist";
// import {  DATA_SAVED} from "../../../Constant";

import DiagnosisTable from "./masterComponents/DiagnosisTable";
import InvestigationTable from "./masterComponents/InvestigationTable";
import ComplaintsTable from "./masterComponents/ComplaintsTable";

import { ERROR_MSG ,DATA_SAVED} from "../Constant";
import { faDownload, faFloppyDisk, faMagnifyingGlass, faPencil, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";

import XrayTable from "./masterComponents/XrayTable";
import MenstrualInfoTable from "./masterComponents/MenstrualInfoTable";
import PhysicalExaminationTable from "./masterComponents/PhysicalExaminationTable";
import WhensTable from "./masterComponents/WhensTable";
import LabTestImagingTable from "./masterComponents/LabTestImagingTable";
import TestRequestedTable from "./masterComponents/TestRequestedTable";
import GeneralTable from "./masterComponents/GeneralTable";
import AllergyTable from "./masterComponents/AllergyTable";
import PersonalHistory from "./masterComponents/PersonaHistoryTable";
import PastMedicalHistory from "./masterComponents/PastMedicalHistoryTable";
import FamilyHistory from "./masterComponents/FamilyHistoryTable";
import DosageTable from "./masterComponents/DosageTable";
import UnitsTable from "./masterComponents/UnitsTable";
import FrequencyTable from "./masterComponents/FrequencyTable";
import DurationTable from "./masterComponents/DurationTable";
import NoteTable from "./masterComponents/NoteTable";
import PragnancyOutcomestable from "./masterComponents/PregnancyoutcomesTable";
import ENTTable from "./masterComponents/EntTable";
import PATable from "./masterComponents/PaTable";
import CNSTable from "./masterComponents/CnsTable";
import RSTable from "./masterComponents/RsTable";
import CVSTable from "./masterComponents/CvsTable";
import { AddEditAll } from "../masterApi/AddEditAll";
import MasterSideBar from "./MasterSideBar";
import AddforAll from "../../modal/AddforAll";



const MedicinePage = () => {
  const [medicines, setMedicines] = useState([]);


  const [search, setSearch] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const debouncedInput = useDebounce(search, 500);
  const [showToast, setShowToast] = useState(false);
  const [colorStatus, setColorStatus] = useState(3);
  const [toastMsg, setToastMsg] = useState("");

  const [catId, setCatId] = useState(Categories.MEDICINE.catID );

  const [editMedicine, setEditMedicine] = useState({
    id: "",
    name: "",
    contents: "",
    unit: {
      id: "",
      name: "",
    },
    dosage: {
      id: "",
      name: "",
    },
    whens: {
      id: "",
      name: "",
    },
    frequency: {
      id: "",
      name: "",
    },
    duration: "",
    type: "",
    notes: "",
    active: true,
  });

    const [EditMedicineforAll, setEditMedicineforAll] = useState({
    id: "",
    name: "",
  });




  
  const [rowsPerPage, setRowsPerPage] = useState(50); // Default rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const [pageable, setPageable] = useState([]);
  const [loading, setLoading] = useState(false);
  const resetTheValue = () => {
    setEditingId(null);
    setEditMedicine({
      id: "",
      name: "",
      contents: "",
      type: "",
      notes: "",
      duration: "",
      unit: {
        id: "",
        name: "",
        active: true,
      },
      dosage: {
        id: "",
        name: "",
        active: true,
      },
      whens: {
        id: "",
        name: "",
        active: true,
      },
      frequency: {
        id: "",
        name: "",
        active: true,
      },
      active: true,
    });
  };


   const resetTheValueforAll = () => {
    setEditingId(null);
    setEditMedicine({
      id: "",
      name: "",
      
    });
  };

  const handleSideBar = (clickedCatId) => {
    setCatId(clickedCatId);
    setRowsPerPage(50)
    getData("", 50, 1, clickedCatId);
  };

  useEffect(() => {
    setLoading(true);
    getData();
    // dispatch(Reactnativedatahshow("DATASHOW"));
    return () => {
      // dispatch(Reactnativedatahshow(""));
    };
  }, []);

  //Hitting api after certain delay
  useEffect(() => {
    if (debouncedInput) {
      setLoading(true);
      getData(debouncedInput);
    }
  }, [debouncedInput]);

  const downloadCSV = () => {
    const csvContent = jsonToCSV(medicines);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const jsonToCSV = (json) => {
    const header = Object.keys(json[0]).join(",");
    const rows = json.map((row) => Object.values(row).join(","));

    // Calculate number of columns
    const numColumns = header.split(",").length;

    // Create padding for centering text
    const totalPaddingCells = numColumns - 1;
    const leftPaddingCells = Math.floor(totalPaddingCells / 2);
    const rightPaddingCells = totalPaddingCells - leftPaddingCells;

    const centeredText = `${",".repeat(
      leftPaddingCells
    )}"Jivdani Hospital"${",".repeat(rightPaddingCells)}`;

    const csvContent = [centeredText, header, ...rows].join("\n");
    return csvContent;
  };

  const getData = async (
    searchKey = "",
    PerPage = 50,
    crntPage = 1,
    activeCatId
  ) => {
    try {
        // console.log("for api", crntPage, searchKey, PerPage);
      const results = await MasterApi(
        !activeCatId ? Categories.MEDICINE.catID : activeCatId,

        crntPage,
        searchKey,
        PerPage
      );
      if (!results) {
        // console.log("result", results);
      } else {
        // totalElements: 1056;
        // totalPages: 106;

        setMedicines(results.content);

        setPageable({
          pageable: results?.pageable,
          totalElements: results?.totalElements,
          totalPages: results?.totalPages,
          last: results?.last,
          size: results?.size,
          number: results?.number,
          sort: results?.sort,
          numberOfElements: results.numberOfElements,
        });
      }
    //  console.log("result", results);
    } catch (error) {
      console.error("Error fetching API data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchKey) => {
    if (searchKey) {
      setSearch(searchKey);
    } else {
      setSearch("");
      getData("", rowsPerPage, currentPage);
    }
    setCurrentPage(1);
  };

  const handleEdit = (id, med) => {
    console.log("handle edit function call",id);
    setEditingId(id);

    setEditMedicine({
      id: med?.id,
      name: med?.name,
      contents: med?.contents,
      unit: { id: med.unit?.id, name: med.unit?.name },
      dosage: { id: med.dosage?.id, name: med.dosage?.name },
      whens: { id: med.whens?.id, name: med.whens?.name },
      frequency: { id: med.frequency?.id, name: med.frequency?.name },
      duration: med?.duration,
      type: med?.type,
      notes: med?.notes,
    });
  };


    const handleEditforAll = (id, med) => {
    console.log("handle edit function call",id);
    setEditingId(id);

      setEditMedicineforAll({
      id: med?.id,
      name: med?.name,
  
    });
  };


 

  // const handleEditChange = (e, obj = null) => {
  //   const { name, value } = e.target;
  //   if (obj != null) {
  //     setEditMedicine({
  //       ...editMedicine,
  //       [obj]: {
  //         ...editMedicine[obj],
  //         name: value,
  //       },
  //     });
  //   } else {
  //     setEditMedicine({
  //       ...editMedicine,
  //       [name]: name == "name" ? value.toUpperCase() : value,
  //     });
  //   }
  // };

  const handleEditChange = (e, obj = null) => {
  const { name, value } = e.target;

  setEditMedicine((prev) => {
    if (obj != null) {
      return {
        ...prev,
        [obj]: {
          ...prev[obj],
          name: value,
        },
      };
    } else {
      return {
        ...prev,
        [name]: name === "name" ? value.toUpperCase() : value,
      };
    }
  });
};



  // const saveEdit = async () => {
  //   const response = await AddEditMedicine({ data: editMedicine });
  const saveEdit = async () => {
   
 
    const response = await AddEditAll({ categoryId:catId, name:editMedicine.name, id:editingId });
    console.log("medicines are 111 ",editMedicine.name)
    


    
    

    if (response) {
      setMedicines(
        medicines.map((med) =>
          med.id === editingId ? { ...med, ...editMedicine } : med,
        
        )
      );
      setShowToast(true);
      setColorStatus(1);
      setToastMsg(DATA_SAVED);
      resetTheValue();
    } else {
      resetTheValue();
      setShowToast(true);
      setColorStatus(0);
      setToastMsg(ERROR_MSG);
    }
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const confirmDelete = async (confirmed) => {
    if (confirmed && deleteId) {
      try {
        const reponse = await DeleteApi(catId, deleteId);
        if (reponse) {
          setMedicines(medicines.filter((med) => med.id !== deleteId));
          setShowToast(true);
          setColorStatus(1);
          setToastMsg("Deleted successfully");
          clearSearch();
        } else {
          setColorStatus(0);
          setShowToast(true);
          setToastMsg(ERROR_MSG);
        }
      } catch (error) {
        setShowToast(true);
        setColorStatus(0);
        setToastMsg(ERROR_MSG);
        console.error("Error deleting data:", error);
      }
    }
    setShowConfirm(false);
    setDeleteId(null);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(e.target.value);
    getData("", e.target.value, currentPage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getData("", rowsPerPage, page);
  };

  const indexOfLastMedicine = currentPage * rowsPerPage;
  const indexOfFirstMedicine = indexOfLastMedicine - rowsPerPage;

  const clearSearch = () => {
    setSearch("");
    getData("", rowsPerPage, currentPage);
  };
console.log("edit medicines are 789",editMedicine)


  return (
    
    <div className="bg-light w-100"
     style={{
        minWidth: "1024px",
        height: "100vh",
       
        overflow: "hidden",
         width: "100%",
                 
        borderRadius: "8px",
        border: "1px solid #ccc",
      
     
    
      }}>
      <div
        className="d-flex justify-content-between align-items-center mb-2 pe-4 pt-4 float-end"
        style={{ width: "90%" }}
      >
        <h6 style={{ color: Color.primary }}>Medicine Analysis</h6>
        <div className="position-relative w-50">
          <input
            type="text"
            placeholder="Search medicines..."
            value={search}
            onChange={
              (e) => handleSearch(e.target.value.toUpperCase())
              // setSearch(e.target.value)
            }
            className="form-control pe-5"
            style={{ height: "38px" }} // Set height here
          />
          {search ? (
            <FontAwesomeIcon
              // icon="fa-solid fa-xmark"
              icon={faXmark}
              className="text-primary"
              style={{
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={clearSearch}
            />
          ) : (
            <FontAwesomeIcon
              // icon="fa-solid fa-magnifying-glass"
              icon={faMagnifyingGlass}
              className="text-primary"
              style={{
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          )}
        </div>
        <div className="d-flex">
          <button
            className="btn btn-outline-black border  me-3"
            style={{ fontSize: 15, height: "38px" }}
            onClick={() => downloadCSV()}
          >
            {/* <img
              src={icons.exports}
              alt={".."}
              style={{ width: 22, height: 22, marginRight: 4 }}
            /> */}
            <FontAwesomeIcon
              // icon="fa-solid fa-download"
              icon={faDownload}
              className="pe-2"
              style={{
                color: "gray",
              }}
            />
            Export
          </button>
          {/* <button className="btn btn-primary">Create New +</button> */}
          
          
          <Medication customeKey={true} />
       
          
        </div>
      </div>

      <div
        className=" "
        style={{ flexDirection: "row", display: "flex", width: "100%" }}
      >
        <div
          className="col d-flex flex-column align-items-center py-3 me-3  px-2 bg-white mb-1"
          style={{
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
            overflowY: "auto",
            overflowX: "hidden",
            scrollbarWidth:'none',
            height: "86vh",
            width: "10%",
            minWidth:"18%"
          }}
        >
          <MasterSideBar handleSideBar={handleSideBar} />
        </div>
        <div
          className="pe-2"
          style={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
            width: "90%",
          }}
        >
          <div className="" style={{ flexGrow: 1 }}>
            {/* Table header */}
            <table
              className=" table-fixed  table-borderless "
              style={{
                width: "100%",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <TableHeader
                headerName={
                  catId == Categories.MEDICINE.catID
                    ? MedicineHeader
                    : catId == Categories.DIAGNOSIS.catID
                    ? DiagnosisHeader
                    : catId == Categories.INVESTIGATIONS.catID
                    ? InvestigationHeader
                    : catId == Categories.COMPLAINTS.catID
                    ? Complaints
                      : catId == Categories.GENERAL.catID
                    ? generalExaminations
                       : catId == Categories.WHENS.catID
                    ? Whens_header
                 
                    : catId == Categories.MENSTRUAL_INFO.catID
                    ? MENSTRUAL_INFO_HEADER
                      : catId == Categories.PHYSICAL_EXAMINATION.catID
                    ? PHYSICAL_INFO_HEADER
                    : catId == Categories.LAB_TESTS_AND_IMAGING.catID
                    ? Lab_Test_Header
                      : catId == Categories.TESTS_REQUESTED.catID
                    ? TESTS_REQUESTED_HEADER
                     : catId == Categories.ALLERGIES.catID
                    ? ALLERGIES_HEADER
                      : catId == Categories.PERSONAL_HISTORY.catID
                    ? PERSONAL_HISTORY_HEADER
                       : catId == Categories.PAST_MEDICAL_HISTORY.catID
                    ? PAST_MEDICAL_HISTORY_HEADER
                              : catId == Categories.DOSAGE.catID
                    ? DOSAGE_HEADER
                      : catId == Categories.UNITS.catID
                    ? UNITS_HEADER
                          : catId == Categories.FREQUENCY.catID
                    ? FREQUENCY_HEADER
                           : catId == Categories.DURATION.catID
                    ? DURATION_HEADER
                   : catId == Categories.NOTE.catID
                    ? NOTE_HEADER
                     : catId == Categories.CVS.catID
                    ? CVS_HEADER
                     : catId == Categories.RS.catID
                    ? RS_HEADER
                     : catId == Categories.CNS.catID
                    ? CNS_HEADER
                     : catId == Categories.PA.catID
                    ? PA_HEADER
                     : catId == Categories.ENT.catID
                    ? ENT_HEADER
                     : catId == Categories.PREGNANCY_OUTCOME.catID
                    ? PREGNANCY_OUTCOME_HEADER
                    : []
                }
              />
            </table>

            {/* Table body */}
            <table
              className="table table-fixed table-borderless "
              style={{ borderRadius: 8 }}
            >
              <tbody
                style={{
                  display: "block",
                  maxHeight: "calc(75vh - 50px)",
                  overflow: "auto",
                  overflowX: "hidden",
                  width: "100%",
                }}
              >
                {loading ? (
                  <Loader />
                ) : Array.isArray(medicines) && medicines.length > 0 ? (
                  medicines?.map((medicine, index) =>
                    catId == Categories.MEDICINE.catID ? (
                      <tr
                        className="mt-2 "
                        key={medicine.id}
                        style={{
                          display: "table",
                          width: "100%",
                          tableLayout: "fixed",
                          minHeight: 45,
                          maxHeight: 60,
                          verticalAlign: "middle",
                          borderRadius: 8,
                          fontSize: 14,
                          backgroundColor:
                            editingId === medicine?.id
                              ? Color.focusColor
                              : "transparent", // Highlight when editing
                          transition: "background-color 0.3s ease", // Smooth transition effect
                        }}
                      >
                        <td
                          className="text-start"
                          style={{
                            width: "30px",
                            borderTopLeftRadius: "8px",
                            borderBottomLeftRadius: "8px",
                            backgroundColor:
                              editingId === medicine?.id && "transparent",
                          }}
                        >
                          {indexOfFirstMedicine + index + 1}
                        </td>

                        <td
                          className="text-start"
                          style={{
                            width: "260px",
                            backgroundColor:
                              editingId === medicine?.id && "transparent",
                          }}
                        >
                          {editingId === medicine?.id ? (
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={editMedicine?.name}
                              onChange={handleEditChange}
                              className="form-control "
                              style={{
                                width: "99%",
                                margin: 0,
                                height: 32,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontSize: 14,
                                
                              }}
                            />
                          ) : (
                            medicine?.name
                          )}
                        </td>
                        <td
                          className="text-start"
                          style={{
                            width: "140px",
                            backgroundColor:
                              editingId === medicine?.id && "transparent",
                          }}
                        >
                          {editingId === medicine?.id ? (
                            <input
                              type="text"
                              id="contents"
                              name="contents"
                              value={editMedicine?.contents}
                              onChange={handleEditChange}
                              className="form-control "
                              style={{
                                width: "100%",
                                margin: 0,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontSize: 14,
                                height: 32,
                              }}
                            />
                          ) : (
                            medicine?.contents
                          )}
                        </td>
                        <td
                          className="text-start"
                          style={{
                            width: "80px",
                            backgroundColor:
                              editingId === medicine.id && "transparent",
                          }}
                        >
                          {editingId === medicine?.id ? (
                            <input
                              type="text"
                              id="type"
                              name="type"
                              value={editMedicine?.type}
                              onChange={handleEditChange}
                              className="form-control"
                              style={{
                                width: "100%",
                                margin: 0,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontSize: 14,
                                height: 32,
                              }}
                            />
                          ) : (
                            medicine?.type
                          )}
                        </td>
                        <td
                          className="text-start"
                          style={{
                            width: "80px",
                            backgroundColor:
                              editingId === medicine.id && "transparent",
                          }}
                        >
                          {editingId === medicine?.id ? (
                            <input
                              type="text"
                              id="dosage"
                              name="dosage"
                              value={editMedicine?.dosage?.name}
                              onChange={(e) => handleEditChange(e, "dosage")}
                              className="form-control"
                              style={{
                                width: "100%",
                                margin: 0,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontSize: 14,
                            
                                height: 32,
                              }}
                            />
                          ) : (
                            medicine?.dosage?.name
                          )}
                        </td>
                        <td
                          className="text-start"
                          style={{
                            width: "80px",
                            backgroundColor:
                              editingId === medicine.id && "transparent",
                          }}
                        >
                          {editingId === medicine?.id ? (
                            <input
                              type="text"
                              id="duration"
                              name="duration"
                              value={editMedicine?.duration}
                              onChange={handleEditChange}
                              className="form-control"
                              style={{
                                width: "100%",
                                margin: 0,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontSize: 14,
                                height: 32,
                              }}
                            />
                          ) : (
                            medicine?.duration
                          )}
                        </td>
                        <td
                          className="text-start"
                          style={{
                            width: "80px",
                            backgroundColor:
                              editingId === medicine.id && "transparent",
                          }}
                        >
                          {editingId === medicine?.id ? (
                            <input
                              type="text"
                              id="unit"
                              name="unit"
                              value={editMedicine?.unit?.name}
                              onChange={(e) => handleEditChange(e, "unit")}
                              className="form-control"
                              style={{
                                width: "100%",
                                margin: 0,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontSize: 14,
                                height: 32,
                              }}
                            />
                          ) : (
                            medicine?.unit?.name
                          )}
                        </td>

                        <td
                          className="text-start"
                          style={{
                            width: "100px",
                            backgroundColor:
                              editingId === medicine.id && "transparent",
                          }}
                        >
                          {editingId === medicine?.id ? (
                            <input
                              type="text"
                              id="frequency"
                              name="frequency"
                              value={editMedicine?.frequency?.name}
                              onChange={(e) => handleEditChange(e, "frequency")}
                              className="form-control"
                              style={{
                                width: "100%",
                                margin: 0,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontSize: 14,
                                height: 32,
                              }}
                            />
                          ) : (
                            medicine?.frequency?.name
                          )}
                        </td>
                        <td
                          className="text-start"
                          style={{
                            width: "100px",
                            backgroundColor:
                              editingId === medicine.id && "transparent",
                          }}
                        >
                          {editingId === medicine?.id ? (
                            <input
                              type="text"
                              id="whens"
                              name="whens"
                              value={editMedicine?.whens?.name}
                              onChange={(e) => handleEditChange(e, "whens")}
                              className="form-control"
                              style={{
                                width: "100%",
                                margin: 0,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontSize: 14,
                                height: 32,
                              }}
                            />
                          ) : (
                            medicine?.whens?.name
                          )}
                        </td>

                        <td
                          className="text-start"
                          style={{
                            width: "100px",
                            backgroundColor:
                              editingId === medicine.id && "transparent",
                          }}
                        >
                          {editingId === medicine?.id ? (
                            <input
                              type="text"
                              id="notes"
                              name="notes"
                              value={editMedicine?.notes}
                              onChange={handleEditChange}
                              className="form-control"
                              style={{
                                width: "100%",
                                margin: 0,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontSize: 14,
                                height: 32,
                              }}
                            />
                          ) : (
                            medicine?.notes
                          )}
                        </td>
                        <td
                          className="text-center"
                          style={{
                            width: "90px",
                            borderTopRightRadius: "8px",
                            borderBottomRightRadius: "8px",
                            backgroundColor:
                              editingId === medicine?.id && "transparent",
                          }}
                        >
                          {editingId === medicine?.id ? (
                            <FontAwesomeIcon
                              // icon="fa-solid fa-floppy-disk"
                              icon={faFloppyDisk}
                              className="text-primary"
                              style={{
                                cursor: "pointer",
                                marginLeft: "5px",
                              }}
                              onClick={saveEdit}
                            />
                          ) : (
                            <FontAwesomeIcon
                              // icon="fa-solid fa-pencil"
                              icon={faPencil}
                              style={{
                                cursor: "pointer",
                                marginLeft: "5px",
                                color: "gray",
                              }}
                              onClick={() => handleEdit(medicine?.id, medicine)}
                            />
                            // <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                          )}
                          <FontAwesomeIcon
                            // icon="fa-solid fa-trash"
                            icon={faTrash}
                            style={{
                              color: "gray",
                              cursor: "pointer",
                              marginLeft: "15px",
                            }}
                            onClick={() => handleDelete(medicine?.id)}
                          />
                        </td>
                      </tr>
                    ) : catId == Categories.DIAGNOSIS.catID ? (
                      <DiagnosisTable
                        medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ) : catId == Categories.INVESTIGATIONS.catID ? (
                      <InvestigationTable
                        medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ) : catId == Categories.COMPLAINTS.catID ? (
                      <ComplaintsTable
                        medicine={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):


                    catId == Categories.GENERAL.catID ? (
                      <GeneralTable
                        generalExaminations={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                    
                             catId == Categories.MENSTRUAL_INFO.catID ? (
                      <MenstrualInfoTable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):


                     catId == Categories.WHENS.catID ? (
                      <WhensTable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):


                       catId == Categories.LAB_TESTS_AND_IMAGING.catID ? (
                      <LabTestImagingTable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                           catId == Categories.TESTS_REQUESTED.catID ? (
                      <TestRequestedTable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):

                     catId == Categories.ALLERGIES.catID ? (
                      <AllergyTable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                       catId == Categories.PERSONAL_HISTORY.catID ? (
                      <PersonalHistory
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                        catId == Categories.PAST_MEDICAL_HISTORY.catID ? (
                      <PastMedicalHistory
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                       catId == Categories.FAMILY_HISTORY.catID ? (
                      <FamilyHistory
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                     catId == Categories.DOSAGE.catID ? (
                      <FamilyHistory
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                       catId == Categories.UNITS.catID ? (
                      <UnitsTable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                      catId == Categories.FREQUENCY.catID ? (
                      <FrequencyTable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                    
                       catId == Categories.DURATION.catID ? (
                      <DurationTable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                       catId == Categories.NOTE.catID ?(
                      <NoteTable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                                 catId == Categories.CVS.catID ?(
                      <CVSTable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):

                                 catId == Categories.RS.catID ?(
                      <RSTable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                                 catId == Categories.CNS.catID ?(
                      <CNSTable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):

                                 catId == Categories.PA.catID ?(
                      <PATable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):

                                 catId == Categories.ENT.catID ?(
                      <ENTTable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                    
                                 catId == Categories.PREGNANCY_OUTCOME.catID ?(
                      <PragnancyOutcomestable
                         medicine={medicine}
                        duration={medicine}
                        date={medicine}
                        index={index}
                        indexOfFirstMedicine={0}
                        editingId={editingId}
                        editMedicine={editMedicine}
                        handleEditChange={handleEditChange}
                        saveEdit={saveEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ):
                    
                     null
                  )
                ) : (
                  <tr
                    style={{
                      display: "table",
                      width: "100%",
                      tableLayout: "fixed",
                    }}
                  >
                    <td
                      colSpan="9"
                      className="text-center align-upper"
                      style={{ height: "400px" }}
                    >
                      No items found.🩺🥼🫀
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div style={{ flexShrink: 0 }}>
            {
            <TableFooter
              rowsPerPage={rowsPerPage}
              handleRowsPerPageChange={handleRowsPerPageChange}
              medicinesLength={medicines?.length}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              totalElements={pageable?.totalElements}
              totalPages={pageable?.totalPages}
            />}
          </div>
        </div>
      </div>

      {showConfirm && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            width: "100vw",
          }}
          aria-hidden="true"
          onClick={() => setShowConfirm(false)}
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-body">
                <p>Are you sure you want to delete this medicine?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => confirmDelete(false)}
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => confirmDelete(true)}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastFist
        showToast={showToast}
        setShowToast={setShowToast}
        title="Indication"
        message={toastMsg}
        duration="Just now"
        status={colorStatus}
      />
    </div>
  );
};

export default MedicinePage;
