"use client";
import { AnimatePresence, motion } from "framer-motion";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import FavSidebar from "./FavSidebar";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { favouriteItem } = useSelector((state) => state.favourite);

  const { cartTotalItem } = cart;
  const menuItem = ["home", "shop", "about-us", "service", "contact"];
  const [selectedItem, setSelectedItem] = useState("");
  const [activeMenu, setActiveMenu] = useState(false);
  const [fixedMenuBar, setFixedMenuBar] = useState(false);
  const [activeFavSlider, setActiveFavSlider] = useState(false);
  const scrollNav = useRef(null);
  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 50;
      if (windowScroll) {
        scrollNav?.current?.classList.toggle("menu_fixed", windowScroll);
        setFixedMenuBar(true);
      } else {
        setFixedMenuBar(false);
        scrollNav?.current?.classList.remove("menu_fixed");
      }
    });
  }, []);
  return (
    <>
      <motion.nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-white bg-white"
        ref={scrollNav}
        whileInView={
          fixedMenuBar
            ? { y: [-50, 0], transition: { duration: 0.5 } }
            : { y: 0 }
        }
      >
        <div className="container">
          <Link className="navbar-brand" href="/">
            E-Shop<span>.</span>
          </Link>

          <div className="d-flex gap-2 align-items-center d-md-none">
            <button
              className="navbar-toggle px-2 border-0 me-3 bg-transparent"
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <span className="fa fa-bars fs-5 mt-1"></span>
            </button>
            <ul className="custom-navbar-cta  navbar-nav mb-0 mb-md-0 ms-5">
              {" "}
              <li>
                <a className="nav-link" href="#">
                  <i class="fa-solid fa-user fs-5"></i>
                </a>
              </li>
              <li>
                <Link className="nav-link cart" href="/cart">
                  <i className="fa-solid fa-cart-shopping fs-5"></i>
                  <span className="cart_number">{cartTotalItem}</span>
                </Link>
              </li>
              <li className="fav" onClick={() => setActiveFavSlider(true)}>
                <a href="#fav" className="nav-link cart">
                  {" "}
                  <i className="fa-solid fa-heart fs-5  "></i>
                </a>

                <span className="cart_number">{favouriteItem?.length}</span>
              </li>
            </ul>
          </div>
          <div
            className={`${activeMenu ? "show" : "collapse"}  navbar-collapse`}
            id="navbarsFurni"
          >
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              {menuItem.map((item, k) => (
                <li
                  className={`nav-item text-capitalize  ${
                    item === selectedItem ? "active" : ""
                  }`}
                  key={k}
                  onClick={() => setSelectedItem(item)}
                >
                  <Link
                    className="nav-link"
                    href={`/${item === "home" ? "" : item}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="custom-navbar-cta sm-screen navbar-nav mb-2 mb-md-0 ms-5 align-items-center">
              <li>
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-user fs-5"></i>
                </a>
              </li>
              <li>
                <Link className="nav-link cart" href="/cart">
                  <i className="fa-solid fa-cart-shopping fs-5"></i>
                  <span className="cart_number">{cartTotalItem}</span>
                </Link>
              </li>
              <li className="fav" onClick={() => setActiveFavSlider(true)}>
                <a href="#fav" className="nav-link cart">
                  {" "}
                  <i className="fa-solid fa-heart fs-5  "></i>
                </a>

                <span className="cart_number">{favouriteItem?.length}</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {activeFavSlider ? (
          <FavSidebar setActiveFavSlider={setActiveFavSlider} />
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
