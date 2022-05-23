import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SingleOrder from './SingleOrder';

const MyOrders = () => {

    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })

                .then(data => {
                    setOrders(data)

                })
        }
    }, [user])



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
                            ></SingleOrder>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;