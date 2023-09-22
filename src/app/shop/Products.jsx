"use client";
import { products } from "@/constant/dummyData";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "@/lib/redux/slice/filterSlice";

const Products = () => {
  const [searchInput, setSearchInput] = useState("");

  const [selectedProduct, setSelectedProduct] = useState("all");
  const { searchQuery } = useSelector((state) => state?.searchFilter);

  const dispatch = useDispatch();

  const productMenu = [
    "all",
    "furniture",
    "digital product",
    "cosmetics",
    "food",
  ];

  let itemsFoundInCategory = false;

  useEffect(() => {
    dispatch(searchProduct(searchInput));
  }, [dispatch, searchInput]);

  return (
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
        <div className="form-group mb-5 row justify-content-center">
          <div className="col-6 position-relative mx-5">
            <input
              type="text"
              className="form-control text-lowercase "
              id="c_fname"
              name="c_fname"
              value={searchInput}
              placeholder="search product"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <i
              className="fa-brands fa-searchengin text-dark fs-5 position-absolute top-50  translate-middle"
              style={{ right: "16px" }}
            ></i>
          </div>
        </div>
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
                {products.length > 0 ? (
                  products
                    ?.filter((product) => {
                      return searchQuery.toLowerCase() === ""
                        ? product
                        : product.name.toLowerCase().includes(searchQuery) ||
                            product.category
                              .toLowerCase()
                              .includes(searchQuery) ||
                            product.title.toLowerCase().includes(searchQuery);
                    })
                    .map((product, k) => {
                      if (
                        product.category === selectedProduct ||
                        selectedProduct === "all"
                      ) {
                        itemsFoundInCategory = true;
                        return <Product product={product} key={k} index={k} />;
                      }
                      return null;
                    })
                ) : (
                  <p>No items found </p>
                )}
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
