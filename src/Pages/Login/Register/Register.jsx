import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FcHighPriority } from "react-icons/fc";
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, loading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (loading) {
        return <div className='h-96 flex justify-center items-center'>
            <progress className='progress progress-error w-48'></progress>
        </div>
    }

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        const url = form.url.value;
        setError('')
        console.log(name, email, pass, url);

        // validation
        if (name.length < 4) {
            setError('Your name should be 4 characters');
            return Swal.fire({
                icon: 'error',
                title: 'Your name should be 4 characters',
                showConfirmButton: false,
                timer: 2000
            })
        }
        if (pass.length < 6) {
            setError('Your pass should be at least 6 characters');
            return Swal.fire({
                icon: 'error',
                title: 'Your pass should be at least 6 characters',
                showConfirmButton: false,
                timer: 2000
            })
        }


        createUser(email, pass)
            .then(result => {
                const user = result.user;
                setError('')
                const loggedUser = { email: user.email }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // jwt token
                        localStorage.setItem('toy-access-token', data.token)
                        form.reset();
                        Swal.fire({
                            icon: 'success',
                            title: 'Profile creation successful',
                            showConfirmButton: false,
                            timer: 2000
                        })
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: (error.message),
                    showConfirmButton: false,
                    timer: 2000
                })
                setError(error.message)
            })
    }

    return (
        <div className="w-full">
            <form onSubmit={handleRegister} className="w-2/3 md:w-1/3 mx-auto py-10 px-5 shadow-md border-t-red-500 border-t rounded-xl" data-aos="zoom-in">

                <div className='w-full mb-5'>
                    <p className='text-red-500 text-4xl text-center font-medium'>Register Now !</p>
                </div>

                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text text-xl">Username</span>
                    </label>
                    <input type="text" name='name' placeholder="Type Your Name" className="input focus:outline-none focus:bg-red-100/30" required />
                </div>

                <div className="form-control mb-5{}">
                    <label className="label">
                        <span className="label-text text-xl">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Type Your Email" className="input focus:outline-none focus:bg-red-100/30" required />
                </div>

                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text text-xl">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Type Your Password" className="input focus:outline-none focus:bg-red-100/30" required />
                </div>

                <div className="form-control mb-8">
                    <label className="label">
                        <span className="label-text text-xl">Photo url</span>
                    </label>
                    <input type="url" name='url' placeholder="Type Your photo url" className="input focus:outline-none focus:bg-red-100/30" required />
                </div>

                {error && <div className='text-center text-error mb-4 flex justify-center items-center'>
                    <FcHighPriority className='mr-3 text-xl' />{error}
                </div>}

                <div className="form-control mb-5">
                    <button type='submit' className="border border-red-500 p-3 rounded-xl text-xl hover:border-white hover:bg-red-500 hover:text-white transition-all active:border-red-500 active:bg-white active:text-black">Register</button>
                </div>

                <div className='text-center mb-5'>OR</div>

                <div className='text-center'>
                    Already a user? <Link to='/login' className='text-red-500'>Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;