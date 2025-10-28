import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { Color } from "../../../visitConstant/Color"
import { faFloppyDisk, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const MasterTable = ({
    medicine,
    index,
    indexOfFirstMedicine,
    editingId,
    editMedicine,
    handleEditChange,
    saveEdit,
    handleEdit,
    handleDelete
}) => {
    return (
        <tr
            className="mt-2 "
            key={medicine.id}
            style={{
                display: "table",
                width: "100%",
                tableLayout: "fixed",
                minHeight: 45,
                verticalAlign: "middle",
                borderRadius: 8,
                fontSize: 14,
                backgroundColor: editingId === medicine.id ? Color.focusColor : "transparent",
                transition: "background-color 0.3s ease",
            }}
        >
            <td className="text-start"
                style={{
                    width: "60px",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                    backgroundColor: editingId === medicine.id && "transparent",
                }}

            >
                {indexOfFirstMedicine + index + 1}
            </td>

            <td className="text-start" style={{
                width: "300px",
                backgroundColor: editingId === medicine.id && "transparent",
            }}>
                {editingId === medicine.id ? (
                    <input
                        type="text"
                        name="name"
                        value={editMedicine.name}
                        onChange={handleEditChange}
                        className="form-control "
                        style={{ width: "100%", margin: 0, height: 32 }}
                    />
                ) : (
                    medicine.name
                )}
            </td>
            <td className="text-start" style={{ width: "110px", backgroundColor: editingId === medicine.id && "transparent", }}>
                {editingId === medicine.id ? (
                    <input
                        type="text"
                        name="dosage"
                        value={editMedicine.dosage}
                        onChange={handleEditChange}
                        className="form-control"
                        style={{ width: "100%", margin: 0, height: 32 }}
                    />
                ) : (
                    medicine.dosage
                )}
            </td>
            <td className="text-start" style={{ width: "100px", backgroundColor: editingId === medicine.id && "transparent", }}>
                {editingId === medicine.id ? (
                    <input
                        type="text"
                        name="unit"
                        value={editMedicine.unit}
                        onChange={handleEditChange}
                        className="form-control"
                        style={{ width: "100%", margin: 0, height: 32 }}
                    />
                ) : (
                    medicine.unit
                )}
            </td>
            <td className="text-start" style={{ width: "140px", backgroundColor: editingId === medicine.id && "transparent", }}>
                {editingId === medicine.id ? (
                    <input
                        type="text"
                        name="when"
                        value={editMedicine.whens}
                        onChange={handleEditChange}
                        className="form-control"
                        style={{ width: "100%", margin: 0, height: 32 }}
                    />
                ) : (
                    medicine.whens
                )}
            </td>
            <td className="text-start" style={{ width: "150px", backgroundColor: editingId === medicine.id && "transparent", }}>
                {editingId === medicine.id ? (
                    <input
                        type="text"
                        name="frequency"
                        value={editMedicine.frequency}
                        onChange={handleEditChange}
                        className="form-control"
                        style={{ width: "100%", margin: 0, height: 32 }}
                    />
                ) : (
                    medicine.frequency
                )}
            </td>
            <td className="text-start" style={{ width: "100px", backgroundColor: editingId === medicine.id && "transparent", }}>
                {editingId === medicine.id ? (
                    <input
                        type="text"
                        name="duration"
                        value={editMedicine.duration}
                        onChange={handleEditChange}
                        className="form-control"
                        style={{ width: "100%", margin: 0, height: 32 }}
                    />
                ) : (
                    medicine.duration
                )}
            </td>
            <td className="text-center"
                style={{
                    width: "90px",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                    backgroundColor: editingId === medicine.id && "transparent",
                }}
            >
                {editingId === medicine.id ? (

                    <FontAwesomeIcon
                    //  icon="fa-solid fa-floppy-disk"
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
                        onClick={() => handleEdit(medicine.id, medicine)}
                    />
                    // <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                )}
                <FontAwesomeIcon 
                // icon="fa-solid fa-trash"
                icon={faTrash}
                    style={{ color: "gray", cursor: "pointer", marginLeft: "15px", }}
                    onClick={() => handleDelete(medicine.id)}
                />
            </td>

        </tr>
    )
}

export default MasterTable;