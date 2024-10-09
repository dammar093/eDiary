"use client";
import Feeds from "@/components/Feeds";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import PostPopUp from "@/components/PostPopUp";
import Story from "@/components/Story";
import SidebarRight from "@/components/SidebarRight";
import PopUpMenu from "@/components/PopUpMenu";

const Feed = () => {
  const [popUpPost, setPopUpPost] = useState(false);
  const [popUpMenu, setPopUpMenu] = useState(false);
  return (
    <section className={``}>
      <main className="flex justify-between relative">
        <section className="w-[20%] fixed top-0 hidden md:block">
          <Sidebar />
        </section>
        <div className=" w-full md:w-[50%] px-1 md:px-2 md:ml-[20%]">
          <section>
            <Story />
          </section>
          <section className=" w-full md:w-[80%] mx-auto mb-10">
            <Feeds fn={setPopUpPost} fn1={setPopUpMenu} />
          </section>
        </div>
        <section className="w-[30%] hidden md:block h-screen p-2">
          <SidebarRight />
        </section>
        {popUpPost && (
          <section className="w-full fixed bg-[#00000080] top-0 bottom-0 left-0 right-0 h-screen flex justify-center items-center">
            <button
              className="absolute top-2 right-2 md:top-8 md:right-8 text-[#fff] text-3xl font-bold"
              onClick={() => setPopUpPost(false)}
            >
              <RxCross2 />
            </button>
            <PostPopUp fn={setPopUpPost} fn1={setPopUpMenu} />
          </section>
        )}
        {popUpMenu && (
          <section className="w-full fixed bg-[#00000080] top-0 bottom-0 left-0 right-0 h-screen flex justify-center items-center transition-all delay-75">
            <PopUpMenu fn1={setPopUpMenu} />
          </section>
        )}
      </main>
    </section>
  );
};

export default Feed;
