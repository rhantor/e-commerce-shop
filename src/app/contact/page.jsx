import Banner from "@/components/common/Banner";
import React from "react";
import Contact from "./Contact";

const page = () => {
  return (
    <>
      <Banner
        title={"Contact Us"}
        body=" Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
      />
      <Contact />
    </>
  );
};

export default page;
