import { createBrowserRouter } from "react-router-dom"; // ✅ Removed RouterProvider import
import Main from "../Layouts/Main";
import Home from "../Components/Home/Home";
import Rooms from "../Pages/Rooms";
import MyBookings from "../Pages/MyBookings";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Login from "../Components/Authntication/Login/Login";
import Register from "../Components/Authntication/Register/Register";
import RoomDetails from "../Components/RoomDetails/RoomDetails";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/Home",
        element: <Home />,
    
     }
     ,



      { path: "/room", element: <Rooms /> },
      { path: "/my-bookings", element: <MyBookings /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/about-us", element: <AboutUs /> },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path: "/room/:id",
        element: <RoomDetails />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/room/${params.id}`)
      }
      
      
    ],
  },
]);

export default Router;
