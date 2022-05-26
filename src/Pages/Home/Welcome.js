import React from 'react';

const Welcome = () => {
    return (
        <div className="hero min-h-screen bg-purple-50 py-10 rounded-2xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/9bfyqt9/worker1.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='lg:ml-10'>
                    <h1 className="text-2xl text-orange-500">Welcome To The Best Industrial Center Around The World</h1>
                    <h1 className="text-4xl py-2 font-bold">The Global Leader In The Industry & Manufacturing Of Innovative.</h1>
                    <p className="py-2 text-2xl text-slate-500">Bike Manufacturer is A Industry & Manufacturing Services Provider Institutions. Suitable For Factory, Manufacturing, Industry, Engineering, Construction And Any Related Industry Care Field.</p>
                    <div className='flex py-2 items-center'>
                        <input type="checkbox" defaultChecked="defaultChecked" className="checkbox" />
                        <p className='ml-5'>Providing Innovative Website Solution For Future</p>
                    </div>
                    <div className='flex py-2 items-center'>
                        <input type="checkbox" defaultChecked="defaultChecked" className="checkbox" />
                        <p className='ml-5'>We Use Qulity Manufacturing Materials</p>
                    </div>
                    <div className='flex py-2 items-center'>
                        <input type="checkbox" defaultChecked="defaultChecked" className="checkbox" />
                        <p className='ml-5'>We Provide Unique Technology</p>
                    </div>
                    <div className='flex py-2 items-center'>
                        <input type="checkbox" defaultChecked="defaultChecked" className="checkbox" />
                        <p className='ml-5'>Group Of Certified & Experienced Team</p>
                    </div>
                    <div className='flex py-2 items-center'>
                        <input type="checkbox" defaultChecked="defaultChecked" className="checkbox" />
                        <p className='ml-5'>The Best Services Of Multiple Industries</p>
                    </div>

                    <div className=" flex py-5 justify-start items-center">
                        <div className="w-24 ">
                            <img className='rounded-xl mr-10' src="https://api.lorem.space/image/face?hash=64318" alt='' />

                        </div>
                        <div className='ml-10'>
                            <img className='w-48' src="https://i.ibb.co/ccQjF3x/signature.png" alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;