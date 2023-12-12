import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const SignUp = () => {
  const {createUser} = useContext(AuthContext);


  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const contact = form.contact.value;

    createUser(email, password)
    .then(result=>{
        const user=result.user;
        console.log(user);
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
