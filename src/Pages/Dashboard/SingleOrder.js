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
        </tr>

    );
};

export default SingleOrder;