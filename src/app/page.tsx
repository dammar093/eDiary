"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const Home = () => {
  const router = useRouter();

  const user = null;
  if (!user) {
    return router.push("/login");
  }

  return (
    <main>
      <Navbar />
    </main>
  );
};

export default Home;
