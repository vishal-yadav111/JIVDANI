// import React, { useEffect, useState } from 'react'
// const API="https://jsonplaceholder.typicode.com/users"
// export const Tableop = () => {
//   const[users,setUser]=useState([]);
  
//     useEffect(()=>{getusers(API);

//     },[]

//     )
    
//     const getusers=async(url)=>{
//         try{const response= await fetch(url);
//             const data=await response.json();
//             if (data.length>0){
//                 setUser(data)
             
//             }console.log("data",data)

            

//         }
//         catch(e){
//             console.error(e)
            
//         }
       
        

//     }
//   return (
//     <div className='bg-light'>
//     <div className=' bg-light container p-2'>

//         <table className="table table-striped container border border-2">
//   <thead className='table-primary'>
//     <tr className='bg-danger'>
//       <th scope="col" >S.no</th>
//       <th scope="col" >Name</th>
//       <th scope="col">Email</th>
//       <th scope="col">Aderess</th>
//        <th scope="col">phone</th>
//        <th scope="col">website</th>
//     </tr>
//   </thead>
//   <tbody>
//     {users&&users.map((up)=>{
//          const {id, name, email,phone,website} = up;
//                     const {street, city, zipcode} = up.address;
//                     return(
//           <tr key={id}>
//       <th scope="row">{id}</th>
//       <td scope="col" >{name}</td>
//       <td scope="col" >{email}</td>
//       <td scope="col" >{street}, {city}, {zipcode}</td>
//    <td>{phone}</td>
//       <td scope="col" >{website}</td>
//     </tr>
//     );
    

//     })}
    

    
//   </tbody>

  
// </table>
// <nav aria-label="Page navigation example">
//   <ul class="pagination justify-content-end">
//     <li class="page-item">
//       <a class="page-link" href="#" aria-label="Previous">
//         <span aria-hidden="true">&laquo;</span>
//       </a>
//     </li>
//     <li class="page-item"><a class="page-link" href="#">1</a></li>
//     <li class="page-item"><a class="page-link" href="#">2</a></li>
//     <li class="page-item"><a class="page-link" href="#">3</a></li>
//     <li class="page-item">
//       <a class="page-link" href="#" aria-label="Next">
//         <span aria-hidden="true">&raquo;</span>
//       </a>
//     </li>
//   </ul>
// </nav>
//     </div>
//     </div>
//   )
// }


import React, { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

export const Tableop = () => {

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  // --- Fetch data from API 
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  // --- Pagination logic ---
  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-light min-vh-100">
      <div className="container py-4">
        <h4 className="text-center mb-3">User List</h4>

        {/*  Scrollable table wrapper */}
        <div
          className="table-responsive"
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          <table className="table table-striped border border-2 align-middle">
            <thead className="table-primary text-nowrap">
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center text-muted">
                    No user data found.
                  </td>
                </tr>
              ) : (
                currentUsers.map((user) => {
                  const { id, name, email, phone, website, address } = user;
                  return (
                    <tr key={id}>
                      <th scope="row">{id}</th>
                      <td className="text-truncate" style={{ maxWidth: "150px" }}>
                        {name}
                      </td>
                      <td className="text-truncate" style={{ maxWidth: "180px" }}>
                        {email}
                      </td>
                      <td className="text-truncate" style={{ maxWidth: "220px" }}>
                        {address
                          ? `${address.street}, ${address.city}, ${address.zipcode}`
                          : "-"}
                      </td>
                      <td className="text-truncate" style={{ maxWidth: "150px" }}>
                        {phone}
                      </td>
                      <td className="text-truncate" style={{ maxWidth: "120px" }}>
                        {website}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Page indicator */}
        <div className="d-flex justify-content-end">
        <div className="text-start mt-3 fw-semibold">
          Page {currentPage} of {totalPages || 1}
        </div>

        {/*  Pagination */}
       
        <nav className="mt-2 mx-2">
          <ul className="pagination justify-content-end flex-wrap">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={goToPreviousPage}>
                Previous
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <li
                  key={pageNumber}
                  className={`page-item ${
                    currentPage === pageNumber ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => goToPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              )
            )}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button className="page-link" onClick={goToNextPage}>
                Next
              </button>
            </li>
          </ul>
        </nav>
        </div>
        
      </div>
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item’s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    </div>
  );
};
