import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [purchase, setPurchase]=useState({})
    const {id} = useParams()

       useEffect(()=>{
           fetch(`http://localhost:3000/purchase/${id}`)
           .then(res=>res.json())
           .then(data=>setPurchase(data))
       },[id])

    console.log(purchase)

    return (
        <div>
            This is purchase page
        </div>
    );
};

export default Purchase;