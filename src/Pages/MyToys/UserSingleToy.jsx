import { HiOutlinePuzzlePiece, HiUserCircle } from 'react-icons/hi2';
import { RiMoneyDollarCircleLine, RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { RxUpdate } from "react-icons/rx";

const UserSingleToy = ({ toy, handleDeleteToy }) => {
    const { _id, toyName, seller, category, price, stock } = toy;
    return (
        <tr>
            <td><p className="flex items-center"><HiUserCircle className="mr-3 text-red-400" />{seller}</p></td>
            <td><p className="flex items-center"><HiOutlinePuzzlePiece className="mr-3 text-red-400" />{toyName}</p></td>
            <td><p>{category}</p></td>
            <td><p className="flex items-center"><RiMoneyDollarCircleLine className="mr-2 text-red-400" />{price}</p></td>
            <td className="text-center"><b>{stock}</b> pieces in stock</td>
            <td className="text-center">
                <Link>
                    <button className="btn btn-outline btn-info"><span className='mr-1'>Update</span><RxUpdate /></button>
                </Link>
            </td>
            <td className="text-center">
                <Link>
                    <button onClick={() => handleDeleteToy(_id)} className="btn btn-outline btn-error"><span className='mr-1'>Delete</span><RiDeleteBin6Line /></button>
                </Link>
            </td>
        </tr>
    );
};

export default UserSingleToy;