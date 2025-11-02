/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ComplaintsTable from "../../master/master/masterComponents/CommonTableForAll";
import { MasterApi } from "../../master/masterApi/MasterApi";
import useDebounce from "../../useDebounce/useDebounce/useDebounce";
import { AddEditAll } from "../../master/masterApi/AddEditAll";
import { DeleteApi } from "../../master/masterApi/DeleteApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { TableFooter } from "../../master/master/TableFooter";
import ToastFist from "../../Toast/ToastFist";
import Categories from "../../visitConstant/Categories";
import { Color } from "../../visitConstant/Color";
import AddforAll from "../../modal/AddforAll";
import SidebarHomePage from "../SidebarHomePage";
import { TableHeader } from "../../master/master/TableHeader";
import { ALLERGIES_HEADER, Complaints, UNITS_HEADER } from "../../master/master/HeaderData";
import { DATA_SAVED, ERROR_MSG } from "../../master/Constant";
import { downloadCSV } from "../../master/master/Utils";

class ComplaintsErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Units Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger" role="alert">
          <h5 className="alert-heading">Oops! Something went wrong.</h5>
          <p>We couldn't load the Units table. Please try again later.</p>
          <button
            className="btn btn-outline-primary btn-sm mt-2"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const UnitScreen = () => {
  const [error, setError] = useState(null);
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const debouncedInput = useDebounce(search, 500);
  const [showToast, setShowToast] = useState(false);
  const [colorStatus, setColorStatus] = useState(3);
  const [toastMsg, setToastMsg] = useState("");
  const [catId, setCatId] = useState(Categories.UNITS.catID);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageable, setPageable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);

  // Edit state for Units (only name field needed)
  const [editMedicine, setEditMedicine] = useState({
    id: "",
    name: "",
  });

  const resetTheValue = () => {
    setEditingId(null);
    setEditMedicine({
      id: "",
      name: "",
    });
  };

  const handleSideBar = (clickedCatId) => {
    setCatId(clickedCatId);
    setRowsPerPage(50);
    getData("", 50, 1, clickedCatId);
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  useEffect(() => {
    if (debouncedInput !== null) {
      getData(debouncedInput, rowsPerPage, 1, catId, false);
    }
  }, [debouncedInput]);



  const getData = async (
    searchKey = "",
    PerPage = 50,
    crntPage = 1,
    activeCatId,
    showLoader = true
  ) => {
    if (showLoader) {
      setLoading(true);
      setTableLoading(false);
    } else {
      setTableLoading(true);
    }
    try {
      const results = await MasterApi(
        !activeCatId ? Categories.UNITS.catID : activeCatId,
        crntPage,
        searchKey,
        PerPage
      );
      if (results) {
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
    } catch (error) {
      console.error("Error fetching API data:", error);
    } finally {
      setLoading(false);
      setTableLoading(false);
    }
  };

  // const handleSearch = (searchKey) => {
  //   if (searchKey) {
  //     setSearch(searchKey);
  //   } else {
  //     setSearch("");
  //     getData("", rowsPerPage, currentPage);
  //   }
  //   setCurrentPage(1);
  // };

  const handleSearch = (searchKey) => {
    setSearch(searchKey);
    setCurrentPage(1);

    if (searchKey.trim() === "") {
      // when input empty — only reload table body
      getData("", rowsPerPage, currentPage, catId, false);
    } else {
      // while typing — trigger debounce
      // debounce hook will call getData with table loader
    }
  };

  const handleEdit = (id, med) => {
    console.log("handle edit function call", id);
    setEditingId(id);
    setEditMedicine({
      id: med?.id,
      name: med?.name,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditMedicine((prev) => ({
      ...prev,
      [name]: value.toUpperCase(),
    }));
  };

  const saveEdit = async () => {
    const response = await AddEditAll({
      categoryId: catId,
      name: editMedicine.name,
      id: editingId,
    });

    if (response) {
      setMedicines(
        medicines.map((med) =>
          med.id === editingId ? { ...med, ...editMedicine } : med
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
        const response = await DeleteApi(catId, deleteId);
        if (response) {
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

  const indexOfFirstMedicine = (currentPage - 1) * rowsPerPage;

  const clearSearch = () => {
    setSearch("");
    getData("", rowsPerPage, currentPage, catId, false);
  };


  // if (loading) {
  //   return (
  //     <div className="p-4 bg-white rounded shadow-sm text-center">
  //       <div className="spinner-border text-primary" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </div>
  //       <p className="mt-2 text-muted">Loading Units...</p>
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div className="p-4 bg-white rounded shadow-sm">
        <div className="alert alert-warning" role="alert">
          Failed to load Units: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-white rounded shadow-sm">
      {/* <h4 className="mb-3">Dosage</h4> */}
      <ComplaintsErrorBoundary>
        <div
          className="bg-light w-100"
          style={{
            minWidth: "1024px",
            height: "100vh",
            overflow: "hidden",
            width: "100%",
            borderRadius: "8px",
          }}
        >
          {/* Header Section */}
          <div
            className="d-flex justify-content-between align-items-center mb-2 pe-4 pt-4 float-end"
            style={{ width: "90%" }}
          >
            <h6 style={{ color: Color.primary }}>Units</h6>
            <div className="position-relative w-50">
              <input
                type="text"
                placeholder="Search Units..."
                value={search}
                onChange={(e) => handleSearch(e.target.value.toUpperCase())}
                className="form-control pe-5"
                style={{ height: "38px" }}
              />
              {search ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className=""
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: Color.primary,
                  }}
                  onClick={clearSearch}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className=""
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: Color.primary,
                  }}
                />
              )}
            </div>
            <div className="d-flex">
              <button
                className="btn btn-outline-black border me-3"
                style={{ fontSize: 15, height: "38px" }}
                onClick={() => downloadCSV()}
              >
                <FontAwesomeIcon
                  icon={faDownload}
                  className="pe-2"
                  style={{ color: "gray" }}
                />
                Export
              </button>
              <AddforAll customeKey={true} />
            </div>
          </div>

          <div
            className=""
            style={{ flexDirection: "row", display: "flex", width: "100%" }}
          >
            <div
              className="pe-2"
              style={{
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                // marginLeft: "0px",
              }}
            >
              <div className="" style={{ flexGrow: 1 }}>
                {/* Table header */}
                <table
                  className="table-fixed table-borderless"
                  style={{ width: "100%", borderRadius: 8, overflow: "hidden" }}
                >
                  <TableHeader headerName={UNITS_HEADER} />
                </table>

                {/* Table body */}
                <table
                  className="table table-fixed table-borderless"
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
                    {tableLoading ? (
                      <tr
                        style={{
                          display: "table",
                          width: "100%",
                          tableLayout: "fixed",
                          height: "300px",
                        }}
                      >
                        <td colSpan="3" className="text-center align-middle">
                          <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <p className="text-muted mt-2">Loading data...</p>
                        </td>
                      </tr>
                    ) : Array.isArray(medicines) && medicines.length > 0 ? (
                      medicines.map((medicine, index) => (
                        <ComplaintsTable
                          key={medicine.id}
                          medicine={medicine}
                          index={index}
                          indexOfFirstMedicine={indexOfFirstMedicine}
                          editingId={editingId}
                          editMedicine={editMedicine}
                          handleEditChange={handleEditChange}
                          saveEdit={saveEdit}
                          handleEdit={handleEdit}
                          handleDelete={handleDelete}
                        />
                      ))
                    ) : (
                      <tr
                        style={{
                          display: "table",
                          width: "100%",
                          tableLayout: "fixed",
                        }}
                      >
                        <td
                          colSpan="3"
                          className="text-center align-upper"
                          style={{ height: "400px" }}
                        >
                          No Units found.🩺🥼🫀
                        </td>
                      </tr>
                    )}
                  </tbody>

                </table>
              </div>

              {/* Footer */}
              <div style={{ flexShrink: 0 }}>
                <TableFooter
                  rowsPerPage={rowsPerPage}
                  handleRowsPerPageChange={handleRowsPerPageChange}
                  medicinesLength={medicines?.length}
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                  totalElements={pageable?.totalElements}
                  totalPages={pageable?.totalPages}
                />
              </div>
            </div>
          </div>

          {/* Delete Confirmation Modal */}
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
              <div
                className="modal-dialog"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-content">
                  <div className="modal-body">
                    <p>Are you sure you want to delete this Units?</p>
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

          {/* Toast Notification */}
          <ToastFist
            showToast={showToast}
            setShowToast={setShowToast}
            title="Indication"
            message={toastMsg}
            duration="Just now"
            status={colorStatus}
          />
        </div>
      </ComplaintsErrorBoundary>
    </div>
  );
};

export default UnitScreen;
