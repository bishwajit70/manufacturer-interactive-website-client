import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import Footer from './Home/Footer';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);

    const [purchase, setPurchase] = useState({})
    const { id } = useParams()

    const { name, image, description, minorder, available, unitprice } = purchase
    useEffect(() => {
        const url = `http://localhost:5000/purchase/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [id])

    // const increaseQty = (event) => {
    //     event.preventDefault()
    //     let prevOrderQty = minorder;
    //     // let newQty = event.target.quantity.value;
    //     console.log(prevOrderQty);
    //     let newQuantity = prevOrderQty+1 
    //     prevOrderQty=newQuantity;
    //     // orderqty = orderqty+1

    //     // console.log(orderqty)

    // }

    const handleAddOrder = (event) => {
        event.preventDefault()
        const userName = user.displayName;
        const email = user.email;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const others = event.target.others.value;
        const order = { userName, email, name, image, description, minorder, available, unitprice, address, phone, others, status: 'pending' }

        fetch('http://localhost:5000/order', {
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
                alert("Order Placed Successfully.");
                event.target.reset();
            })
    }


    return (
        <div>
            <h2 className='mb-3'>Name: {user.displayName}</h2>
            <h2>Email: {user.email}</h2>
            <div className='flex'>
                <div className='w-5/12 border-2 p-5 rounded-lg'>
                    <img src={image} alt="" />
                </div>
                <div className='ml-5 p-5 rounded-lg border-2 w-7/12'>
                    <h2 className='text-3xl pb-3'>{name}</h2>
                    <h2 className='text-xl py-3'>{description}</h2>
                    <p className='font-bold text-xl'>Available Quantity: <span>{available} Units</span> </p>
                    <p className='font-bold py-2 text-xl'>Unit Price: $ <span>{unitprice}</span></p>
                    <p className='font-bold pb-2 text-xl'>Order Quantity: <span>{minorder}</span></p>
                    <input className='p-2 text-xl rounded-md border-2' value={minorder} type="text" />
                    {/* <button className='border-2 rounded-md text-xl p-2 ml-3'>Increase Quantity</button>
                    <button className='border-2 rounded-md text-xl p-2 ml-3'>Decrease Quantity</button> */}
                </div>
            </div>
            <form onSubmit={handleAddOrder}>
                <textarea className='border-2 w-full my-3 p-3 rounded-md' type="text" name='address' placeholder='Your Address' ></textarea>
                <textarea className='border-2 w-full mb-3 p-3 rounded-md' type="text" name='others' placeholder='Others Information' ></textarea>
                <input className='border-2 p-3 mb-3 mr-5 rounded-md w-3/6' type="text" name='phone' placeholder='Your Phone Number' />
                <input className='border-2 p-3 w-2/6 rounded-md cursor-pointer uppercase' type="submit" value='Submit Order' />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;