import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const UserProfile = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="card w-96 bg-base-100 shadow-xl justify-center">
         <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={user?.profile_url} alt="Avatar Tailwind CSS Component" />
        </div>
      </div>
        <div className="card-body">
          <h2 className="card-title">Name: {user?.displayName}</h2>
          <p>{user?.phoneNumber}</p>
          
        </div>
      </div>
    );
};

export default UserProfile;