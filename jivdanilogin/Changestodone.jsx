import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export const Changestodone = () => {
  const[name,setName]=useState([]);
    const[age,setAge]=useState([]);
    const[email,setEmail]=useState([]);
     const[mobno,setMobno]=useState([]);
     
  useEffect(()=>{
    getuserdata();
  },[])
   const {id}=useParams();
   const navigate=useNavigate();
console.log(id)
  const url="http://localhost:3000/users/"+id;
  const getuserdata = async()=>{
  
    let response= await fetch(url);

    response= await response.json();
    console.log(response);
    setName(response.name ||"")
    setAge(response.age ||"");
     setEmail(response.email ||"");
      setMobno(response.mobno ||"");

   

  }
  const submitdata = async()=>{
console.log(name,age,email,mobno)
let response= await fetch (url,
    {
        method:"PUT",
        body:JSON.stringify({name,age,email,mobno})
    }
);
response= await response.json();
console.log(response)
if(response){
    navigate("/")
 
}

  }
  
  return (

    <div style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
        <h2>edit user details </h2>
<input placeholder='enter name ' value={name} onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
<input placeholder='enter age ' value={age} onChange={(e)=>setAge(e.target.value)} ></input><br></br><br></br>
<input placeholder='enter  email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>
<input placeholder='enter mobno 'value={mobno}  onChange={(e)=>setMobno(e.target.value)}></input>
<button onClick={()=>submitdata()}>submit data</button>

    </div>
  )
}
