import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './index.css';
import HomePage from './components/HomePage';
import AdminLogin from './components/logins/iitlogins/IITAdminLogin.jsx';
import AdminDashboard from './components/adminportal/IITAdminDashboard.jsx';
import IITRoleLogin from './components/logins/iitlogins/IITRoleLogin.jsx';
import UniversityLoginDashboard from './components/logins/UniversityLoginDashboard.jsx';
import IITStudentLogin from './components/logins/iitlogins/IITStudentLogin.jsx';
import UpdateTimetable from './components/iitadmin/UpdateTimetable.jsx';
import ClassroomAllocation from './components/iitadmin/ClassroomAllocation.jsx';
import FilterTimetable from './components/iitadmin/FilterTimetable.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iit-admin-login" element={<AdminLogin />} />
        <Route path="/iit-admin-dashboard" element={<AdminDashboard />} />
        <Route path="/uni-login" element={<UniversityLoginDashboard />} />
        <Route path="/iit-role-login" element={<IITRoleLogin />} />
        <Route path="/iit-student-login" element={<IITStudentLogin />} />
        <Route path="/timetable-update" element={<UpdateTimetable />} />
        <Route path="/classroom-allocation" element={<ClassroomAllocation />} />
        <Route path="/filter-timetable" element={<FilterTimetable />} />



      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
