import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Main = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className='h-96 flex justify-center items-center'>
            <progress className='progress progress-error w-48'></progress>
        </div>
    }
    return (
        <div className='xl:container mx-auto my-2'>
            <Navbar></Navbar>
            <div className='min-h-screen my-10'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;