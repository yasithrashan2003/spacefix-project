import React from 'react';
import { Building2, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserLoginDashboard = () => {
  const navigate = useNavigate();

  const universities = [
    { 
      id: 1, 
      name: 'Informatics Institute of Technology', 
      code: 'IIT', 
      logo: 'src/assets/iitlogo.png'
    },
    { 
      id: 2, 
      name: 'University of Colombo', 
      code: 'UOC', 
      logo: 'src/assets/uoclogo.png'
    },
    { 
      id: 3, 
      name: 'University of Moratuwa', 
      code: 'UOM', 
      logo: 'src/assets/uomlogo.png'
    },
    { 
      id: 4, 
      name: 'SLIIT', 
      code: 'SLIIT', 
      logo: 'src/assets/sliitlogo.png'
    }
  ];

  const handleUniversitySelect = (code) => {
    if (code === 'IIT') {
      navigate('/iit-welcome');
    } else {
      alert('This university portal is under development');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Student Portal</h1>
          <p className="mt-2 text-gray-600">Select your university to continue</p>
        </div>

        <div className="grid gap-4">
          {universities.map((university) => (
            <button
              key={university.id}
              onClick={() => handleUniversitySelect(university.code)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <img 
                  src={university.logo} 
                  alt={`${university.name} logo`} 
                  className="w-16 h-16 object-contain rounded-lg"
                />
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

export default UserLoginDashboard;