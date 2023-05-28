import React, { useContext } from "react";
import bannerImage from "../../../src/Assets/banner.jpg";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";

const Banner = () => {
  const { user } = useContext(authContext);
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="p-16">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_msdmfngy.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="mt-56 text-start">
            <h1 id="title" className="text-6xl font-extrabold">
              Unleash Secure Freedom <br /> with Shieldpass
              <br />
            </h1>
            <p className="mt-8 font-bold text-2xl">
              Your Trusted Password Manager
            </p>
            <div className="mt-10">
              {user?.uid ? (
                <>
                  <Link to={"/"}>
                    <button className="bg-blue-700 text-white px-10 rounded text-lg font-bold py-4">
                      Get started
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button className="bg-blue-700 text-white px-10 rounded text-lg font-bold py-4">
                      Get started
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
