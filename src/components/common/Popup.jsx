import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Popup = ({ show, onClose }) => {
  const [visible, setVisible] = useState(show);
  const popupStyle = {
    position: "fixed",
    top: "10px",
    right: "10px",
    background: "rgba(0, 0, 0, 0.8)",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    zIndex: "999",
    opacity: visible ? "1" : "0", // Show or hide based on visibility
  };
  useEffect(() => {
    setVisible(show);

    if (show) {
      // Automatically hide the popup after 2 seconds
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      className={`add-to-cart-popup ${visible ? "show" : ""}`}
      style={popupStyle}
    >
      Product added to cart!
    </motion.div>
  );
};

export default Popup;
