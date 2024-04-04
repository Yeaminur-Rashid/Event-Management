import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import Register from "../pages/Register/Register";
import Service from "../pages/Service/Service";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,

        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>fetch('/services.json')
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
                path: '/blog',
                element: <PrivateRoute>
                    <Blog></Blog>
                </PrivateRoute>,
            },

            {
                path: '/service/:id',
                element: <PrivateRoute>
                    <Service></Service>
                </PrivateRoute>,
                loader: () =>fetch('/services.json')
            },
            {
                path: '/about',
                element: <PrivateRoute>
                    <About></About>
                </PrivateRoute>
            },
            
        ] 
       
    }
])

export default router;