"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React from "react";

const Banner = ({ title, body }) => {
  return (
    <div className="hero ">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>{title}</h1>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <p>
                <Link href="/shop" className="btn btn-secondary me-2">
                  Shop Now
                </Link>
                <a href="#" className="btn btn-white-outline">
                  Explore
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src="/assets/images/couch.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
