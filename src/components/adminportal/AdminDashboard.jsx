import React from 'react';
import { Building2, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Add this import

const AdminDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const universities = [
    { id: 1, name: 'Informatics Institute of Technology', code: 'IIT' },
    { id: 2, name: 'Central University', code: 'CU' },
    { id: 3, name: 'Metropolitan Institute', code: 'MI' },
    { id: 4, name: 'Technical College', code: 'TC' },
    { id: 5, name: 'Global University', code: 'GU' }
  ];

  const handleUniversitySelect = (code) => {
    if (code === 'IIT') {
      navigate('/iit-admin-login'); // Navigate to IITAdminLogin if IIT is selected
    } else {
      alert('This university portal is under development');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">University Management Portal</h1>
          <p className="mt-2 text-gray-600">Select a university to manage</p>
        </div>

        <div className="grid gap-4">
          {universities.map((university) => (
            <button
              key={university.id}
              onClick={() => handleUniversitySelect(university.code)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-800">{university.name}</h3>
                  <p className="text-sm text-gray-500">Code: {university.code}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
