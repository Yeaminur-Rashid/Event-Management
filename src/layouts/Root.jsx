import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Toaster/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;