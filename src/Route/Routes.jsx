import { createBrowserRouter } from "react-router-dom"; // ✅ Removed RouterProvider import
import Main from "../Layouts/Main";
import Home from "../Components/Home/Home";
import Rooms from "../Pages/Rooms";
import MyBookings from "../Pages/MyBookings";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Login from "../Components/Login/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/room", element: <Rooms /> },
      { path: "/my-bookings", element: <MyBookings /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/about-us", element: <AboutUs /> },
      {
        path:"/login",
        element:<Login/>
      }
    ],
  },
]);

export default Router;
