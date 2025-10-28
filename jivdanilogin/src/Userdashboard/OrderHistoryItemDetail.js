import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

import {
  SESSION_ID,
  CUSTOMER_ID,
  BASE_URL,
  ChangeOrderStatus,
  ACCESS_TOKEN,
  DEBUG_LOG_ENABLED,
  USER_ROLE,
  ROLE,
  ROLEDOCTOR,
  IMG_BASE_URL,
} from "../Constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReviewCartItem from "./ReviewCartItem";

// import { swal } from "bootstrap";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import FileUploadModal from "./FileUplodeModal";
import unavailable from "../Images/unavailable.png";

function OrderHistoryItemDetail({
  order,
  id,
  product,
  cancel,
  addressData,
  getOrderDate,
}) {
  const [address, setaddress] = useState();
  let [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    try {
      let jsonData = JSON.parse(addressData);
      // Your code to handle the successfully parsed JSON data goes here
      // console.log(jsonData);
      setaddress(jsonData);
    } catch (error) {
      // Handle the JSON parse error here

      setaddress();
    }
  }, []);

  //orderStatus
  //1. Order PLACED
  //2. Order CANCELED
  //3. Order COMPLETED
  const cancelOrder = async (Order) => {
    try {
      const canceleData = JSON.stringify({
        pubInfo: {
          sessionId: localStorage.getItem(SESSION_ID),
        },
        request: {
          busiParams: {
            orderId: product.id,
            orderStatus: Order,
          },
          isEncrypt: false,
          transactionId: "897987987989",
        },
      });
      if (DEBUG_LOG_ENABLED) {
        //  console.log("canceleData : " + canceleData);
      }

      let response = await axios.post(
        BASE_URL + ChangeOrderStatus,
        canceleData,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
            "Access-Control-Allow-Headers": "Content-Type",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
          },
        }
      );

      if (DEBUG_LOG_ENABLED) {
        // console.log(response.data);
      }
      swal(response?.data?.respData?.message);
      if (getOrderDate) getOrderDate();

      // navigate("/orderhistory");
      // history.push("/")
    } catch (err) {
      swal(err);
      if (DEBUG_LOG_ENABLED) {
        console.log(err);
      }
    }
  };

  const userRole = localStorage.getItem(USER_ROLE);
  useEffect(() => {
    const userRole = localStorage.getItem(USER_ROLE);
    if (userRole?.includes(ROLE)) {
      setShowEdit(true);
    }
  }, []);

  const [file, setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [uploadTime, setUploadTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setSelectedFile(null);
    setUploadTime(null);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    setFile(file);
    setSelectedFile(file);
    setUploadTime(null);
    // If it's an image, you can set up a preview
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile({ file, previewURL: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFile(file);
    setUploadTime(null);
    // If it's an image, you can set up a preview
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile({ file, previewURL: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async (productid, productitemId) => {
    try {
      if (!file) {
        alert("No file selected.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("folderId", "10");

      const response = await axios.post(
        // "https://jivdanihospital.com/jivdani-v1/uploadFileToFolder",

        `${BASE_URL}uploadFileToFolder`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      //   alert("Upload successful:", response.data.fileDownloadUri);
      getUploadReport(response.data.fileDownloadUri, productid, productitemId);

      // console.log(response);
    } catch (error) {
      swal("Error uploading file:", error);
    }
  };

  const getUploadReport = async (url, productid, productitemId) => {
    try {
      const getOrderByDate = JSON.stringify({
        pubInfo: {
          sessionId: localStorage.getItem(SESSION_ID),
        },
        request: {
          busiParams: {
            orderId: productid,
            itemListReport: [
              {
                itemId: productitemId,
                reportUrl: url,
              },
            ],
          },
          isEncrypt: false,
          transactionId: "897987987989",
        },
      });
      let response = await axios.post(
        BASE_URL + "updateReport",
        getOrderByDate,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
            "Access-Control-Allow-Headers": "Content-Type",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
          },
        }
      );
      swal(response.data.respData.message);
      //  console.log(response.respData.message);
      setSelectedFile();
      setFile();
    } catch (error) {
      swal(error);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="card border-0 shadow-sm mb-3">
      <div className="card-header py-3 bg-white">
        <div className="row">
          <div className="col d-flex">
            <span className="fw-medium">Booking Date & ID :</span>
            <span className="ms-3 fw-semibold">
              {moment(product?.date)?.format("DD-MMM-YYYY")} {id}
            </span>
          </div>
          <div className="col-auto">
            {product.orderStatus === 2 ? null : product.orderStatus ===
              3 ? null : (
              <>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => cancelOrder(2)}
                >
                  Cancel
                </button>
              </>
            )}

            {showEdit || userRole === ROLEDOCTOR ? (
              <>
                {product.orderStatus === 2 ? null : product.orderStatus ===
                  3 ? null : (
                  <button
                    className="btn btn-sm btn-success m-2"
                    onClick={() => cancelOrder(3)}
                  >
                    Complete
                  </button>
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="row gx-2 gy-3">
          <div className="col-md-5">
            <h6 className="fw-bold">Address</h6>
            <div className="vstack text-dark small">
              <span className="h6">{address?.name}</span>
              <span>{address?.addressLine1 + "" + address?.addressLine2}</span>
              <span>
                {address?.city +
                  " " +
                  address?.state +
                  " " +
                  // address?.country +
                  " " +
                  address?.pincode}
              </span>

              <span>{"Mobile No : " + address?.mobileNo}</span>
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">Payment Method</h6>
            <div className="text-success">
              {product?.paymentGateway === "CASH" ? (
                <>
                  <span className="fw-bold">
                    <FontAwesomeIcon
                      icon={["fas", "money-bill-wave"]}
                      size="lg"
                    />
                  </span>
                  <span className="ms-2 small ">Cash payment</span>
                </>
              ) : (
                <>
                  <span className="fw-bold">
                    <FontAwesomeIcon icon={["fab", "cc-visa"]} size="lg" />
                  </span>
                  <span className="ms-2 small ">Online payment</span>
                </>
              )}
            </div>
            <span className="ms-2 small bg-warning">{product.paymentId}</span>
            {/* {product?.details?.length > 0 ? (
              <div>
                {`Subtotal :  ${product.currency === "USD" ? "$" : "₹"}${
                  payableAmnt // product.amount
                }`}
                {discAmnt > 0 && (
                  <p className="mb-0 fw-medium text-danger">
                    {`Disc. Amnt. : ${
                      product.currency === "USD" ? "$" : "₹"
                    }${discAmnt}`}
                  </p>
                )}
                <p className="mb-0 fw-medium">
                  {`Total : ${product.currency === "USD" ? "$" : "₹"}${
                    product.amount
                  }`}
                </p>
              </div>
            ) : ( */}
            <div>
              {`Subtotal :  ${product.currency === "USD" ? "$" : "₹"}${
                product.amount
              }`}

              <p className="mb-0 fw-medium">
                {`Total : ${product.currency === "USD" ? "$" : "₹"}${
                  product.amount
                }`}
              </p>
            </div>
            {/* )} */}

            <div className="fw-semibold"></div>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Status</h6>
            <div className={cancel ? "text-danger" : "text-success"}>
              <span className="fw-semibold">
                {product.orderStatus === 2
                  ? "CANCELLED"
                  : product.orderStatus === 3
                  ? "COMPLETED"
                  : product.orderStatus === 0
                  ? "PAYMENT PENDING"
                  : product.orderStatus === 1
                  ? "PLACED"
                  : product.orderStatus === -1
                  ? "PAYMENT FAILED"
                  : ""}
              </span>
            </div>
          </div>
        </div>
        <hr className="text-muted" />
        <div className="row row-cols-1 row-cols-md-2  g-3">
          {product?.details?.map((item) => (
            <div key={item.id} className="col justify-content-center">
              <ReviewCartItem product={item} id={order} />
              <button
                type="button"
                className="btn btn-primary btn-sm mt-2"
                onClick={openModal}
              >
                {showEdit ? " Upload File" : "Download Report"}
                {item.reportUrl && (
                  <FontAwesomeIcon
                    icon="fa-regular fa-circle-down"
                    className="ms-2"
                  />
                )}
              </button>
              <FileUploadModal
                key={product.id}
                product={item}
                productItemId={product.id}
                isOpen={isModalOpen}
                onClose={closeModal}
                showEdit={showEdit}
              />
            </div>
          ))}
        </div>
      </div>

      {product?.doctorName && (
        <div className="card-footer small border-0 py-3 text-muted">
          {product?.doctorImage && (
            <img
              className="rounded"
              src={
                product?.doctorImage
                  ? IMG_BASE_URL + product?.doctorImage
                  : unavailable
              }
              // onError={({ currentTarget }) => {
              //   currentTarget.onerror = null; // prevents looping
              //   currentTarget.src = { Placeholder };
              // }}
              width={80}
              height={80}
              alt="Product image."
              style={{ objectFit: "cover" }}
            />
          )}
          <p className="fw-medium m-0 text-black"> {product?.doctorName}</p>
          <p className="fw-medium m-0 text-black"> {product?.doctorCategory}</p>
          <p className="fw-medium text-black"> {"₹ " + product?.amount}</p>
          <div className="fw-bold">
            Appointment Date & Time :{" "}
            {moment(product.bookingDate)?.format("DD-MM-YYYY")}{" "}
            {moment(product.startTime, "hh:mm:ss")?.format("hh:mm A")}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderHistoryItemDetail;
