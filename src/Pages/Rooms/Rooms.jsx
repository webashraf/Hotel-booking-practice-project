import React from 'react';

const Rooms = ({ room }) => {
    // console.log(room);
    const { id, name, description, price, img, capacity, amenities } = room
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-2xl px-3 ">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-bold text-gray-600'>#{id}</p>
                    <p>{description.slice(1, 80)}....</p>
                    <p>Capacity: {capacity} person only</p>
                    <h3 className='text-xl font-bold'>{price}$ only</h3>

                    <h3 className='text-lg'>Amenities: {amenities.length} facilities</h3>
    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;