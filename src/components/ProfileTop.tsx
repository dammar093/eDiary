import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { PiDotBold } from "react-icons/pi";
import Profile from "./Profile";

const ProfileTop = ({
  fn1
}: {
  fn1: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <Profile />
        <span className="text-gray-600">
          <PiDotBold />
        </span>
        <button className="font-semibold text-blue-600 hover:text-gray-600">
          Follow
        </button>
      </div>
      <div>
        <button
          className="text-gray-600 font-medium text-3xl"
          onClick={() => fn1(true)}
        >
          <BiDotsHorizontalRounded />
        </button>
      </div>
    </div>
  );
};

export default ProfileTop;
