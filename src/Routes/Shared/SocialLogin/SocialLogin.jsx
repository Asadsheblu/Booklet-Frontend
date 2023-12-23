import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext)
    const navigate=useNavigate();
    const location=useLocation();
  const from = location.state?.from?.pathname || "/";
    const handelGoogleSignIn=()=>{
            googleSignIn()
            .then(result=>{
                const loggedInUser=result.loggedInUser
                console.log(loggedInUser);
                const saveUser={name:loggedInUser.displayName,email:loggedInUser.email}
                fetch("http://localhost:5000/users",
                {
                 method:"POST",
                 headers:{
                   "content-type":"application/json"
                 },
                 body:JSON.stringify(saveUser)
                })
                .then(res=>res.json())
                .then(()=>{
                    
                })  
           
                navigate(from, { replace: true });
          
            })
        }
    return (
        <div className="w-full text-center">
            <div className="divider">OR</div>
            <button onClick={()=>handelGoogleSignIn()} className="btn btn-circle btn-outline">
            <FcGoogle />
</button>
        </div>
    );
};

export default SocialLogin;