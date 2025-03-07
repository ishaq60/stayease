import React, { useContext, useEffect, useState } from 'react';

import Carousel from '../Carousel';
import { AuthContext } from '../../Provider/AuthProvider';
import Body1 from '../Body1/Body1';
import RoomSuites from '../Body2/RoomSuites';
import { useLoaderData } from 'react-router-dom';
import SliderBody2 from '../Body2/SliderBody2';



const Home = () => {
    // const { rooms } = useLoaderData();
    // console.log(rooms);
    

    // console.log(import.meta.env.VITE_API_URL);
   

    return (
        <div>

             
            <Carousel />
           <Body1/>
    
        <RoomSuites/>
       
        </div>
    );
};

export default Home;