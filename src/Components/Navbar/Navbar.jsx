import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500 font-bold" : "text-white")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/room" className={({ isActive }) => (isActive ? "text-blue-500 font-bold" : "text-white")}>
          Room
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-bookings" className={({ isActive }) => (isActive ? "text-blue-500 font-bold" : "text-white")}>
          My Bookings
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us" className={({ isActive }) => (isActive ? "text-blue-500 font-bold" : "text-white")}>
          About Us
        </NavLink>
      </li>
      <li>
        <Link to="/contact-us" className={({ isActive }) => (isActive ? "text-blue-500 font-bold" : "text-white")}>
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar font-es mb-4 shadow-sm text-white">
      <div className="navbar-start relative gap-1">
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsOpen(!isOpen)} // ✅ Fix for toggling dropdown
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          {isOpen && (
            <ul className="menu menu-sm dropdown-content rounded-box z-50 mt-3 w-52 p-2 shadow bg-gray-800">
              {navLinks}
            </ul>
          )}
        </div>
        <a className="text-white font-yeseva text-3xl">Stayease</a>
      </div>

      <div className="navbar-end lg:flex hidden items-center gap-2 justify-end w-full">
        <ul className="menu font-yeseva sm:blocked menu-horizontal flex">{navLinks}</ul>

        {user ? (
          <div className="relative inline-block">
            {/* Dropdown toggle button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md 
              focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 
              focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
            >
              <span className="mx-1">{user.name}</span>
              <svg
                className="w-5 h-5 mx-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
              </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <div className="absolute right-0 z-50 w-56 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                <div className="flex items-center p-3 text-sm text-gray-600 dark:text-gray-300">
                  <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src={user.avatar || "https://via.placeholder.com/40"} alt={user.name} />
                  <div className="mx-1">
                    <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{user.name}</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                  </div>
                </div>

                <hr className="border-gray-200 dark:border-gray-700" />

                <a href="#" className="block px-4 py-3 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  View Profile
                </a>

                <a href="#" className="block px-4 py-3 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  Settings
                </a>

                <hr className="border-gray-200 dark:border-gray-700" />

                <a href="#" className="block px-4 py-3 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  Sign Out
                </a>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login"> {/* ✅ Fixed Link */}
            <button className="px-7 py-2 font-yeseva text-black bg-[#FFFFFF] rounded-md">Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
