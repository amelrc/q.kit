import React from "react";
import { Slide } from "react-slideshow-image";

const Slideshow = () => {
  const slideImages = [
    "./img/gallery_1-1400x869.jpg",
    "./img/gallery_2-1400x869.jpg",
    "./img/gallery_3-1400x880.jpg",
    "./img/gallery_4-1400x855.jpg",
    "./img/gallery_5-1400x869.jpg",
    "./img/gallery_6-1400x916.jpg",
    "./img/gallery_7-1400x855.jpg"
  ];

  const properties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false
  };

  return (
    <Slide {...properties}>
      <div className="each-slide">
        <div
          className="slide-img"
          style={{ backgroundImage: `url(${slideImages[0]})` }}
        />
      </div>
      <div className="each-slide">
        <div
          className="slide-img"
          style={{ backgroundImage: `url(${slideImages[1]})` }}
        />
      </div>
      <div className="each-slide">
        <div
          className="slide-img"
          style={{ backgroundImage: `url(${slideImages[2]})` }}
        />
      </div>
      <div className="each-slide">
        <div
          className="slide-img"
          style={{ backgroundImage: `url(${slideImages[3]})` }}
        />
      </div>
      <div className="each-slide">
        <div
          className="slide-img"
          style={{ backgroundImage: `url(${slideImages[4]})` }}
        />
      </div>
      <div className="each-slide">
        <div
          className="slide-img"
          style={{ backgroundImage: `url(${slideImages[5]})` }}
        />
      </div>
      <div className="each-slide">
        <div
          className="slide-img"
          style={{ backgroundImage: `url(${slideImages[6]})` }}
        />
      </div>

    </Slide>
  );
};

export default Slideshow;
