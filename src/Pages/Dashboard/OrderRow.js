import React from 'react';

const OrderRow = ({ order, index, setDeletingOrder }) => {
    const { name, image, description, minorder, status } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={image} alt="Product Image" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{status}</td>
            <td>
                <label onClick={() => setDeletingOrder(order)} for="delete-order-modal" class="btn modal-button">Delete</label>
                
            </td>
        </tr>
    );
};

export default OrderRow;