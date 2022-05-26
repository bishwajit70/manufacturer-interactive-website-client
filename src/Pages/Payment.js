import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import CheckoutForm from './Dashboard/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L39PSCX1e2lGoCHlkT2Nds67UnRiZP6bPk0mENMQqIX4XyA3hBVcHBGzIo1MOxbmGu9yCoAyRiFMv2ypqUEmIdL00aEnQaLNH');

const Payment = () => {

    const [payments, setPayment] = useState({})

    const [user] = useAuthState(auth);

    const { id } = useParams()

    const { name, image, description, newOrderQty, available, unitprice } = payments

    useEffect(() => {
        const url = `https://shielded-basin-34562.herokuapp.com/payment/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [id])

    return (
        <div>
            <p className='text-center text-2xl text-purple-500'>Hello!! {user.displayName}</p>
            <p className='text-center text-2xl text-purple-500'>Please Pay for <span className='text-orange-500'>{name}</span>  </p>
            <div className='flex mx-auto justify-center py-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt={name} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p className='text-left'>{description}</p>
                        <p className='text-left'>Ordered Quantity: <span>{newOrderQty}</span></p>
                        <p className='text-left'>Unit Price: <span>{unitprice}</span></p>
                        <div className="card-actions">
                        <button className='text-white font-bold bg-orange-500 hover:bg-orange-600 duration-700 rounded-md border-0 btn'>Complete Payment</button>
                        </div>
                    </div>
                </div>

            </div>

            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>

        </div>
    );
};

export default Payment;