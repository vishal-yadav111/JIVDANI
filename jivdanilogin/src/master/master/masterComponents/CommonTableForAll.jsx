import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Color } from "../../../visitConstant/Color";
import { faFloppyDisk, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const CommonTableForAll = ({
  medicine,
  index,
  indexOfFirstMedicine,
  editingId,
  editMedicine,
  handleEditChange,
  saveEdit,
  handleEdit,
  handleDelete,
}) => {
 // console.log("medicine", medicine);

  return (
    <tr
      className="mt-2 mx-2"
      key={medicine.id}
      style={{
        display: "table",
        width: "100%",
        tableLayout: "fixed",
        minHeight: 45,
        verticalAlign: "middle",
        borderRadius: 8,
        fontSize: 14,
        backgroundColor:
          editingId === medicine.id ? Color.focusColor : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <td
        className="text-start"
        style={{
          width: "60px",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
          backgroundColor: editingId === medicine.id ? "transparent" : "",
        }}
      >
        {indexOfFirstMedicine + index + 1}
      </td>

      <td
        className="text-start"
        style={{
          width: "300px",
          backgroundColor: editingId === medicine.id ? "transparent" : "",
        }}
      >
        {editingId === medicine.id ? (
          <input
            type="text"
            name="name"
            value={editMedicine.name || medicine.name}
            onChange={handleEditChange}
            className="form-control"
            style={{ width: "100%", margin: 0, height: 32 }}
          />
        ) : (
          medicine.name
        )}
      </td>
{/* 
      <td
        className="text-start"
        style={{
          width: "110px",
          backgroundColor: editingId === medicine.id ? "transparent" : "",
        }}
      >
        {editingId === medicine.id ? (
          <input
            type="text"
            name="duration"
            value={editMedicine.duration || medicine.duration}
            onChange={handleEditChange}
            className="form-control"
            style={{ width: "100%", margin: 0, height: 32 }}
          />
        ) : (
          medicine.duration
        )}
      </td>

      <td
        className="text-start"
        style={{
          width: "100px",
          backgroundColor: editingId === medicine.id ? "transparent" : "",
        }}
      >
        {editingId === medicine.id ? (
          <input
            type="text"
            name="date"
            value={editMedicine.date || medicine.date}
            onChange={handleEditChange}
            className="form-control"
            style={{ width: "100%", margin: 0, height: 32 }}
          />
        ) : (
          medicine.date
        )}
      </td> */}

      <td
        className="text-end" // Align icons to the right
        style={{
          width: "90px",
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "8px",
          backgroundColor: editingId === medicine.id ? "transparent" : "",
        }}
      >
        {editingId === medicine.id ? (
          <>
            <FontAwesomeIcon
              // icon="fa-solid fa-floppy-disk"
              icon={faFloppyDisk}
              className="text-primary"
              style={{
                cursor: "pointer",
                marginLeft: "15px", // Set larger margin-left to push the save icon to the right
              }}
              onClick={saveEdit}
            />
            <FontAwesomeIcon
              // icon="fa-solid fa-trash"
              icon={faTrash}
              style={{
                color: "gray",
                cursor: "pointer",
                marginLeft: "15px", // Set larger margin-left to push delete icon to the right
              }}
              onClick={() => handleDelete(medicine.id)}
            />
          </>
        ) : (
          <>
            <FontAwesomeIcon
              // icon="fa-solid fa-pencil"
              icon={faPencil}
              style={{
                cursor: "pointer",
                marginLeft: "15px", // Set larger margin-left to push edit icon to the right
                color: "gray",
              }}
              onClick={() => handleEdit(medicine.id, medicine)}
            />
            <FontAwesomeIcon
              // icon="fa-solid fa-trash"
              icon={faTrash}
              style={{
                color: "gray",
                cursor: "pointer",
                marginLeft: "15px",
              }}
              onClick={() => handleDelete(medicine.id)}
            />
          </>
        )}
      </td>
    </tr>
  );
};

export default CommonTableForAll;





// import React, { useEffect, useState } from "react";
// import CommonTable from "./CommonTable";
// import { downloadCSV } from "../Utils";
// import useDebounce from "../Utils";
// import { AddEditAll } from "../../masterApi/AddEditAll";
// import { MasterApi } from "../../masterApi/MasterApi";
// import { DeleteApi } from "../../masterApi/DeleteApi";
// import Categories from "../../../visitConstant/Categories";

// const CATEGORY_ID = Categories.COMPLAINTS.catID;

// const ComplaintsTable = () => {
//   const [items, setItems] = useState([]);
//   const [search, setSearch] = useState("");
//   const debounced = useDebounce(search, 400);
//   const [page, setPage] = useState(1);
//   const [pageSize] = useState(50);
//   const [editingId, setEditingId] = useState(null);
//   const [editItem, setEditItem] = useState({ name: "" });
//   const [loading, setLoading] = useState(false);

//   const columns = [{ key: "name", label: "Complaint Name", width: "70%", editable: true }];

//   const load = async () => {
//     setLoading(true);
//     try {
//       const res = await MasterApi(CATEGORY_ID, page, search, pageSize);
//       // normalize: res.content or res (if backend returns array)
//       const data = res?.content ?? res ?? [];
//       setItems(data);
//     } catch (e) {
//       console.error(e);
//       alert("Failed to load complaints");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { load(); }, [debounced, page, pageSize]);


//   const onEditClick = (id, row = null) => {
//     if (!id) {
//       setEditingId(null);
//       setEditItem({ name: "" });
//       return;
//     }
//     setEditingId(id);
//     setEditItem({ ...row });
//   };

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setEditItem(prev => ({ ...prev, [name]: value }));
//   };

//   const onSave = async () => {
//     const ok = await AddEditAll({ categoryId: CATEGORY_ID, name: editItem.name, id: editingId,});
//     if (ok) {
//       alert("Saved");
//       setEditingId(null);
//       load();
//     } else {
//       alert("Save failed");
//     }
//   };

//   const onDelete = async (id) => {
//     if (!window.confirm("Delete this item?")) return;
//     const ok = await DeleteApi(CATEGORY_ID, id);
//     if (ok) {
//       alert("Deleted");
//       load();
//     } else {
//       alert("Delete failed");
//     }
//   };

//   return (
//     <div>
//       <div className="d-flex justify-content-between align-items-center mb-2">
//         <h5>Complaints</h5>
//         <div style={{ width: 300 }}>
//           <input className="form-control" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
//         </div>
//         <div>
//           <button className="btn btn-outline-primary me-2" onClick={() => downloadCSV(items, "complaints.csv")}>Export</button>
//           <button className="btn btn-primary" onClick={() => { setEditingId("new"); setEditItem({ name: "" }); }}>Add New</button>
//         </div>
//       </div>

//       {loading ? <div>Loading...</div> : (
//         <CommonTable
//           columns={columns}
//           data={items}
//           editingId={editingId}
//           editItem={editItem}
//           onEditClick={onEditClick}
//           onChange={onChange}
//           onSave={onSave}
//           onDelete={onDelete}
//         />
//       )}
//     </div>
//   );
// };

// export default ComplaintsTable;
