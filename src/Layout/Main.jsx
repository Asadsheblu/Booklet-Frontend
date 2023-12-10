import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Routes/Shared/Footer";
import CopyRight from "../Routes/Shared/CopyRight";
import Navbar from "../Routes/Shared/Navbar";

const Main = () => {
    const location=useLocation()
    const noHeaderFooter=location.pathname.includes('login')
    return (
        <div>
            {
                noHeaderFooter ||  <Navbar/>
            }
           
            <Outlet>

            </Outlet>
          {noHeaderFooter || <Footer/>}
          {noHeaderFooter || <CopyRight/>}
        </div>
    );
};

export default Main;