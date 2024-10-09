import Image from "next/image";
import Link from "next/link";
import React from "react";
import profile from "@/public/profile.jpg";

const Profile = () => {
  return (
    <Link className="flex items-center gap-1 text-gray-600" href={"/profile"}>
      <div className="w-12 h-12 rounded-ful">
        <Image
          className="w-full h-full rounded-full"
          src={profile}
          alt="profile"
        />
      </div>
      <div className="font-medium">@dyams093</div>
    </Link>
  );
};

export default Profile;
