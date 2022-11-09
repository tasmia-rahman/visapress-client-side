import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Courses from "../../pages/Courses/Courses/Courses";
import Blog from "../../pages/Blog/Blog/Blog";
import FAQ from "../../pages/FAQ/FAQ/FAQ";
import Error from "../../pages/Error/Error/Error";
import CourseDetail from "../../pages/Courses/CourseDetail/CourseDetail";
import Checkout from "../../pages/Checkout/Checkout/Checkout";
import Register from "../../pages/Login/Register/Register";
import Login from "../../pages/Login/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <Courses></Courses>
            },
            {
                path: '/services/:id',
                element: <CourseDetail></CourseDetail>
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