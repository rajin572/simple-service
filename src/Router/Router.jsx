import { createBrowserRouter } from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import MainRoute from "../MainRoute";
import Services from "../Services";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <MainRoute/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/service',
                element: <Services/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    }
])