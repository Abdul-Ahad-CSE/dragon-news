import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

export default function Navbar() {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("user trying to logout");
    logOut()
      .then(() => {
        alert("You logged out succesfully")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/carrer">Carrer</NavLink>
      </div>
      <div className="login-btn flex gap-3 items-center">
        <img className="w-12 rounded-full" src={user ? user.photoURL : userIcon} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="btn btn-primary p-3 px-10">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}
