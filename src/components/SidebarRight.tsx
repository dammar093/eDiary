import React from "react";
import Suggestions from "./Suggestions";
import SidebarRightTopProfile from "./SidebarRightTopProfile";
import { users, user } from "@/data/data";
const SidebarRight = () => {
  return (
    <div className="w-full ">
      <SidebarRightTopProfile user={user} />
      <section>
        <Suggestions />
        <div className="mt-2">
          {users.map((user) => {
            return <SidebarRightTopProfile user={user} key={user.id} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default SidebarRight;
