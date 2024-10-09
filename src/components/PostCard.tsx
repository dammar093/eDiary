import React from "react";
import Image from "next/image";
import LikeComment from "./LikeComment";
import WriteComment from "./WriteComment";
import { Posts } from "@/data/data";
const PostCard = ({
  post,
  fn
}: {
  post: Posts;
  fn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <div className=" border border-gray-400">
        <Image className="w-full h-full" src={post.post} alt="profile" />
      </div>
      <LikeComment fn={fn} isLiked={post.isLiked} />
      <div className="mt-2 text-[14px] text-gray-600">{post?.caption}</div>
      <div className="mt-1 text-gray-500 text-sm">
        <span className="cursor-pointer" onClick={() => fn(true)}>
          View all 2 comments
        </span>
      </div>
      <WriteComment />
    </div>
  );
};

export default PostCard;
