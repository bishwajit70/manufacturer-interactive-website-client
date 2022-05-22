import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [purchase, setPurchase] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const url=`http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [id])

    console.log(purchase)

    return (
        <div>
            This is purchase page {purchase.name}
        </div>
    );
};

export default Purchase;