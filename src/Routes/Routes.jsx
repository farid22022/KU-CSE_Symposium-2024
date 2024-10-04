import Main from "../Layout/Main/Main";
import CP from "../Pages/CP/CP";
import Datathon from "../Pages/Datathon/Datathon";
import Home from "../Pages/Home/Home";
// import ErrorPage from "../Pages/ErrorPage";

import { createBrowserRouter } from "react-router-dom";
import PS from "../Pages/PS/PS";
import AboutUs from "../Pages/AboutUs/AboutUs";
import InnovationShowCasing from "../Pages/Showcase/InnovationShowCasing";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/datathon',
                element: <Datathon></Datathon>
            },
            {
                path: '/cp',
                element: <CP></CP>
            },
            {
                path: '/ps',
                element: <PS></PS>
            },
            {
                path: '/innovations',
                element: <InnovationShowCasing/>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            
            {
               path: '/up'
            },
            
        ]
    },
])