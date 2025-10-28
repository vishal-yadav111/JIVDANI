 import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
 
 export const Visha = () => {
   const [Storedata,setStoredata]=useState([]);
   const [loading,SetLoading]=useState(false);
   const navigate=useNavigate();

    useEffect(()=>{getmydata(),SetLoading(true);
    },[])
    const url="http://localhost:3000/users";
   const getmydata= async()=>{
        
        let response= await fetch(url);
         response= await response.json();
      
console.log(response);
setStoredata(response);
SetLoading(false)


    }
    const deleteuser= async (id)=>{
        console.log(id)
         let response= await fetch(url+"/"+id,{
            method:'delete'
         });
         response= await response.json();
         if (response){
            alert('record deleted')
            getmydata()
         }
console.log(response);
    }
    const editeuser= async(id)=>{
        navigate('/edit/'+id)
        console.log(id)


    }

   return (
    <><div style={{margin:'20px'}}>
<h1>users data</h1>
<h1>
<ul style={{display:'flex',justifyContent:'space-around',padding:'10px', border:'1px solid', listStyle:'none'}}>
    <li>name</li>
    <li> age</li>
    <li>degree</li>
    <li>email</li>
    <li>mobno</li>
    <li>id</li>
    <li>ACTION</li>
    
   </ul></h1>
   
{!loading?
 Storedata && Storedata.map((user,)=>(
    <ul key={user.id} style={{display:'flex',justifyContent:'space-around',padding:'20px', border:'1px solid',listStyle:'none'}}>
        <h5>{user.name}</h5>
    <li> {user.age}</li>
    <li>{user.degree} </li>
    <li>{user.email}</li>
    <li>{user.mobno}</li>
    <li>{user.id}</li>
    <li><button onClick={()=>deleteuser(user.id)}>Delete</button>  <button onClick={()=>editeuser(user.id)}>edit</button></li>
   
</ul>

)):<h2>data is loading</h2>
}    
  
    </div></>
   )
 }
 