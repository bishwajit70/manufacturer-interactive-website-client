import React from 'react';
import { FaRegFlag, FaHome } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import { BsPeople } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';


const Summary = () => {
    return (
        <div className='bg-slate-200 px-2 lg:px-10 rounded-lg shadow-lg my-10'>
            <h3 className='text-center text-5xl font-bold py-20 text-purple-400'>Our Summary</h3>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 justify-between'>
                <div className='text-center bg-purple-50 border-2 p-10 rounded-md'>
                    <FaRegFlag className='text-6xl mx-auto'></FaRegFlag>
                    <p className='text-5xl my-5 text-center font-bold text-purple-700'>125 <br /> <span className='text-3xl'>Countries</span></p>
                </div>
                <div className='text-center bg-purple-50 border-2 p-10 rounded-md'>
                    <GrProjects className='text-6xl mx-auto'></GrProjects>
                    <p className='text-5xl my-5 text-center font-bold text-purple-700'>40 <br /> <span className='text-3xl'>Projects</span></p>
                </div>
                <div className='text-center bg-purple-50 border-2 p-10 rounded-md'>
                    <BsPeople className='text-6xl mx-auto'></BsPeople>
                    <p className='text-5xl my-5 text-center font-bold text-purple-700'>1254 <br /> <span className='text-3xl'>Happy Clients</span></p>
                </div>
                <div className='text-center bg-purple-50 border-2 p-10 rounded-md'>
                    <BiLike className='text-6xl mx-auto'></BiLike>
                    <p className='text-5xl my-5 text-center font-bold text-purple-700'>254 <br /> <span className='text-3xl'>Feedbacks</span></p>
                </div>
            </div>
            <div className='grid lg:flex justify-between gap-20 py-20'>
                <div>
                    <h2 className='text-2xl font-bold'>We Help You To Grow Your Business Exponentially</h2>
                    <div className='flex py-5 '>
                        <button class="btn mr-10 btn-primary">Our Brochure</button>
                        <button class="btn btn-primary">Best Team Member</button>
                    </div>

                    <div class="divider"></div>
                    <div className='flex items-center justify-center'>
                        <FaHome className='text-6xl'></FaHome>
                        <h1 className='text-3xl ml-6'>We Have +45 Years Of Experience For Give You Better Quality Results</h1>
                    </div>
                </div>
                <div>
                    <div class="collapse rounded-md">
                        <input type="checkbox" class="peer collapse-plus" />
                        <div class="collapse-title bg-white ">
                            <h2 className='text-2xl font-bold'>How Can Use The Product?</h2>
                        </div>
                        <div class="collapse-content bg-white">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam incidunt reprehenderit quod dicta nesciunt necessitatibus quaerat ex distinctio, maxime consequuntur.</p>
                        </div>
                    </div>
                    <div class="collapse mt-5 rounded-md">
                        <input type="checkbox" class="peer collapse-plus" />
                        <div class="collapse-title bg-white">
                            <h2 className='text-2xl font-bold'>How Can Use The Product?</h2>
                        </div>
                        <div class="collapse-content bg-white">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam incidunt reprehenderit quod dicta nesciunt necessitatibus quaerat ex distinctio, maxime consequuntur.</p>
                        </div>
                    </div>
                    <div class="collapse mt-5 rounded-md ">
                        <input type="checkbox" class="peer collapse-plus" />
                        <div class="collapse-title bg-white">
                            <h2 className='text-2xl font-bold'>How Can Use The Product?</h2>
                        </div>
                        <div class="collapse-content bg-white">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam incidunt reprehenderit quod dicta nesciunt necessitatibus quaerat ex distinctio, maxime consequuntur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;