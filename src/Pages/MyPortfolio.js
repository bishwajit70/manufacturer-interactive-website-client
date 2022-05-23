import React from 'react';
import Footer from './Home/Footer';

const MyPortfolio = () => {
    return (
        <div>
            <h2>Name: Bishwajit Mondal</h2>
            <h3>Email: mailtobishwa15@gmail.com</h3>
            <div>
                <h2 className='text-4xl py-5'>Educational Background</h2>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr class="active">
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

                            <tr class="active">
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
                    <ul>
                        <li>html5</li>
                        <li>CSS3</li>
                        <li>Tailwind</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>ReactJs</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-4xl py-5'>links of three of your projects (live website links)</h2>
                    <ul>
                        <li><a target={'_blank'} href="https://warehouse-management-332f6.web.app/">Warehouse Management App</a></li>
                        <li><a target={'_blank'} href="https://simple-shoe-review-app.netlify.app/">Shoe Review App</a></li>
                        <li><a target={'_blank'} href="https://your-favourite-shoes.netlify.app/">Favorite Shoes App</a></li>
                        <li><a target={'_blank'} href="https://weeding-photographer-669b5.web.app/">Individual Service Provider</a></li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPortfolio;