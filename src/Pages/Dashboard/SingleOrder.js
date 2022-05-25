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
                <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" className="btn modal-button">Delete</label>
            </td>
            <td>
                {(unitprice && !order.paid) && <button onClick={() => navigate(`/payment/${_id}`)} className="btn btn-error">Pay</button>}
                {(unitprice && order.paid) && <span className="text-success">Paid</span>}

            </td>
        </tr>

    );
};

export default SingleOrder;