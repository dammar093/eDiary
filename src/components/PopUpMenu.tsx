import React from "react";

const PopUpMenu = ({
  fn1
}: {
  fn1: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
        onClick={() => fn1(false)}
      >
        Cancel
      </button>
    </div>
  );
};

export default PopUpMenu;
