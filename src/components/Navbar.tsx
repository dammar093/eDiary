import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="h-16 w-full bg-sky-400 flex items-center px-8 md:px-20">
      <div>
        <div>
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
