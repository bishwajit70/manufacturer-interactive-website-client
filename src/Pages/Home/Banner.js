import React from 'react';
// import bg from '../../images/banner-bg.jpg'

const Banner = () => {
    return (
        <div className='grid rounded-lg shadow-lg bg-purple-100 lg:mt-10 p-2 lg:py-20 lg:px-10 lg:flex gap-20 justify-between items-center'>
            <div className='w-full lg:w-1/2'>
                <h2 className='text-4xl text-orange-500 my-5 font-bold'>We are Supplying Our Best !</h2>
                <p className='text-xl'>Our main focus is to produce quality product. We give the best effort and getting the result last 45 years. Your need encourage us. </p>
                <button className='py-5 mt-10 px-10 text-2xl text-white font-bold bg-orange-500 hover:bg-orange-600 duration-700 rounded-md'>Get Started</button>
            </div>
            <div className='lg:w-1/2'>
                <img className='rounded-lg shadow-lg' src="https://i.ibb.co/vxPYBT5/black-bicycle-tied-outdoors-23-2148907937.webp" alt="" />
            </div>

        </div>
    );
};

export default Banner;