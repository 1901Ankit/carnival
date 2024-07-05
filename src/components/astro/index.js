import React from "react";
import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import look from "../../assests/images/purpose/Looking for Performance Improvement.jpg";
import increase from "../../assests/images/purpose/To Increase Learning Adoption.jpg";
import want from "../../assests/images/purpose/I want Cultural Change.jpg";
import create from "../../assests/images/purpose/I want to Create Awareness.jpg";
import improve from "../../assests/images/purpose/I Want to Improve Knowledge.jpg";
import Upskill from "../../assests/images/purpose/I want to Upskill Employees.jpg";
const ClientLogosCarousel = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const images = [look, increase, want, improve, create, Upskill];

  return (
    <div className="container">
      <Slider {...settings} className="customer-logos slider">
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientLogosCarousel;
