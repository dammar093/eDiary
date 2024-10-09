import profile from "@/public/profile.jpg";
import deepak from "@/public/deepak.jpg";
import bire from "@/public/bire.jpg";
import pathak from "@/public/patahk.jpg";
import { StaticImageData } from "next/image";

export interface Users {
  id: number;
  profile: StaticImageData;
  fullName: string;
  isLogedIn: boolean;
  username: string;
}
export const user: Users = {
  id: 10,
  profile: profile,
  fullName: "Dammar Singh Rana",
  isLogedIn: true,
  username: "dyams093"
};

export const users: Users[] = [
  {
    id: 1,
    profile: deepak,
    fullName: "Deepak",
    isLogedIn: false,
    username: "Deepak Raj Pandy"
  },
  {
    id: 2,
    profile: bire,
    fullName: "Birendra Singh Dhami",
    isLogedIn: false,
    username: "biren"
  },
  {
    id: 3,
    profile: pathak,
    fullName: "Tirth Rah Pathak",
    isLogedIn: false,
    username: "tirth"
  }
];
