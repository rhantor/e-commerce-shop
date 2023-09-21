import Banner from "@/components/common/Banner";
import React from "react";
import Services from "./Services";
import Product from "@/components/common/DemoProduct";

const page = () => {
  return (
    <>
      <Banner
        title={"Services"}
        body=" Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
      />
      <Services />
      <Product />
    </>
  );
};

export default page;
