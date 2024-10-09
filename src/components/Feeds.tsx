import React from "react";
import Post from "./Post";

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
        <div className="my-1">
          <Post fn={fn} fn1={fn1} />
        </div>
        <div className="my-1">
          <Post fn={fn} fn1={fn1} />
        </div>
      </main>
    </section>
  );
};

export default Feeds;
