import React, { useEffect } from "react";
import "./index.css";
import look from "../../assests/images/purpose/Looking.png";
import increase from "../../assests/images/purpose/Increase.png";
import want from "../../assests/images/purpose/want.png";
import create from "../../assests/images/purpose/Awareness.png";
import improve from "../../assests/images/purpose/Improve.png";
import Upskill from "../../assests/images/purpose/Upskill.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Fix the import statement
import Button from "../../components/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CustomerSlider = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const carousels = document.querySelectorAll(".carousel");

    const rotateCarousel = (root, imageIndex, theta) => {
      const figure = root.querySelector("figure");
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    };

    for (let i = 0; i < carousels.length; i++) {
      const root = carousels[i];
      const divs = root.querySelectorAll("figure div");
      const intervalTime = 3000; // Change image every 3 seconds
      let currImage = 0;
      const theta = (2 * Math.PI) / divs.length;

      const rotateAutomatically = () => {
        currImage = (currImage + 1) % divs.length;
        rotateCarousel(root, currImage, theta);
      };

      let interval = setInterval(rotateAutomatically, intervalTime);

      container.addEventListener("mousemove", () => {
        clearInterval(interval);
        interval = setInterval(rotateAutomatically, intervalTime);
      });

      setupCarousel(root, divs.length, theta);
    }

    return () => {
      container.removeEventListener("mousemove", () => {});
    };
  }, []);

  const setupCarousel = (root, n, theta) => {
    const figure = root.querySelector("figure");
    const divs = figure.children;
    const gap = parseInt(root.dataset.gap) || 50;

    const s = parseFloat(getComputedStyle(divs[0]).width);
    const apothem = s / (2 * Math.tan(Math.PI / n));

    figure.style.transformOrigin = `50% 50% ${-apothem}px`;

    for (let i = 0; i < n; i++) {
      divs[i].style.marginLeft = `${gap}px`;
      divs[i].style.marginRight = `${gap}px`;
      divs[i].style.borderLeft = `${gap}px solid transparent`;
      divs[i].style.borderRight = `${gap}px solid transparent`;
    }

    for (let i = 1; i < n; i++) {
      divs[i].style.transformOrigin = `50% 50% ${-apothem}px`;
      divs[i].style.transform = `rotateY(${i * theta}rad)`;
    }
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
    <div className="container">
      <div className="carousel" data-gap="50">
        <figure>
          {images.map((val, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${val.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="hhh"
            >
              <section className="text-center">
                <h2 className="productname">{val.heading}</h2>
                <p className="prismpara">{val.text}</p>
                <Button className="prismknowmore">
                  {val.btntext}
                  <span className="btnbg ms-4">{val.btnicon}</span>
                </Button>
              </section>
            </div>
          ))}
        </figure>
      </div>

      {/*    <div className="container dosj">
         <div className="row">
          <Carousel>
            <div>
              {images.map((val, index) => (
                <figure
                  key={index}
                  style={{
                    backgroundImage: `url(${val.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="hhh"
                >
                  <section className="text-center">
                    <h2 className="productname">{val.heading}</h2>
                    <p className="prismpara">{val.text}</p>
                    <Button className="prismknowmore">
                      {val.btntext}
                      <span className="btnbg ms-4">{val.btnicon}</span>
                    </Button>
                  </section>
                </figure>
              ))}
            </div>
          </Carousel>
        </div> 
      </div>*/}
    </div>
  );
};

export default CustomerSlider;
