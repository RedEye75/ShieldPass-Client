import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";
import noUser from "../../../src/Assets/no user.png";

const Header = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <header id="title" class="bg-[#96b6fa] text-white font-bold body-font">
        <div class="container max-w-screen-xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            class="flex title-font font-medium items-center  mb-4 md:mb-0"
          >
            <span id="title" class="ml-3 font-extrabold text-4xl">
              ShieldPass
            </span>
          </Link>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {user ? (
              <>
                <NavLink to={"/"} className="mr-5">
                  Home
                </NavLink>
                <NavLink to={"/about"} className="mr-5">
                  About
                </NavLink>
                <NavLink to={"/dashboard"} className="mr-5">
                  Dashboard
                </NavLink>
                {/* <NavLink className="mr-5">
                  <div className="dropdown">
                    <label tabIndex={0} className=" m-1">
                      Dashboard
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-[#f5a623] rounded-box w-52"
                    >
                      <li>
                        <NavLink to={"/dashboard/addPassword"}>
                          Add Password
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/dashboard/myPasswords"}>
                          My Passes
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </NavLink> */}

                <NavLink to={"/contact"} className="mr-5">
                  Contact
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to={"/"} className="mr-5">
                  Home
                </NavLink>
                <NavLink to={"/about"} className="mr-5">
                  About
                </NavLink>

                <NavLink to={"/contact"} className="mr-5">
                  Contact
                </NavLink>
              </>
            )}
          </nav>

          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className=" m-1">
              {user?.uid ? (
                <>
                  <div className="avatar">
                    <div className="w-12 ring ring-primary ring-offset-base-100 ring-offset-2 h-12 rounded-full">
                      <img alt="userProfile" src={user?.photoURL} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="avatar">
                    <div className="w-12 h-12 ring ring-primary ring-offset-base-100 ring-offset-2 rounded-full">
                      <img alt="userProfile" src={noUser} />
                    </div>
                  </div>
                </>
              )}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-[#f5a623] rounded w-52"
            >
              {user ? (
                <>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to={"/login"}>Login</NavLink>
                  </li>

                  <li>
                    <NavLink to={"/register"}>Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
