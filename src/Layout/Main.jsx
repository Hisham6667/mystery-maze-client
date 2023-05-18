import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className='xl:container mx-auto my-3'>
            
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;