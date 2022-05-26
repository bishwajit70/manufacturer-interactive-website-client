import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Footer from './Home/Footer';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);

    const [purchase, setPurchase] = useState({})
    const { id } = useParams()

    const { name, image, description, minorder, available, unitprice } = purchase
    useEffect(() => {
        const url = `https://shielded-basin-34562.herokuapp.com/purchase/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [id])


    const handleAddOrder = (event) => {
        event.preventDefault()
        const userName = user.displayName;
        const email = user.email;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const others = event.target.others.value;
        const newOrderQty = parseInt(event.target.orderQty.value);

        if (newOrderQty > available || newOrderQty < minorder) {
            toast.error("Quantity is Higher or than available or lower than Minimum Order")

        } else {
            const order = { userName, email, name, image, description, newOrderQty, available, unitprice, address, phone, others, status: 'pending' }

            fetch('https://shielded-basin-34562.herokuapp.com/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success("Order Placed Successfully.")

                })
        }
        event.target.reset();

    }


    return (
        <div className='px-1'>
            <h2 className='mb-3'>Name: {user.displayName}</h2>
            <h2>Email: {user.email}</h2>
            <div className='grid gird-cols-1 lg:flex mb-5'>
                <div className='lg:w-5/12 border-2 p-5 rounded-lg'>
                    <img src={image} alt="" />
                </div>
                <div className='lg:ml-5 p-5 rounded-lg border-2 lg:w-7/12'>
                    <h2 className='text-3xl pb-3'>{name}</h2>
                    <h2 className='text-xl py-3'>{description}</h2>
                    <p className='font-bold text-xl'>Available Quantity: <span>{available} Units</span> </p>
                    <p className='font-bold py-2 text-xl'>Unit Price: $ <span>{unitprice}</span></p>
                    <p className='font-bold pb-2 text-xl'>Order Quantity: <span>{minorder}</span></p>
                </div>
            </div>
            <form onSubmit={handleAddOrder}>
                <input className='p-2 rounded-md border-2' name='orderQty' type="number" placeholder='Your Order Quantity' />
                <textarea className='border-2 w-full my-3 p-3 rounded-md' type="text" name='address' placeholder='Your Address' ></textarea>
                <textarea className='border-2 w-full mb-3 p-3 rounded-md' type="text" name='others' placeholder='Others Inforation' ></textarea>
                <input className='border-2 p-3 mb-3 mr-5 rounded-md w-3/6' type="text" name='phone' placeholder='Your Phone Number' />
                <input className='p-3 w-2/6 cursor-pointer text-white font-bold bg-orange-500 hover:bg-orange-600 duration-700 rounded-md border-0 uppercase' type="submit" value='Submit Order' />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;