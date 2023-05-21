import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiArrowSmallLeft } from "react-icons/hi2";

const ToyDetails = () => {
    const toy = useLoaderData();
    const { picture_url, name, seller_name, seller_email, price, rating, quantity_available, description } = toy;
    return (
        <div className="w-full mt-36 flex justify-center">
            <div className="w-4/6 flex justify-center items-center border-y-4 border-red-400 rounded-xl" data-aos="zoom-in">
                <div className="1/2">
                    <img src={picture_url} className="w-96 h-96 rounded-full" />
                </div>
                <div className="w-1/2 my-5">
                    <p className="text-center text-5xl font-bold text-red-500 mb-3">{name}</p>
                    <hr className="w-5/6 mx-auto mb-3" />
                    <p className="text-xl text-center mb-4">
                        <span className="font-semibold text">Seller:</span> {seller_name}
                    </p>
                    <div className="flex justify-between items-center w-11/12 mx-auto mb-3 text-lg">
                        <p className="flex items-center">
                            <Rating className="text-yellow-300"
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar />}
                            />
                        </p>
                        <p className="flex items-center">
                            <GoPackage /><span className="ml-1">In stock: {quantity_available} P</span>
                        </p>
                        <p className="flex items-center"><RiMoneyDollarCircleLine className="mr-1" />{price}</p>
                    </div>
                    <p className="flex flex-col justify-center items-center mb-4 w-11/12 mx-auto">
                        <span className="text-red-400 underline text-lg">Description</span>
                        <span className=" text-justify">{description}</span>
                    </p>
                    <hr className="w-5/6 mx-auto mb-3" />
                    <div className="flex justify-between items-center">
                        <p className="text-sm"><span className="font-semibold">Contact:</span> {seller_email}</p>
                        <Link to='/alltoys'>
                            <button className="btn btn-outline btn-error"><HiArrowSmallLeft />Back to alltoys</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToyDetails;