import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FcHighPriority } from "react-icons/fc";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const [error, setError] = useState('');
    const updateToy = useLoaderData();
    const navigate = useNavigate()

    const { _id, price, stock, details } = updateToy;

    const handleUpdateToy = event => {
        event.preventDefault()
        const form = event.target;
        const updatedPrice = parseInt(form.price.value);
        const updatedStock = parseInt(form.stock.value);
        const updatedDetails = form.details.value;
        const updatedToy = { updatedPrice, updatedStock, updatedDetails }
        setError('')

        // validation
        if (price < 1 || price > 50) {
            setError('Your Price demand must be in 1 to 50');
            return Swal.fire({
                icon: 'error',
                title: 'Your Price demand must be in 1 to 50',
                showConfirmButton: false,
                timer: 1500
            })
        }
        if (stock < 1 || stock > 100) {
            setError('The toy have to 1 to 100 in stock');
            return Swal.fire({
                icon: 'error',
                title: 'The toy have to 1 to 100 in stock',
                showConfirmButton: false,
                timer: 1500
            })
        }
        if (details.length < 10 || details.length > 100) {
            setError('Your toy details should be in 10 to 100 letters');
            return Swal.fire({
                icon: 'error',
                title: 'Your toy details should be in 10 to 100 letters',
                showConfirmButton: false,
                timer: 1500
            })
        }

        // fetching
        fetch(`http://localhost:5000/usertoys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 0) {
                    setError('Please change something to update')
                }
                if (data.modifiedCount > 0) {
                    setError('')
                    form.reset()
                    Swal.fire({
                        icon: 'success',
                        title: 'Your Toy has updated successfully',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    navigate('/mytoys')
                }
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className="w-full mt-20">
            <form onSubmit={handleUpdateToy} className="w-2/3  mx-auto py-10 px-5 shadow-md border-t-red-500 border-t rounded-xl" data-aos="zoom-in">

                <div className='w-full mb-5'>
                    <p className='text-red-500 text-4xl text-center font-medium'>Update Your Toy</p>
                </div>

                <div className="grid grid-cols-2 gap-10">

                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text text-xl">Price</span>
                        </label>
                        <input type="number" defaultValue={price} name='price' placeholder="Type Your Demand" className="input focus:outline-none focus:bg-red-100/30 border border-red-100" required />
                    </div>

                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text text-xl">IN Stock</span>
                        </label>
                        <input type="number" defaultValue={stock} name='stock' placeholder="Type how much in stock" className="input focus:outline-none focus:bg-red-100/30 border border-red-100" required />
                    </div>

                </div>

                <div className="mb-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Toy Description</span>
                        </label>
                        <input type="text" defaultValue={details} name='details' placeholder="Type some details about the toy" className="input focus:outline-none focus:bg-red-100/30 border border-red-100" required />
                    </div>
                </div>

                {error && <div className='text-center text-error mb-4 flex justify-center items-center'>
                    <FcHighPriority className='mr-3 text-xl' />{error}
                </div>}

                <div className="form-control mb-3">
                    <button type='submit' className="border border-red-500 p-3 rounded-xl text-xl hover:border-white hover:bg-red-500 hover:text-white transition-all active:border-red-500 active:bg-white active:text-black">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;