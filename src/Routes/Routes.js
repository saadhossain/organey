import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Cart from "../Components/Cart/Cart";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Shop from "../Components/Shop/Shop";
import Blog from "../Components/Blog/Blog"
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/', 
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {path: '/', loader:()=> fetch('categoryshowcase.json'), element: <Home></Home>},
            {path: '/shop', element: <Shop></Shop>},
            {path: '/about', element: <About></About>},
            {path: '/cart', element: <Cart></Cart>},
            {path: '/blog', element: <Blog></Blog>}
        ]
    }
])