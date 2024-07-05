import React from "react";
import "./index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import look from "../../assests/images/purpose/Looking.png";
import increase from "../../assests/images/purpose/Increase.png";
import want from "../../assests/images/purpose/want.png";
import create from "../../assests/images/purpose/Awareness.png";
import improve from "../../assests/images/purpose/Improve.png";
import Upskill from "../../assests/images/purpose/Upskill.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../../components/button";

const Multi = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let images = [
    {
      img: look,
      text: "Employees are the core of every organisation and there is always scope to improve at each level: the employee, the team, the department and the organisation. At what level do you want to improve performance? ",
      heading: "Looking for Performance Improvement",
      btntext: "Know More ",
      btnicon: <IoIosArrowRoundForward size={40} />,
    },
    {
      img: increase,
      text: "Organizations have invested a lot in developing and acquiring training content. However, for learning leaders training adoption remains an area of improvement. How to keep employees hooked to the training? ",
      heading: "To Increase Learning Adoption",
      btntext: "Know More ",
      btnicon: <IoIosArrowRoundForward size={40} />,
    },
    {
      img: want,
      text: " It’s a known fact that culture eats strategy for breakfast, lunch and dinner. When an organisation is on a transformation path, a roadmap for cultural change is imperative.  How can a company change culture ?",
      heading: "I want Cultural Change",
      btntext: "Know More ",
      btnicon: <IoIosArrowRoundForward size={40} />,
    },
    {
      img: create,
      text: "Communicating the right message  everytime time is the only way for employee awareness. It’s not a one time event",
      heading: "I want to Create Awareness",
      btntext: "Know More ",
      btnicon: <IoIosArrowRoundForward size={40} />,
    },
    {
      img: improve,
      text: "Do you want your employees to make more informed decisions? Then transferring the right information to them is the first step in the learning journey. ",
      heading: "I Want to Improve Knowledge",
      btntext: "Know More ",
      btnicon: <IoIosArrowRoundForward size={40} />,
    },
    {
      img: Upskill,
      text: "Does your team face continuous challenges that need new or higher skills? This can be solved through a continuous process of upskilling your employees. ",
      heading: "I want to Upskill Employees",
      btntext: "Know More ",
      btnicon: <IoIosArrowRoundForward size={40} />,
    },
  ];
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Carousel
          responsive={responsive}
          arrows={false}
          className="custom-carousel"
          showDots={false}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
        >
          {images.map((val, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${val.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "670px",
              }}
            >
              <section
                className="text-center overlay-content"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <p className="product-name">{val.heading}</p>
                <p className="prodes">{val.text}</p>
                <Button className="proknw">
                  {val.btntext}
                  <span className="btn-bg ms-4">{val.btnicon}</span>
                </Button>
              </section>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Multi;
