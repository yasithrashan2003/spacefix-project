import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './index.css';
import HomePage from './components/HomePage';
import AdminLogin from './components/adminportal/AdminLogin';
import AdminDashboard from './components/adminportal/AdminDashboard';
import IITRoleLogin from './components/logins/iitlogins/IITRoleLogin.jsx';
import UniversityLoginDashboard from './components/logins/UniversityLoginDashboard.jsx';
import IITStudentLogin from './components/logins/iitlogins/IITStudentLogin.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/uni-login" element={<UniversityLoginDashboard />} />
        <Route path="/iit-role-login" element={<IITRoleLogin />} />
        <Route path="/iit-student-login" element={<IITStudentLogin />} />


      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
