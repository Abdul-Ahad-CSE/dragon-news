import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/carrer">Carrer</NavLink>
      </div>
      <div className="login-btn flex gap-3 items-center">
        <img className="" src={user} alt="" />
        <button className="btn btn-primary p-3 px-10">Login</button>
      </div>
    </div>
  );
}
