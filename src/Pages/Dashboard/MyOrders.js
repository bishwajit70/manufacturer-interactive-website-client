import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import SingleOrder from './SingleOrder';

const MyOrders = () => {

    // const [orders, setOrders] = useState([])
    const [deletingOrder, setDeletingOrder] = useState(null)

    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://shielded-basin-34562.herokuapp.com/order?email=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>
        res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>My Orders {orders?.length}</h2>
            <h2 className='mb-3'>Name: {user.displayName}</h2>
            <h2>Email: {user.email}</h2>

            <div class="overflow-x-auto">

                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <SingleOrder
                                key={order._id}
                                order={order}
                                index={index}
                                setDeletingOrder={setDeletingOrder}

                            ></SingleOrder>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingOrder && <DeleteConfirmModal
                deletingOrder={deletingOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default MyOrders;