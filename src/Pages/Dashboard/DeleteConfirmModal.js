import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
    const { name, _id } = deletingOrder

    const handleCancelOrder = () => {
        const url = `https://shielded-basin-34562.herokuapp.com/order/${_id}`
        fetch(url, {
            method: "DELETE",

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Order Deleted ${name}`)
                    setDeletingOrder(null)
                    refetch()
                }

            })

    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are you sure you want to delete Order of: {name}</h3>
                    <p className="py-4">If you delete your order you will not get your order inforation</p>
                    <div className="modal-action">
                        <button
                            onClick={() => handleCancelOrder(_id)}
                            className="btn modal-button btn-error"
                            htmlFor="delete-confirm-modal"
                        >Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;