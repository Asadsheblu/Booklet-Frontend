import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
    const [disbale,setDisable]=useState(true)
    const captchaRef=useRef(null)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handaleLogin=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value
        const password=form.password.value
        const data={email,password}
        console.log(data);

    }
    const handelValidateCaptcha=()=>{
        const captchaValue=captchaRef.current.value;
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
      <form onSubmit={handaleLogin} className="card-body">
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
          <input type="text" ref={captchaRef} name="captcha" placeholder="captcha" className="input input-bordered" required />
          <button onClick={handelValidateCaptcha}  className="btn btn-outline btn-info mt-2">Validated</button>
        </div>
        <div className="form-control mt-6">
        
          <button disabled={disbale} className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Login;