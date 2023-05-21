import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './css/hacks.css';
import "./css/responsive.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Postevent from "./components/Postevent";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
     <BrowserRouter>
      
      <Routes>
     
        <Route index element={<Homepage />} />

        <Route path="homepage" element={<Navbar />} />

        <Route path="navbar" element={<Navbar />} />

        <Route path="signup" element={<Signup />} />

        <Route path="login" element={<Login />} />

        <Route path="postevent" element={<Postevent />} />

        <Route path="dashboard" element={<Dashboard />} />


      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
