import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { PiDotBold } from "react-icons/pi";
import Profile from "./Profile";
import { Users } from "@/data/data";
import { useDispatch } from "react-redux";
import { setPopMenu } from "@/features/utils";

const ProfileTop = ({ author }: { author: Users }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <Profile author={author} />

        {author.isFollow && (
          <div className="flex items-center">
            <span className="text-gray-600">
              <PiDotBold />
            </span>
            <button className="font-semibold text-blue-600 hover:text-gray-600">
              Follow
            </button>
          </div>
        )}
      </div>
      <div>
        <button
          className="text-gray-600 font-medium text-3xl"
          onClick={() => dispatch(setPopMenu(true))}
        >
          <BiDotsHorizontalRounded />
        </button>
      </div>
    </div>
  );
};

export default ProfileTop;
