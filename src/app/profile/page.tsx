import Sidebar from "@/components/Sidebar";
import React from "react";

const Profile = () => {
  return (
    <section>
      <main>
        <section className="w-[20%] fixed top-0 hidden md:block">
          <Sidebar />
        </section>
        <section className="w-full md:w-[80%] h-screen md:ml-[20%] overflow-y-scroll scroll-smooth">
          <div className=" items-center h-[90vh] mt-[5vh]"></div>
        </section>
      </main>
    </section>
  );
};

export default Profile;
