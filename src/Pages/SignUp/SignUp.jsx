
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";



const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        const saveUser = {name: data.name, email: data.email}
                        fetch('http://localhost:5000/users',{
                            method:'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    alert("user create successfully")

                                    navigate("/")
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    };


    return (
        <>
            <Helmet>
                <title>
                    Bistro Boss || Sign Up
                </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-700">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="photoURL" {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-700">PhotoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-700">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true, minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-700">password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-700">password must be 6 Characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-700">password must be less then 20Characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-700">password must have one upper case one logger case one number or one spicial charat</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="login" />
                            </div>
                        </form>

                        <div className='text-center'>
                            <p>Already registered? Go to log in <Link className='text-orange-700' to="/login">Login</Link></p>

                            <p>Or sign in with</p>
                        </div>
                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;