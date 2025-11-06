import React from "react";
import RoleMaster from "./RoleMaster";
import RoleRightsPanel from "./RoleRightsPanel";

const RoleDashboard = () => {
  const roles = [
    { id: 1, roleId: "ADM01", roleName: "Administrator" },
    { id: 2, roleId: "DOC05", roleName: "Doctor" },
    { id: 3, roleId: "NUR12", roleName: "Nurse" },
    { id: 4, roleId: "REC03", roleName: "Receptionist" },
    { id: 5, roleId: "ACC07", roleName: "Accountant" },
    { id: 6, roleId: "LAB09", roleName: "Lab Technician" },
    { id: 7, roleId: "PHA04", roleName: "Pharmacist" },
    { id: 8, roleId: "IT11", roleName: "IT Support" },
    { id: 9, roleId: "HR10", roleName: "HR Executive" },
    { id: 10, roleId: "SUP02", roleName: "Super Admin" },
  ];

  const modules = [
    { names: "Hospital" },
    { names: "Block" },
    { names: "Message Center" },
    { names: "Masters" },
    { names: "User Management" },
    { names: "Billing" },
    { names: "Appointments" },
    { names: "Pharmacy" },
    { names: "Reports" },
    { names: "Dashboard" },
  ];

  return (
    <div className="container-fluid p-3" style={{ background: "#f8f9fa" }}>
      <div className="d-flex " style={{justifyContent:'end'}}>
  
    </div>
      <RoleMaster roles={roles} />
      <RoleRightsPanel modules={modules} />
    </div>
  );
};

export default RoleDashboard;
