import React from "react";
import WriteComment from "./WriteComment";
import LikeComment from "./LikeComment";
import Profile from "./Profile";
import ProfileTop from "./ProfileTop";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import style from "@/components/Story.module.css";
import Comments from "./Comments";
import { user } from "@/data/data";
const PostPopUp = ({
  fn,
  fn1
}: {
  fn: React.Dispatch<React.SetStateAction<boolean>>;
  fn1: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-full md:w-[70%] bg-white md:h-[500px] flex justify-between flex-wrap">
      <div className="hidden md:block w-[40%] h-[500px]">
        <Image
          className="w-full h-[500px] object-cover"
          src={profile}
          alt="feed"
        />
      </div>
      <div className="w-full md:w-[60%] p-2">
        <ProfileTop fn1={fn1} author={user} />
        <hr />
        <div
          className={`h-fit md:h-[333px] overflow-y-scroll scroll-smooth ${style.example}`}
        >
          <div className="mt-2">
            <div>
              <Profile author={user} />
            </div>
            <div className="text-gray-600 text-sm pl-14 text-justify">
              न जख्म भरे, न शराब सहारा हुई... न वो लौटे, न मोहब्बत दोबारा हुई
              #rohuufam🕊️ #reelkarofeelkaro #reelsinstagram #reelitfeelit
              #instalike #liketime #trending #sad #brokenquotes #brokentrust
              #explore #explorepage
            </div>
          </div>
          <div className="mt-1">
            <Comments />
          </div>
        </div>
        <div className="border-t border-b border-gray-600 p-1">
          <LikeComment isLiked={true} fn={fn} />
        </div>
        <div>
          <WriteComment />
        </div>
      </div>
    </div>
  );
};

export default PostPopUp;
