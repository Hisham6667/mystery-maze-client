import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <div>home</div>
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
                element: <div>login</div>
            },
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])
    

export default router;