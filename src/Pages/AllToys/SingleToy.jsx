import { useContext } from "react";
import { HiArrowSmallRight, HiOutlinePuzzlePiece, HiUserCircle } from "react-icons/hi2";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SingleToy = ({ toy }) => {
    const { _id, seller_name, name, price, quantity_available, category } = toy;

    const navigate = useNavigate();
    const {user} = useContext(AuthContext)
    const handleDetails = () => {
        if(user){
            return navigate(`/alltoys/${_id}`)
        }
        else{
            Swal.fire({
                icon: 'error',
                title: ('You have to login to view details'),
                showConfirmButton: false,
                timer: 2000
            })
            return navigate(`/login`)
        }
    }
    return (
        <tr>
            <td><p className="flex items-center"><HiUserCircle className="mr-3 text-red-400" />{seller_name}</p></td>
            <td><p className="flex items-center"><HiOutlinePuzzlePiece className="mr-3 text-red-400" />{name}</p></td>
            <td><p>{category}</p></td>
            <td><p className="flex items-center"><RiMoneyDollarCircleLine className="mr-2 text-red-400" />{price}</p></td>
            <td className="text-center"><b>{quantity_available}</b> pieces in stock</td>
            <td className="text-center">
                
                    <button onClick={handleDetails} className="btn btn-outline btn-error">details<HiArrowSmallRight/></button>
                    {/* <Link to={`${_id}`}>
                </Link> */}
            </td>
        </tr>
    );
};

export default SingleToy;