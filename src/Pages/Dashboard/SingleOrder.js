import React from 'react';

const SingleOrder = ({ order, index }) => {
    const { _id, name, image, minorder } = order
    return (
        <tr>
            <th>{index+1}</th>
            <td><div class="w-24 rounded">
                <img src={image} alt='' />
            </div></td>
            <td>{name}</td>
            <td>{minorder}</td>
            <td><button class="btn btn-error">Cancel</button></td>
            <td><button class="btn btn-error">Pay</button></td>
        </tr>

    );
};

export default SingleOrder;