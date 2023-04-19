import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rooms from '../Rooms/Rooms';

const Home = () => {
    const hotelData = useLoaderData();
    console.log(hotelData);
    return (
        <div className='container mx-auto'>
            <div className='my-8 grid grid-cols-1 md:grid-cols-3 gap-9'>
                {
                    hotelData.map(rooms => <Rooms key={rooms.id} room={rooms}></Rooms>)
                }
            </div>
        </div>
    );
};

export default Home;