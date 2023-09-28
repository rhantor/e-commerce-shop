"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/lib/redux/slice/cartSlice";
import { removeFavouriteItem } from "@/lib/redux/slice/favouriteSlice";
import { AnimatePresence, motion } from "framer-motion";
import Popup from "./Popup";

const FavSidebar = ({ setActiveFavSlider }) => {
  const { favouriteItem } = useSelector((state) => state.favourite);
  const { cartDetails } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [showAddToCartPopup, setShowAddToCartPopup] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFavouriteItem(product));
    setShowAddToCartPopup(true);
  };

  const handleRemoveFavItem = (product) => {
    dispatch(removeFavouriteItem(product));
  };

  const closeAddToCartPopup = () => {
    setShowAddToCartPopup(false);
  };

  return (
    <motion.div
      initial={{ right: -100, opacity: 0 }}
      whileInView={{ right: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="favourite_slide_wrapper"
    >
      <div
        className="close_area"
        onClick={() => setActiveFavSlider(false)}
      ></div>
      <div className="favourite_slide px-2 p-4">
        <div className="d-flex justify-content-between align-items-center mb-5 ">
          <h1 className="display-6 fs-5 mb-0">
            Favourite ssfProduct{" "}
            <span className="text-danger">({favouriteItem.length})</span>
          </h1>
          <button
            className="cls-btn border-0 outline-0 px-2 shadow bg-danger rounded bg-gradient text-white"
            onClick={() => setActiveFavSlider(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="row fav_item_wrapper">
          <AnimatePresence>
            {favouriteItem?.length > 0 ? (
              favouriteItem.map((item) => (
                <motion.div
                  initial={{ x: -100, opacity: 0.5 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { delay: item.id * 0.01 },
                  }}
                  exit={{ x: 100, opacity: 0 }}
                  className="d-flex align-items-center pb-2 border-bottom border-secondery fav_item"
                  key={item.id}
                >
                  <div className="fav_img ">
                    <img
                      src={`/assets/images/${item.image}.png`}
                      alt="product"
                    />
                  </div>
                  <div className="fav_title flex-shrink-1 ">
                    <h5>{item.title}</h5>
                    <h6 className="mb-0 fav_price fw-semibold text-dark">
                      <span className="text-decoration-line-through me-2 text-danger">
                        ${item.price * 0.1 + item.price}
                      </span>{" "}
                      ${item.price}{" "}
                    </h6>
                    <p>category - {item.category}</p>
                  </div>
                  <div className="fav_btn  ">
                    <button
                      className="add_to_cart"
                      onClick={() => handleAddToCart(item)}
                    >
                      {" "}
                      <img src="/assets/images/cart.svg" />
                    </button>
                    <button
                      className="remove_btn outline-0 ms-2"
                      onClick={() => handleRemoveFavItem(item)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-danger">There is no favourite item</p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Show the popup when needed */}
      <AnimatePresence>
        {showAddToCartPopup ? (
          <Popup show={showAddToCartPopup} onClose={closeAddToCartPopup} />
        ) : (
          ""
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FavSidebar;
