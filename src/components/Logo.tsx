import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link className="text-3xl font-semibold text-white" href={"/"}>
        E-Diary
      </Link>
    </div>
  );
};

export default Logo;
