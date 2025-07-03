import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Login from './Components/Layout/Login';
import Grid from '/src/Components/Layout/Grid.jsx';
import Dashboard from './Admin/components/Dashboard';
import Navbar from './Admin/components/Navbar';
import Managepopup from './Admin/components/Managepopup'
import TestGenerator from './Admin/components/TestGenerator';
import Profile from './Admin/components/Profile';
import JobApplication from './Admin/components/JobApplication';
import Sidebar from './Admin/components/Sidebar';
import { Import } from 'lucide-react';


function App() {
  return (
        <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Grid" element={<Grid/>}/>
         <Route path="/Dashboard" element={<Dashboard/>}/>
         <Route path="/Navbar" element={<Navbar/>}/>
          <Route path="/Managepopup" element={<Managepopup/>}/>
          <Route path="/TestGenerator" element={<TestGenerator/>}/>
          <Route path="/Admin/Profile" element={<Profile/>}/>
          <Route path="/JobApplication" element={<JobApplication/>}/>
          <Route path="/Sidebar" element={<Sidebar/>}/>
         
        </Routes>
    </Router>
  )
}

export default App
