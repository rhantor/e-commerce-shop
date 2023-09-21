"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import "./CheckoutPage.css";
import CheckoutProducts from "./CheckoutProducts";
import CheckoutBillingDetails from "./CheckoutBillingDetails";

function CheckoutPage() {
  return (
    <div class="untree_co-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-12">
            <div class="border p-4 rounded" role="alert">
              Returning customer? <a href="#">Click here</a> to login
            </div>
          </div>
        </div>
        <div class="row">
          <CheckoutBillingDetails />
          <CheckoutProducts />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
