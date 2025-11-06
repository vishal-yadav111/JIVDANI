/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faSave, faEdit, faEye, faXmark, faSearch } from "@fortawesome/free-solid-svg-icons";

const RoleMaster = ({ roles }) => {
        const [role,setRole]=useState(roles);
        const [rolelist,setRolelist]=useState('')
        const editrole=(role)=>{
            setRolelist(role.roleName)
        }


        
    const handledelete=()=>{
        alert("delete this role")
    

        }
        const clearinput=()=>{
          setRolelist("")

        }
  return (
    <div className="row align-items-start">
      {/* Left: Role Section Master */}
      <div className="col-md-4 mb-2">
            <h4 className="text-primary">Role & Rights Master</h4>
        <div className="card shadow-sm border-0 h-100">
          <div className="card-header bg-primary text-white py-2">
            <h6 className="mb-0 fw-semibold">Role Section Master</h6>
          </div>
          <div className="card-body pb-4">
            <div className="mb-2">
              <label htmlFor="roleName" className="form-label fw-semibold mb-1">
                Role Name
              </label>
              <input
                type="text"
                id="roleName"
                className="form-control form-control-sm"
                placeholder="Enter role name"
            value={rolelist}
            onChange={(e)=>setRolelist(e.target.value)}
              />
            </div>
            <div className="d-flex gap-3">
              <h6 className="fw-semibold mb-2">Role Right</h6>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="allModules" />
                <label className="form-check-label" htmlFor="allModules">
                  All Modules
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Role Table */}
      <div className="col-md-8 mb-1">

        <div className="d-flex">
  <h5 className="text-primary p-1">Roles  </h5>
     <div className="position-relative  " style={{width:'70%' ,marginLeft:'100px'}}>
          <input
            type="text"
            placeholder="Search role..."
          
           
          
            className="form-control pe-5"
            style={{ height: "32px" }} // Set height here
          />
          { (
            <FontAwesomeIcon
              // icon="fa-solid fa-xmark"
              icon={faSearch}
              className="text-primary"
              style={{
                position: "absolute",
                right: "15px",
                top: "40%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
           
            />
          ) }
        </div>
        </div>
        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
          


            <div
              className="table-responsive"
              style={{ maxHeight: "300px", overflowY: "auto", scrollbarWidth: "none", minHeight:"290px"}}
            >
              <table className="table table-bordered table-hover mb-0 align-middle">
                <thead className="table-primary sticky-top">
                  <tr>
                    <th style={{ width: "90px"  ,fontSize:'13px'}}>Sr. No</th>
                    <th style={{ width: "110px", fontSize:'13px' }}>Role ID</th>
                    <th style={{fontSize:"13px"}}>Role Name</th>
                    <th style={{ width: "90px",fontSize:'13px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((role, index) => (
                    <tr key={role.id} style={{ height: "28px" }}>
                      <td style={{padding:'2px 6px'}}>{index + 1}</td>
                      <td style={{padding:'2px 6px'}}>{role.roleId}</td>
                      <td className="text-start ps-3" style={{padding:'2px 6px'}}>{role.roleName}</td>
                      <td style={{padding:'2px 6px'}}>
                        <button className="btn btn-sm btn-outline-primary me-2 p-1"  style={{ width: "28px", height: "28px" }} onClick={()=>editrole(role)}>
                          <FontAwesomeIcon icon={faPen}  fontSize={12}/>
                        </button>
                        <button className="btn btn-sm btn-outline-danger p-1"  style={{ width: "28px", height: "28px" }} onClick={()=>handledelete()} >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

           
          </div>
          
        </div>
        
      </div>
       <div className="d-flex justify-content-center flex-wrap gap-2 p-3 border-0">
              <button className="btn btn-primary btn-sm px-2">
                <FontAwesomeIcon icon={faSave} className="me-1" /> Save
              </button>
              <button className="btn btn-danger btn-sm px-2">
                <FontAwesomeIcon icon={faTrash} className="me-1" /> Delete
              </button>
              <button className="btn btn-secondary btn-sm px-2" onClick={()=>clearinput()}>
                <FontAwesomeIcon icon={faEdit} className="me-1" /> Clear
              </button>
              <button className="btn btn-dark btn-sm px-2">
                <FontAwesomeIcon icon={faEye} className="me-1" /> Exit
              </button>
            </div>
    </div>
  );
};

export default RoleMaster;
