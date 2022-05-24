import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteOrderModal from './DeleteOrderModal';
import OrderRow from './OrderRow';

const ManageAllOrders = () => {

    const [deletingOrder, setDeletingOrder] = useState(null)

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/orders', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                setDeletingOrder={setDeletingOrder}
                            ></OrderRow>)
                        }

                    </tbody>
                </table>
                {deletingOrder && <DeleteOrderModal
                    deletingOrder={deletingOrder}
                    setDeletingOrder={setDeletingOrder}
                    refetch={refetch}
                ></DeleteOrderModal>}
            </div>
        </div>
    );
};

export default ManageAllOrders;