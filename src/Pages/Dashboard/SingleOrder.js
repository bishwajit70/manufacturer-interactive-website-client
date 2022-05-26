import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleOrder = ({ order, index, setDeletingOrder }) => {
    const { _id, name, image, minorder, unitprice } = order
    const navigate = useNavigate()

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="w-24 rounded">
                <img src={image} alt='' />
            </div></td>
            <td>{name}</td>
            <td>{minorder}</td>
            <td>
                <label onClick={() => setDeletingOrder(order)} htmlFor="delete-confirm-modal" className="btn modal-button text-white font-bold bg-orange-500 hover:bg-orange-600 duration-700 rounded-md border-0">Delete</label>
            </td>
            <td>
                {(unitprice && !order.paid) && <button onClick={() => navigate(`/payment/${_id}`)} className="btn btn-error">Pay</button>}
                {(unitprice && order.paid) && <span className="text-success">Paid</span>}

            </td>
        </tr>

    );
};

export default SingleOrder;