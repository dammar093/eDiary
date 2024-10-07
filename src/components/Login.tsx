"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import mobile from "@/public/mobile.png";
import scree1 from "@/public/screen1.png";
import scree2 from "@/public/screen2.png";
import scree3 from "@/public/screen3.png";
import logo1 from "@/public/logo1.png";
import playstore from "@/public/playstore.png";
import appstoer from "@/public/appstrore.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa6";
import Link from "next/link";

const Login = () => {
  const screens = [scree1, scree2, scree3];
  const [index, setIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    const srceenInterval = setInterval(() => {
      if (index === screens.length - 1) {
        setIndex(0);
      }
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(srceenInterval);
  }, [index]);
  return (
    <section className="w-full h-screen flex justify-center md:items-center">
      <div className=" w-full md:w-[60%] flex">
        <div className="w-[385px] hidden md:block relative">
          <Image className="w-full" loading="lazy" src={mobile} alt=" mobile" />
          <div
            className={`w-full absolute top-6 left-[130px] opacity-1 transition-opacity delay-100`}
          >
            <Image
              loading="lazy"
              width={204}
              src={screens[index]}
              alt=" mobile"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="w-full  md:border md:border-gray-600 p-2 md:px-4">
            <div className="w-full flex justify-center my-10">
              <Image
                className="object-top"
                loading="lazy"
                src={logo1}
                alt="logo"
                width={200}
                height={100}
              />
            </div>
            <div>
              <form className="w-full">
                <div className="w-full">
                  <input
                    className="w-full px-2 py-2 rounded border border-gray-600 outline-none"
                    type="text"
                    placeholder="Mobile number, username or email address"
                  />
                </div>
                <div className="w-full mt-2 flex">
                  <input
                    className="w-[90%] px-2 py-2 rounded-tl rounded-bl outline-none border border-gray-600"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="w-[10%] bg-white rounded-tr rounded-br flex justify-center items-center  border border-gray-600 border-l-0 text-gray-600"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <LuEyeOff className="text-2xl transition-all" />
                    ) : (
                      <LuEye className="text-2xl transition-all" />
                    )}
                  </button>
                </div>
                <div className="w-full mt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 p-2 rounded-xl text-white font-semibold"
                  >
                    Log in
                  </button>
                </div>
                <div className="my-4 w-full flex items-center justify-between gap-2 font-semibold text-gray-600">
                  <hr className="w-[47%] border border-gray-400" /> OR{" "}
                  <hr className="w-[47%] border border-gray-400" />
                </div>
                <div className="my-2">
                  <div>
                    <Link
                      className="flex gap-2 items-center justify-center"
                      href={"#"}
                    >
                      <span className="text-2xl text-blue-600">
                        <FaFacebook />
                      </span>
                      <span className="hover:text-gray-600 text-blue-600 font-semibold">
                        Login with Facebook
                      </span>
                    </Link>
                  </div>
                  <div className="text-center text-sm text-gray-600 my-2">
                    <Link href={"#"}>Forgotten your password?</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:border md:border-gray-600 p-2 md:px-4 mt-2">
            <div className="flex justify-center gap-2 font-medium text-gray-600">
              <span>Don not have an account?</span>
              <Link
                className="text-blue-600 hover:text-gray-600"
                href={"signup"}
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="mt-2 text-center">
            <span>Get app.</span>
            <div className="flex justify-center mt-2 items-center">
              <Image width={150} src={playstore} alt="playstore" />
              <Image width={150} src={appstoer} alt="appstoer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
