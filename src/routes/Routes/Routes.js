import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Blog from "../../pages/Blog/Blog/Blog";
import Error from "../../pages/Error/Error/Error";
import Register from "../../pages/Login/Register/Register";
import Login from "../../pages/Login/Login/Login";
import Services from "../../pages/Services/Services";
import ServiceDetail from "../../pages/Home/Services/ServiceDetail/ServiceDetail";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ServiceDetail></ServiceDetail>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])