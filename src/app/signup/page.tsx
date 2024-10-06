"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="w-full h-screen bg-[#f6f6f6] flex items-center justify-center">
      <div className="bg-sky-400 w-full md:w-[500px] p-4 md:p-10 rounded-lg">
        <h2 className="text-2xl font-semibold text-center  text-[#fff]">
          Register
        </h2>
        <form className="mt-10 w-full">
          <div className="w-full">
            <input
              className="w-full px-4 py-2 rounded"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="w-full mt-2 flex">
            <input
              className="w-[90%] px-4 py-2 rounded-tl rounded-bl"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your email password"
            />
            <button
              type="button"
              className="w-[10%]  bg-white rounded-tr rounded-br flex justify-center items-center"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <LuEyeOff className="text-2xl transition-all" />
              ) : (
                <LuEye className="text-2xl transition-all" />
              )}
            </button>
          </div>
          <div></div>
          <div className="mt-2">
            <p>
              Already have an account{" "}
              <Link className="text-blue-800" href={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
