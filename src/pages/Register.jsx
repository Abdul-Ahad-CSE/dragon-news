import React from "react";
import { Link } from "react-router";

export default function Register() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register Your Account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">

            {/* Name */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />

            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* Password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center mt-3">
              Already have an account?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
