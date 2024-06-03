

import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login'
import Navbar from "./components/Navbar";
import {Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup";

function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
   
    
    
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          {/* Other routes for different pages */}
      
    
    </Routes>
    </>
    
    
   
    
  )
}

export default App
