import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProductModal from './DeleteProductModal';
import ManageSingleProduct from './ManageSingleProduct';

const ManageProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null)

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://shielded-basin-34562.herokuapp.com/product', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map((product, index) => <ManageSingleProduct
                            key={product._id}
                            product={product}
                            index={index}
                            setDeletingProduct={setDeletingProduct}
                        ></ManageSingleProduct>)
                    }

                </tbody>
            </table>
            {deletingProduct && <DeleteProductModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></DeleteProductModal>}
        </div>
    );
};

export default ManageProduct;