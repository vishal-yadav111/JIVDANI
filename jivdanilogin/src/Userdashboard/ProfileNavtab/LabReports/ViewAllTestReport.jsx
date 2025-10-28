import {
  faArrowCircleLeft,
  faEye,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { useState } from "react";
import moment from "moment";
import { TYPE_LAB, TYPE_SONOGRAPHY, TYPE_XRAY } from "../../Constant";
// import {
//   getDriveDownloadUrl,
//   getDrivePreviewUrl,
// } from "../../ipd_billing/ClinicalDischarge/LabDocumentList";

const GOOGLE_DRIVE_PREVIEW_URL="https://drive.google.com/file/d/{fileId}/view";
const GOOGLE_DRIVE_DOWNLOAD_URL="https://drive.google.com/uc?export=download&id={fileId}";

const ViewAllTestReports = ({ token, onClose }) => {
 const getDrivePreviewUrl = (fileId) =>
  GOOGLE_DRIVE_PREVIEW_URL.replace("{fileId}", fileId);

 const getDriveDownloadUrl = (fileId) =>
  GOOGLE_DRIVE_DOWNLOAD_URL.replace("{fileId}",fileId)



  const [activeLabType, setActiveLabType] = useState("");

  // ✅ Null-safe fallback
  const labReports = token?.labTestPaymentData?.reportUrl ?? [];
  const xrayReports = token?.xrayTestPaymentData?.url ?? [];
  const sonoReports = token?.sonographyTestPaymentData?.url ?? [];

  // ✅ Check if all sections are empty
  const noDataInAll =
    labReports.length === 0 &&
    xrayReports.length === 0 &&
    sonoReports.length === 0;

  return (
    <div>
      {/* Header with back and filters */}
      <div className="d-flex gap-4 justify-content-between px-3 py-2 border-bottom w-100">
        <button
          className="border-0 bg-light-subtle fw-medium"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faArrowCircleLeft} className="me-2 " />
          Back to report
        </button>

        {/* Radio buttons */}
        <div className="d-flex gap-2 ms-5">
          {[
            { label: "All", value: "" },
            { label: "Lab", value: TYPE_LAB },
            { label: "Xray", value: TYPE_XRAY },
            { label: "Sonography", value: TYPE_SONOGRAPHY },
          ].map((opt) => (
            <div
              className="form-check form-check-inline fw-medium"
              key={opt.value}
            >
              <input
                className="form-check-input"
                type="radio"
                id={opt.value || "all"}
                checked={activeLabType === opt.value}
                onChange={() => setActiveLabType(opt.value)}
                name="reportType"
                style={{ cursor: "pointer" }}
              />
              <label
                className="form-check-label text-black"
                htmlFor={opt.value || "all"}
                style={{ cursor: "pointer" }}
              >
                {opt.label}
              </label>
            </div>
          ))}
        </div>

        <p className="m-0 fw-medium text-primary"># {token?.tokenId}</p>
      </div>

      {/* Reports Section */}
      <div className="px-3 py-3">
        {/* LAB REPORTS */}
        {(activeLabType === "" || activeLabType === TYPE_LAB) && (
          <div className="mb-4">
            <h6 className="fw-bold text-primary border-bottom pb-2">
              Lab Reports
            </h6>
            {labReports.length > 0 ? (
              labReports.map((report, idx) => {
                let url = "";
                let downloadUrl = "";
                let fileName = "";

                if (report.includes("id=") && report.includes("/filename=")) {
                  const parts = report?.split("/filename=");
                  const fileIdPart = parts[0]?.trim();
                  const fileId = fileIdPart?.replace("id=", "").trim();
                  url = getDrivePreviewUrl(fileId);
                  downloadUrl = getDriveDownloadUrl(fileId);
                  fileName = parts[1]?.trim() || "Unknown File";
                } else {
                  // 🌐 Handle normal URL (Google Cloud or direct link)
                  url = report;
                  downloadUrl = report;
                  fileName = report.split("/").pop() || "Unknown File";
                }

                return (
                  <div
                    key={`lab-${idx}`}
                    className="d-flex justify-content-between align-items-center border p-2 rounded mb-2"
                  >
                    <div>
                      <p className="m-0 fw-medium">
                        <strong>{idx + 1}.</strong> {fileName}
                      </p>
                      <small className="text-muted">
                        Date: {moment(token?.date).format("DD-MM-YYYY")}
                      </small>
                    </div>
                    <div className="d-flex gap-2">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                      >
                        <FontAwesomeIcon icon={faEye} className="me-2" />
                        View
                      </a>
                      <a
                        href={downloadUrl}
                        target={
                          report.includes("id=") &&
                          report.includes("/filename=")
                            ? ""
                            : "_blank"
                        }
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                      >
                        <FontAwesomeIcon icon={faDownload} className="me-2" />
                        Download
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-muted">No Lab reports found.</p>
            )}
          </div>
        )}

        {/* XRAY REPORTS */}
        {(activeLabType === "" || activeLabType === TYPE_XRAY) && (
          <div className="mb-4">
            <h6 className="fw-bold text-primary border-bottom pb-2">
              Xray Reports
            </h6>
            {xrayReports.length > 0 ? (
              xrayReports.map((entry, idx) => {
                const parts = entry.split("/filename=");
                const fileIdPart = parts[0]?.trim();
                const fileId = fileIdPart.replace("id=", "").trim();
                const fileName = parts[1]?.trim() || "Unknown File";
                return (
                  <div
                    key={`xray-${idx}`}
                    className="d-flex justify-content-between align-items-center border p-2 rounded mb-2"
                  >
                    <div>
                      <p className="m-0 fw-medium">
                        <strong>{idx + 1}.</strong> {fileName}
                      </p>
                      <small className="text-muted">
                        Date: {moment(token?.date).format("DD-MM-YYYY")}
                      </small>
                    </div>
                    <div className="d-flex gap-2">
                      <a
                        href={getDrivePreviewUrl(fileId)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                      >
                        <FontAwesomeIcon icon={faEye} className="me-2" />
                        View
                      </a>
                      <a
                        href={getDriveDownloadUrl(fileId)}
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                      >
                        <FontAwesomeIcon icon={faDownload} className="me-2" />
                        Download
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-muted">No Xray reports found.</p>
            )}
          </div>
        )}

        {/* SONOGRAPHY REPORTS */}
        {(activeLabType === "" || activeLabType === TYPE_SONOGRAPHY) && (
          <div className="mb-4">
            <h6 className="fw-bold text-primary border-bottom pb-2">
              Sonography Reports
            </h6>
            {sonoReports.length > 0 ? (
              sonoReports.map((entry, idx) => {
                const parts = entry.split("/filename=");
                const fileIdPart = parts[0]?.trim();
                const fileId = fileIdPart.replace("id=", "").trim();
                const fileName = parts[1]?.trim() || "Unknown File";
                return (
                  <div
                    key={`sono-${idx}`}
                    className="d-flex justify-content-between align-items-center border p-2 rounded mb-2"
                  >
                    <div>
                      <p className="m-0 fw-medium">
                        <strong>{idx + 1}.</strong> {fileName}
                      </p>
                      <small className="text-muted">
                        Date: {moment(token?.date).format("DD-MM-YYYY")}
                      </small>
                    </div>
                    <div className="d-flex gap-2">
                      <a
                        href={getDrivePreviewUrl(fileId)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                      >
                        <FontAwesomeIcon icon={faEye} className="me-2" />
                        View
                      </a>
                      <a
                        href={getDriveDownloadUrl(fileId)}
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                      >
                        <FontAwesomeIcon icon={faDownload} className="me-2" />
                        Download
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-muted">No Sonography reports found.</p>
            )}
          </div>
        )}

        {/* No data in All */}
        {activeLabType === "" && noDataInAll && (
          <p className="text-muted">No reports found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewAllTestReports;
