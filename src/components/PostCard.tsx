import React from "react";
import Image from "next/image";
import LikeComment from "./LikeComment";
import WriteComment from "./WriteComment";
import { Posts } from "@/data/data";
import { useDispatch } from "react-redux";
import { setPopUpPost } from "@/features/utils";
import { setPostById } from "@/features/posts";
const PostCard = ({ post }: { post: Posts }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" border border-gray-400">
        <Image className="w-full h-full" src={post?.post} alt="profile" />
      </div>
      <LikeComment post={post} />
      <div className="mt-2 text-[14px] text-gray-600">{post?.caption}</div>
      <div className="mt-1 text-gray-500 text-sm">
        <span
          className="cursor-pointer"
          onClick={() => {
            dispatch(setPopUpPost(true));
            dispatch(setPostById(post));
          }}
        >
          View all 2 comments
        </span>
      </div>
      <WriteComment />
    </div>
  );
};

export default PostCard;
