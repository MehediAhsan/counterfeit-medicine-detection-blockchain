import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Manufacturer from "../components/Manufacturer";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/manufacturer',
                element: <Manufacturer></Manufacturer>
            },
        ]
    }
])