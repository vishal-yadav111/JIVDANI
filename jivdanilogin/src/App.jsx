
import { NavLink, Route, Router, Routes } from 'react-router'
import { Visha } from '../Visha'
import './App.css'
import { Apiprint } from './Component/Apiprint'
import { Apireact2 } from './Component/Apireact2'
import { Authheader } from './Component/Authheader'

import { Hook2 } from './Component/Hook2'
import { Justlogin } from './Component/Justlogin'
import { Rightsignin } from './Component/Rightsignin'
import { Adddata } from '../Adddata'
import { Changestodone } from '../Changestodone'
import { Useaction } from './Useaction'
import { Usereducer } from '../Usereducer'

import Login from '../src/Userdashboard/login/Login'

import Otp from '../src/Userdashboard/login/Otp'

// import { AdressData } from '../Folder/ProfileNavtab/AdressData'
import { Profilecard } from '../src/Userdashboard/Profile-screen/Profilecard'
import { Tablerendder } from './TableReport/TableOp/Tablerendder'
import MedicinePage from './master/master/MasterMedicinePage'

function App() {
  return (
    <>
      <div>

        {/* <Justlogin />
<Hook/>
<Hook2/>  
<Apiprint />
<Apireact2 /> */}

        {/* <ul>
          <li>
            <NavLink to={'/add'}>add</NavLink><br></br>
          </li>
          <li>  <NavLink to={'/Login'}>Login</NavLink></li>
          <li>  <NavLink to={'/table'}>Table</NavLink></li>
          <li>  <NavLink to={'/medicine'}>Medicinepage</NavLink></li>
        </ul> */}

        <Routes>
          {/* <Route path='/' element={<Visha />} />  */}
          {/* <Route  path='/add' element={<Adddata />}/>
<Route path ='/edit/:id' element={<Changestodone />}/> */}
          {/* <Route path='/' element={<Profilecard />} /> */}
          <Route path='/Login' element={<Login />} />

          <Route path="/Otp" element={<Otp />} />
          <Route path="/table" element={<Tablerendder />} />
          <Route path="/" element={<MedicinePage />} />



        </Routes>
        {/* <Useaction />
<Usereducer /> */}

        {/* <Useaction /> */}

      </div>
    </>
  )
}

export default App;
