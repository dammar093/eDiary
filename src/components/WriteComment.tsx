import React from "react";

const WriteComment = () => {
  return (
    <div className="w-full mt-1 border-b border-grey-600 py-1">
      <input
        className=" w-[90%] border-none outline-none"
        placeholder="Add a comment"
      />
      <button className="text-blue-600 font-medium">Post</button>
    </div>
  );
};

export default WriteComment;
