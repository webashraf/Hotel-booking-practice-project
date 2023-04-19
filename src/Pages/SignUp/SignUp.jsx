import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [err, setErr] = useState("");

    const handleRegisterForm = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if (password !== confirm) {
            setErr("Password did not mathced!!!")
            return;
        }
        else if(password.length < 8 || confirm.length < 8){
            setErr("Password must be minimum 8 carecter")
            console.log(email, password, confirm);
            return;
        }




        // form.reset()
    }



    return (
        <div className='w-3/4 mx-auto'>
            <div className="hero min-h-screen bg-base-200 px-5 rounded-lg my-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className='text-orange-300'>{err}</p>
                        <p >All ready have an account? <Link className="btn btn-link" to={"/login"}>Log In now</Link></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-9">
                        <form onSubmit={handleRegisterForm} className="card-body py-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm password</span>
                                </label>
                                <input type="password" name='confirm' required placeholder="confirm password" className="input input-bordered" />
                            </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                                <button className="btn btn-outline mx-8 ">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;