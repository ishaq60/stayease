import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const RoomDetails = () => {
    const room = useLoaderData();
    console.log(room);
    const {_id}=useParams()
    return (
        <div>
            <h1>room</h1>
        </div>
    );
};

export default RoomDetails;