"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import profile from "@/public/profile.jpg";
import style from "./Story.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Story = () => {
  const scrollRef: React.MutableRefObject<null> = useRef(null);
  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  return (
    <section className="w-full pt-2 relative">
      <div
        className={`w-full flex gap-2 overflow-x-scroll hide-scrollbar ${style.example} scroll-[12px]ooth`}
        ref={scrollRef}
      >
        <div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 overflow-hidden p-1 cursor-pointer ">
            <Image
              className="w-full h-full rounded-full"
              src={profile}
              alt={"profile"}
              loading="lazy"
            />
          </div>
          <div className="text-[12px] text-gray-600">dyams093</div>
        </div>
        <div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 overflow-hidden p-1 cursor-pointer ">
            <Image
              className="w-full h-full rounded-full"
              src={profile}
              alt={"profile"}
              loading="lazy"
            />
          </div>
          <div className="text-[12px] text-gray-600">dyams093</div>
        </div>
        <div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 overflow-hidden p-1 cursor-pointer ">
            <Image
              className="w-full h-full rounded-full"
              src={profile}
              alt={"profile"}
              loading="lazy"
            />
          </div>
          <div className="text-[12px] text-gray-600">dyams093</div>
        </div>
        <div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 overflow-hidden p-1 cursor-pointer ">
            <Image
              className="w-full h-full rounded-full"
              src={profile}
              alt={"profile"}
              loading="lazy"
            />
          </div>
          <div className="text-[12px] text-gray-600">dyams093</div>
        </div>
        <div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 overflow-hidden p-1 cursor-pointer ">
            <Image
              className="w-full h-full rounded-full"
              src={profile}
              alt={"profile"}
              loading="lazy"
            />
          </div>
          <div className="text-[12px] text-gray-600">dyams093</div>
        </div>
        <div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 overflow-hidden p-1 cursor-pointer ">
            <Image
              className="w-full h-full rounded-full"
              src={profile}
              alt={"profile"}
              loading="lazy"
            />
          </div>
          <div className="text-[12px] text-gray-600">dyams093</div>
        </div>
        <div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 overflow-hidden p-1 cursor-pointer ">
            <Image
              className="w-full h-full rounded-full"
              src={profile}
              alt={"profile"}
              loading="lazy"
            />
          </div>
          <div className="text-[12px] text-gray-600">dyams093</div>
        </div>
        <div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 overflow-hidden p-1 cursor-pointer ">
            <Image
              className="w-full h-full rounded-full"
              src={profile}
              alt={"profile"}
              loading="lazy"
            />
          </div>
          <div className="text-[12px] text-gray-600">dyams093</div>
        </div>
        <div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 overflow-hidden p-1 cursor-pointer ">
            <Image
              className="w-full h-full rounded-full"
              src={profile}
              alt={"profile"}
              loading="lazy"
            />
          </div>
          <div className="text-[12px] text-gray-600">dyams093</div>
        </div>
        <div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 overflow-hidden p-1 cursor-pointer ">
            <Image
              className="w-full h-full rounded-full"
              src={profile}
              alt={"profile"}
              loading="lazy"
            />
          </div>
          <div className="text-[12px] text-gray-600">dyams093</div>
        </div>
        <div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 overflow-hidden p-1 cursor-pointer ">
            <Image
              className="w-full h-full rounded-full"
              src={profile}
              alt={"profile"}
              loading="lazy"
            />
          </div>
          <div className="text-[12px] text-gray-600">dyams093</div>
        </div>
      </div>

      <button onClick={scrollPrev}>
        <div className="text-gray-600 text-xl w-6 h-6 absolute top-8 left-0 rounded-full flex justify-center items-center bg-gray-200">
          <MdKeyboardArrowLeft />
        </div>
      </button>
      <button onClick={scrollNext}>
        <div className="text-gray-600 text-xl w-6 h-6 absolute top-8 right-0 rounded-full flex justify-center items-center bg-gray-200">
          <MdKeyboardArrowRight />
        </div>
      </button>
    </section>
  );
};

export default Story;
