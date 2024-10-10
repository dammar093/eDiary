import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { PostsState } from "@/features/posts";

const Feeds = () => {
  const { posts } = useSelector((state: PostsState) => state.posts);
  console.log(posts);

  return (
    <section>
      <main className="relative">
        {posts?.data?.map((post: any) => {
          return (
            <div className="my-1" key={post?.id}>
              <Post post={post} />
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default Feeds;
