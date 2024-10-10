import React from "react";
import WriteComment from "./WriteComment";
import LikeComment from "./LikeComment";
import Profile from "./Profile";
import ProfileTop from "./ProfileTop";
import Image from "next/image";
import style from "@/components/Story.module.css";
import Comments from "./Comments";
import { useSelector } from "react-redux";
import { Comments as Comment } from "@/data/data";
import { RootState } from "@reduxjs/toolkit/query";
const PostPopUp = () => {
  const { post } = useSelector((state: RootState<Post>) => state.posts);
  return (
    <div className="w-full md:w-[70%] bg-white md:h-[500px] flex justify-between flex-wrap">
      <div className="hidden md:block w-[40%] h-[500px]">
        <Image
          className="w-full h-[500px] object-cover"
          src={post.post}
          alt="feed"
        />
      </div>
      <div className="w-full md:w-[60%] p-2">
        <ProfileTop author={post?.author} />
        <hr />
        <div
          className={`h-fit md:h-[333px] overflow-y-scroll scroll-smooth ${style.example}`}
        >
          <div className="mt-2">
            <div>
              <Profile author={post?.author} />
            </div>
            <div className="text-gray-600 text-sm pl-14 text-justify">
              {post?.caption}
            </div>
          </div>
          <div className="mt-1">
            {post?.comments.map((comment: Comment) => (
              <Comments comment={comment} key={comment.id} />
            ))}
          </div>
        </div>
        <div className="border-t border-b border-gray-600 p-1">
          <LikeComment post={post} />
        </div>
        <div>
          <WriteComment />
        </div>
      </div>
    </div>
  );
};

export default PostPopUp;
