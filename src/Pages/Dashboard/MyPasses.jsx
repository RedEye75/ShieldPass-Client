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
        <div class="grid lg:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto min-h-screen">
          <div className="lg:w-2/3  mx-auto lg:mt-0 mt-52">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_jmtf164z.json"
              speed="1"
              loop
              autoplay
              background="transparent"
            ></lottie-player>
          </div>
          <div class="lg:mt-48 mt-10 rounded-xl">
            <div class="grid lg:grid-cols-2 gap-5 grid-cols-1 mb-10 mt-10">
              {myPasswords.map((password) => {
                return (
                  <div className="border border-blue-400 p-7 bg-blue-50">
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
              {myPasswords.length === 0 && (
                <>
                  <p className="text-3xl font-bold text-red-700">
                    You have no saved passes.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default MyPasses;
