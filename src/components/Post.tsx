import React from "react";
import profile from "@/public/profile.jpg";
import { LuDot } from "react-icons/lu";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import PostCard from "./PostCard";
import Profile from "./Profile";

const Post = ({
  fn,
  fn1
}: {
  fn: React.Dispatch<React.SetStateAction<boolean>>;
  fn1: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Profile />
          <span>
            <LuDot />
          </span>
          <span className="text-gray-600 text-sm">
            {new Date().getMinutes()}m
          </span>
          <span>
            <LuDot />
          </span>
          <button className="text-blue-600 font-medium hover:text-gray-600">
            Follow
          </button>
        </div>
        <div>
          <button
            className="font-medium text-gray-600 text-xl"
            onClick={() => fn1(true)}
          >
            <BiDotsHorizontalRounded />
          </button>
        </div>
      </div>
      <div className="w-full  mt-3">
        <PostCard file={profile} fn={fn} />
      </div>
    </section>
  );
};

export default Post;
