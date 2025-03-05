import React, { useState } from 'react';
import { Calendar, User, Users } from 'lucide-react';

const BookingAvaibility = () => {
  const [departureDate, setDepartureDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="max-w-7xl z-20   w-full mx-auto px-4">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x">
          {/* Departure Date */}
          <div className="p-4 flex flex-col">
            <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
              Departure Date
            </label>
            <div className="flex items-center bg-gray-100 p-2 rounded-md">
              <Calendar className="mr-2 text-gray-500" size={20} />
              <input 
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full text-sm bg-transparent text-gray-700 outline-none"
              />
            </div>
          </div>

          {/* Adults */}
          <div className="p-4 flex flex-col">
            <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
              Adults
            </label>
            <div className="flex items-center bg-gray-100 p-2 rounded-md">
              <User className="mr-2 text-gray-500" size={20} />
              <select 
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full text-sm bg-transparent text-gray-700 outline-none"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Children */}
          <div className="p-4 flex flex-col">
            <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
              Children
            </label>
            <div className="flex items-center bg-gray-100 p-2 rounded-md">
              <Users className="mr-2 text-gray-500" size={20} />
              <select 
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full text-sm bg-transparent text-gray-700 outline-none"
              >
                {[...Array(11)].map((_, i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Check Availability Button */}
        <button className="w-full bg-black text-white py-4 font-semibold uppercase tracking-wide hover:bg-gray-900 transition duration-300">
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default BookingAvaibility;
