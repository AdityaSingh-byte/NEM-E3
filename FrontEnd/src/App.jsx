

import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login'
import Navbar from "./components/Navbar";
import {Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup";

import PdfMaker from "./components/PdfMaker.jsx";

function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
   
    
    
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/PdfMaker" element={<PdfMaker/>}/>
          {/* Other routes for different pages */}
      
    
    </Routes>
    </>
    
    
   
    
  )
}

export default App
