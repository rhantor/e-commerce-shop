"use client";
import { motion } from "framer-motion";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { cartTotalItem } = cart;
  const menuItem = ["home", "shop", "about-us", "service", "contact"];
  const [selectedItem, setSelectedItem] = useState("");
  const [activeMenu, setActiveMenu] = useState(false);
  const [fixedMenuBar, setFixedMenuBar] = useState(false);
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
    <motion.nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      ref={scrollNav}
      whileInView={
        fixedMenuBar ? { y: [-50, 0], transition: { duration: 0.5 } } : { y: 0 }
      }
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          TimelessTrove<span>.</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${activeMenu ? "show" : "collapse"}  navbar-collapse`}
          id="navbarsFurni"
        >
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            {menuItem.map((item, k) => (
              <li
                className={`nav-item text-capitalize text-white ${
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

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a className="nav-link" href="#">
                <img src="/assets/images/user.svg" />
              </a>
            </li>
            <li>
              <Link className="nav-link cart" href="/cart">
                <img src="/assets/images/cart.svg" />
                <span className="cart_number">{cartTotalItem}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
