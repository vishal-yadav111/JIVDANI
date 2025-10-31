
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
import DosageTable from './master/master/masterComponents/DosageTable'
import AllergyTable from './master/master/masterComponents/AllergyTable'
import CNSTable from './master/master/masterComponents/CnsTable'
import ComplaintsTable from './master/master/masterComponents/ComplaintsTable'
import CVSTable from './master/master/masterComponents/CvsTable'
import DiagnosisTable from './master/master/masterComponents/DiagnosisTable'
import DurationTable from './master/master/masterComponents/DurationTable'
import ENTTable from './master/master/masterComponents/EntTable'
import FamilyHistory from './master/master/masterComponents/FamilyHistoryTable'
import FrequencyTable from './master/master/masterComponents/FrequencyTable'
import InvestigationTable from './master/master/masterComponents/InvestigationTable'
import LabTestImagingTable from './master/master/masterComponents/LabTestImagingTable'
import NoteTable from './master/master/masterComponents/NoteTable'
import PastMedicalHistory from './master/master/masterComponents/PastMedicalHistoryTable'
import PATable from './master/master/masterComponents/PaTable'
import PersonalHistory from './master/master/masterComponents/PersonaHistoryTable'
import PhysicalExaminationTable from './master/master/masterComponents/PhysicalExaminationTable'
import PragnancyOutcomestable from './master/master/masterComponents/PregnancyoutcomesTable'
import RSTable from './master/master/masterComponents/RsTable'
import TestRequestedTable from './master/master/masterComponents/TestRequestedTable'
import UnitsTable from './master/master/masterComponents/UnitsTable'
import WhensTable from './master/master/masterComponents/WhensTable'
import GeneralTable from './master/master/masterComponents/GeneralTable'

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
          {/* <Route path='/Login' element={<Login />} />

          <Route path="/Otp" element={<Otp />} />
          <Route path="/table" element={<Tablerendder />} /> */}
          <Route path="/" element={<MedicinePage />} />
          <Route path="/Allergy" element={<AllergyTable/>} />
          <Route path="/CNS" element={<CNSTable/>} />
          <Route path="/Complaints" element={<ComplaintsTable/>} />
          <Route path="/CVS" element={<CVSTable/>} />
          <Route path="/Diagnosis" element={<DiagnosisTable/>} />
          <Route path="/dosage" element={<DosageTable/>} />
          <Route path="/Duration" element={<DurationTable/>} />
          <Route path="/ENT" element={<ENTTable/>} />
          <Route path="/FamilyHistory" element={<FamilyHistory/>} />
          <Route path="/Frequency" element={<FrequencyTable/>} />
          <Route path="/Investigation" element={<InvestigationTable/>} />
          <Route path="/LabTestImaging" element={<LabTestImagingTable/>} />
           <Route path="/Note" element={<NoteTable/>} />
          <Route path="/PastMedicalHistory" element={<PastMedicalHistory/>} />
          <Route path="/PA" element={<PATable/>} />
          <Route path="/PersonalHistory" element={<PersonalHistory/>} />
          <Route path="/PhysicalExamination" element={<PhysicalExaminationTable/>} />
          <Route path="/PragnancyOutcomes" element={<PragnancyOutcomestable/>} />
   
          <Route path="/TestRequested" element={<TestRequestedTable/>} />
          <Route path="/Units" element={<UnitsTable/>} />
          <Route path="/Whens" element={<WhensTable/>} />
   
          <Route path="/RS" element={<RSTable/>} />
           <Route path="/General" element={<GeneralTable/>} />






        </Routes>
        {/* <Useaction />
<Usereducer /> */}

        {/* <Useaction /> */}

      </div>
    </>
  )
}

export default App;
