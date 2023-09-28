"use client";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
const SliderBanner = ({ shop = false }) => {
  return (
    <div className="banner">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, EffectFade]}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop={true}
      >
        <SwiperSlide className="d-flex slide_item">
          <div className="intro-excerpt">
            <h1 className="display-4 text-white fw-bold mb-2">
              Iterior Modern Design.
            </h1>
            <p className="text-white fw-lighter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              nisi aut eos modi minima vero officia.consectetur adipisicing
              elit. Officiis nisi aut eos modi minima vero officia
            </p>
            {shop ? (
              <p>
                <a href="#shop" className="btn btn-white-outline">
                  Explore
                </a>
              </p>
            ) : (
              <p>
                <Link href="/shop" className="btn btn-info me-2">
                  Shop Now
                </Link>
                <a href="#" className="btn btn-white-outline">
                  Explore
                </a>
              </p>
            )}
          </div>
          <div className="banner_image position-relative">
            <img src="/assets/images/couch.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex slide_item beauty_banner">
          <div className="intro-excerpt">
            <h1 className="display-4 text-white fw-bold mb-2">
              Beauty Products Are Here .
            </h1>
            <p className="text-white fw-lighter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              nisi aut eos modi minima vero officia.consectetur adipisicing
              elit. Officiis nisi aut eos modi minima vero officia
            </p>
            {shop ? (
              <p>
                <a href="#shop" className="btn btn-white-outline">
                  Explore
                </a>
              </p>
            ) : (
              <p>
                <Link href="/shop" className="btn btn-info me-2">
                  Shop Now
                </Link>
                <a href="#" className="btn btn-white-outline">
                  Explore
                </a>
              </p>
            )}
          </div>
          <div className="banner_image position-relative">
            <img src="/assets/images/beauty.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex slide_item">
          <div className="intro-excerpt">
            <h1 className="display-4 text-white fw-bold mb-2">
              Choose Your Digital Product.
            </h1>
            <p className="text-white fw-lighter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              nisi aut eos modi minima vero officia.consectetur adipisicing
              elit. Officiis nisi aut eos modi minima vero officia
            </p>
            {shop ? (
              <p>
                <a href="#shop" className="btn btn-white-outline">
                  Explore
                </a>
              </p>
            ) : (
              <p>
                <Link href="/shop" className="btn btn-info me-2">
                  Shop Now
                </Link>
                <a href="#" className="btn btn-white-outline">
                  Explore
                </a>
              </p>
            )}
          </div>
          <div className="banner_image position-relative">
            <img src="/assets/images/mo-shop2.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex slide_item beauty_banner">
          <div className="intro-excerpt">
            <h1 className="display-4 text-white fw-bold mb-2">
              Iterior Modern Design.
            </h1>
            <p className="text-white fw-lighter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              nisi aut eos modi minima vero officia.consectetur adipisicing
              elit. Officiis nisi aut eos modi minima vero officia
            </p>
            {shop ? (
              <p>
                <a href="#shop" className="btn btn-white-outline">
                  Explore
                </a>
              </p>
            ) : (
              <p>
                <Link href="/shop" className="btn btn-info me-2">
                  Shop Now
                </Link>
                <a href="#" className="btn btn-white-outline">
                  Explore
                </a>
              </p>
            )}
          </div>
          <div className="banner_image position-relative">
            <img src="/assets/images/beauty.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderBanner;
