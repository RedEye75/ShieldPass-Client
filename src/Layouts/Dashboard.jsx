import React from "react";
import Header from "../Shared/Header/Header";
import { NavLink, Outlet } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsDatabaseFillAdd } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 space-y-2 border-r border-black text-base-content">
            <li id="title " className="font-bold">
              <NavLink to={"/dashboard/addPassword"}>
                <BsDatabaseFillAdd />
                Add Password
              </NavLink>
            </li>
            <li id="title " className="font-bold">
              <NavLink to={"/dashboard/myPasswords"}>
                <RiLockPasswordFill />
                My Passes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
