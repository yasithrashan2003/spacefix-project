import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ClassroomAllocation = () => {
  const [timetableData, setTimetableData] = useState([]);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  
  // Define all possible rooms and time slots
  const allRooms = [
    'SP-3LA', 'SP-3LB', 'SP-3LC', 'SP-3LD',
    'SP-4LA', 'SP-4LB', 'SP-4LC', 'SP-4LD',
    'SP-5LA', 'SP-5LB', 'SP-5LC', 'SP-5LD',
    'SP-6LA', 'SP-6LB', 'SP-6LC', 'SP-6LD',
    'SP-7LA', 'SP-7LB', 'SP-7LC', 'SP-7LD'
  ];
  
  const timeSlots = ['08:30-10:30', '10:30-12:30', '13:30-15:30', '15:30-17:30'];

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupsRef = collection(db, 'IIT', 'TimeTable', 'GroupTimeTables');
        const snapshot = await getDocs(groupsRef);
        
        const data = [];
        snapshot.forEach((doc) => {
          const schedule = doc.data().schedule;
          Object.entries(schedule).forEach(([day, slots]) => {
            Object.entries(slots).forEach(([time, details]) => {
              if (details) {  // Only add if details exist
                data.push({
                  groupId: doc.data().groupId,
                  day,
                  time,
                  ...details
                });
              }
            });
          });
        });
        
        setTimetableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Get occupied rooms for selected day and time
  const getOccupiedRooms = () => {
    if (!selectedDay || !selectedTimeSlot) return [];
    
    return timetableData
      .filter(item => 
        item.day === selectedDay && 
        item.time === selectedTimeSlot &&
        item.room // Only include if room exists
      )
      .map(item => ({
        room: item.room,
        courseCode: item.courseCode,
        lecturer: item.lecturers,
        type: item.type,
        groupId: item.groupId
      }));
  };

  // Get free rooms
  const getFreeRooms = () => {
    const occupiedRooms = getOccupiedRooms().map(item => item.room);
    return allRooms.filter(room => !occupiedRooms.includes(room));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Classroom Availability</h2>
      
      {/* Filter controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Day</label>
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Time Slot</label>
          <select
            value={selectedTimeSlot}
            onChange={(e) => setSelectedTimeSlot(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Time Slot</option>
            {timeSlots.map(slot => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Display Results */}
      {selectedDay && selectedTimeSlot && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Occupied Rooms */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-red-600">
              Occupied Rooms
            </h3>
            <div className="space-y-3">
              {getOccupiedRooms().map((item, index) => (
                <div key={index} className="border rounded p-3 bg-red-50">
                  <div className="font-medium">{item.room}</div>
                  <div className="text-sm text-gray-600">
                    <div>Group: {item.groupId}</div>
                    <div>Course: {item.courseCode}</div>
                    <div>Lecturer: {item.lecturer}</div>
                    <div>Type: {item.type}</div>
                  </div>
                </div>
              ))}
              {getOccupiedRooms().length === 0 && (
                <p className="text-gray-500">No occupied rooms for this time slot</p>
              )}
            </div>
          </div>

          {/* Free Rooms */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-green-600">
              Available Rooms
            </h3>
            <div className="space-y-3">
              {getFreeRooms().map((room, index) => (
                <div key={index} className="border rounded p-3 bg-green-50">
                  <div className="font-medium">{room}</div>
                  <div className="text-sm text-gray-600">Available for booking</div>
                </div>
              ))}
              {getFreeRooms().length === 0 && (
                <p className="text-gray-500">No available rooms for this time slot</p>
              )}
            </div>
          </div>
        </div>
      )}

      {(!selectedDay || !selectedTimeSlot) && (
        <p className="text-center py-4 text-gray-500">
          Please select both day and time slot to view room availability
        </p>
      )}
    </div>
  );
};

export default ClassroomAllocation;