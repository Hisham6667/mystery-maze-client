import { useLoaderData } from "react-router-dom";
import SingleToy from "./SingleToy";


const AllToys = () => {

    const allToys = useLoaderData();

    return (
        <div className="overflow-x-auto w-full">

            <div className='text-center text-red-400 font-semibold text-4xl mb-10'>We have total {allToys.length} Toys here !</div>

            <table className="table w-full">

                <thead>
                    <tr>
                        <th className="text-xl">Seller Name</th>
                        <th className="text-xl">Toy Name</th>
                        <th className="text-xl">Category</th>
                        <th className="text-xl">Price</th>
                        <th className="text-xl text-center">Available Quantity</th>
                        <th className="text-xl text-center">Details</th>
                    </tr>
                </thead>

                <tbody className="text-lg">
                    {
                        allToys.map(toy => <SingleToy key={toy._id} toy={toy}></SingleToy>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllToys;