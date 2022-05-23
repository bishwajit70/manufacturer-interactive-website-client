import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../images/404-Page.jpg'

const NotFoundPage = () => {
    return (
        <div className='mx-auto'>
            <h1 className='text-4xl py-3 text-orange-500 text-center'>What You Are Searching Is Not Here. </h1>
            <h1 className='text-4xl text-orange-500 py-3 text-center'>Please Go <Link className='text-green-700' to='/'>Home</Link></h1>
            
            <img className='flex mx-auto max-h-80' src={NotFound} alt="" />
        </div>
    );
};

export default NotFoundPage;