import { useLoaderData } from 'react-router-dom';
import UserSingleToy from './UserSingleToy';

const MyToys = () => {

    const userToys = useLoaderData();

    return (
        <div className="overflow-x-auto w-full">

            <div className='text-center text-red-400 font-semibold text-4xl mb-10'>We found your total {userToys.length} Toys !</div>

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
                        userToys.map(toy => <UserSingleToy key={toy._id} toy={toy}></UserSingleToy>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyToys;