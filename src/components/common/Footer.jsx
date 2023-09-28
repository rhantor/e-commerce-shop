"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container relative">
        <Swiper
          className="slide-img"
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay, EffectFade]}
          effect="fade"
        >
          <SwiperSlide>
            <img
              src="/assets/images/sofa.png"
              alt="Image"
              className="img-fluid sofa-img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/images/mo-shop.png"
              alt="Image"
              className="img-fluid mobile-shop"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/images/couch.png"
              alt="Image"
              className="img-fluid sofa-img"
            />
          </SwiperSlide>
        </Swiper>

        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <img
                    src="/assets/images/envelope-outline.svg"
                    alt="Image"
                    className="img-fluid"
                  />
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>

              <form action="#" className="row g-3">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary">
                    <span className="fa fa-paper-plane"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <Link href="/" className="footer-logo">
                TimelessTrove<span>.</span>
              </Link>
            </div>
            <p className="mb-4">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>

            <ul className="list-unstyled custom-social">
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <Link href="/about-us">About us</Link>
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                  </li>

                  <li>
                    <Link href="/contact">Contact us</Link>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Knowledge base</a>
                  </li>
                  <li>
                    <a href="#">Live chat</a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Our team</a>
                  </li>
                  <li>
                    <a href="#">Leadership</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Nordic Chair</a>
                  </li>
                  <li>
                    <a href="#">Kruzo Aero</a>
                  </li>
                  <li>
                    <a href="#">Ergonomic Chair</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6"></div>

            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4">
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
