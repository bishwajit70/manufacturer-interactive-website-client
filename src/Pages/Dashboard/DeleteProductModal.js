import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({ setDeletingProduct, deletingProduct, refetch }) => {
    const { name, _id } = deletingProduct

    const handleDeleleteProduct = () => {
        const url = `https://shielded-basin-34562.herokuapp.com/product/${_id}`
        fetch(url, {
            method: "DELETE",

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} Deleted Successfully.`)
                    setDeletingProduct(null)
                    refetch()
                }

            })

    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are you sure you want to delete Product: {name} </h3>
                    <p className="py-4">If you delete your order you will not get your order information</p>
                    <div className="modal-action">
                        <button
                            onClick={() => handleDeleleteProduct(_id)}
                            className="btn modal-button btn-error"
                            for="delete-confirm-modal"
                        >Delete</button>
                        <label for="delete-confirm-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;