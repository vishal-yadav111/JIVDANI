import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

const Color = {
  header: "#f5f7fa",
  graydark: "#333",
  focusColor: "#eaf3ff",
};

const CommonTable = ({
  columns,
  data,
  editingId,
  editItem,
  onEditClick,
  onChange,
  onSave,
  onDelete,
}) => {
  if (!data) return null;

  if (data.length === 0) {
    return <div style={{ padding: 20 }}>No records found.</div>;
  }

  return (
    <div
      className="table-responsive"
      style={{
        width: "95%",
        margin: "20px auto",
        borderRadius: "8px",
        overflowX: "auto",
        boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        marginLeft : "5%",
      }}
    >
      <table
        className="table"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 14,
          tableLayout: "auto",
          minWidth: "600px",
        }}
      >
        {/* ======= HEADER ======= */}
        <thead
          className="table-light sticky-top"
          style={{
            backgroundColor: Color.header,
            height: "45px",
            color: Color.graydark,
            verticalAlign: "middle",
          }}
        >
          <tr>
            <th
              className="ps-2 text-start"
              style={{
                width: "60px",
                borderTopLeftRadius: "8px",
                whiteSpace: "nowrap",
              }}
            >
              S. No.
            </th>

            {columns.map((col, index) => (
              <th
                key={col.key}
                className={`${
                  index === columns.length - 1
                    ? "pe-4 text-start"
                    : "ps-2 text-start"
                }`}
                style={{
                  minWidth: col.minWidth || "150px",
                  whiteSpace: "nowrap",
                }}
              >
                {col.label}
              </th>
            ))}

            <th
              className="pe-4 text-end"
              style={{
                width: "100px",
                borderTopRightRadius: "8px",
                whiteSpace: "nowrap",
              }}
            >
              Actions
            </th>
          </tr>
        </thead>

        {/* ======= BODY ======= */}
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id || idx}
              className="mt-2"
              style={{
                minHeight: 45,
                verticalAlign: "middle",
                backgroundColor:
                  editingId === row.id ? Color.focusColor : "transparent",
                transition: "background-color 0.3s ease",
              }}
            >
              {/* Serial Number */}
              <td
                className="text-start"
                style={{
                  width: "60px",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
              >
                {idx + 1}
              </td>

              {/* Dynamic Columns */}
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="text-start"
                  style={{
                    minWidth: col.minWidth || "150px",
                    wordWrap: "break-word",
                  }}
                >
                  {editingId === row.id && col.editable ? (
                    <input
                      type="text"
                      name={col.key}
                      value={editItem[col.key] ?? ""}
                      onChange={onChange}
                      className="form-control"
                      style={{ width: "100%", height: 32 }}
                    />
                  ) : typeof row[col.key] === "object" && row[col.key] !== null ? (
                    row[col.key].name ?? JSON.stringify(row[col.key])
                  ) : (
                    row[col.key] ?? ""
                  )}
                </td>
              ))}

              {/* Action Buttons */}
              <td
                className="text-end"
                style={{
                  width: "100px",
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                {editingId === row.id ? (
                  <>
                    <FontAwesomeIcon
                      icon={faFloppyDisk}
                      className="text-primary"
                      style={{
                        cursor: "pointer",
                        marginLeft: "10px",
                      }}
                      onClick={() => onSave()}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{
                        color: "gray",
                        cursor: "pointer",
                        marginLeft: "10px",
                      }}
                      onClick={() => onEditClick(null)}
                    />
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon
                      icon={faPencil}
                      style={{
                        cursor: "pointer",
                        marginLeft: "10px",
                        color: "gray",
                      }}
                      onClick={() => onEditClick(row.id, row)}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{
                        color: "gray",
                        cursor: "pointer",
                        marginLeft: "10px",
                      }}
                      onClick={() => onDelete(row.id)}
                    />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
