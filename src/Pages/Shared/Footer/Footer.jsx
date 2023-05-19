import logo from '../../../assets/images/logo.png'
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-4 flex justify-between items-center flex-col lg:flex-row border-t border-red-300">
            <div className="flex items-center">
                <img className='w-14 mr-5' src={logo} alt="" />
                <p className='text-lg lg:text-xl font-semibold'>Copyright © 2023 - All right reserved by <span className='text-red-500'>M</span>ystery <span className='text-red-500'>M</span>aze LTD.</p>
            </div>



            <div className="text-2xl flex items-center">
                <a className='text-blue-500 mx-2 bg-slate-200 p-3 rounded-lg' href="https://www.facebook.com/hisham6667/">
                    <FaFacebookF />
                </a>
                <a className='text-blue-700 mx-2 bg-slate-200 p-3 rounded-lg' href="https://www.linkedin.com/in/hishamn667/">
                    <FaLinkedinIn />
                </a>
                <a className='text-red-600 mx-2 bg-slate-200 p-3 rounded-lg' href="https://www.instagram.com/hisham.6667/">
                    <FaInstagram />
                </a>
            </div>
        </footer>
    );
};

export default Footer;