import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
const ReelPost = () => {
  return (
    <div className="w-full md:w-[35%] h-full  mx-auto flex">
      <div className="w-[85%] h-full flex items-center relative">
        <video
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          src="https://videos.pexels.com/video-files/10677320/10677320-sd_506_960_25fps.mp4"
        ></video>
        <div></div>
      </div>
      <div className="w-[15%] h-full flex justify-center items-center ">
        <div>
          <div className="text-center">
            <button>
              {" "}
              <svg
                className="x1lliihq x1n2onr6 xyb1xck"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
              </svg>
            </button>
            <div>22k</div>
          </div>
          <div className="text-center mt-2">
            <button>
              {" "}
              <svg
                aria-label="Comment"
                className="x1lliihq x1n2onr6 xyb1xck"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
            <div>22</div>
          </div>
          <div className="text-center mt-2">
            <button>
              <svg
                className="x1lliihq x1n2onr6 x1hfr7tm xq3z1fi"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></polygon>
              </svg>
            </button>
            <div>22</div>
          </div>
          <div className="text-center mt-2">
            <button className="text-gray-600 text-3xl font-medium">
              <BiDotsHorizontalRounded />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelPost;
