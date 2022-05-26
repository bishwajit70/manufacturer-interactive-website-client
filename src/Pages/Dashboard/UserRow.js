import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user

    const makeAdmin = () => {
        fetch(`https://shielded-basin-34562.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made An Admin`);
                    refetch()
                }
            })
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs text-white font-bold bg-orange-500 hover:bg-orange-600 duration-700 rounded-md border-0">Make Admin</button>}</td>
            <td><button className="btn text-white font-bold bg-orange-500 hover:bg-orange-600 duration-700 rounded-md border-0 btn-xs">Remove User</button></td>
        </tr>

    );
};

export default UserRow;