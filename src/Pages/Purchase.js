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
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [id])

    // console.log(purchase)

    return (
        <div>
            <h2 className='mb-3'>Name: {user.displayName}</h2>
            <h2>Email: {user.email}</h2>
            <div className='flex'>
                <div className='w-5/12 border-2 p-5 rounded-lg'>
                    <img src={image} alt="" />
                </div>
                <div className='ml-5 p-5 rounded-lg border-2 w-7/12'>
                    <h2>{name}</h2>
                    <h2>{description}</h2>
                    <p>Available: {available}</p>
                    <p>Unit Price: {unitprice}</p>
                    <p>Order Quantity</p>
                    <input className='p-2 border-2' type="text" value={minorder} />
                    <button className='border-2 p-2 ml-3'>Increase Order Quantity</button>
                    <button className='border-2 p-2 ml-3'>Decrease Order Quantity</button>
                </div>
            </div>
            <form>
                <textarea className='border-2 w-full my-3 p-3 rounded-md' type="text" name='address' placeholder='Your Address' ></textarea>
                <textarea className='border-2 w-full mb-3 p-3 rounded-md' type="text" name='address' placeholder='Others Information' ></textarea>
                <input className='border-2 p-3 mb-3 mr-5 rounded-md w-3/6' type="text" name='phone' placeholder='Your Phone Number' />
                <input className='border-2 p-3 w-2/6 rounded-md cursor-pointer uppercase' type="submit" value='Submit Order' />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;