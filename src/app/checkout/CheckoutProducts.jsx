"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CheckoutProducts = () => {
  const { cartDetails, cartTotalItem } = useSelector((state) => state?.cart);
  const [coupon, setCoupon] = useState("");
  const [activeCoupon, setActiveCoupon] = useState("");

  const [discountedTotal, setDiscountedTotal] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);

  // Calculate total price
  const total = cartDetails.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity * cartItem.price;
  }, 0);

  // Apply coupon and calculate discounted total
  useEffect(() => {
    if (discountAmount > 0) {
      const discountValue = (total * discountAmount) / 100;
      setDiscountedTotal(total - discountValue);
    } else {
      setDiscountedTotal(total);
    }
    if (coupon) {
      const numericPart = coupon.match(/\d+/);

      if (numericPart) {
        const parsedDiscountAmount = parseInt(numericPart[0]);
        if (
          !isNaN(parsedDiscountAmount) &&
          parsedDiscountAmount >= 0 &&
          parsedDiscountAmount <= 100
        ) {
          setDiscountAmount(parsedDiscountAmount);
        } else {
          alert("Invalid coupon amount. Please enter a valid coupon).");
        }
      } else {
        alert("Invalid coupon format. Please enter a valid coupon code.");
      }
    }
  }, [total, coupon, discountAmount]);
  const handleCoupon = () => {
    setCoupon(activeCoupon);
  };

  return (
    <div className="col-md-6">
      <div className="row mb-5">
        <div className="col-md-12">
          <h2 className="h3 mb-3 text-black">Coupon Code</h2>
          <div className="p-3 p-lg-5 border bg-white">
            <label for="c_code" className="text-black mb-3">
              Enter your coupon code if you have one
            </label>
            <div className="input-group w-75 couponcode-wrap">
              <input
                type="text"
                className="form-control me-2"
                id="c_code"
                value={activeCoupon}
                onChange={(event) => setActiveCoupon(event.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-black btn-sm"
                  type="button"
                  id="button-addon2"
                  onClick={handleCoupon}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-12">
          <h2 className="h3 mb-3 text-black">Your Order</h2>
          <div className="p-3 p-lg-5 border bg-white">
            <table className="table site-block-order-table mb-5">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartDetails?.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={`/assets/images/${product.image}.png`}
                        alt="product"
                        className="product_sub_image"
                      />{" "}
                      {product.title} <strong className="mx-2">x</strong>{" "}
                      {product.quantity}
                    </td>
                    <td>{product.price}</td>
                    <td>${product.price * product.quantity}</td>
                  </tr>
                ))}
                <tr className="border ">
                  <td className="text-black font-weight-bold">
                    <strong>Sub Total</strong>
                  </td>
                  <td>------</td>
                  <td className="text-black font-weight-bold">
                    <strong>${total}</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-black font-weight-bold">
                    <strong>Discount</strong>
                  </td>
                  <td>------</td>
                  <td className="">
                    <strong>{coupon ? coupon.match(/\d+/) : 0}%</strong>
                  </td>
                </tr>
                <tr className="border">
                  <td className="text-black font-weight-bold">
                    <strong>Order Total</strong>
                  </td>
                  <td>------</td>
                  <td className="text-black font-weight-bold">
                    <strong>${discountedTotal}</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="border p-3 mb-3">
              <h3 className="h6 mb-0">
                <a
                  className="d-block"
                  data-bs-toggle="collapse"
                  href="#collapsebank"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsebank"
                >
                  Direct Bank Transfer
                </a>
              </h3>

              <div className="collapse" id="collapsebank">
                <div className="py-2">
                  <p className="mb-0">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order won’t be
                    shipped until the funds have cleared in our account.
                  </p>
                </div>
              </div>
            </div>

            <div className="border p-3 mb-3">
              <h3 className="h6 mb-0">
                <a
                  className="d-block"
                  data-bs-toggle="collapse"
                  href="#collapsecheque"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsecheque"
                >
                  Cheque Payment
                </a>
              </h3>

              <div className="collapse" id="collapsecheque">
                <div className="py-2">
                  <p className="mb-0">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order won’t be
                    shipped until the funds have cleared in our account.
                  </p>
                </div>
              </div>
            </div>

            <div className="border p-3 mb-5">
              <h3 className="h6 mb-0">
                <a
                  className="d-block"
                  data-bs-toggle="collapse"
                  href="#collapsepaypal"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsepaypal"
                >
                  Paypal
                </a>
              </h3>

              <div className="collapse" id="collapsepaypal">
                <div className="py-2">
                  <p className="mb-0">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order won’t be
                    shipped until the funds have cleared in our account.
                  </p>
                </div>
              </div>
            </div>

            <div className="form-group">
              <button
                className="btn btn-black btn-lg py-3 btn-block"
                onclick="window.location='thankyou.html'"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProducts;
