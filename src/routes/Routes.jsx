import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Layout/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <div>blogs</div>
            },
            {
                path: '/alltoys',
                element: <div>alltoys</div>
            },
            {
                path: '/mytoys',
                element: <div>mytoys</div>
            },
            {
                path: '/addatoy',
                element: <div>addatoy</div>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])
    

export default router;