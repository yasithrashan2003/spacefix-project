import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './index.css';
import HomePage from './components/HomePage';
import AdminLogin from './components/adminportal/AdminLogin';
import AdminDashboard from './components/adminportal/AdminDashboard';
import IITAdminLogin from './components/adminportal/IITAdminLogin';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/iit-admin-login" element={<IITAdminLogin />} />


      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
