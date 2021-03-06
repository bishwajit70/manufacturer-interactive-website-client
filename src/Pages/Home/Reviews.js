import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://shielded-basin-34562.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    const latesReviews = reviews.slice(-6)
    return (
        <div className='mb-20'>
            <h2 className='text-center text-3xl lg:text-5xl font-bold py-20 text-purple-400'>What our Clients Says!</h2>
            <div className='grid grid-cols-1 px-5 py-10 lg:grid-cols-3 gap-10 items-center justify-between'>
                {
                    latesReviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>)
                }
            </div>


        </div>
    );
};

export default Reviews; <h2>Review Part</h2>