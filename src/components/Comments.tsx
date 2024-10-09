import React from "react";
import Profile from "./Profile";
import { user } from "@/data/data";

const Comments = () => {
  return (
    <div className="flex items-center gap-2">
      <Profile author={user} />
      <span className="text-gray-600 text-sm">Nice❤️</span>
    </div>
  );
};

export default Comments;
