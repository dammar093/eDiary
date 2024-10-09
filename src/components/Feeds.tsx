import React from "react";
import Post from "./Post";
import { posts } from "@/data/data";

const Feeds = ({
  fn,
  fn1
}: {
  fn: React.Dispatch<React.SetStateAction<boolean>>;
  fn1: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <section>
      <main className="relative">
        {posts.map((post) => {
          return (
            <div className="my-1" key={post.id}>
              <Post fn={fn} fn1={fn1} post={post} />
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default Feeds;
