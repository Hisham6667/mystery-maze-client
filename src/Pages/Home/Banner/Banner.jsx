import { Link } from 'react-router-dom';
import banner from '../../../assets/images/banner.jpg';
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
    return (
        <div className="card w-3/4 h-96 mx-auto image-full mb-20">
            <figure>
                <img className='w-full' src={banner} alt="Shoes" />
            </figure>
            <div className="card-body">
                <p className='text-4xl lg:text-7xl font-bold mx-auto w-5/6'>Best <span className='text-red-500'>P</span>uzzle <span className='text-red-500'>T</span>oys for your kids</p>
                <div className='flex flex-col lg:flex-row items-center w-5/6 mx-auto'>
                    <p className='text-sm lg:text-xl text-white mx-auto mr-5'>Browse through our huge collection of board games, puzzle toys and more for your kids. Shop and play and create some memories with your little ones</p>
                    <Link className='p-1 lg:p-4 text-md lg:w-80 bg-white rounded-lg border border-red-500 text-red-500 text-center hover:bg-slate-50 transition-all flex items-center' to='/alltoys'><span className='mr-3'>Browse Toys</span><AiOutlineArrowRight/></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;