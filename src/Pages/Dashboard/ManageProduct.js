import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageProduct = () => {

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/product', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    return (
        <div>
            Manage Product {products.length}
        </div>
    );
};

export default ManageProduct;