// import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Color } from "../../../visitConstant/Color";
import { faFloppyDisk, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const GeneralExaminationTable1 = ({
  generalExaminations,
  index,
  indexOfFirstgeneralExaminations = 0,
  editingId,
  editgeneralExaminations,
  setEditgeneralExaminations,
  saveEdit,
  handleEdit,
  handleDelete,
}) => {
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditgeneralExaminations((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <tr
      className="mt-2"
      key={generalExaminations.id}
      style={{
        display: "table",
        width: "100%",
        tableLayout: "fixed",
        minHeight: 45,
        verticalAlign: "middle",
        borderRadius: 8,
        fontSize: 14,
        backgroundColor:
          editingId === generalExaminations.id ? Color.focusColor : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <td
        className="text-start"
        style={{
          width: "60px",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
          backgroundColor: editingId === generalExaminations.id ? "transparent" : "",
        }}
      >
        {indexOfFirstgeneralExaminations + index + 1} {/* Fix for serial number */}
      </td>

      <td
        className="text-start"
        style={{
          width: "300px",
          backgroundColor: editingId === generalExaminations.id ? "transparent" : "",
        }}
      >
        {editingId === generalExaminations.id ? (
          <input
            type="text"
            name="generalExaminations"
            value={editgeneralExaminations?.generalExaminations || generalExaminations.name}
            onChange={handleEditChange}
            className="form-control"
            style={{ width: "100%", margin: 0, height: 32 }}
          />
        ) : (
          generalExaminations.name
        )}
      </td>

      <td
        className="text-end"
        style={{
          width: "90px",
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "8px",
          backgroundColor: editingId === generalExaminations.id ? "transparent" : "",
        }}
      >
        {editingId === generalExaminations.id ? (
          <>
            <FontAwesomeIcon
              // icon="fa-solid fa-floppy-disk"
              icon={faFloppyDisk}
             
              className="text-primary"
              style={{
                cursor: "pointer",
                marginLeft: "15px",
              }}
              onClick={saveEdit}
            />
            <FontAwesomeIcon
              // icon="fa-solid fa-trash"
              icon={faTrash}
              
              style={{
                color: "gray",
                cursor: "pointer",
                marginLeft: "15px",
              }}
              onClick={() => handleDelete(generalExaminations.id)}
            />
          </>
        ) : (
          <>
            <FontAwesomeIcon
              // icon="fa-solid fa-pencil"
          icon={faPencil}

              style={{
                cursor: "pointer",
                marginLeft: "15px",
                color: "gray",
              }}
              onClick={() => handleEdit(generalExaminations.id, generalExaminations)}
            />
            <FontAwesomeIcon
              // icon="fa-solid fa-trash"
              icon={faTrash}

              style={{
                color: "gray",
                cursor: "pointer",
                marginLeft: "15px",
              }}
              onClick={() => handleDelete(generalExaminations.id)}
            />
          </>
        )}
      </td>
    </tr>
  );
};

export default GeneralExaminationTable1;
