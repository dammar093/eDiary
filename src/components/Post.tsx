import React from "react";
import { LuDot } from "react-icons/lu";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import PostCard from "./PostCard";
import Profile from "./Profile";
import { Posts } from "@/data/data";
import { useDispatch } from "react-redux";
import { setPopMenu } from "@/features/utils";

const Post = ({ post }: { post: Posts }) => {
  const dispatch = useDispatch();
  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Profile author={post?.author} />
          <span>
            <LuDot />
          </span>
          <span className="text-gray-600 text-sm">
            {new Date().getMinutes()}m
          </span>
          {post?.author.isFollow && (
            <div className="flex items-center">
              {" "}
              <span>
                <LuDot />
              </span>
              <button className="text-blue-600 font-medium hover:text-gray-600">
                Follow
              </button>
            </div>
          )}
        </div>
        <div>
          <button
            className="font-medium text-gray-600 text-xl"
            onClick={() => dispatch(setPopMenu(true))}
          >
            <BiDotsHorizontalRounded />
          </button>
        </div>
      </div>
      <div className="w-full  mt-3">
        <PostCard post={post} />
      </div>
    </section>
  );
};

export default Post;
