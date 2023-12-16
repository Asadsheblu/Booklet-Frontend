import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext)
    const navigate=useNavigate();
//     const location=useLocation();
//   const from = location.state?.from?.pathname || "/";
    const handelGoogleSignIn=()=>{
            googleSignIn()
            .then(result=>{
                const loggedInUser=result.loggedInUser
                console.log(loggedInUser);
                
            });
         
           
           
           navigate("/")
    }
    return (
        <div className="w-full text-center">
            <div className="divider">OR</div>
            <button onClick={handelGoogleSignIn} className="btn btn-circle btn-outline">
            <FcGoogle />
</button>
        </div>
    );
};

export default SocialLogin;