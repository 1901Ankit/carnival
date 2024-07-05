// import React from "react";
import React, { useState } from "react";
import AR from "../../assests/images/Image/AR  VR Solutions.png";
import Animations from "../../assests/images/Image/Animations & Video.png";
import Artifical from "../../assests/images/Image/Artificial Intelligence.png";
import complex from "../../assests/images/Image/Compliance.png";
import Content from "../../assests/images/Image/Custom Content Development.png";
import customer from "../../assests/images/Image/Customer Service Training.png";
import Diversity from "../../assests/images/Image/Diversity, Equality & Inclusion.png";
import farmstead from "../../assests/images/Image/Employee Onboarding.png";
import Based from "../../assests/images/Image/Game Based Learning.png";
import leadership from "../../assests/images/Image/Leadership Training.png";
import Micro from "../../assests/images/Image/Micro-Learning.png";
import product from "../../assests/images/Image/Product Training.png";
import sale from "../../assests/images/Image/Sales Enablement.png";
import Translation from "../../assests/images/Image/Translation & Localization.png";
import videoss from "../../assests/images/video/ai-neon-360-2022-08-04-04-54-22-utc.mp4";
import bgskill from "../../assests/logo/eLearning Carnival Web Data-06.svg";
// import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";
import Aos from "aos";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import toy from "../../assests/images/Image/eLearning Carnival Web Home.png";
import { GoDotFill, GoPlus } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdGpsFixed } from "react-icons/md";
import CustomerSlider from "../../components/Slideer";
import Button from "../../components/button";
import Multi from "../../components/caorsl";
import Family from "../../components/family";
import Multicarousel from "../../components/multicarousel";
import Loader from "../../components/Loadercount";
import "./index.css";
import Dancehaus from "../../components/ripple";
// import Website from "../website";

const Home = () => {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const handleVideoEnd = () => {

  //     console.log('Video ended. User can scroll now.');
  //   };

  //   videoRef.current.addEventListener('ended', handleVideoEnd);

  //   return () => {
  //     videoRef.current.removeEventListener('ended', handleVideoEnd);
  //   };
  // }, []);

  Aos.init({ able: "mobile" });

  const icons = [
    {
      icon: <GoPlus size={25} fontWeight={400} />,
    },
    {
      icon: <GoPlus size={25} fontWeight={400} />,
    },
    {
      icon: (
        <p className="text-uppercase fs-5 fw-semibold">scroll to explore</p>
      ),
    },
    {
      icon: <GoPlus size={25} fontWeight={400} />,
    },
    {
      icon: <GoPlus size={25} fontWeight={400} />,
    },
  ];
  const iconss = [
    {
      icon: <GoPlus size={25} fontWeight={400} />,
    },
    {
      icon: <GoPlus size={25} fontWeight={400} />,
    },

    {
      icon: <GoPlus size={25} fontWeight={400} />,
    },
    {
      icon: <GoPlus size={25} fontWeight={400} />,
    },
  ];

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    setPosition({ x, y });
  };

  return (
    <>
      {/* <Loader /> */}
      {/* <LandingPage /> */}
      {/* <SlideWithTooltip/> */}
      {/* <Effect/> */}
      {/* <DemoComponent/> */}
      {/* <Dancehaus/> */}
      <div className="">
        {/* <div className="container p-0">
          <h2 class="onbord  text-capitalize mt-5 mb-4 text-center leysv">
            Artificial Intelligence Tools <br></br> Make learning engaging,
            personalized and effective
          </h2>
          <video
            autoPlay
            width="100%"
            height="100%"
            playsInline
            loop
            muted
            className="video"
            style={{ pointerEvents: "none" }}
          >
            <source src={video} />
          </video>
        </div> */}
        {/* <div className="baner">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-2">
                <aside className="leftsidetag">
                  <span className="text-center get">GET SUPPORT</span>
                  <span className="ms-3">|</span>
                  <span className="text-center get ms-3">PRIVACY POLICY</span>
                  <span className="ms-3">|</span>
                  <span className="text-center get ms-3">GET IN TOUCH</span>
                </aside>
              </div>
              <div className="col-sm-4">
                <div className="banner "></div>
              </div>

              <div className="col-sm-4 my-5 text-white  pd-r-30">
                <h1 className="revive">
                  A.I.Tools Make Learning
                  <span className="personalised mt-5">
                    <br /> ENGAGING, PERSONALIZED and EFFECTIVE.
                  </span>
                </h1>
                <p className="exper">
                  {" "}
                  we quickly learn the new technology, train ourselves to make
                  learning relevant,contextual and tied to immediate Performance
                  needs.{" "}
                  <span className="d-flex viewlearn mt-5">
                    <input
                      type="text"
                      className="viewlearn__input"
                      placeholder="View Learning Samples"
                    />
                    <button type="button" className="viewlearn_btn">
                      <IoIosArrowRoundForward size={25} />
                    </button>
                  </span>
                  <Family />
                </p>
              </div>
              <div className="col-sm-2 ">
                <MdGpsFixed size={25} />

                <FaFacebook size={25} />
                <FaInstagram size={25} />
                <FaWhatsapp size={25} />
                <FaYoutube size={25} />
                <FaTwitter size={25} />
              </div>
            </div>
          </div>
        </div> */}

        <div className="baner">
          <div className="container-fluid ">
            <aside className="leftsidetag">
              <span className="text-center get">GET SUPPORT</span>
              <span className="ms-3">|</span>
              <span className="text-center get ms-3">PRIVACY POLICY</span>
              <span className="ms-3">|</span>
              <span className="text-center get ms-3">GET IN TOUCH</span>
            </aside>
            <div className="row mt-10 align-items-center">
              <div className="col-sm-1"></div>
              <div className="col-sm-4">
                <img src={toy} className="toy" />
              </div>
              <div className="col-sm-4  pd-l-30">
                <h1 className="text-white ">A.I.Tools Make Learning</h1>
                <h1 className="text-main mt-3">
                  ENGAGING, PERSONALIZED and EFFECTIVE.
                </h1>
                <p className="text-white mt-3">
                  {" "}
                  we quickly learn the new technology, train ourselves to make
                  learning relevant,contextual and tied to immediate Performance
                  needs.
                </p>
                <button type="button" className="viewlearn_btn mt-5">
                  <p className="mb-0">View Learning Samples</p>

                  <IoIosArrowRoundForward size={25} />
                </button>
                <Family />
              </div>
              <div className="col-sm-2 text-center  pd-l-30">
                <MdGpsFixed color="#ffb905" size={25} className="mb-3" />

                <br />
                <div className="text-align-center">
                  <FaFacebook size={25} className="mb-3" color="#ffb905" />
                  <FaInstagram size={25} className="mb-3" color="#ffb905" />
                  <FaWhatsapp size={25} className="mb-3" color="#ffb905" />
                  <FaYoutube size={25} className="mb-3" color="#ffb905" />
                  <FaTwitter size={25} className="mb-3" color="#ffb905" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5  desktop_show">
          <div className="bg-skilleds mt-5">
            <div className="container">
              <h1
                className="homeistheading text-center"
                data-aos="fade-right"
                data-aos-offset="20"
                data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top"
              >
                Upskilling Solutions For
              </h1>
              <h1
                className="homeistheading ms"
                data-aos="fade-left"
                data-aos-offset="20"
                data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top"
              >
                Every Business Function{" "}
              </h1>

              <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6">
                  <p className="skillss_para mt-4">
                    We offer impactful workforce development Solutions that let
                    your people perform continuously.
                  </p>
                  <div className="" onMouseMove={handleMouseMove}>
                    <Button
                      className=" d-flex align-items-center justify-content-around mx-1 mt-5 text-uppercase  buttonhov "
                      text="uppercash"
                      bg="#ffffff"
                      color="black"
                      padding="10px 1.125em 10px 1.625em"
                      rounded="20px"
                      shadow=" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                    >
                      <span>
                        <GoDotFill size={15} className="me-2" />
                        Download case study
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mobile_show">
          <h1
            className="homeistheading text-center "
            data-aos="fade-up"
            data-aos-offset="50"
          >
            Upskilling Solutions For Every Business Function{" "}
          </h1>
          {/* <h1 className="homeistheading ms" data-aos="fade-up">
            Every Business Function{" "}
          </h1> */}

          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6">
              <p className="skillss_para mt-4">
                We offer impactful workforce development Solutions that let your
                people perform continuously.
              </p>
              <div className="" onMouseMove={handleMouseMove}>
                <Button
                  className=" d-flex align-items-center justify-content-around mx-1 mt-5 text-uppercase  buttonhov "
                  text="uppercash"
                  bg="#ffffff"
                  color="black"
                  padding="10px 1.125em 10px 1.625em"
                  rounded="20px"
                  shadow=" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                >
                  <span>
                    <GoDotFill size={15} className="me-2" />
                    Download case study
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap ">
          <div className="container warps">
            <div className="row align-items-center mb-4">
              <div className="col-sm-6 pd-r-30  ">
                <img
                  src={farmstead}
                  width="100%"
                  className="rounded process_hover fgh"
                  data-aos="zoom-in"
                  data-aos-anchor-placement="top-bottom"
                  alt=""
                />
              </div>

              <div className="col-sm-6 pd-r-30 ">
                <div className="">
                  {/* <h2 className="onbord mb-4">
                <TypeAnimation
                sequence={["Employee Onboarding", 1000]}
                speed={450}
                className=""
                repeat={Infinity}
                />
                </h2> */}
                  <h2 className="onbord mb-4">Employee Onboarding</h2>
                  {/* <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
                    <h1>animateOut</h1>
                  </ScrollAnimation> */}
                  <p
                    className="skills_para "
                    data-aos="fade-up"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    Let Your Employees Feel Happy About Their Joining Decisions.
                    Our onboarding solutions impact the overall employee feel
                    good factor after they have joined.
                  </p>
                  {/*  */}
                  <div className="cont">
                    <Button className="onbords ">READ MORE </Button>
                    <IoIosArrowRoundForward className="arrow mt-1" size={40} />
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-4">
              <div className="col-sm-6 ">
                <h2
                  className="onbord mb-4"
                  data-aos="fade-down"
                  data-aos-offset="50"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  Compliance
                </h2>
                <p
                  className="skills_para"
                  data-aos="fade-up"
                  data-aos-offset="50"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  Complex laws and evolving policies are challenging for your
                  teams to navigate.Our compliance solutions ensure that
                  employees are aware, emotionally connected and invested into
                  the cause. Discover more about our learning solutions by
                  Downloading our compliance learning journey framework.
                </p>

                <div className="cont">
                  <Button className="onbords  mt-2">READ MORE </Button>
                  <IoIosArrowRoundForward
                    className="arrow mt-2"
                    size={40}
                  />{" "}
                </div>
              </div>
              <div className="col-sm-6 pd-l-30">
                <div className="">
                  <img
                    src={complex}
                    width="100%"
                    className="roun pd-l-30"
                    data-aos="zoom-in"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  />
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-sm-6 pd-r-30">
                <img
                  src={Diversity}
                  width="100%"
                  className="rounded process_hover"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  alt=""
                />
              </div>
              <div className="col-sm-6 ">
                <div className="">
                  <h2
                    className="onbord mb-4"
                    data-aos="fade-down"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out-cubic"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    Diversity, Equality & Inclusion
                  </h2>
                  <p
                    className="skills_para"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    Our programs help you become a recognized inclusive brand
                    and gain huge social respect among customers, employees and
                    communities alike. To foster belongingness among cross
                    generations and diversified culture.
                  </p>

                  <div className="cont">
                    <Button className="onbords  mt-2">READ MORE </Button>
                    <IoIosArrowRoundForward
                      className="arrow mt-2"
                      size={40}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-4">
              <div className="col-sm-6 ">
                <h2
                  className="onbord mb-4"
                  data-aos="fade-up"
                  data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  Product Training
                </h2>
                <p
                  className="skills_para"
                  data-aos="fade-down"
                  data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  To communicate the various aspects of the products like
                  features, advantages, benefits and differentiators from the
                  market and technology.Our product training impacts speed to
                  market, product adoption, accurate after sales service and,
                  customer satisfaction levels.
                </p>

                <div className="cont">
                  <Button className="onbords  mt-2">READ MORE </Button>
                  <IoIosArrowRoundForward
                    className="arrow mt-2"
                    size={40}
                  />{" "}
                </div>
              </div>
              <div className="col-sm-6 pd-l-30">
                <div className="">
                  <img
                    src={product}
                    width="100%"
                    className="rounded process_hover"
                    data-aos="flip-down"
                    data-aos-anchor-placement="top"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center mb-4">
              <div className="col-sm-6 pd-r-30">
                <img
                  src={sale}
                  width="100%"
                  className="rounded process_hover"
                  data-aos="zoom-out"
                  data-aos-anchor-placement="top"
                  alt=""
                />
              </div>
              <div className="col-sm-6">
                <div className="">
                  <h2
                    className="onbord mb-4"
                    data-aos="fade-up"
                    data-aos-offset="20"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    Sales Enablement
                  </h2>
                  <p
                    className="skills_para"
                    data-aos="fade-up"
                    data-aos-offset="20"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    Buyers expectations are evolving each day. Sales needs to be
                    responsive to the ever changing needs
                  </p>

                  <div className="cont">
                    <Button className="onbords  mt-2">READ MORE </Button>
                    <IoIosArrowRoundForward
                      className="arrow mt-2"
                      size={40}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center mb-4">
              <div className="col-sm-6">
                <h2
                  className="onbord mb-4"
                  data-aos="fade-up"
                  data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  Customer Service Training
                </h2>
                <p
                  className="skills_para"
                  data-aos="fade-up"
                  data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  Customers are looking for consistent experience at each
                  interaction with the company. Our solutions help companies to
                  improve customer satisfaction for repeat business, referral
                  sales and word of mouth marketing.
                </p>

                <div className="cont">
                  <Button className="onbords  mt-2">READ MORE </Button>
                  <IoIosArrowRoundForward className="arrow mt-2" size={40} />
                </div>
              </div>
              <div className="col-sm-6 pd-l-30">
                <div className="">
                  <img
                    src={customer}
                    width="100%"
                    className="rounded process_hover"
                    data-aos="flip-left"
                    data-aos-anchor-placement="top"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-sm-6 pd-r-30">
                <img
                  src={leadership}
                  width="100%"
                  className="rounded process_hover"
                  data-aos="flip-right"
                  data-aos-anchor-placement="top"
                  alt=""
                />
              </div>
              <div className="col-sm-6">
                <div className="">
                  <h2
                    className="onbord mb-4"
                    data-aos="fade-up"
                    data-aos-offset="20"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    Leadership Training
                  </h2>
                  <p
                    className="skills_para"
                    data-aos="fade-up"
                    data-aos-offset="20"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    Good leadership can permeate all levels of an organization
                    to assure the smooth functioning of the individual teams, on
                    their...
                  </p>
                  <div className="cont">
                    <Button className="onbords  mt-2">READ MORE </Button>
                    <IoIosArrowRoundForward className="arrow mt-2" size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid udhs">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-10 p-5 m-auto">
                  <video
                    autoPlay
                    width="100%"
                    playsInline
                    loop
                    muted
                    className="vide"
                    style={{ pointerEvents: "none" }}
                  >
                    <source src={videoss} />
                  </video>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-8 tailored">
                  <p className="fs-3">
                    Driven by AI and MI, our tailored learning solutions adapt
                    to individual needs, delivering an unparalleled,dynamic
                    learning experience. By leveraging cutting-edge technology,
                    we empower organizations to unleash their full potential,
                    fostering a culture of Continuous growth and expertise.{" "}
                  </p>
                  <div className="" onMouseMove={handleMouseMove}>
                    <Button
                      className=" d-flex align-items-center justify-content-around mx-1 mt-5 text-uppercase  buttonhov "
                      text="uppercash"
                      bg="#ffffff"
                      color="black"
                      padding="10px 1.125em 10px 1.625em"
                      rounded="20px"
                      shadow=" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                    >
                      <span>
                        <GoDotFill size={15} className="me-2" />
                        About
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-0 mt-5">
          <div className="row mx-0">
            <div className="col-4 pluscol">
              <span>
                <GoPlus size={20} fontWeight={400} />
              </span>
              <GoPlus size={20} fontWeight={400} />
            </div>
            <div className="col-4 ">
              <p className="text-center"> </p>{" "}
            </div>
            <div className="col-4 pluscol">
              <span>
                <GoPlus size={20} fontWeight={400} />
              </span>
              <span>
                <GoPlus size={20} fontWeight={400} />
              </span>
            </div>
          </div>
        </div>

        {/* <div className="container">
        <div className="row">
          {iconss.map((val, i) => (
            <div className="col-sm-4 pluscol  "> {val.icon}{val.icon}</div>
          ))}
        </div>
      </div> */}

        {/* <Website /> */}
        <div className="container ">
          <video
            autoPlay
            width="100%"
            playsInline
            loop
            muted
            className="videoss"
            style={{ pointerEvents: "none" }}
          >
            <source src={videoss} />
          </video>
        </div>
        <div className="container px-0">
          <div className="row mx-0">
            <div className="col-4 pluscol">
              <span>
                <GoPlus size={20} fontWeight={400} />
              </span>
              <GoPlus size={20} fontWeight={400} />
            </div>
            <div className="col-4 ">
              <p className="text-center"> </p>{" "}
            </div>
            <div className="col-4 pluscol">
              <span>
                <GoPlus size={20} fontWeight={400} />
              </span>
              <span>
                <GoPlus size={20} fontWeight={400} />
              </span>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row mt-5">
            <div className="col-sm-4">
              <p className="skillss_para mt-4">
                Continuous improvement is necessary for organisation to remain
                competitive and relevant. On the other hand, the will to learn &
                make improvement makes employees adaptable to change. What is
                your purpose to make improvement in your organisation?
              </p>
              <div className="" onMouseMove={handleMouseMove}>
                <Button
                  className=" d-flex align-items-center justify-content-around mx-1 mt-5 text-uppercase  buttonhov "
                  text="uppercash"
                  bg="#ffffff"
                  color="black"
                  padding="10px 1.125em 10px 1.625em"
                  rounded="20px"
                  shadow=" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                >
                  <span>
                    <GoDotFill size={15} className="me-2" />
                    Download Ebook
                  </span>
                </Button>
              </div>
            </div>
            {/* <div className="col-sm-2"></div> */}

            <div className="col-sm-8">
              <h1 className="prosp text-end" data-aos="fade-up">
                PURPOSE BASED
              </h1>
              <h1 className="prosp text-center" data-aos="fade-up">
                LEARNING INITIATIVES
              </h1>
            </div>
          </div>
        </div>
        <CustomerSlider />
        <Multi />
        {/* <Carosl/> */}

        <div className="wrps mt-5" style={{ position: "relative" }}>
          <div className="container-fluid ">
            <img
              src={bgskill}
              className="bgskil"
              style={{ position: "absolute" }}
              width={300}
            />
          </div>
          <div className="container-fluid bgcol">
            <div className="bg-skilledss"></div>

            <div className="container wars ">
              <div className="row align-items-center mt-5">
                <div className="col-sm-6">
                  <h1
                    className="devels me-5"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="150"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                  >
                    LEARNING CONTENT DEVELOPMENT
                  </h1>
                  <p
                    className="skillss_pra"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="150"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                  >
                    On the basis of your training needs, learners persona,
                    learning objective, training budget etc. we can consult you
                    to choose a modality which meets your overall objectives.
                    For content creation aligned with your goals, here’s a
                    starter kit of what we can help you with:
                  </p>
                  <div className="" onMouseMove={handleMouseMove}>
                    <Button
                      className=" d-flex align-items-center justify-content-around mx-1 mt-5 text-uppercase  buttonhov "
                      text="uppercash"
                      bg="#ffffff"
                      color="black"
                      padding="10px 1.125em 10px 1.625em"
                      rounded="20px"
                      shadow=" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                    >
                      <span>
                        <GoDotFill size={15} className="me-2" />
                        VIEW LEARNING SAMPLES
                      </span>
                    </Button>
                  </div>
                </div>

                <div className="col-sm-6 learncontent">
                  <img
                    src={Content}
                    width="100%"
                    className="rounded process_hover"
                    data-aos="flip-down"
                    data-aos-anchor-placement="top"
                    alt=""
                  />

                  <h2
                    className="onbord mt-4"
                    data-aos="fade-up"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                  >
                    Custom Content Development
                  </h2>
                  <p
                    className="skills_para mt-3"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="150"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                  >
                    Personalise your training program by infusing organisation
                    specific use cases. deeper learning, clearing fundamentals,
                    explaining large concepts, long programs, multiple
                    modalities, requires lot of effort by learner.
                  </p>
                  <div className="cont">
                    <Button className="onbords ">Know MORE </Button>
                    <IoIosArrowRoundForward className="arrow mt-1" size={40} />
                  </div>
                </div>
              </div>

              <div className="row erfgn ">
                <div className="col-sm-6  learncontent  mt-5 pd-right">
                  {" "}
                  <img
                    src={Based}
                    width="100%"
                    className="rounded process_hover"
                    data-aos="flip-up"
                    alt=""
                  />
                  <h2
                    className="onbord mt-4"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="150"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                  >
                    Game Based Learning
                  </h2>
                  <p
                    className="skills_para mt-3"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="150"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                  >
                    Excite your learners by triggering real human emotions.
                    Excitement, competitiveness, extremely high engagement,
                    problem solving, need to cross hurdles, solve problems and
                    apply analytical mind
                  </p>
                  <div className="cont">
                    <Button className="onbords">Know MORE </Button>
                    <IoIosArrowRoundForward className="arrow mt-2" size={40} />
                  </div>
                </div>

                <div className="col-sm-6  learncontent animside mt-5 pd-left">
                  {" "}
                  <img
                    src={Animations}
                    width="100%"
                    className="rounded process_hover"
                    data-aos="flip-down"
                    data-aos-anchor-placement="top"
                    alt=""
                  />
                  <div>
                    <h2
                      className="onbord mt-4"
                      data-aos="fade-up"
                      data-aos-offset="20"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="true"
                      data-aos-anchor-placement="top"
                    >
                      Animations & Video
                    </h2>
                    <p
                      className="skills_para mt-3"
                      data-aos="fade-up"
                      data-aos-offset="20"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="true"
                      data-aos-anchor-placement="top"
                    >
                      Liven up boring content through visual & audio elements.
                      Quick knowledge transfer or emotional impact, little
                      effort by learner.
                    </p>
                  </div>
                  <div className="cont">
                    <Button className="onbords">Know MORE </Button>
                    <IoIosArrowRoundForward className="arrow mt-1" size={40} />
                  </div>
                </div>
              </div>

              <div className="row  erfgn">
                <div className="col-sm-6  learncontent mt-5 pd-right">
                  {" "}
                  <img
                    src={AR}
                    width="100%"
                    className="rounded process_hover"
                    data-aos="flip-up"
                    data-aos-anchor-placement="top"
                    alt=""
                  />
                  <h2
                    className="onbord mt-4"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="150"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                  >
                    AR / VR Solutions
                  </h2>
                  <p
                    className="skills_para mt-3"
                    data-aos="fade-up"
                    data-aos-offset="20"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    Enable your employees to practise real business challenges
                    in a risk free environment. Practice in the difficult
                    scenarios, complete immersion into an environment, improves
                    muscles memory,
                  </p>
                  <div className="cont">
                    <Button className="onbords">Know MORE </Button>
                    <IoIosArrowRoundForward className="arrow mt-1" size={40} />
                  </div>
                </div>
                <div className="col-sm-6 learncontent mt-5 pd-left">
                  {" "}
                  <img
                    src={Artifical}
                    width="100%"
                    className="rounded process_hover"
                    data-aos="flip-down"
                    data-aos-anchor-placement="top"
                    alt=""
                  />
                  <h2
                    className="onbord mt-4"
                    data-aos="fade-up"
                    data-aos-offset="20"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    Artifical Intelligence
                  </h2>
                  <p
                    className="skills_para mt-3"
                    data-aos="fade-up"
                    data-aos-offset="20"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    Leverage AI to make training more personalised for learners.
                    Like Chatbot - personalization of content, automation,
                    conversation.
                  </p>
                  <div className="cont">
                    <Button className="onbords">Know MORE </Button>
                    <IoIosArrowRoundForward className="arrow mt-1" size={40} />
                  </div>
                </div>
              </div>

              <div className="row  erfgn">
                <div className="col-sm-6  learncontent mt-5 pd-right">
                  {" "}
                  <img
                    src={Micro}
                    width="100%"
                    className="rounded process_hover"
                    data-aos="flip-right"
                    data-aos-anchor-placement="top"
                    alt=""
                  />
                  <h2
                    className="onbord mt-4"
                    data-aos="fade-up"
                    data-aos-offset="20"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    Micro-Learning
                  </h2>
                  <p
                    className="skills_para mt-3"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="150"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                  >
                    Enable your learners by providing point of service/sale
                    (POS) aids. Performance support, reinforcement, training
                    follow ups, pre-training or post training
                  </p>
                  <div className="cont">
                    <Button className="onbords">Know MORE </Button>
                    <IoIosArrowRoundForward className="arrow mt-1" size={40} />
                  </div>
                </div>

                <div className="col-sm-6 learncontent mt-5 pd-left">
                  {" "}
                  <img
                    src={Translation}
                    width="100%"
                    className="rounded process_hover"
                    data-aos="flip-down"
                    data-aos-anchor-placement="top"
                    alt=""
                  />
                  <h2
                    className="onbord mt-4"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="150"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                  >
                    Translation & Localization
                  </h2>
                  <p
                    className="skills_para mt-3"
                    data-aos="fade-up"
                    data-aos-offset="20"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    Think global and act local. Take your training program to
                    places by provisioning the content in the local language.
                    Addresses the global workforce, ease of learning in own
                    language and cultural,
                  </p>
                  <div className="cont">
                    <Button className="onbords">Know MORE </Button>
                    <IoIosArrowRoundForward className="arrow mt-1" size={40} />
                  </div>
                </div>
              </div>
              <div className="mt-4"></div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="bg mt-5"></div>
        </div>
        <Multicarousel />
        {/* <div
          className="parallax_feature"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}

        {/* <Canvas/> */}
        {/* <div className="container-fluid p-0">
      <video
        // ref={videoRef}
        id="background-video"
        autoPlay
        width="100%"
        height="100%"
        playsInline
        loop
        muted
        className="mt-3"
        style={{ pointerEvents: "none" }}
      >
        <source src={vide} />
      </video>
    </div> */}
        <div className="container  py-4">
          <div className="row">
            {/* <div className="col-sm-1"></div> */}
            <div className="col-sm-12 text-center">
              <h2 class="makesour  text-capitalize mt-5 mb-4">
                This Makes Our Hearts Beat <br></br> Faster Every Day
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 text-center">
              <p className="rsn text-center  mt-3">
                there are many reasons <br></br> why our parents love to work
                with us
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 m-auto">
              <div className="row">
                <div className="col-sm-6">
                  <div className="">
                    <div className="testimonials  p-5">
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src={farmstead}
                          width="
      100px"
                          height="100px"
                          className="image "
                        />
                      </div>
                      <p className="glb text-center ">
                        <div className="my-5">
                          <span>
                            {" "}
                            <BiSolidQuoteAltLeft
                              size={10}
                              className="mx-2 comas"
                            />
                          </span>
                          <span className="">
                            Think global and act local. Take your traning
                            program to places by provisioning the content in the
                            local language Addresses the global workforce, ease
                            of learing in own language and cultural
                          </span>
                          <span>
                            {" "}
                            <BiSolidQuoteAltRight
                              size={10}
                              className="mx-2 comas"
                            />
                          </span>
                        </div>
                        <h4 class="user-name ">
                          SOPHIA SMITH
                          <span className="ceo">(CEO REFERENCE)</span>
                        </h4>
                        <p className="starimg">
                          <span
                            role="img"
                            aria-label="star"
                            className="text-warning mr-1"
                          >
                            ⭐️
                          </span>
                          <span
                            role="img"
                            aria-label="star"
                            className="text-warning mr-1"
                          >
                            ⭐️
                          </span>
                          <span
                            role="img"
                            aria-label="star"
                            className="text-warning mr-1"
                          >
                            ⭐️
                          </span>
                          <span
                            role="img"
                            aria-label="half-star"
                            className="text-warning mr-1"
                          >
                            ⭐️
                          </span>
                          <span
                            role="img"
                            aria-label="empty-star"
                            className="text-warning mr-1"
                          >
                            ⭐️
                          </span>
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className=" ">
                    <div className="testimonials   p-5">
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src={farmstead}
                          width="
      100px"
                          height="100px"
                          className="image "
                        />
                      </div>
                      <p className="glb text-center  ">
                        <div className="my-5">
                          <span>
                            {" "}
                            <BiSolidQuoteAltLeft
                              size={10}
                              className="mx-2 comas"
                            />
                          </span>
                          <span className="">
                            Think global and act local. Take your traning
                            program to places by provisioning the content in the
                            local language Addresses the global workforce, ease
                            of learing in own language and cultural
                          </span>
                          <span>
                            {" "}
                            <BiSolidQuoteAltRight
                              size={10}
                              className="mx-2 comas"
                            />
                          </span>
                        </div>
                        <h4 class="user-name ">
                          SOPHIA SMITH
                          <span className="ceo">(CEO REFERENCE)</span>
                        </h4>
                        <p className="starimg">
                          <span
                            role="img"
                            aria-label="star"
                            className="text-warning mr-1"
                          >
                            ⭐️
                          </span>
                          <span
                            role="img"
                            aria-label="star"
                            className="text-warning mr-1"
                          >
                            ⭐️
                          </span>
                          <span
                            role="img"
                            aria-label="star"
                            className="text-warning mr-1"
                          >
                            ⭐️
                          </span>
                          <span
                            role="img"
                            aria-label="half-star"
                            className="text-warning mr-1"
                          >
                            ⭐️
                          </span>
                          <span
                            role="img"
                            aria-label="empty-star"
                            className="text-warning mr-1"
                          >
                            ⭐️
                          </span>
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="mt-5"></div>

        {/* <Astro/> */}
      </div>
    </>
  );
};

export default Home;
