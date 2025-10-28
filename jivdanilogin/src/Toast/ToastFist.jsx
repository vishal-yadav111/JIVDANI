import { faCircleCheck, faCircleExclamation, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ToastFist = ({
  showToast,
  setShowToast,
  title = "Success",
  message = "Data Saved Successfully.",
  duration = "",
  status = 3, // 1 for success, 0 for error, other for warning
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!showToast) return;

    setVisible(true);
    const time = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setShowToast(false), 300); // Delay for smooth transition
    }, 2500);

    return () => clearTimeout(time);
  }, [showToast, setShowToast]);

  if (!showToast) return null;

  // Colors based on the status prop
  const getToastColor = () => {
    switch (status) {
      case 1:
        return {
          backgroundColor: "#d4edda",
          color: "#155724",
        };
      case 0:
        return {
          backgroundColor: "#f8d7da",
          color: "#721c24",
        };
      default:
        return {
          backgroundColor: "#fff3cd",
          color: "#856404",
        };
    }
  };

  const toastStyle = {
    position: "fixed",
    top: "3.3rem",
    right: "1rem",
    zIndex: 1050,
    padding: "1rem",
    borderRadius: "0.25rem",
    width: 300,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: 50,
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(100%)",
    transition: "opacity 0.3s, transform 0.3s",
    ...getToastColor(),
  };
  const messageStyle = {
    width: "calc(100% - 30px)",
    margin: 0,
    padding: 0,
    wordWrap: "break-word",
    overflow: "hidden",
  };

  const iconStyle = {
    // backgroundColor: "red",
    width: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={toastStyle}
    >
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "space-between",
        }}
      >
        {/* <strong style={{ marginRight: '1rem' }}>{title}</strong> */}

        <strong style={messageStyle}>{message} </strong>

        {/* <small>{duration}</small> */}
        <div style={iconStyle} onClick={() => setShowToast(false)}>
          {status == 1 ? (
            <FontAwesomeIcon
            //  icon="fa-solid fa-circle-check"
            icon={faCircleCheck}
              />
          ) : status == 0 ? (
            <FontAwesomeIcon 
            // icon="fa-solid fa-circle-exclamation"
            icon={faCircleExclamation}
             />
          ) : (
            <FontAwesomeIcon 
            // icon="fa-solid fa-triangle-exclamation" 
            icon={faTriangleExclamation}
            />
          )}
        </div>
      </div>
      {/* <div style={{ marginTop: '0.5rem' }}>{message}ff</div> */}
    </div>
  );
};

export default ToastFist;
