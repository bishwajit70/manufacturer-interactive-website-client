import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
    const { _id, name } = deletingOrder

    const handleDeleteOrder = () => {
        const url = `https://shielded-basin-34562.herokuapp.com/orders/${_id}`
        fetch(url, {
            method: "DELETE",

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} Deleted Successfully.`)
                    setDeletingOrder(null)
                    refetch()
                }

            })

    }
    return (
        <div>
            <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are you sure you want to delete Product: {name}  </h3>
                    <p className="py-4">If you delete your order you will not get your order inforation</p>
                    <div className="modal-action">
                        <button
                            onClick={() => handleDeleteOrder(_id)}
                            className="btn modal-button btn-error"
                            htmlFor="delete-order-modal"
                        >Delete</button>
                        <label htmlFor="delete-order-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrderModal;