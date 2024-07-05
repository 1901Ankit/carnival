import React from "react";
import "./index.css";
import { IoIosArrowRoundForward } from "react-icons/io";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <div className="col-lg-4 col-sm-3 col-xs-12">
                <div className="single_footer">
                  <div className="ss">
                    <h5 className="">LEARNING SOLUTIONS</h5>

                    <ul>
                      <li>
                        <a href="#">Onboarding</a>
                      </li>
                      <li>
                        <a href="#">Sales Enablement</a>
                      </li>
                      <li>
                        <a href="#">Compliance</a>
                      </li>
                      <li>
                        <a href="#">Product Training</a>
                      </li>
                      <li>
                        <a href="#">Customer Service</a>
                      </li>
                      <li>
                        <a href="#">Diversity, Equality & Inclusion</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-3 col-xs-12 ps-5">
                <div className="single_footer single_footer_address">
                  <div className="ss">
                    <h5 className="lmp">LEARNING IMPACT</h5>
                    <ul className="lmp">
                      <li className="lmp">
                        <a href="#">Knowledge Improvement</a>
                      </li>
                      <li className="lmp">
                        <a href="#">Skill Development</a>
                      </li>
                      <li className="lmp">
                        <a href="#">Cultural Change</a>
                      </li>
                      <li className="lmp">
                        <a href="#">Learning Adoption</a>
                      </li>
                      <li className="lmp">
                        <a href="#">Performance Improvement</a>
                      </li>
                      <li className="lmp">
                        <a href="#">Creating Awareness</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-3 col-xs-12 ps-5">
                <div className="single_footer single_footer_address">
                  <h5 className="lmp">LEARNING DEVELOPMENT</h5>
                  <ul>
                    <li className="lmp">
                      <a href="#">Customer Development </a>
                    </li>
                    <li className="lmp">
                      <a href="#">Game Based Learning</a>
                    </li>
                    <li className="lmp">
                      <a href="#">Animation & Video</a>
                    </li>
                    <li className="lmp">
                      <a href="#">AR / VR Solutions</a>
                    </li>
                    <li className="lmp">
                      <a href="#">Artificial Intelligence</a>
                    </li>
                    <li className="lmp">
                      <a href="#">Translation & Localization</a>
                    </li>
                    <li className="lmp">
                      <a href="#">PDF/ Infographic</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 ps-4 sbcir">
            {/* <div className="col-lg-3 col-sm-3 col-xs-12"> */}
            <div className="single_footer single_footer_address">
              <h3 className="ssas">Subscribe to our newsletter</h3>
              <div className="signup_form">
                <form action="#">
                  <div className="d-flex subscribe">
                    <input
                      type="text"
                      className="subscribe__input"
                      placeholder="Your Email"
                    />
                    <button type="button" className="subscribe__btn">
                      <IoIosArrowRoundForward size={25} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-sm-3 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>CONTACT US</h4>
                <p className="lrn">Learning Carnival</p>
                <p className="lrn">Delhi NCR</p>
                <p className="lrn mt-4 ">+91-8008809</p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 col-sm-3 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>CONTACT US</h4>
              <p>Learning Carnival</p>
              Delhi NCR
            </div>
          </div> */}
        </div>
        <div className="row ">
          <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="single_footer single_footer_address">
              <p className="lrn">contact@elearningcarnival.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="single_footer single_footer_address">
              <p className="lrn "></p>
              <p className="lrn">
                Copyright © 2023{" "}
                <a href="#" className="fotr">
                  1 elearning carnival
                </a>
                .
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="single_footer single_footer_address">
              <p className="lrn "></p>
              <p className="lrn  ">
                Get Support | Privacy Policy | Get In TOuch
              </p>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-12 col-sm-12 col-xs-12">
            <p className="copyright">
              Copyright © 2019{" "}
              <a href="#" className="fotr">
                Akdesign
              </a>
              .
            </p>
      
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
