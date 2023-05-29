import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/AuthProvider";
import { MdOutlinePassword } from "react-icons/md";
import Loader from "../../Shared/Loader/Loader";
const MyPasses = () => {
  const { user } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [myPasswords, setPassword] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://shieldpass.onrender.com/myPasswords/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPassword(data))
      .finally(() => {
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <body>
        <div class="grid lg:grid-cols-2 grid-cols-1  min-h-screen">
          <div>
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_z3pnisgt.json"
              speed="1"
              loop
              autoplay
              background="transparent"
            ></lottie-player>
          </div>
          <div class="mt-40  rounded-xl">
            <div id="title" class="font-bold text-start text-4xl">
              KeyVault
            </div>
            <div class="font-semibold text-start mt-3 text-xl">
              Centralized Password Management Hub
            </div>

            <div class="grid lg:grid-cols-2 gap-5 grid-cols-1 mt-10">
              {myPasswords.map((password) => {
                return (
                  <div>
                    <div className="text-start">
                      <div id="title" class="text-xl font-bold">
                        {password?.category}
                      </div>

                      <div class="text-xl  gap-2 mt-3 font-bold">
                        {/* <MdOutlinePassword /> */}
                        <p>{password?.password}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default MyPasses;
