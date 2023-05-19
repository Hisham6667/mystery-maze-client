import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FcGoogle, FcHighPriority, FcOk } from "react-icons/fc";

const Login = () => {
    const { signUser, loading, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (loading) {
        return <div className='h-96 flex justify-center items-center'>
            <progress className='progress progress-error w-48'></progress>
        </div>
    }

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        setError('')
        setSuccess('')

        signUser(email, pass)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                setSuccess('Profile login successful')
                form.reset();
                navigate(from, {replace:true})
            })
            .catch(error => setError(error.message))
    }
    
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                setSuccess('Google login successful')
                navigate(from, {replace:true})
            })
            .catch(error => setError(error.message))
    }

    return (
        <div className="w-full">
            <form onSubmit={handleLogin} className="w-2/3 md:w-1/3 mx-auto py-10 px-5 shadow-md border-t-red-500 border-t rounded-xl" data-aos="zoom-in">
                <div className='w-full mb-5'>
                    <p className='text-red-500 text-4xl text-center font-medium'>Login Now !</p>
                </div>
                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text text-xl">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Type Your Email" className="input focus:outline-none focus:bg-red-100/30" required />
                </div>
                <div className="form-control mb-8">
                    <label className="label">
                        <span className="label-text text-xl">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Type Your Password" className="input focus:outline-none focus:bg-red-100/30" required />
                </div>

                {success && <div className='text-center text-success mb-4 flex justify-center items-center'>
                    <FcOk className='mr-3 text-xl' />{success}
                </div>}
                {error && <div className='text-center text-error mb-4 flex justify-center items-center'>
                    <FcHighPriority className='mr-3 text-xl' />{error}
                </div>}

                <div className="form-control mb-5">
                    <button type='submit' className="border border-red-500 p-3 rounded-xl text-xl hover:border-white hover:bg-red-500 hover:text-white transition-all active:border-red-500 active:bg-white active:text-black">Login</button>
                </div>

                <div className='text-center mb-5'>OR</div>
                <div className="form-control">
                    <button onClick={handleGoogleLogin} className="border border-blue-500 p-3 rounded-xl text-xl hover:border-white hover:bg-blue-500 hover:text-white transition-all active:border-blue-500 active:bg-white active:text-black flex items-center justify-center mb-6">Sign in with <FcGoogle className='text-xl ml-3' /></button>
                </div>

                <div className='text-center'>
                    New here? <Link to='/register' className='text-red-500'>Register</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;