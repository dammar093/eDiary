import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogOut } from "react-icons/io5";
import { Users } from "@/data/data";

const SidebarRightTopProfile = ({ user }: { user: Users }) => {
  return (
    <div className="flex justify-between items-center mt-2">
      <Link href={"profile"}>
        <div className="flex items-center gap-1">
          <div className="w-12 h-12 rounded-full border ">
            <Image
              className="h-full w-full rounded-full"
              src={user.profile}
              alt="profile"
              loading="lazy"
            />
          </div>
          <div className="text-gray-600 text-sm">
            <p className="font-medium">{user.username}</p>
            <p>{user.fullName}</p>
          </div>
        </div>
      </Link>
      <div>
        {user.isLogedIn ? (
          <button className="bg-blue-600 px-4 py-1 rounded text-white font-medium flex gap-1 items-center">
            <IoLogOut className="text-xl" /> <span>Logout</span>
          </button>
        ) : (
          <button className="text-blue-500 hover:text-gray-600 text-sm font-medium">
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default SidebarRightTopProfile;
