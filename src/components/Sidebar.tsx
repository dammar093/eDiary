"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo1 from "@/public/logo1.png";
import profile from "@/public/profile.jpg";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className=" h-screen shadow-lg border-r border-gray-400 px-2 md:px-4">
      <aside className="">
        <div className="flex justify-center">
          <Link className="mt-6" href={"/feed"}>
            <Image width={120} src={logo1} alt="logo" />
          </Link>
        </div>
        <div className="mt-10">
          <Link href={"/feed"}>
            <div
              className={` ${
                pathname === "/feed" ? "bg-[#80808043]" : "bg-transparent"
              }  hover:bg-[#80808043] p-2 rounded flex items-center gap-2 md:px-2 text-xl  text-gray-600 font-medium`}
            >
              <svg
                aria-label="Home"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
              <span>Home</span>
            </div>
          </Link>
          <Link href={"/search"}>
            <div
              className={` ${
                pathname === "/search" ? "bg-[#80808043]" : "bg-transparent"
              }  hover:bg-[#80808043] p-2 rounded flex items-center gap-2 md:px-2 text-xl  text-gray-600 font-medium mt-2`}
            >
              <svg
                aria-label="Search"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="16.511"
                  x2="22"
                  y1="16.511"
                  y2="22"
                ></line>
              </svg>
              <span>Search</span>
            </div>
          </Link>
          <Link href={"/explore"}>
            <div
              className={` ${
                pathname === "/explore" ? "bg-[#80808043]" : "bg-transparent"
              }  hover:bg-[#80808043] p-2 rounded flex items-center gap-2 md:px-2 text-xl  text-gray-600 font-medium mt-2`}
            >
              <svg
                aria-label="Explore"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <polygon
                  fill="none"
                  points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
                <polygon
                  fill-rule="evenodd"
                  points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                ></polygon>
                <circle
                  cx="12.001"
                  cy="12.005"
                  fill="none"
                  r="10.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
              </svg>
              <span>Explore</span>
            </div>
          </Link>
          <Link href={"/reels"}>
            <div
              className={` ${
                pathname === "/search" ? "bg-[#80808043]" : "bg-transparent"
              }  hover:bg-[#80808043] p-2 rounded flex items-center gap-2 md:px-2 text-xl  text-gray-600 font-medium mt-2`}
            >
              <svg
                aria-label="Reels"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="m12.823 1 2.974 5.002h-5.58l-2.65-4.971c.206-.013.419-.022.642-.027L8.55 1Zm2.327 0h.298c3.06 0 4.468.754 5.64 1.887a6.007 6.007 0 0 1 1.596 2.82l.07.295h-4.629L15.15 1Zm-9.667.377L7.95 6.002H1.244a6.01 6.01 0 0 1 3.942-4.53Zm9.735 12.834-4.545-2.624a.909.909 0 0 0-1.356.668l-.008.12v5.248a.91.91 0 0 0 1.255.84l.109-.053 4.545-2.624a.909.909 0 0 0 .1-1.507l-.1-.068-4.545-2.624Zm-14.2-6.209h21.964l.015.36.003.189v6.899c0 3.061-.755 4.469-1.888 5.64-1.151 1.114-2.5 1.856-5.33 1.909l-.334.003H8.551c-3.06 0-4.467-.755-5.64-1.889-1.114-1.15-1.854-2.498-1.908-5.33L1 15.45V8.551l.003-.189Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span>Reels</span>
            </div>
          </Link>
          <Link href={"/inbox"}>
            <div
              className={` ${
                pathname === "/inbox" ? "bg-[#80808043]" : "bg-transparent"
              }  hover:bg-[#80808043] p-2 rounded flex items-center gap-2 md:px-2 text-xl  text-gray-600 font-medium mt-2`}
            >
              <svg
                aria-label="Messenger"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="1.739"
                ></path>
                <path
                  d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span>Messages</span>
            </div>
          </Link>
          <Link href={"/notification"}>
            <div
              className={` ${
                pathname === "/notification"
                  ? "bg-[#80808043]"
                  : "bg-transparent"
              }  hover:bg-[#80808043] p-2 rounded flex items-center gap-2 md:px-2 text-xl  text-gray-600 font-medium mt-2`}
            >
              <svg
                aria-label="Notifications"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
              </svg>
              <span>Notifications</span>
            </div>
          </Link>
          <Link bg-transparent href={"/create"}>
            <div
              className={` ${
                pathname === "/create" ? "bg-[#80808043]" : "bg-transparent"
              }  hover:bg-[#80808043] p-2 rounded flex items-center gap-2 md:px-2 text-xl  text-gray-600 font-medium mt-2`}
            >
              <svg
                aria-label="New post"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="6.545"
                  x2="17.455"
                  y1="12.001"
                  y2="12.001"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="12.003"
                  x2="12.003"
                  y1="6.545"
                  y2="17.455"
                ></line>
              </svg>
              <span>Create</span>
            </div>
          </Link>
          <Link bg-transparent href={"/profile"}>
            <div
              className={` ${
                pathname === "/profile" ? "bg-[#80808043]" : "bg-transparent"
              }  hover:bg-[#80808043] p-2 rounded flex items-center gap-2 md:px-2 text-xl  text-gray-600 font-medium mt-2`}
            >
              <div className="w-8 h-8 border-2 border-gray-600 rounded-full overflow-hidden">
                <Image src={profile} alt="profile" />
              </div>
              <span>Profile</span>
            </div>
          </Link>
        </div>
      </aside>
    </section>
  );
};

export default Sidebar;
