import Banner from "@/components/common/Banner";
import React from "react";
import Products from "./Products";
import SliderBanner from "@/components/common/SliderBanner";

const page = () => {
  return (
    <>
      <SliderBanner shop={true} />
      <Products />
    </>
  );
};

export default page;
