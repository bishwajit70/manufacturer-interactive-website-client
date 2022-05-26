import React from 'react';

const Equipments = () => {
    return (
        <div className='mb-20'>
            <h2 className='text-center text-3xl lg:text-5xl font-bold py-20 text-purple-400'>Equipments We Provide</h2>
            <div className='grid px-2 grid-cols-1 lg:flex gap-8 justify-evenly'>
                <div>
                    <img className='lg:h-72 rounded-lg' src="https://i.ibb.co/swGhGnD/hell-get-your-wheels.webp" alt="" />
                    <h3 className='text-center text-xl py-3'>Bike Wheel</h3>
                </div>
                <div>
                    <img className='lg:h-72 rounded-lg' src="https://i.ibb.co/N2c6xTR/handle.jpg" alt="" />
                    <h3 className='text-center text-xl py-3'>Bike Handle</h3>
                </div>
                <div>
                    <img className='lg:h-72 rounded-lg' src="https://i.ibb.co/8P2G1kW/seat.jpg" alt="" />
                    <h3 className='text-center text-xl py-3'>Bike Seat</h3>
                </div>
            </div>
            <div className='grid px-2 lg:pt-10 grid-cols-1 lg:flex gap-8 justify-evenly'>
                <div>
                    <img className='lg:h-72 rounded-lg' src="https://i.ibb.co/gRs26vn/chain.jpg" alt="" />
                    <h3 className='text-center text-xl py-3'>Bike Chain</h3>
                </div>
                <div>
                    <img className='lg:h-72 rounded-lg' src="https://i.ibb.co/JBDHKNg/bell.jpg" alt="" />
                    <h3 className='text-center text-xl py-3'>Bike Bell</h3>
                </div>
                <div>
                    <img className='lg:h-72 rounded-lg' src="https://i.ibb.co/CMndFZF/mudguard.jpg" alt="" />
                    <h3 className='text-center text-xl py-3'>Bike Mudguard</h3>
                </div>
            </div>





        </div>
    );
};

export default Equipments;