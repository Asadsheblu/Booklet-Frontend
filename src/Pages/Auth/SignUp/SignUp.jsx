import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const SignUp = () => {
  const {createUser,userUpdate} = useContext(AuthContext);
const navigate=useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const contact = form.contact.value;
    const profile_url = form.profile_url.value;
    const data={userName,email, password,contact,profile_url}
    console.log(data);
    createUser(email, password)
    .then(result=>{
        const user=result.user;
        console.log(user);
        userUpdate(userName,profile_url)
        .then(()=>{
          const saveUser={name:data.userName,email: data.email}
           fetch("http://localhost:5000/users",
           {
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(saveUser)
           })
           .then(res=>res.json())
           .then(data=>{
            if(data.insertedId){
          Swal.fire("Profile is Updated");
            window.location.reload()  
            }
           })
            
        })
        navigate('/')
       })
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="userName"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contact No</span>
              </label>
              <input
                type="number"
                name="contact"
                placeholder="Contact No"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add profile</span>
              </label>
              <input
                type="text"
                name="profile_url"
                placeholder="profile url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
