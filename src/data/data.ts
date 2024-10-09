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

export interface Comments {
  id: number;
  author: Users;
  comment: string;
}
export interface Posts {
  id: number;
  author: Users;
  post: StaticImageData;
  likes: number;
  comments: Comments[];
  isLiked: boolean;
  isFollow: boolean;
  caption?: string;
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

export const posts: Posts[] = [
  {
    id: 1,
    author: {
      id: 1,
      profile: deepak,
      fullName: "Deepak Raj Pandy",
      isLogedIn: false,
      username: "deepak"
    },
    post: deepak,
    caption:
      "missingfavouriteperson #radheradhe❤️ #loveforyou #reelsinstagram #s #naturelovers #20:38❣️",
    likes: 11,
    comments: [
      {
        id: 1,
        author: {
          id: 1,
          profile: profile,
          fullName: "dyams093",
          isLogedIn: false,
          username: "Dammar Singh Rana"
        },
        comment: "Nice"
      }
    ],
    isLiked: true,
    isFollow: false
  },
  {
    id: 2,
    author: {
      id: 1,
      profile: bire,
      fullName: "Birendra Singh Dhami",
      isLogedIn: false,
      username: "bire"
    },
    post: bire,
    caption: "न जख्म भरे, न शराब सहारा हुई... न वो लौटे, न मोहब्बत दोबारा हुई",
    likes: 11,
    comments: [
      {
        id: 1,
        author: {
          id: 1,
          profile: profile,
          fullName: "dyams093",
          isLogedIn: false,
          username: "Dammar Singh Rana"
        },
        comment: "Nice"
      }
    ],
    isLiked: true,
    isFollow: true
  },
  {
    id: 3,
    author: {
      id: 1,
      profile: pathak,
      fullName: "Tirth Raj Pathak",
      isLogedIn: false,
      username: "pathak"
    },
    post: pathak,
    caption:
      "👁️#radheradhe❤️ #loveforyou #naturelovers #reelsinstagram #s #20",
    likes: 11,
    comments: [
      {
        id: 1,
        author: {
          id: 1,
          profile: profile,
          fullName: "dyams093",
          isLogedIn: false,
          username: "Dammar Singh Rana"
        },
        comment: "Nice"
      }
    ],
    isLiked: false,
    isFollow: false
  }
];
