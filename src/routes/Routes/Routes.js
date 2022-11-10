import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Blog from "../../pages/Blog/Blog/Blog";
import Error from "../../pages/Error/Error/Error";
import Register from "../../pages/Login/Register/Register";
import Login from "../../pages/Login/Login/Login";
import Services from "../../pages/Services/Services/Services";
import ServicePage from "../../pages/Services/ServicePage/ServicePage";
import MyReviews from "../../pages/MyReviews/MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyReviewUpdate from "../../pages/MyReviews/MyReviewUpdate/MyReviewUpdate";
import AddService from "../../pages/Services/AddService/AddService";

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
                element: <ServicePage></ServicePage>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/my_reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/my_reviews/:id',
                element: <PrivateRoute><MyReviewUpdate></MyReviewUpdate></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/my_reviews/${params.id}`)
            },
            {
                path: '/add_service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>

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