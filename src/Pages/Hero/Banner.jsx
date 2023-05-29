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
              Unleash Secure Freedom <br /> with{" "}
              <span className="text-[#f5a623]">ShieldPass</span>
              <br />
            </h1>
            {/* <p className="mt-8 font-bold text-xl">
              Join the Shieldpass community and experience the peace of mind
              that comes with robust password protection. Take charge of your
              digital security and unlock a world of convenience without
              sacrificing safety. Shieldpass is here to shield your passwords
              and fortify your online presence.
            </p> */}
            <p className="mt-8 font-bold text-xl">
              Your Trusted Password Manager . <br /> Protecting Your Passwords,
              Preserving Your Peace
            </p>
            <div className="mt-10">
              {user?.uid ? (
                <>
                  <Link to={"/"}>
                    <button className="bg-[#1d137e] text-white px-10 rounded text-lg font-bold py-4">
                      Get started
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button className="bg-[#1d137e] text-white px-10 rounded text-lg font-bold py-4">
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
