"use client";
import React, { ReactNode } from "react";
import store from "@/store/store";
import { Provider } from "react-redux";
const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default Providers;
