import { Outlet } from "react-router-dom";
import Footer from "../Routes/Shared/Footer";
import CopyRight from "../Routes/Shared/CopyRight";
import Navbar from "../Routes/Shared/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet>

            </Outlet>
            <Footer/>
            <CopyRight/>
        </div>
    );
};

export default Main;