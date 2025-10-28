import React, { useReducer } from 'react'

export const Hook = () => {
    const EmptyData={
        name:'',
        password:'',
        email:'',
        city:'',
        adress:''
    }
    const reducer=(data,action)=>{
      return{...data,[action.type]:action.val}

    }

   const [state,dispatch]= useReducer(reducer,EmptyData)
  return (
  <>
   <h1>Hook</h1>
   <div></div>
    <input type='text' placeholder='enter name' onChange={()=>dispatch({val:event.target.value,type:'name'})}></input>
    <br></br><br></br>
     <input type='text' placeholder='password'  onChange={()=>dispatch({val:event.target.value,type:'password'})}></input> <br></br><br></br>
      <input type='text' placeholder='email'  onChange={()=>dispatch({val:event.target.value,type:'email'})}></input> <br></br><br></br>
       <input type='text' placeholder='city'  onChange={()=>dispatch({val:event.target.value,type:'city'})}></input> <br></br><br></br>
    <button>Buton</button>
    <ul>
        <li>name:{state.name}</li>
        <li>password:{state.password}</li>
        <li>email:{state.email}</li>
        <li>city:{state.city}</li>
    </ul>
    </>
  )
}
