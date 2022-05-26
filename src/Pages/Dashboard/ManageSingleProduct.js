import React from 'react';

const ManageSingleProduct = ({ product, index, setDeletingProduct }) => {
    const { id, name, image, description, } = product
    return (

        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={image} alt='' />
                    </div>
                </div>
            </td>
            <td>
                <h2 className='font-bold text-xl'>{name}</h2>
                <p>{description.slice(0, 50)}</p>
            </td>
            <td>
                <label onClick={() => setDeletingProduct(product)} htmlFor="delete-confirm-modal" className="btn modal-button text-white font-bold bg-orange-500 hover:bg-orange-600 duration-700 rounded-md border-0">Delete</label>

                {/* <button 
                onClick={()=>setDeletingProduct(product)} className="btn btn-outline btn-primary">Delete
                </button> */}
            </td>
        </tr>

    );
};

export default ManageSingleProduct;