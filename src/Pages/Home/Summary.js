import React from 'react';
import { FaRegFlag, FaHome } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import { BsPeople } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';


const Summary = () => {
    return (
        <div className='bg-slate-200 px-2 lg:px-10 rounded-lg shadow-lg my-10'>
            <h3 className='text-center text-3xl lg:text-5xl font-bold py-20 text-purple-400'>Our Summary</h3>
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
                            <p>It is a very easy process. Take a user guide and read the instructions attentively. Then try to assemble it or fix it. If you are not capable then contact an expert or to us.</p>
                        </div>
                    </div>
                    <div class="collapse mt-5 rounded-md">
                        <input type="checkbox" class="peer collapse-plus" />
                        <div class="collapse-title bg-white">
                            <h2 className='text-2xl font-bold'>What is the benefit of our product?</h2>
                        </div>
                        <div class="collapse-content bg-white">
                            <p>We produce carefully and taking quality test in each and every process. So you can be assured that the product is the best. Our products supports your whole life. </p>
                        </div>
                    </div>
                    <div class="collapse mt-5 rounded-md ">
                        <input type="checkbox" class="peer collapse-plus" />
                        <div class="collapse-title bg-white">
                            <h2 className='text-2xl font-bold'>How will we contact with us?</h2>
                        </div>
                        <div class="collapse-content bg-white">
                            <p>Visit our Website and then you will get the contact info as well as you will find contact information in our bruchure or user manual.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;