import { useNavigate } from 'react-router-dom';
import UserSingleToy from './UserSingleToy';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const MyToys = () => {
    const [userToys, setUserToys] = useState();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const url = `https://toy-store-server-jet.vercel.app/usertoys?email=${user.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('toy-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setUserToys(data)
                }
                else {
                    navigate('/')
                    return Swal.fire({
                        icon: 'error',
                        title: 'Your token has expired Please Login again to see your toys',
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
            })
    }, [url, navigate])

    const handleDeleteToy = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://toy-store-server-jet.vercel.app/usertoys/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    icon: 'success',
                                    title: ('Your toy deleted successfully'),
                                    showConfirmButton: false,
                                    timer: 1000
                                })
                                const remaining = userToys.filter(toy => toy._id !== id)
                                setUserToys(remaining)
                            }
                        })
                }
            })

    }

    return (
        <div className="overflow-x-auto w-full">

            <div className='text-center text-red-400 font-semibold text-4xl mb-10'>We found your total {userToys ? userToys.length : 0} Toys !</div>

            <table className="table w-full">

                <thead>
                    <tr>
                        <th className="text-xl">Seller Name</th>
                        <th className="text-xl">Toy Name</th>
                        <th className="text-xl">Category</th>
                        <th className="text-xl">Price</th>
                        <th className="text-xl text-center">Available Quantity</th>
                        <th className="text-xl text-center">Update</th>
                        <th className="text-xl text-center">Delete</th>
                    </tr>
                </thead>

                <tbody className="text-lg">
                    {
                        userToys && userToys.map(toy => <UserSingleToy key={toy._id} toy={toy} handleDeleteToy={handleDeleteToy}></UserSingleToy>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyToys;