// import React, { useState } from 'react';
// import { Calendar, User, Users } from 'lucide-react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Form = () => {
//     const [departureDate, setDepartureDate] = useState(null);
//     const [adults, setAdults] = useState(1);
//     const [children, setChildren] = useState(0);
//     const [error, setError] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         if (!departureDate) {
//             setError("Please select a departure date.");
//             return;
//         }
        
//         setError('');
//         console.log("Booking Details:", { departureDate, adults, children });

//         // You can integrate an API call here to process the booking
//         alert("Availability checked! (You can replace this with an API call.)");
//     };

//     return (
//         <form onSubmit={handleSubmit} className="bg-white/90 p-6 rounded-lg shadow-xl w-full max-w-4xl">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {/* Departure Date */}
//                 <div className="relative">
//                     <label className="block text-gray-700 text-sm mb-2">DEPARTURE DATE</label>
//                     <div className="flex items-center border rounded p-2">
//                         <Calendar className="mr-2 text-gray-500" size={20} />
//                         <DatePicker
//                             selected={departureDate}
//                             onChange={(date) => setDepartureDate(date)}
//                             className="w-full outline-none"
//                             placeholderText="Select Date"
//                         />
//                     </div>
//                 </div>

//                 {/* Adults */}
//                 <div className="relative">
//                     <label className="block text-gray-700 text-sm mb-2">ADULTS</label>
//                     <div className="flex items-center border rounded p-2">
//                         <User className="mr-2 text-gray-500" size={20} />
//                         <select 
//                             className="w-full outline-none"
//                             value={adults}
//                             onChange={(e) => setAdults(Number(e.target.value))}
//                         >
//                             {[...Array(10)].map((_, i) => (
//                                 <option key={i + 1} value={i + 1}>{i + 1}</option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>

//                 {/* Children */}
//                 <div className="relative">
//                     <label className="block text-gray-700 text-sm mb-2">CHILDREN</label>
//                     <div className="flex items-center border rounded p-2">
//                         <Users className="mr-2 text-gray-500" size={20} />
//                         <select 
//                             className="w-full outline-none"
//                             value={children}
//                             onChange={(e) => setChildren(Number(e.target.value))}
//                         >
//                             {[...Array(11)].map((_, i) => (
//                                 <option key={i} value={i}>{i}</option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>
//             </div>

//             {/* Error Message */}
//             {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

//             {/* Submit Button */}
//             <button 
//                 type="submit"
//                 className="w-full mt-4 bg-black text-white py-3 rounded hover:bg-gray-800"
//                 aria-label="Check Availability"
//             >
//                 Check Availability
//             </button>
//         </form>
//     );
// };

// export default Form;
