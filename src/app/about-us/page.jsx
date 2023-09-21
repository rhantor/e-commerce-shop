import Banner from "@/components/common/Banner";
import Team from "@/components/common/Team";
import WhyChoose from "@/components/common/WhyChoose";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        title={"About Us"}
        body="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
      />
      <WhyChoose />
      <Team />
    </>
  );
};

export default page;
