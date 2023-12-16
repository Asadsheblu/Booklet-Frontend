import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../../Routes/Shared/SocialLogin/SocialLogin';



const Login = () => {
    const [disbale,setDisable]=useState(true)
    const navigate=useNavigate();
    const location=useLocation();
  const from = location.state?.from?.pathname || "/";
    const {SignIn}=useContext(AuthContext)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value
        const password=form.password.value
        const data={email,password}
        console.log(data);
        SignIn(email,password)
       .then(result=>{
        const user=result.user;
        console.log(user);
        Swal.fire("User is Login");
        
       });
       navigate(from, { replace: true });

    }
    const handelValidateCaptcha=(e)=>{
        const captchaValue=e.target.value;
        console.log(captchaValue);
        if (validateCaptcha(captchaValue)==true) {
            setDisable(false)
        }
   
        else {
           setDisable(true)
           alert("Captcha is not Validated")
        }

    }
    return (
        <div className="container mx-auto">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered"  required/>
         
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" onBlur={handelValidateCaptcha}  name="captcha" placeholder="captcha" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
        
          <button disabled={disbale} className="btn btn-primary">Login</button>
         <p>Are You New User?<Link className='text-cyan-500' to="/signUp">Create An Account</Link></p> 
        
        </div>
      </form>
      <SocialLogin/>
    </div>
        </div>
    );
};

export default Login;