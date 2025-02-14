import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const FilterTimetable = () => {
  const [timetableData, setTimetableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    day: '',
    courseCode: '',
    lecturer: '',
    locationType: '',
    type: '',
    room: '',
  });

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
              data.push({
                groupId: doc.data().groupId,
                day,
                time,
                ...details
              });
            });
          });
        });
        
        setTimetableData(data);
        setFilteredData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));

    // Apply all filters
    const newFilteredData = timetableData.filter(item => {
      return Object.entries(filters).every(([key, filterValue]) => {
        if (key === name) {
          return !value || item[key]?.toLowerCase().includes(value.toLowerCase());
        }
        return !filterValue || item[key]?.toLowerCase().includes(filterValue.toLowerCase());
      });
    });

    setFilteredData(newFilteredData);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      day: '',
      courseCode: '',
      lecturer: '',
      locationType: '',
      type: '',
      room: '',
    });
    setFilteredData(timetableData);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Classroom Allocation</h2>
      
      {/* Filter controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Day</label>
          <select
            name="day"
            value={filters.day}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All Days</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Course Code</label>
          <input
            type="text"
            name="courseCode"
            value={filters.courseCode}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
            placeholder="Enter course code"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Lecturer</label>
          <input
            type="text"
            name="lecturer"
            value={filters.lecturer}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
            placeholder="Enter lecturer name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Location Type</label>
          <select
            name="locationType"
            value={filters.locationType}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All Locations</option>
            <option value="PHYSICAL">Physical</option>
            <option value="ONLINE">Online</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Session Type</label>
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All Types</option>
            <option value="LEC">Lecture</option>
            <option value="TUT">Tutorial</option>
            <option value="FEEDBACKSESSION">Feedback Session</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Room</label>
          <input
            type="text"
            name="room"
            value={filters.room}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
            placeholder="Enter room number"
          />
        </div>
      </div>

      <button
        onClick={resetFilters}
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Reset Filters
      </button>

      {/* Results table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Group</th>
              <th className="border p-2">Day</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Course</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Location</th>
              <th className="border p-2">Room</th>
              <th className="border p-2">Lecturer</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border p-2">{item.groupId}</td>
                <td className="border p-2">{item.day}</td>
                <td className="border p-2">{item.time}</td>
                <td className="border p-2">{item.courseCode}</td>
                <td className="border p-2">{item.type}</td>
                <td className="border p-2">{item.locationType}</td>
                <td className="border p-2">{item.room || '-'}</td>
                <td className="border p-2">{item.lecturers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredData.length === 0 && (
        <p className="text-center py-4 text-gray-500">No results found</p>
      )}
    </div>
  );
};

export default FilterTimetable;