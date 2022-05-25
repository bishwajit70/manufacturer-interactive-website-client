import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { _id, name, description, unitprice, image, minorder, available } = product
    const navigate = useNavigate()
    return (
        <div className='border-2 rounded-md shadow-lg'>
            <img className='rounded-md p-2 mx-auto' src={image} alt='' />
            <div className='p-3' >
                <h2 className='text-2xl font-bold text-purple-500 mb-3'>{name}</h2>
                <p>{description}</p>
                <p className='font-bold mt-1 text-xl'>Unit Price: ${unitprice}</p>
                <p className='text-xl mt-1 font-bold'>Minimun Order: {minorder}</p>
                <p className='text-xl mt-1 font-bold'>Available: {available}</p>

                <button onClick={() => navigate(`/purchase/${_id}`)} className='btn w-full font-bold text-white text-xl mt-5 duration-700 bg-orange-500 hover:bg-orange-600 py-2 border-0'>Buy Now</button>


            </div>
        </div>

    );
};

export default SingleProduct;