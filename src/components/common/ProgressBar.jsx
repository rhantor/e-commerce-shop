"use client";
import React from "react";
import { AppProgressBar } from "next-nprogress-bar";
const ProgressBar = () => {
  return (
    <AppProgressBar
      height="2px"
      color="white"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default ProgressBar;
