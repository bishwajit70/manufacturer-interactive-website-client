import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleOrder = ({ order, index, setDeletingOrder }) => {
    const { _id, name, image, minorder, unitprice } = order
    const navigate = useNavigate()

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="w-24 rounded">
                <img src={image} alt='' />
            </div></td>
            <td>{name}</td>
            <td>{minorder}</td>
            <td>
                <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" class="btn modal-button">Delete</label>
            </td>
            <td>
                {(unitprice && !order.paid) && <button onClick={() => navigate(`/payment/${_id}`)} class="btn btn-error">Pay</button>} 
                {(unitprice && order.paid) && <span class="text-success">Paid</span>} 
                
            </td>
        </tr>

    );
};

export default SingleOrder;