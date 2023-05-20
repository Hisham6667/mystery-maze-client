import { HiArrowSmallRight, HiOutlinePuzzlePiece, HiUserCircle } from "react-icons/hi2";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {
    const { _id, seller_name, name, price, quantity_available } = toy
    return (
        <tr>
            <td><p className="flex items-center"><HiUserCircle className="mr-3 text-red-400" />{seller_name}</p></td>
            <td><p className="flex items-center"><HiOutlinePuzzlePiece className="mr-3 text-red-400" />{name}</p></td>
            <td><p className="flex items-center"><RiMoneyDollarCircleLine className="mr-2 text-red-400" />{price}</p></td>
            <td className="text-center"><b>{quantity_available}</b> pieces in stock</td>
            <td className="text-center">
                <Link to={`${_id}`}>
                    <button className="btn btn-outline btn-error">details<HiArrowSmallRight/></button>
                </Link>
            </td>
        </tr>
    );
};

export default SingleToy;