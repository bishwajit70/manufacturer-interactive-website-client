import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({deletingOrder, refetch, setDeletingOrder}) => {
    const {_id, name}=deletingOrder

    const handleDeleteOrder = () => {
        const url = `http://localhost:5000/orders/${_id}`
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
            <input type="checkbox" id="delete-order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-600">Are you sure you want to delete Product: {name}  </h3>
                    <p class="py-4">If you delete your order you will not get your order information</p>
                    <div class="modal-action">
                        <button
                            onClick={() => handleDeleteOrder(_id)}
                            class="btn modal-button btn-error"
                            for="delete-order-modal"
                        >Delete</button>
                        <label for="delete-order-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrderModal;