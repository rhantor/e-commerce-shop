"use client";
/* eslint-disable @next/next/no-img-element */
import { addToCart } from "@/lib/redux/slice/cartSlice";
import Link from "next/link";
import { useRouter } from "next-nprogress-bar";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const ProductDetails = ({ product }) => {
  const route = useRouter();
  const dispatch = useDispatch();
  const product_img = useRef(null);
  const handleAddToCart = ({ product }) => {
    dispatch(addToCart(product));
  };
  const handleBuyNow = ({ product }) => {
    dispatch(addToCart(product));
    route.push("/checkout");
  };
  const handleMouseMove = (event) => {
    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;
    product_img.current.style.transformOrigin = `${x}px ${y}px`;
    product_img.current.style.transform = "scale(2)";
  };
  return (
    <>
      <div className="left col-12 col-lg-8 mb-5 mb-lg-0">
        <div
          className="product_img"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            product_img.current.style.transformOrigin = "center";
            product_img.current.style.transform = "scale(1)";
          }}
        >
          <img
            src={`/assets/images/${product.image}.png`}
            alt="product"
            ref={product_img}
          />
        </div>
      </div>
      <div className="right col-12 col-lg-4  text-black">
        <h1 className="product_title text-black display-5">{product.title}</h1>
        <p >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi harum
          minima aliquid dicta nam aperiam voluptatum eveniet perferendis esse
          dolores!
        </p>
        <p className="product_category mb-0 text-capitalize">
          Category - {product.category}
        </p>
        <p className="product_price">Product price - ${product.price}</p>
        <button
          type="button"
          className="product_add_to_cart btn me-3  mb-sm-0"
          onClick={() => handleAddToCart({ product })}
        >
          Add To Cart
        </button>
        <button
          type="button"
          className="product_buy_now btn"
          onClick={() => handleBuyNow({ product })}
        >
          Buy Now
        </button>
        <br />
        <br />
        <Link href={"/shop"} className="btn product_add_to_cart">
          continue shopping{" "}
        </Link>
      </div>{" "}
    </>
  );
};

export default ProductDetails;
