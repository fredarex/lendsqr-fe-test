import React from 'react';
import {Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" exact element={<Login />}/>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </>    
  );
}

export default App;
