import React from 'react';
import Home from '../Components/Home/Home';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
          
            <Outlet></Outlet>
            <Footer/>
          
        </div>
    );
};

export default Main;
