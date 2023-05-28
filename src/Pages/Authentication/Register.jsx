import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(authContext);

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.Username.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.image.files[0];

    const formData = new FormData();
    formData.append("image", photo);

    const imageHostKey = process.env.REACT_APP_IMGBB_HOSTKEY;

    const imgURL = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(imgURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const photoURL = data?.data.display_url;
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            updateUserDetails(name, photoURL);
          })
          .catch((e) => console.log(e));
      });
  };

  const updateUserDetails = (name, photoURL) => {
    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Registration Successful");
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithGoogle(provider)
      .then((result) => {
        const user = result.user;
        toast.success("Sign Up Successfully");
        navigate("/");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <section className="max-w-screen-lg min-h-screen mb-10 mt-5 mx-auto ">
        <div className="px-6 h-full text-gray-800">
          <h2 id="title" className="text-4xl font-bold">
            Sign Up
          </h2>
          <p id="text" className="font-bold mt-2">
            Keep your passwords secure and accessible
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <lottie-player
              src="https://assets6.lottiefiles.com/private_files/lf30_m6j5igxb.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>

            <div
              // data-aos="fade-up"
              data-aos-duration="3000"
              className="mt-28"
            >
              <form onSubmit={handleRegister}>
                <div>
                  <input
                    type="text"
                    name="Username"
                    required
                    placeholder="Enter your name"
                    className="block w-full px-5  py-3 border mb-5 rounded border-[#263A29]"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    required
                    id="name"
                    placeholder="Enter your Email"
                    className="block w-full px-5  py-3 border mb-5 rounded border-[#263A29]"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    required
                    minlength="6"
                    id="name"
                    placeholder="Enter your password"
                    className="block w-full px-5  py-3 border mb-5 rounded border-[#263A29]"
                  />
                </div>
                <div>
                  <input
                    type="file"
                    name="image"
                    id="photo"
                    required
                    accept="image/*"
                    className="block w-full px-5  py-2 border mb-5 rounded border-[#263A29]"
                  />
                </div>
                <div className="flex flex-col mt-4 lg:space-y-2">
                  <button
                    type="submit"
                    className="btn btn-outline bg-[#263A29] text-white w-full mx-auto rounded-none"
                  >
                    {/* {loading ? (
                      <>
                        <div
                          aria-label="Loading..."
                          role="status"
                          class="flex items-center space-x-2"
                        >
                          <svg
                            class="h-6 w-6 animate-spin stroke-gray-500"
                            viewBox="0 0 256 256"
                          >
                            <line
                              x1="128"
                              y1="32"
                              x2="128"
                              y2="64"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="195.9"
                              y1="60.1"
                              x2="173.3"
                              y2="82.7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="224"
                              y1="128"
                              x2="192"
                              y2="128"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="195.9"
                              y1="195.9"
                              x2="173.3"
                              y2="173.3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="128"
                              y1="224"
                              x2="128"
                              y2="192"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="60.1"
                              y1="195.9"
                              x2="82.7"
                              y2="173.3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="32"
                              y1="128"
                              x2="64"
                              y2="128"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="60.1"
                              y1="60.1"
                              x2="82.7"
                              y2="82.7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                          </svg>
                          <span class="text-xs font-medium text-gray-500">
                            loading...
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <p>Sign Up</p>
                      </>
                    )} */}
                    <p>Sign Up</p>
                  </button>{" "}
                  <p className="text-sm text-center font-semibold mt-2 pt-1 mb-0">
                    Already have an Account ?
                    <Link
                      to={"/login"}
                      className="text-red-600 hover:text-green-700 focus:text-green-700 transition duration-200 ease-in-out"
                    >
                      {" "}
                      Sign In
                    </Link>
                  </p>
                </div>{" "}
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>{" "}
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline w-full  font-bold rounded-none "
                >
                  Continue with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
