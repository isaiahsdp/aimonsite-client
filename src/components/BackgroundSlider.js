// BackgroundSlider.js

import "./BackgroundSlider.css";
import imageSlide from "./images.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const BackgroundSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentImage].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    position: "relative",
    opacity: 0.5,
    zIndex: 1,
  };

  const goToNext = (currentImage) => {
    setCurrentImage(currentImage);
  };

  return (
    <div className="container-style">
      <div style={bgImageStyle}></div>
      <div className="aim-homescreen poppins-semibold">
        AIM BLIND AND DRAPERY
      </div>
      <div className="inner-container">
        <div className="inner-container-text poppins-regular-bs">
          Discover The Benefits of Using Onsite Blind Repair
        </div>
        <Link to="/create-inquiry" className="get-quote-button">
          Get Quote
        </Link>
      </div>
      <div className="carousel">
        {imageSlide.map((_, index) => (
          <span key={index} onClick={() => goToNext(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default BackgroundSlider;
