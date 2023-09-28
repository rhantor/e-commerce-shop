import Banner from "@/components/common/Banner";
import SliderBanner from "@/components/common/SliderBanner";
import Team from "@/components/common/Team";
import WhyChoose from "@/components/common/WhyChoose";
import React from "react";

const page = () => {
  return (
    <>
      <SliderBanner />
      <WhyChoose />
      <Team />
    </>
  );
};

export default page;
