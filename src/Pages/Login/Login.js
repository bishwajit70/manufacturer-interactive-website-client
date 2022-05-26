import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle }
    from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';


const Login = () => {
    const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || googleUser)

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    // if (user || googleUser) {
    //     navigate(from, { replace: true });
    // }
    console.log(googleUser)
    let signInError;

    if (loading || googleLoading || sending) {
        return <Loading></Loading>
    }
    if (error || googleError || resetError) {
        signInError = <p className='text-red-500 pb-3 text-center'><small>{error?.message || googleError?.message || resetError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    const handleResetPassword = (data) => {
        const email = getValues('email')
        sendPasswordResetEmail(email)
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="for-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                                name='email'
                                type="email"
                                placeholder="Your Email Address"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="for-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}

                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className="btn w-full max-w-xs text-white font-bold bg-orange-500 hover:bg-orange-600 duration-700 rounded-md border-0" type="submit" value='Login' />
                    </form>

                    <div className="divider">OR</div>

                    <p className='text-center'>New? <Link to='/signup' className='text-purple-600 mb-4'>Create New Account</Link></p>

                    <button onClick={() => handleResetPassword()} className="btn btn-outline hover:bg-orange-600 duration-700 hover:border-0">Reset Password</button>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline hover:bg-orange-600 duration-700 hover:border-0">Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;