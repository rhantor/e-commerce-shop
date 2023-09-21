"use client";
import { products } from "@/constant/dummyData";
import React, { useState } from "react";
import Product from "./Product";
import { AnimatePresence } from "framer-motion";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState("all");

  const productMenu = [
    "all",
    "furniture",
    "digital product",
    "cosmetics",
    "spice product",
  ];

  let itemsFoundInCategory = false;

  return (
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <ul className="product_menu_wrapper d-flex d-lg-block gap-3 flex-wrap justify-content-center mb-5 mb-lg-0">
              {productMenu.map((item, key) => (
                <li
                  className={`product_menu text-capitalize ${
                    item === selectedProduct ? "active" : ""
                  }`}
                  key={key}
                  onClick={() => setSelectedProduct(item)}
                >
                  <i className="fa-solid fa-angle-right "></i>
                  {item === "digital product" ? "digital products" : item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9 col-12">
            <div className="row">
              <AnimatePresence>
                {products.map((product, k) => {
                  if (
                    product.category === selectedProduct ||
                    selectedProduct === "all"
                  ) {
                    itemsFoundInCategory = true;
                    return <Product product={product} key={k} index={k} />;
                  }
                  return null;
                })}
                {!itemsFoundInCategory && selectedProduct !== "all" && (
                  <p>No items found in the selected category</p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
