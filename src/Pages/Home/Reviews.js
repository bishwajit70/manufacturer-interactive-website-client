import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://shielded-basin-34562.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <div>
            <h2>Total Review Count: {reviews.length}</h2>
        </div>
    );
};

export default Reviews; <h2>Review Part</h2>