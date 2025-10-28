import React, { useState } from 'react'

export const Adddata = () => {
    const[name,setName]=useState([]);
    const[age,setAge]=useState([]);
    const[email,setEmail]=useState([]);
     const[mobno,setMobno]=useState([]);
     
    const adduser = async () => {
        const url="http://localhost:3000/users"
        let response = await fetch(url,{
            method:"POST",
            body:JSON.stringify({name,age,email,mobno})
        }
           

        );
        response= await response.json();
        if (response){
          alert("data added")
        }


        
    }
  return (
    <div>
        <h2>Add Data</h2>
        <input placeholder='enter name' onChange={(event)=>setName(event.target.value)}></input>
        <br></br><br></br>
          <input placeholder='enter age' onChange={(event)=>setAge(event.target.value)}></input> <br></br><br></br>
         
              <input placeholder='enter email' onChange={(event)=>setEmail(event.target.value)}></input> <br></br><br></br>
<input placeholder='enter mobno' onChange={(event)=>setMobno(event.target.value)}></input>
<button onClick={adduser}>SUBMIT</button>
    </div> 
  )
}
