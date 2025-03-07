import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    console.log("ddddd");
    try {
      await logOut();
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed. Try again.");
    }
  };

  const navLinks = (
    <>
      {["Home", "Room", "My Bookings", "About Us", "Contact Us"].map(
        (item, index) => (
          <li key={index}>
            <NavLink
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          </li>
        )
      )}
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
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {isOpen && (
            <ul
              className="menu menu-sm dropdown-content rounded-box z-50 mt-3 w-52 p-2 shadow bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {navLinks}
            </ul>
          )}
        </div>
        <a className="text-white font-yeseva text-3xl">Stayease</a>
      </div>

      <div className="navbar-end lg:flex hidden items-center gap-2 justify-end w-full">
        <ul className="menu font-yeseva sm:blocked menu-horizontal flex">
          {navLinks}
        </ul>

        {user ? (
          <div className="flex items-center gap-3">
            <img
              referrerPolicy="no-referrer"
              alt="User Profile Photo"
              src={user?.photoURL}
              className="w-10 h-10 rounded-full"
              title={user?.displayName}
            />
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-200 text-black rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="px-7 py-2 font-yeseva text-black bg-[#FFFFFF] rounded-md">
              Log In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
