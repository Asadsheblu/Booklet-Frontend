import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css"



const Dashboard = () => {
    return (
      //   <div className="drawer lg:drawer-open">
      //   <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      //   <div className="drawer-content flex flex-col">
      //     {/* Page content here */}
        
      //   <Outlet></Outlet>
      
      //     <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>
        
      //   </div> 
      //   <div className="drawer-side bg-orange-300">
      //     <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
      //     <ul className="menu p-4 w-80 min-h-full bg-orange-300 text-base-content">
      //       {/* Sidebar content here */}
            
          
      //     </ul>
        
      //   </div>
      // </div>
      <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
   
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-orange-300 text-base-content">
      {/* Sidebar content here */}
      <li><Link><FaHome/>User Home</Link></li>
            <li><Link to="mycart"><FaCalendarAlt/>Reservation</Link></li>
            <li><Link to="mycart"><FaShoppingCart/>MY Cart</Link></li>
            <li><Link><FaWallet/>Payment History</Link></li>
            <div className="divider"></div>
            <li><Link to="/"><FaHome/>Home</Link></li>
            <li><Link to="/products"><FaShoppingCart/>Shop</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;