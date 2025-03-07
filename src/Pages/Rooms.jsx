import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import SingleRoom from '../Components/SingleRoom/SingleRoom';
import SliderBody2 from '../Components/Body2/SliderBody2';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/rooms`);
            setRooms(data);  // Set data to state
        };
        getData();
    }, []);  // Empty dependency array to run this once on mount

    console.log(rooms);  // Log the state data
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/rooms`);
            setRooms(data);  // Set data to state
        };
        getData();
    }, []);  // Empty dependency array to run this once on mount

    console.log(rooms);  // Log the state data

    return (
  <div>
          <div className="mt-24 h-[1440px] max-w-[7xl] gap-y-4 mx-auto container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
       
       {
        rooms.map(room => <SingleRoom key={room.id} room={room} />)

       }
       <div className="mt-10">
        <SliderBody2 rooms={rooms} />
      </div>
       
      </div>
  </div>
      
    );
};

export default Rooms;
