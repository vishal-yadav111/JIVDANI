import React, { useEffect, useState } from 'react'

export const Apiprint = () => {
const [usersstate,setUsersstate]=useState([])
    useEffect(()=>{
        getUserdata();
    },[])

   async function getUserdata(){  
        const url ="https://dummyjson.com/users";
        let response= await fetch(url)
        response= await response.json()
        
        setUsersstate(response.users)

    }
  console.log(usersstate);

  return ( 
    <div style={{margin:'20px'}}>
<h1>users data</h1>
<h1>
<ul style={{display:'flex',justifyContent:'space-around',padding:'10px', border:'1px solid', listStyle:'none'}}>
    <li>USER ID</li>
    <li> NAME</li>
    <li>AGE</li>
    <li>DOB</li>
    <li>BLOOG GROUP</li>
    <li>adress</li>
   </ul></h1>
{ usersstate && usersstate.map((user,id)=>(
    <ul style={{display:'flex',justifyContent:'space-around',padding:'20px', border:'1px solid',listStyle:'none'}}>
        <h5>{user.id}</h5>
    <li> {user.firstName} {user.lastName}</li>
    <li>{user.age} </li>
    <li>{user.birthDate}</li>
    <li>{user.bloodGroup}</li>
    <li>{user.address.address}</li>
</ul>)

)}        
    </div>
  )
}
