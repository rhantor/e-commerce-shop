"use client";
import {
  decreamentQuantity,
  increamentQuantity,
  removeToCart,
} from "@/lib/redux/slice/cartSlice";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartDetails } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total price
  const total = cartDetails.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity * cartItem.price;
  }, 0);

  const handleRemoveItem = (product) => {
    dispatch(removeToCart(product));
  };

  const handleDecreamentItem = (product) => {
    dispatch(decreamentQuantity(product));
  };

  const handleIncreamentItem = (product) => {
    dispatch(increamentQuantity(product));
  };

  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartDetails.length > 0 ? (
                    cartDetails.map((cart, k) => (
                      <tr key={k}>
                        <td className="product-thumbnail">
                          <img
                            src={`/assets/images/${cart.image}.png`}
                            alt="Image"
                            className="img-fluid"
                          />
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">{cart.title}</h2>
                        </td>
                        <td>${cart.price}</td>
                        <td>
                          <div
                            className="input-group mb-3 d-flex align-items-center quantity-container"
                            style={{ maxWidth: "120px" }}
                          >
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-black decrease"
                                type="button"
                                disabled={cart.quantity === 1}
                                onClick={() => handleDecreamentItem(cart)}
                              >
                                &minus;
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control text-center quantity-amount"
                              value={cart.quantity}
                              placeholder=""
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                              readOnly
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-black increase"
                                type="button"
                                onClick={() => handleIncreamentItem(cart)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>${cart.quantity * cart.price}</td>
                        <td>
                          <button
                            onClick={() => handleRemoveItem(cart)}
                            className="btn btn-black btn-sm"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">There is no item</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6">
                <Link
                  href={"/shop"}
                  className="btn btn-outline-black btn-sm btn-block"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-end border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">
                      Cart Totals
                    </h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Subtotal</span>
                  </div>
                  <div className="col-md-6 text-end">
                    <strong className="text-black">${total}</strong>
                  </div>
                </div>
                <div className="row mb-5 ">
                  <div className="col-md-6">
                    <span className="text-black">Discount</span>
                  </div>
                  <div className="col-md-6 text-end">
                    <strong className="text-black">0%</strong>
                  </div>
                </div>
                <hr />
                <div className="row mb-3 ">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-end">
                    <strong className="text-black">${total}</strong>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    {cartDetails.length > 0 && (
                      <Link
                        href={"/checkout"}
                        className="btn btn-black btn-lg py-3 btn-block"
                      >
                        Proceed To Checkout
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
