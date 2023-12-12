import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogout=()=>{
      logOut()
      .then(()=>{

      })
      .catch(error=>console.log(error))
  }
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Books</Link>
      </li>
      <li>
        <Link>About Us</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
      <li>
        <Link>Privacy&Policy</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">Booklet</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn"><FaCartPlus/></Link>
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
     
      
      </div>
    </div>
  );
};

export default Navbar;
