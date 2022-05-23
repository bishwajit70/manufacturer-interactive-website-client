import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { _id, name, description, unitprice, image, minorder, available } = product
    const navigate=useNavigate()
    return (
        <div class="card card-compact bg-base-100 shadow-xl">

            <img src={image} alt='' />

            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Unit Price: ${unitprice}</p>
                <p>Minimun Order: {minorder}</p>
                <p>Available: {available}</p>

                <div class="card-actions justify-end">
                    <button onClick={() => navigate(`/purchase/${_id}`)} className='btn btn-primary'>Buy Now</button>
                </div>

            </div>
        </div>

    );
};

export default SingleProduct;