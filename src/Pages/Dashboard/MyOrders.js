import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SingleOrder from './SingleOrder';

const MyOrders = () => {

    const [orders, setOrders] = useState([])
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])

    // const orders = [
    //     {
    //         "_id": "6289e4f03ae78d601ec806b3",
    //         "name": "Bicycle Wheel",
    //         "image": "https://img.freepik.com/free-vector/bicycle-wheel-isolated_1284-41787.jpg",
    //         "description": "Ut pariatur dolor magna esse. Elit reprehenderit sit non ex occaecat eu eiusmod Lorem incididunt. Mollit laboris eu tempor pariatur velit Lorem amet adipisicing excepteur minim consectetur aute exercitation.\r\n",
    //         "minorder": 100,
    //         "available": 1000,
    //         "unitprice": 600
    //     },
    //     {
    //         "_id": "6289e4f03ae78d6093c806b3",
    //         "name": "Wheel Spookes",
    //         "image": "https://img.freepik.com/free-photo/closeup-shot-details-metal-rim-spokes-tire-bicycle_181624-54993.jpg",
    //         "description": "Ut pariatur dolor magna esse. Elit reprehenderit sit non ex occaecat eu eiusmod Lorem incididunt. Mollit laboris eu tempor pariatur velit Lorem amet adipisicing excepteur minim consectetur aute exercitation.\r\n",
    //         "minorder": 100000,
    //         "available": 1500000,
    //         "unitprice": 50
    //     },
    //     {
    //         "_id": "6289e4f0b222d2089bc81a32",
    //         "name": "Disc Brake",
    //         "image": "https://img.freepik.com/free-photo/part-brake-disc-mountain-bike-close-up_275234-2021.jpg",
    //         "description": "Aute ad irure voluptate commodo quis velit quis commodo pariatur ipsum Lorem voluptate esse consectetur. Dolor aliquip deserunt incididunt aute est commodo voluptate aute Lorem. Quis minim officia adipisicing sit incididunt. Labore est cillum cupidatat ullamco dolore sit consequat sunt tempor.\r\n",
    //         "minorder": 300,
    //         "available": 10000,
    //         "unitprice": 600
    //     }
    // ]

    return (
        <div>
            <h2>My Orders {orders.length}</h2>

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