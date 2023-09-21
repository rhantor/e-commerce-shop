import React from "react";
import Cart from "./Cart";
import Banner from "@/components/common/Banner";

const page = () => {
  return (
    <>
      <Banner
        title={"Cart"}
        shop={true}
        body="Ultimate Shopping Destinations: Explore 20 Must-Visit Stores for Fashion, Home Decor, Electronics, and More!"
      />
      <Cart />
    </>
  );
};

export default page;
