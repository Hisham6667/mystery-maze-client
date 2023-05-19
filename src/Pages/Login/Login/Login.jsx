import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
            <div className="w-full">
                <form className="w-2/3 md:w-1/3 mx-auto py-10 px-5 shadow-md border-t-red-500 border-t rounded-xl">
                    <div className='w-full mb-5'>
                        <p className='text-red-500 text-4xl text-center font-medium'>Login Now !</p>
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type Your Email" className="input focus:outline-none focus:bg-red-100/30" />
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-xl">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Type Your Password" className="input focus:outline-none focus:bg-red-100/30" />
                    </div>
                    <div className="form-control mb-5">
                        <button className="border border-red-500 p-3 rounded-xl text-xl hover:border-white hover:bg-red-500 hover:text-white transition-all active:border-red-500 active:bg-white active:text-black">Login</button>
                    </div>
                    <div className='text-center mb-5'>OR</div>
                    <div className="form-control">
                        <button className="border border-blue-500 p-3 rounded-xl text-xl hover:border-white hover:bg-blue-500 hover:text-white transition-all active:border-blue-500 active:bg-white active:text-black flex items-center justify-center mb-6">Sign in with <FcGoogle className='text-xl ml-3'/></button>
                    </div>
                    <div className='text-center'>
                        New here? <Link to='/register' className='text-red-500'>Register</Link>
                    </div>
                </form>
            </div>
    );
};

export default Login;