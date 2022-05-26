import React from 'react';
import Footer from './Home/Footer';

const MyPortfolio = () => {
    return (
        <div className='py-10'>
            <h2 className='text-xl font-semibold pb-3'>Name: Bishwajit Mondal</h2>
            <h3>Email: mailtobishwa15@gmail.com</h3>
            <div>
                <h2 className='text-4xl py-5'>Educational Background</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr className="active">
                                <th>#</th>
                                <th>Exam Name</th>
                                <th>Passing Year</th>
                                <th>Institute/Board</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr >
                                <th>1</th>
                                <td>Secondary School Certificate</td>
                                <td>1986</td>
                                <td>Dhaka Board</td>
                            </tr>

                            <tr className="active">
                                <th>2</th>
                                <td>Higher Secondary Certificate</td>
                                <td>1988</td>
                                <td>Dhaka Board</td>
                            </tr>

                            <tr>
                                <th>3</th>
                                <td>Bachelor of Commerce</td>
                                <td>1990</td>
                                <td>Dhaka University</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2 className='text-4xl py-5'>List of Technologies or Skills as a Web Developer</h2>
                    <ul className='flex flex-wrap'>
                        <li className='py-3 px-5 m-2 bg-orange-500 text-white text-xl rounded-md cursor-pointer'>html5</li>
                        <li className='py-3 px-5 m-2 bg-orange-500 text-white text-xl rounded-md cursor-pointer'>CSS3</li>
                        <li className='py-3 px-5 m-2 bg-orange-500 text-white text-xl rounded-md cursor-pointer'>Tailwind</li>
                        <li className='py-3 px-5 m-2 bg-orange-500 text-white text-xl rounded-md cursor-pointer'>Bootstrap</li>
                        <li className='py-3 px-5 m-2 bg-orange-500 text-white text-xl rounded-md cursor-pointer'>JavaScript</li>
                        <li className='py-3 px-5 m-2 bg-orange-500 text-white text-xl rounded-md cursor-pointer'>ReactJs</li>
                        <li className='py-3 px-5 m-2 bg-orange-500 text-white text-xl rounded-md cursor-pointer'>MongoDB</li>
                        <li className='py-3 px-5 m-2 bg-orange-500 text-white text-xl rounded-md cursor-pointer'>Firebase</li>
                        <li className='py-3 px-5 m-2 bg-orange-500 text-white text-xl rounded-md cursor-pointer'>Express</li>
                        <li className='py-3 px-5 m-2 bg-orange-500 text-white text-xl rounded-md cursor-pointer'>React Query</li>
                        <li className='py-3 px-5 m-2 bg-orange-500 text-white text-xl rounded-md cursor-pointer'>React Hook Form</li>
                    </ul>
                </div>
                <div className='mb-10'>
                    <h2 className='text-4xl py-5'>links of three of your projects (live website links)</h2>
                    <ul>
                        <li className='py-2'><a className='font-bold text-xl' target={'_blank'} href="https://warehouse-management-332f6.web.app/">Warehouse Management App</a></li>
                        <li className='py-2'><a className='font-bold text-xl' target={'_blank'} href="https://simple-shoe-review-app.netlify.app/">Shoe Review App</a></li>
                        <li className='py-2'><a className='font-bold text-xl' target={'_blank'} href="https://your-favourite-shoes.netlify.app/">Favorite Shoes App</a></li>
                        <li className='py-2'><a className='font-bold text-xl' target={'_blank'} href="https://weeding-photographer-669b5.web.app/">Individual Service Provider</a></li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPortfolio;