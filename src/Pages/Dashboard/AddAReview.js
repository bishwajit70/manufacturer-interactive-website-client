import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddAReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div>
            <h2>Add A Review</h2>
            <div className='mx-auto'>
                <div className='grid lg:grid-cols-2 px-5 py-5 justify-between items-center'>
                    <h2 className='mb-3'>Name: {user.displayName}</h2>
                    <h2>Email: {user.email}</h2>
                </div>
                <div className="grid px-5 grid-cols-1 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="label">
                                <span className="label-text">Review</span>
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
                                {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                            <label className="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                            </label>
                        </div>

                        
                        <div className='grid grid-cols-2 xs:w-full lg:grid-cols-2 gap-5 lg:w-11/12 justify-between'>
                            <input className="btn" type="submit" value='Submit' />
                            <input className="btn" type="submit" value='Update' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAReview;