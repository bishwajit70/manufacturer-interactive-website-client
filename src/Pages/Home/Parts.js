import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SingleProduct from './SingleProduct';
import Loading from '../Shared/Loading'

const Parts = () => {

    const { data: products, isLoading } = useQuery('products', () => fetch('http://localhost:5000/product', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-center text-5xl text-purple-400 font-bold py-20'>Parts We Produce</h2>
            <div className='grid grid-cols-3 gap-10 '>
                {
                    products.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Parts;