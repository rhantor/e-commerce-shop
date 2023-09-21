import Banner from "@/components/common/Banner";
import React from "react";
import Products from "./Products";

const page = () => {
  return (
    <>
      <Banner
        title={"Shop"}
        shop={true}
        body="Ultimate Shopping Destinations: Explore 20 Must-Visit Stores for Fashion, Home Decor, Electronics, and More!"
      />
      <Products />
    </>
  );
};

export default page;
