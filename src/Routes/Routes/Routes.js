import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Checkout from "../../Pages/Checkout/Checkout/Checkout";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Register/Register/Register";
import ContentDetails from "../../Pages/Shared/ContentDetails/ContentDetails/ContentDetails";

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
                path: '/categories',
                element: <Category></Category>,
                loader: () => fetch(`http://localhost:5000/categories`)
            },

            {
                path: '/contentDetails/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/contentDetails/${params.id}`)
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
                    return fetch(`http://localhost:5000/contentDetails/${params.id}`)
                },
                element: <Checkout></Checkout>
            },

        ]
    },
    {
        path: '*',
        element: <div className='text-center fs-1 fw-bolder mt-3 text-danger'>This route is not found!! <br /> <br /> 404</div>
    }
])