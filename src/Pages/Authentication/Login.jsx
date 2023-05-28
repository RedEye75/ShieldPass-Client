import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { authContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { userSignIn, signInWithGoogle } = useContext(authContext);

  const [error, setError] = useState();
  const [loginEmail, setLoginEmail] = useState("");

  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log(data);

    setError(" ");
    userSignIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setLoginEmail(data.email);
        toast.success("Log In Successful");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
      .then((r) => {
        const user = r.user;
        console.log(user);
        toast.success("Sign Up Successfully");

        navigate("/");
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className=" min-h-screen  items-center">
      <section className="max-w-screen-lg  mt-5 mx-auto ">
        <div className=" h-full text-gray-800">
          <h2 id="title" className="text-4xl font-bold">
            Sign In
          </h2>
          <p className="font-bold mt-2">
            Shield your passwords, login to Shieldpass
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_UW8DlCRljO.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
            <div className="mt-20">
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="mb-6">
                  <input
                    {...register("email")}
                    type="text"
                    className="block w-full px-5  py-3 border rounded border-[#263A29]"
                    required
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-6">
                  <input
                    {...register("password")}
                    type="password"
                    className="block w-full px-5  py-3 border rounded border-[#263A29]"
                    required
                    placeholder="Password"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full btn btn-outline rounded-none py-3 font-bold bg-[#263A29] text-white"
                  >
                    Login
                  </button>
                  {error && <p className="text-red-600">{error}</p>}
                </div>{" "}
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm text-center font-semibold mt-2 pt-1 mb-0">
                    You don't have any Account ?
                    <Link
                      to={"/register"}
                      className="text-red-600 ml-5 hover:text-green-700 focus:text-green-700 transition duration-200 ease-in-out"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>{" "}
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline w-full  font-bold rounded-none "
                >
                  Continue with Google <FcGoogle className="text-xl ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
