import React from "react";
import Profile from "./Profile";
import { Comments as Comment } from "@/data/data";

const Comments = ({ comment }: { comment: Comment }) => {
  return (
    <div className="flex items-center gap-2">
      <Profile author={comment.author} />

      <span className="text-gray-600 text-sm">{comment.comment}</span>
    </div>
  );
};

export default Comments;
