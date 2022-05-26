import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer py-5 drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl pb-5 text-center text-purple-500 font-bold'>Welcome to Your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {!admin && <li><Link to='/dashboard/myorder'>My Orders</Link></li>}
                    {!admin && <li><Link to='/dashboard/review'>Add A Review</Link></li>}
                    {admin && <li><Link to='/dashboard/users'>All Users</Link></li>}
                    {admin && <li><Link to='/dashboard/manageallorders'>Manage All Orders</Link></li>}
                    {admin && <li><Link to='/dashboard/addaproduct'>Add Product</Link></li>}
                    {admin && <li><Link to='/dashboard/manageproduct'>Manage Product</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;