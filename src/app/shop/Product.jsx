/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { addToCart } from "@/lib/redux/slice/cartSlice";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const Product = ({ product, index }) => {
  const dispatch = useDispatch();

  const handleAddToCart = ({ product }) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: index * 0.01 },
        }}
        viewport={{ once: true }}
        className="col-12 col-md-4 col-lg-3 mb-5 d-flex justify-content-center"
      >
        <div className="product-item">
          <Link href={`/shop/${product.id}`}>
            <img
              src={`/assets/images/${product.image}.png`}
              className="img-fluid product-thumbnail"
            />
          </Link>
          <Link
            href={`/shop/${product.id}`}
            className="product-title d-block text-decoration-none fs-6 fw-semibold"
          >
            {product.title}
          </Link>
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
      </motion.div>
    </>
  );
};

export default Product;
