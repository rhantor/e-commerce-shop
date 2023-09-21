/* eslint-disable @next/next/no-img-element */
"use client";
import { products } from "@/constant/dummyData";
import React, { useEffect } from "react";
import ProductDetails from "./ProductDetails";
// intrustment
// import "asstes/css/style.css";
const ProductId = ({ params }) => {
  const { productId } = params;

 
  return (
    <div className="product_details">
      <div className="container">
        <div className="row">
          {products.map((product, key) => {
            if (product.id == productId) {
              return <ProductDetails product={product} key={key} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductId;
