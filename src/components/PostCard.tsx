import React from "react";
import Image, { StaticImageData } from "next/image";
import LikeComment from "./LikeComment";
import WriteComment from "./WriteComment";
const PostCard = ({
  file,
  fn
}: {
  file: StaticImageData;
  fn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <div className=" border border-gray-400">
        <Image src={file} alt="profile" />
      </div>
      <LikeComment fn={fn} />
      <div className="mt-2 text-[14px] text-gray-600">
        न जख्म भरे, न शराब सहारा हुई... न वो लौटे, न मोहब्बत दोबारा हुई
      </div>
      <div className="mt-1 text-gray-500 text-sm">
        <span className="cursor-pointer" onClick={() => fn(true)}>
          View all 2 comments
        </span>
      </div>
      <WriteComment />
    </div>
  );
};

export default PostCard;
