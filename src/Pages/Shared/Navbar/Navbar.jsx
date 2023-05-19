import logo from '../../../assets/images/logo.png';
import userPic from '../../../assets/images/user.png';
import { AiOutlineExport, AiOutlineImport, AiOutlineMenu } from "react-icons/ai";
import ActiveLink from './ActiveLink';

const Navbar = () => {

    const navLink1 = <ActiveLink to='/'>Home</ActiveLink>
    const navLink2 = <ActiveLink to='/blogs'>Blogs</ActiveLink>
    const navLink3 = <ActiveLink to='/alltoys'>All Toys</ActiveLink>
    const navLink4 = <ActiveLink to='/mytoys'>My Toys</ActiveLink>
    const navLink5 = <ActiveLink to='/addatoy'>Add a Toy</ActiveLink>
    const navLink6 = <ActiveLink to='/login'>Login</ActiveLink>

    // const user = "hisham"
    const user = null
    return (
        <div className="navbar flex justify-between border-4">

            <div className='flex justify-around items-center'>
                <img className='w-10 lg:w-14 border border-red-400 rounded-full shadow mr-5 p-1' src={logo} alt="" />
                <p className='text-xl lg:text-3xl'><span className='text-red-500'>M</span>ystery <span className='text-red-500'>M</span>aze</p>
            </div>

            <div className='tooltip tooltip-error tooltip-bottom' data-tip={user ? "Hisham" : 'No user'}>
                <img className='w-10 lg:w-14 border border-red-400 rounded-full shadow p-1' src={user ? userPic : logo} alt="" />
            </div>

            <div className="hidden lg:flex">
                <span className='mx-1 p-2 hover:bg-red-500 hover:text-white transition-all rounded-xl active:bg-white active:text-black active:border active:border-red-500 active:p-1'>{navLink1}</span>
                <span className='mx-1 p-2 hover:bg-red-500 hover:text-white transition-all rounded-xl active:bg-white active:text-black active:border active:border-red-500 active:p-1'>{navLink2}</span>
                <span className='mx-1 p-2 hover:bg-red-500 hover:text-white transition-all rounded-xl active:bg-white active:text-black active:border active:border-red-500 active:p-1'>{navLink3}</span>
                {user && <span className='mx-1 p-2 hover:bg-red-500 hover:text-white transition-all rounded-xl active:bg-white active:text-black active:border active:border-red-500 active:p-1'>{navLink4}</span>}
                {user && <span className='mx-1 p-2 hover:bg-red-500 hover:text-white transition-all rounded-xl active:bg-white active:text-black active:border active:border-red-500 active:p-1'>{navLink5}</span>}
                {user && <button className='mx-1 p-2 hover:bg-red-500 hover:text-white transition-all rounded-xl active:bg-white active:text-black active:border active:border-red-500 active:p-1 flex justify-center items-center'>Logout<AiOutlineExport/></button>}
                {!user &&<span className='mx-1 p-2 hover:bg-red-500 hover:text-white transition-all rounded-xl active:bg-white active:text-black active:border active:border-red-500 active:p-1 flex items-center'>{navLink6}<AiOutlineImport/></span>}
            </div>

            <div className="dropdown dropdown-left lg:hidden">
                <label tabIndex={0} className="btn btn-ghost ">
                    <AiOutlineMenu className='text-red-400 text-xl' />
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>{navLink1}</li>
                    <li>{navLink2}</li>
                    <li>{navLink3}</li>
                    {user && <li>{navLink4}</li>}
                    {user && <li>{navLink5}</li>}
                    {user && <li><button className='flex justify-center items-center'>Logout<AiOutlineExport/></button></li>}
                    {!user &&<li>{navLink6}</li>}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;