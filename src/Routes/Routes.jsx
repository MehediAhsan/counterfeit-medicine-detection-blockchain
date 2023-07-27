import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
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
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            }
        ]
    }
])