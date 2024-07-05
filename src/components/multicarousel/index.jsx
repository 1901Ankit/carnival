import React from "react";
import "./index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../assests/images/compny/Deloitte.pngw3.png";
import image2 from "../../assests/images/compny/FedEx.pngw3.png";
import image3 from "../../assests/images/compny/Global-green-Growth-Institue.pngw3.png";
import image4 from "../../assests/images/compny/Houghton-Mifflin-Harcourt.pngw3.png";

const Multicarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let images = [
    {
      img: image1,
      alt: "Deloitte Logo",
    },
    {
      img: image2,
      alt: "FedEx Logo",
    },
    {
      img: image3,
      alt: "Global Green Growth Institute Logo",
    },
    {
      img: image4,
      alt: "Houghton Mifflin Harcourt Logo",
    },
  ];
  return (
    <div className="">
      <div className="client_bg ">
        <div className="container logoclient">
          <div className="row">

          </div>
          <Carousel
            responsive={responsive}
            arrows={false}
            className="three-dimensional-box"
            showDots={false}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
          >
            {images.map((val, index) => (
              <img key={index} src={val.img} alt={val.alt}
              style={{ height: '90px', transform: 'rotateX(-25deg)' }}
              className="ff"
            />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Multicarousel;

