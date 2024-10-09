import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Users } from "@/data/data";

const Profile = ({ author }: { author: Users }) => {
  return (
    <Link
      className="flex items-center gap-1 text-gray-600"
      href={`/profile/${author.id}`}
    >
      <div className="w-12 h-12 rounded-ful">
        <Image
          className="w-full h-full rounded-full"
          src={author.profile}
          alt="profile"
        />
      </div>
      <div className="font-medium">{author.username}</div>
    </Link>
  );
};

export default Profile;
