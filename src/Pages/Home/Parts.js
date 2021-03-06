import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SingleProduct from './SingleProduct';
import Loading from '../Shared/Loading'

const Parts = () => {

    const { data: products, isLoading } = useQuery('products', () => fetch('https://shielded-basin-34562.herokuapp.com/product', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const allProducts = products

    const hompageProducts = allProducts.slice(-3)


    return (
        <div>
            <h2 className='text-center text-3xl lg:text-5xl font-bold py-20 text-purple-400'>We Produce</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    hompageProducts.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Parts;