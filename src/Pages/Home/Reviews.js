import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://shielded-basin-34562.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <div>
            <h2 className='text-center text-5xl font-bold py-20 text-purple-400'>What our Clients Says!</h2>
            <div className='grid grid-cols-1 px-5 py-10 lg:flex gap-10 items-center justify-between'>
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>)
                }
            </div>


        </div>
    );
};

export default Reviews; <h2>Review Part</h2>