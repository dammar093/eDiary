import { setPopMenu } from "@/features/utils";
import React from "react";
import { useDispatch } from "react-redux";

const PopUpMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[80%] md:w-[30%] bg-white p-2">
      <button className="text-gray-600 font-medium w-full py-2">Edit</button>
      <hr />
      {true ? (
        <button className="text-blue-600 font-medium w-full py-2">
          Follow
        </button>
      ) : (
        <button className="text-red-600 font-medium w-full py-2">
          Unfollow
        </button>
      )}
      <hr />
      <button className="text-red-600 font-medium w-full py-2">
        Delete
      </button>{" "}
      <hr />
      <button
        className="text-gray-600 font-medium w-full py-1"
        onClick={() => dispatch(setPopMenu(false))}
      >
        Cancel
      </button>
    </div>
  );
};

export default PopUpMenu;
