import { Link } from 'react-router-dom';
import logo from './../../assets/error.png'

const Error = () => {
    return (
        <div className='flex justify-center items-center w-1/2 mx-auto min-h-screen'>
            <img className='w-full' src={logo} />
            <div className='flex flex-col'>
                <p className='text-8xl font-bold text-center mb-4 text-red-500'>404</p>
                <p className='text-2xl text-slate-700 text-justify mb-5'>The page you are trying to access is not available</p>
                <Link to='/' className='btn bg-blue-500 mx-auto  border-none hover:bg-blue-600'>Back to home</Link>
            </div>
        </div>
    );
};

export default Error;