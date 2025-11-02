
// import { NavLink, Route, Router, Routes } from 'react-router'
// import { Visha } from '../Visha'
// import './App.css'
// import { Apiprint } from './Component/Apiprint'
// import { Apireact2 } from './Component/Apireact2'
// import { Authheader } from './Component/Authheader'

// import { Hook2 } from './Component/Hook2'
// import { Justlogin } from './Component/Justlogin'
// import { Rightsignin } from './Component/Rightsignin'
// import { Adddata } from '../Adddata'
// import { Changestodone } from '../Changestodone'
// import { Useaction } from './Useaction'
// import { Usereducer } from '../Usereducer'

// import Login from '../src/Userdashboard/login/Login'

// import Otp from '../src/Userdashboard/login/Otp'

// // import { AdressData } from '../Folder/ProfileNavtab/AdressData'
// import { Profilecard } from '../src/Userdashboard/Profile-screen/Profilecard'
// import { Tablerendder } from './TableReport/TableOp/Tablerendder'
// import MedicinePage from './master/master/MasterMedicinePage'
// import DosageTable from './master/master/masterComponents/DosageTable'
// import AllergyTable from './master/master/masterComponents/AllergyTable'
// import CNSTable from './master/master/masterComponents/CnsTable'
// import ComplaintsTable from './master/master/masterComponents/ComplaintsTable'
// import CVSTable from './master/master/masterComponents/CvsTable'
// import DiagnosisTable from './master/master/masterComponents/DiagnosisTable'
// import DurationTable from './master/master/masterComponents/DurationTable'
// import ENTTable from './master/master/masterComponents/EntTable'
// import FamilyHistory from './master/master/masterComponents/FamilyHistoryTable'
// import FrequencyTable from './master/master/masterComponents/FrequencyTable'
// import InvestigationTable from './master/master/masterComponents/InvestigationTable'
// import LabTestImagingTable from './master/master/masterComponents/LabTestImagingTable'
// import NoteTable from './master/master/masterComponents/NoteTable'
// import PastMedicalHistory from './master/master/masterComponents/PastMedicalHistoryTable'
// import PATable from './master/master/masterComponents/PaTable'
// import PersonalHistory from './master/master/masterComponents/PersonaHistoryTable'
// import PhysicalExaminationTable from './master/master/masterComponents/PhysicalExaminationTable'
// import PragnancyOutcomestable from './master/master/masterComponents/PregnancyoutcomesTable'
// import RSTable from './master/master/masterComponents/RsTable'
// import TestRequestedTable from './master/master/masterComponents/TestRequestedTable'
// import UnitsTable from './master/master/masterComponents/UnitsTable'
// import WhensTable from './master/master/masterComponents/WhensTable'
// import GeneralTable from './master/master/masterComponents/GeneralTable'
// import SidebarHomePage from './master/master/SidebarHomePage'

// function App() {
//   return (
//     <>
//       <div>

//         {/* <Justlogin />
//             <Hook/>
//             <Hook2/>  
//             <Apiprint />
//             <Apireact2 /> */}

//         {/* <ul>
//           <li>
//             <NavLink to={'/add'}>add</NavLink><br></br>
//           </li>
//           <li>  <NavLink to={'/Login'}>Login</NavLink></li>
//           <li>  <NavLink to={'/table'}>Table</NavLink></li>
//           <li>  <NavLink to={'/medicine'}>Medicinepage</NavLink></li>
//         </ul> */}

//         <Routes>
//           {/* <Route path='/' element={<Visha />} />  */}
//           {/* <Route  path='/add' element={<Adddata />}/>
//               <Route path ='/edit/:id' element={<Changestodone />}/> */}
//           {/* <Route path='/' element={<Profilecard />} /> */}

//           <Route path='/Login' element={<Login />} />
//           <Route path="/Otp" element={<Otp />} />
//           <Route path="/table" element={<Tablerendder />} />
//           {/* Layout with sidebar */}
//           <Route path="/" element={<SidebarHomePage />}>
//             <Route index element={<ComplaintsTable />} />
//             <Route path="Complaints" element={<ComplaintsTable />} />
//             <Route path="Investigation" element={<InvestigationTable />} />
//             <Route path="Diagnosis" element={<DiagnosisTable />} />
           
//           </Route>

//           {/* <Route path="/" element={<MedicinePage />} />
//           <Route path="/Allergy" element={<AllergyTable/>} />
//           <Route path="/CNS" element={<CNSTable/>} />
//           <Route path="/Complaints" element={<ComplaintsTable/>} />
//           <Route path="/CVS" element={<CVSTable/>} />
//           <Route path="/Diagnosis" element={<DiagnosisTable/>} />
//           <Route path="/dosage" element={<DosageTable/>} />
//           <Route path="/Duration" element={<DurationTable/>} />
//           <Route path="/ENT" element={<ENTTable/>} />
//           <Route path="/FamilyHistory" element={<FamilyHistory/>} />
//           <Route path="/Frequency" element={<FrequencyTable/>} />
//           <Route path="/Investigation" element={<InvestigationTable/>} />
//           <Route path="/LabTestImaging" element={<LabTestImagingTable/>} />
//           <Route path="/Note" element={<NoteTable/>} />
//           <Route path="/PastMedicalHistory" element={<PastMedicalHistory/>} />
//           <Route path="/PA" element={<PATable/>} />
//           <Route path="/PersonalHistory" element={<PersonalHistory/>} />
//           <Route path="/PhysicalExamination" element={<PhysicalExaminationTable/>} />
//           <Route path="/PragnancyOutcomes" element={<PragnancyOutcomestable/>} />
//           <Route path="/TestRequested" element={<TestRequestedTable/>} />
//           <Route path="/Units" element={<UnitsTable/>} />
//           <Route path="/Whens" element={<WhensTable/>} />
//           <Route path="/RS" element={<RSTable/>} />
//           <Route path="/General" element={<GeneralTable/>} /> */}

//         </Routes>
//         {/* <Useaction />
// <Usereducer /> */}

//         {/* <Useaction /> */}

//       </div>
//     </>
//   )
// }

// export default App;

















// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SidebarHomePage from './components/SidebarHomePage';

// Import Demo Screens

import AllergiesScreen from './components/screens/AllergiesScreen';
import ComplaintsScreen from './components/screens/ComplaintsScreen';
import MedicinePage from './master/master/MasterMedicinePage';
import CnsScreen from './components/screens/CnsScreen';
import EntScreen from './components/screens/Entscreen';
import PaScreen from './components/screens/PaScreen';
import RaScreen from './components/screens/RsScreen';
import CVSScreen from './components/screens/Cvsscreen';
import GeneralScreen from './components/screens/generalScreen';
import PregnancyOutcomesScreen from './components/screens/PregnancyOutcomesScreen';
import UnitScreen from './components/screens/UnitScreen';
import DosageScreen from './components/screens/Dosagescreen';
import PersonalHistory from './components/screens/PersonalHistory';
import PastMedicalScreen from './components/screens/PastMedicalScreen';
import FamilyHistoryScreen from './components/screens/FamilyHistoryScreen';
import DiagnosisScreen from './components/screens/DiagnosisScreen';
import DurationScreen from './components/screens/Durationscreen';
import LabTestImagingScreen from './components/screens/LabTestImagingScreen';
import TestRequested from './components/screens/TestRequested';
import InvestigationScreen from './components/screens/InvestigationScreen';
import WhensScreen from './components/screens/WhenScreen';
import FrequencyScreen from './components/screens/FrequencyScreen';
import NoteScreen from './components/screens/NoteScreen';

// You would replace these with your actual Master/Table components
// import DosageTable from './master/master/masterComponents/DosageTable'
const DummyDosage = () => <div className='p-4'><h3>📋 Dosage Screen (Dummy)</h3><p>Path: /dosage</p></div>;
const DummyDiagnosis = () => <div className='p-4'><h3>🩺 Diagnosis Screen (Dummy)</h3><p>Path: /Diagnosis</p></div>;
const DummyLogin = () => <div className='p-4'><h3>🔑 Login Screen (Dummy)</h3><p>Path: /Login</p></div>;

function App() {
  return (
    <Routes>
      {/* 1. Standalone/Public Routes (No Sidebar) */}
      <Route path="/Login" element={<DummyLogin />} />
      <Route path="/Otp" element={<h1>OTP Screen (Dummy)</h1>} />

      {/* 2. Main Application Layout Route (Uses SidebarHomePage) */}
      <Route element={<SidebarHomePage />}>
        {/* Nested Routes (Content rendered in the SidebarHomePage's <Outlet />) */}
        
        {/* Medication Group */}
        {/* <Route index element={<MedicationScreen />} /> Path: / */}
         <Route index element={<MedicinePage  />} />


        
        {/* History Group */}
        <Route path="/Allergy" element={<AllergiesScreen />} />
        
        {/* Complaints Group */}
        <Route path="/Complaints" element={<ComplaintsScreen />} />

        {/* Diagnosis Group */}

        <Route path="/CNS" element={<CnsScreen />} />
         <Route path="/General" element={<GeneralScreen />} />

        <Route path="/CVS" element={<CVSScreen />} />

        <Route path="/RS" element={<RaScreen />} />

        <Route path="/PA" element={<PaScreen />} />
        <Route path="/ENT" element={<EntScreen />} />
          <Route path="/PragnancyOutcomes" element={<PregnancyOutcomesScreen />} />







          <Route path="/Investigation" element={<InvestigationScreen />} />
         <Route path="/TestRequested" element={<TestRequested />} />

        <Route path="/LabTestImaging" element={<LabTestImagingScreen />} />

        <Route path="/Duration" element={<DurationScreen />} />

        <Route path="/Diagnosis" element={<DiagnosisScreen/>} />
        <Route path="/Complaints" element={<ComplaintsScreen />} />
          <Route path="/FamilyHistory" element={<FamilyHistoryScreen />} />



           <Route path="/PastMedicalHistory" element={<PastMedicalScreen />} />

        <Route path="/PersonalHistory" element={<PersonalHistory />} />

        <Route path="/dosage" element={<DosageScreen/>} />
        <Route path="/Units" element={<UnitScreen />} />
         <Route path="/Whens" element={<WhensScreen />} />

        <Route path="/Frequency" element={<FrequencyScreen/>} />
        <Route path="/Notes" element={<NoteScreen />} />






        
        {/* ... Add all other paths from your sidebar here ... */}
        <Route path="*" element={<div className='p-4'>404 - Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;