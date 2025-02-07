import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  QrCode, 
  Building 
} from 'lucide-react';

const StudentDashboard = () => {
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [reservations, setReservations] = useState([
    { 
      id: 1, 
      space: 'Study Room A', 
      time: '2:00 PM - 4:00 PM', 
      date: 'Today' 
    },
    { 
      id: 2, 
      space: 'Lab 305', 
      time: '10:00 AM - 12:00 PM', 
      date: 'Tomorrow' 
    }
  ]);

  // Mock campus map data
  const campusSpaces = [
    { id: 'A1', name: 'Study Room A', status: 'Available', type: 'Study Space' },
    { id: 'B2', name: 'Lab 305', status: 'Reserved', type: 'Computer Lab' },
    { id: 'C3', name: 'Lecture Hall 101', status: 'In Use', type: 'Classroom' }
  ];

  const handleSpaceReservation = (space) => {
    setSelectedSpace(space);
    // Placeholder for actual reservation logic
    alert(`Reserving ${space.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Student Space Management Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Space Reservation Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <MapPin className="mr-2 text-blue-500" />
              <h2 className="text-xl font-semibold">Space Reservation</h2>
            </div>
            {campusSpaces.map((space) => (
              <div 
                key={space.id} 
                className={`mb-3 p-3 rounded-lg cursor-pointer 
                  ${space.status === 'Available' 
                    ? 'bg-green-50 hover:bg-green-100' 
                    : space.status === 'Reserved' 
                    ? 'bg-yellow-50 opacity-70' 
                    : 'bg-red-50 opacity-70'}`}
                onClick={() => handleSpaceReservation(space)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{space.name}</p>
                    <p className="text-sm text-gray-500">{space.type}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs 
                    ${space.status === 'Available' 
                      ? 'bg-green-200 text-green-800' 
                      : space.status === 'Reserved' 
                      ? 'bg-yellow-200 text-yellow-800' 
                      : 'bg-red-200 text-red-800'}`}>
                    {space.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mini Map Navigation */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Building className="mr-2 text-blue-500" />
              <h2 className="text-xl font-semibold">Campus Map</h2>
            </div>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <QrCode className="text-gray-400 w-32 h-32" />
              <p className="text-gray-500 absolute">Interactive Map Coming Soon</p>
            </div>
          </div>

          {/* Current Reservations */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Calendar className="mr-2 text-blue-500" />
              <h2 className="text-xl font-semibold">My Reservations</h2>
            </div>
            {reservations.map((reservation) => (
              <div 
                key={reservation.id} 
                className="bg-blue-50 p-3 rounded-lg mb-3"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{reservation.space}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{reservation.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{reservation.date}</span>
                    </div>
                  </div>
                  <button className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;