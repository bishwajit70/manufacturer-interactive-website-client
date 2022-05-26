import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddAReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

        const userName = user.displayName;
        const email = user.email;
        const photoUrl = user.photoURL;
        const reviewText = data.review;
        const ratings = data.ratings

        const reviews = { userName, email, reviewText, photoUrl, ratings }

        if (ratings > 5 || ratings < 0) {
            toast.error('Ratings must be 0-5')
        } else {
            fetch('https://shielded-basin-34562.herokuapp.com/review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(reviews)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Review Placed Successfully.')
                })
        }
    }

    return (
        <div>
            <div className='mx-auto'>
                <div className='grid lg:grid-cols-2 px-5 py-5 justify-between items-center'>
                    <h2 className='mb-3'>Name: {user.displayName}</h2>
                    <h2>Email: {user.email}</h2>
                </div>
                <div className="grid px-5 grid-cols-1 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="label">
                                <span className="label-text">Add Your Review</span>
                            </label>
                            <textarea
                                {...register("review", {
                                    required: {
                                        value: true,
                                        message: 'Review is Required'
                                    },
                                })}
                                name='review'
                                type="text"
                                placeholder="Your Review"
                                className="border-2 w-11/12 rounded-lg p-2" cols="30" rows="10"></textarea>
                            <label className="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                            </label>

                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input
                                {...register("ratings", {
                                    required: {
                                        value: true,
                                        message: 'ratings'
                                    },
                                })}
                                name='ratings'
                                type="number"
                                placeholder="Your Rating"
                                className="border-2 w-11/12 rounded-lg p-2" />

                            <label className="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                            </label>
                        </div>


                        <div className='grid grid-cols-2 xs:w-full lg:grid-cols-2 gap-5 lg:w-11/12 justify-between'>
                            <input className="btn text-white font-bold bg-orange-500 hover:bg-orange-600 duration-700 rounded-md border-0" type="submit" value='Add Review' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAReview;