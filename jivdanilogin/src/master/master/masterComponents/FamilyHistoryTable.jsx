import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Color } from "../../../visitConstant/Color";
import { faFloppyDisk, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const FamilyHistory = ({
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
      className="mt-2"
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
            value={editMedicine.name|| medicine.name}
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

export default FamilyHistory;
