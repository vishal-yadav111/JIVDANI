import React, { useEffect, useState } from 'react'

export const Apireact2 = () => {
    const [datastore, setDatastore] = useState([])
    useEffect(() => { apidata() }, [])
    async function apidata() {
        const url = "http://68.178.169.188:8888/jivdani-dev/getAllDoctor";
        let response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJET0NUT1IiOiJkb2N0b3IiLCJzdWIiOiJkcmphbmFyZGFubXVra3VAZ21haWwuY28iLCJpYXQiOjE3NTcyMjEzNzAsImV4cCI6MTc1OTI0OTM3MH0.e8ydXHktAymsOvdO9Apr3v--wKJV3e4LI02eXDFV5_ZEfDHzR79hd8Dy1hsPGPIrk4FedCMFc5bTb_NiV5OKkg"

                }, body: JSON.stringify({
                    "pubInfo": {
                        "sessionId": "75560FD08CBB75770F88E741817363B6"
                    },
                    "request": {
                        "busiParams": {
                        },
                        "isEncrypt": false,
                        "transactionId": "897987987989"
                    }
                })

            }
        );
        response = await response.json()
           console.log("Full Api Response:", {response})
        setDatastore(response.respData.respMsg)
      
    }
   
    console.log("APIRESPONSE:", datastore);
    
    
    return (
       <>
       <div style={{margin:'20px'}}>
       <br></br>
        <br></br>
         <br></br>
       <h2>Doctors DATA</h2>
     <h3>
              <ul style={{display:'flex',padding:'20px', border:'1px solid',listStyle:'none', gap:"50px", justifyContent:'space-between'}}>
        <li style={{flex:'1'}}>doctorId</li>
    <li style={{flex:'1'}}> name</li>
            <li style={{flex:'1'}}>emailId</li>
    <li style={{flex:'1'}}> mobileNo</li>
   
           <li style={{flex:'1'}}>registrationDate</li>
    <li style={{flex:'1'}}> registrationNo
</li>
   
   
</ul>
</h3>

       {
        datastore.map((user)=>(
         
              <ul style={{display:'flex',padding:'20px', border:'1px solid gray',listStyle:'none', gap:"50px", justifyContent:'space-between'}}>
        <h5 style={{flex:'1'}}>{user.doctorId}</h5>
    <li style={{flex:'1'}}> {user.name}</li>
            <li style={{flex:'1'}}>{user.emailId}</li>
    <li style={{flex:'1'}}> {user.mobileNo}</li>
   
           <li style={{flex:'1'}}>{user.registrationDate}</li>
    <li style={{flex:'1'}}> {user.registrationNo
}</li>
   
   
</ul>

        ))
       }</div>
       </>
    )
}
