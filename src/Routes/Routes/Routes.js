import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Checkout from "../../Pages/Checkout/Checkout/Checkout";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Register/Register/Register";
import ContentDetails from "../../Pages/Shared/ContentDetails/ContentDetails/ContentDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Category></Category>
            },
            {
                path: '/categories',
                element: <Category></Category>,
                loader: () => fetch(`https://learning-hour-server.vercel.app/categories`)
            },

            {
                path: '/contentDetails/:id',
                loader: async ({ params }) => {
                    return fetch(`https://learning-hour-server.vercel.app/contentDetails/${params.id}`)
                },
                element: <ContentDetails></ContentDetails>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                loader: async ({ params }) => {
                    return fetch(`https://learning-hour-server.vercel.app/contentDetails/${params.id}`)
                },
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },

        ]
    },
    {
        path: '*',
        element: <div className='text-center fs-1 fw-bolder mt-3 text-danger'>This route is not found!! <br /> <br /> 404</div>
    }
])