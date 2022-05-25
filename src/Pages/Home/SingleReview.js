import React from 'react';

const SingleReview = ({ review }) => {
    const { userName, photoUrl, reviewText, email, ratings } = review
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="avatar">
                <div className="w-24 my-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex mx-auto">
                    {photoUrl && <img src={photoUrl} alt='' />}
                    {!photoUrl && <img src="https://api.lorem.space/image/face?hash=3174" alt='' />}
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{userName}</h2>
                <h2 className="card-title">{email}</h2>
                <p>{reviewText}</p>
                <p className='font-bold text-xl'>Ratings: <span className='font-bold text-xl text-orange-600'>{ratings}</span></p>
            </div>
        </div>
    );
};

export default SingleReview;