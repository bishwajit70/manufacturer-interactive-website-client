import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const [payments, setPayment] = useState({})

    const { id } = useParams()

    const { name, image, description, minorder, available, unitprice } = payments

    useEffect(() => {
        const url = `http://localhost:5000/payment/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [id])

    return (
        <div className='flex mx-auto justify-center py-5' >
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={image} alt={name} class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-left'>{description}</p>
                    <p className='text-left'>Ordered Quantity: <span>{minorder}</span></p>
                    <p className='text-left'>Unit Price: <span>{unitprice}</span></p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Complete Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;