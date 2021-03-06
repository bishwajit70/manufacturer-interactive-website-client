import React from 'react';
import { toast } from 'react-toastify';

const AddAProduct = () => {

    const handleAddOrder = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const minorder = event.target.minorder.value;
        const available = event.target.available.value;
        const unitprice = event.target.unitprice.value;

        const newProduct = { name, image, description, minorder, available, unitprice }

        fetch('https://shielded-basin-34562.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Product Added Successfully.")
                event.target.reset();
            })
    }

    return (
        <div>
            <form onSubmit={handleAddOrder}>
                <div className='grid px-1 grid-cols-1 lg:grid-cols-2 gap-3'>
                    <input className='border-2 lounded-lg p-2 mb-3 rounded-md' type="text" name="name" required placeholder='Product Name' id="" />
                    <input className='border-2 lounded-lg p-2 mb-3 rounded-md' type="text" name="image" required placeholder='Image URL' id="" />
                    <input className='border-2 lounded-lg p-2 mb-3 rounded-md' type="text" name="description" required placeholder='Short Description' id="" />
                    <input className='border-2 lounded-lg p-2 mb-3 rounded-md' type="text" name="available" required placeholder='Available Quantity' id="" />
                    <input className='border-2 lounded-lg p-2 mb-3 rounded-md' type="text" name="minorder" required placeholder='Minimum Order Quantity' id="" />
                    <input className='border-2 lounded-lg p-2 mb-3 rounded-md' type="number" name="unitprice" required placeholder='Unit Price' id="" />
                    <input className='border-2 text-white font-bold bg-orange-500 hover:bg-orange-600 duration-700 lounded-lg p-2 cursor-pointer mb-3 rounded-md' type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddAProduct;



// name
// :"Bicycle Wheel"
// image
// :"https://img.freepik.com/free-vector/bicycle-wheel-isolated_1284-41787...."
// description
// :"Ut pariatur dolor magna esse. Elit reprehenderit sit non ex occaecat e..."
// minorder
// :100
// available
// :1000
// unitprice
// :600