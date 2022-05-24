import React from 'react';

const ManageSingleProduct = ({ product, index, setDeletingProduct }) => {
    const { id, name, image, description, } = product
    return (

        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-24 rounded">
                        <img src={image} alt='' />
                    </div>
                </div>
            </td>
            <td>
                <h2 className='font-bold text-xl'>{name}</h2>
                <p>{description.slice(0, 50)}</p>
            </td>
            <td>
            <label onClick={()=>setDeletingProduct(product)} for="delete-confirm-modal" class="btn modal-button">Delete</label>

                {/* <button 
                onClick={()=>setDeletingProduct(product)} class="btn btn-outline btn-primary">Delete
                </button> */}
            </td>
        </tr>

    );
};

export default ManageSingleProduct;