"use client";
import Product from "@/app/shop/Product";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { products } from "@/constant/dummyData";
import Link from "next/link";
import React from "react";

const DemoProduct = () => {
  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">
              Crafted with excellent material.
            </h2>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
              <Link href="/shop" className="btn">
                Explore
              </Link>
            </p>
          </div>

          {products.slice(-3).map((product, k) => (
            <Product key={k} product={product} index={k} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoProduct;
