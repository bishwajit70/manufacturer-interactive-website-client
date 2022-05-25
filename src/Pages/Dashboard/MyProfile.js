import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const email = user.email;

    const { data, isLoading, refetch } = useQuery('profiles', () => fetch(`http://localhost:5000/profile/${email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
        
    }
    const onSubmit = data => {
        const userProfile = {
            email: user.email,
            education: data.education,
            location: data.location,
            phone: data.phone,
            linkedin: data.linkedin
        }
        // console.log(userProfile)
        fetch(`http://localhost:5000/profile/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Profile Submitted Successfully.')
                refetch()
            })
    }

    return (
        <div className='mx-auto'>
            <div className='grid lg:grid-cols-2 px-5 py-5 justify-between items-center'>
                <h2 className='mb-3'>Name: {user.displayName}</h2>
                <h2>Email: {user.email}</h2>
                <p className='py-3'>Education: {data.education}</p>
                <a className='text-blue-700 font-bold' target='{_blank}' href={data.linkedin}>Linkedin Profile Link</a>
                <p>Location: {data.location}</p>
                <p>Phone Number: {data.phone}</p>
            </div>
            <div className="grid px-5 grid-cols-1 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input
                            {...register("education", {
                                required: {
                                    value: true,
                                    message: 'Education is Required'
                                },
                            })}
                            name='education'
                            type="text"
                            placeholder="Your Education"
                            className="border-2 w-11/12 rounded-lg p-2" />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input
                            {...register("location", {
                                required: {
                                    value: true,
                                    message: 'Location is Required'
                                },

                            })}
                            name='location'
                            type="text"
                            placeholder="Your Location"
                            className="border-2 w-11/12 rounded-lg p-2" />
                        <label className="label">
                            {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                        </label>
                    </div>



                    <div className="">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone is Required'
                                },

                            })}
                            name='phone'
                            type="text"
                            placeholder="Your Phone"
                            className="border-2 w-11/12 rounded-lg p-2" />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text">Linked In Profile Link</span>
                        </label>
                        <input
                            {...register("linkedin", {
                                required: {
                                    value: true,
                                    message: 'Linked is Required'
                                },

                            })}
                            name='linkedin'
                            type="text"
                            placeholder="Your Linkedin Profile Link"
                            className="border-2 w-11/12 rounded-lg p-2" />
                        <label className="label">
                            {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
                        </label>
                    </div>
                    <div className='grid grid-cols-2 xs:w-full lg:grid-cols-2 gap-5 lg:w-11/12 justify-between'>
                        <input className="btn" type="submit" value='Submit' />
                        <input className="btn" type="submit" value='Update' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;