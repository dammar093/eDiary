import React from "react";

const Suggestions = () => {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between text-gray-600 font-medium">
        <span>Suggested for you</span>{" "}
        <button className="hover:text-blue-600">See All</button>
      </div>
    </div>
  );
};

export default Suggestions;
