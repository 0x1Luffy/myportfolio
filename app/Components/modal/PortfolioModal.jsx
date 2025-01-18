import React, { useState, useEffect } from "react";
import "./Modal.css";

const PortfolioModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOfferClick = () => {
    // Replace this URL with your actual Google Form URL
    const googleFormUrl = "https://forms.gle/2qWofKDJuwYhK6cJ9";
    window.open(googleFormUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <button className="modal__close" onClick={closeModal}>
          &times;
        </button>
        <h2 className="modal__title">Special Offer!</h2>
        <p className="modal__description">
          Your Professional Portfolio Awaits – Grab It Now for{" "}
          <span className="price">$25!</span>
        </p>
        <button className="modal__button" onClick={handleOfferClick}>
          Grab the Offer
        </button>
      </div>
    </div>
  );
};

export default PortfolioModal;
