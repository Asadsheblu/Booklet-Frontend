import { FaCalendarAlt, FaCartPlus, FaHamburger, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css"
import useCart from "../../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Dashboard = () => {
  const {user,logOut}=useContext(AuthContext)
  const [cart]=useCart()
  const handleLogout=()=>{
      logOut()
      .then(()=>{

      })
      .catch(error=>console.log(error))
  }
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
    <div className="flex">

  <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard<FaHamburger/></label>


<div className="badge badge-secondary align-top w-10 h-10">  <Link  to="/mycart"><FaCartPlus className="w-5 h-5"/></Link> {cart?.length || 0}</div>
  </div>

  {
          
          user?<>
          <div className="avatar">
  <div className="w-10 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
          <button onClick={handleLogout} className="btn border-t-indigo-500 text-xl text-orange-400">logOut</button></>
          :
          <> <Link to="/login" className="btn border-t-indigo-500 text-xl text-orange-400">Login</Link></>
        } 




   
  
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-orange-300 text-base-content">
      {/* Sidebar content here */}
      <li><Link><FaHome/>User Home</Link></li>
            <li><Link to="mycart"><FaCalendarAlt/>Reservation</Link></li>
            <li><Link to="mycart"><FaShoppingCart/>MY Cart<small className="font-bold">{cart?.length}</small></Link></li>
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