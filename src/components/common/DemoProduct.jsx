"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { products } from "@/constant/dummyData";
import { addToCart } from "@/lib/redux/slice/cartSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const DemoProduct = () => {
  const dispatch = useDispatch();

  const handleAddToCart = ({ product }) => {
    dispatch(addToCart(product));
  };
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
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={k}>
              <div className="product-item">
                <img
                  src={`/assets/images/${product.image}.png`}
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">{product.title}</h3>
                <strong className="product-price">${product.price}</strong>
                <div className="icon-wrapper">
                  <button
                    className="icon-cross"
                    type="button"
                    onClick={() => handleAddToCart({ product })}
                  >
                    <i className="fa-solid fa-circle-plus"></i>
                  </button>
                  <Link
                    href={`/shop/${product.id}`}
                    className="icon-cross"
                    type="button"
                  >
                    <i className="fa-solid fa-circle-info"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoProduct;
