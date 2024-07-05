// import React from "react";
// import "./index.css";
// import logo from "../../assests/logo/eLearning Carnival Logo.svg";
// import Button from "../../components/button";
// import { NavLink } from "react-router-dom";
// import { FiMinus } from "react-icons/fi";
// import { GoDotFill } from "react-icons/go";
// import { TypeAnimation } from "react-type-animation";
// const Navbar = () => {
//   return (
//     <div>
//       <div class="container-fluid topbarconfluid">
//         <div className=" container topbar">
//           <div className="">
//             <p className="mt-3 mking">
//               {" "}
//               new post
//               <FiMinus width={10} size={20} />
//               <span className="mking">making hybrid working work </span>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="d-flex  justify-content-between">
//           <div>
//             <div className="logo mt-5">
//               <NavLink to={"/"}>
//                 <img src={logo} alt="" className="logo" />
//               </NavLink>
//             </div>
//           </div>

//           <div className="ows">
//             <h2 class="onbord  text-capitalize mt-5 mb-4 yfgyh">
//               Artificial Intelligence Tools <br></br> Make learning engaging,
//               personalized and effective
//             </h2>
//           </div>
//           <div className="d-flex justify-content-between mt-5">
//             <div className="tls">
//               <Button
//                 className="d-flex align-items-center justify-content-center mx-1  bts"
//                 text="uppercash"
//                 color="black"
//                 width="45px "
//                 height="45px"
//                 rounded="50%"
//               >
//                 <span>
//                   <FiMinus width={100} size={20} />
//                 </span>
//               </Button>
//             </div>

//             <div className="tls">
//               {" "}
//               <Button
//                 className="btn_login  ms-2 bts"
//                 text="uppercash"
//                 bg=" #ffa500"
//                 padding="10px 1.25em 10px 1.525em "
//                 rounded="100px"
//               >
//                 LET'S TALK
//                 <span>
//                   <GoDotFill className="ms-3 mb-1" size={8} />
//                 </span>
//               </Button>
//             </div>
//             <div className="menus">
//               {" "}
//               <Button
//                 className="ms-3 btts"
//                 text="uppercash"
//                 color="black"
//                 padding="10px 15px "
//                 width="100% "
//                 rounded="100px"
//               >
//                 MENU
//                 <span className="">
//                   <GoDotFill className="ms-3 mb-1" size={8} />
//                   <GoDotFill className="mb-1" size={8} />
//                 </span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import { useState } from "react";
import "./index.css";
import logo from "../../assests/logo/eLearning Carnival Logo.svg";
import { NavLink } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import Button from "../../components/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Learning Solutions",
      url: "/learning-solutions",
    },
    {
      name: "Learning Impact",
      url: "/learning-impact",
    },

    {
      name: "Learning Development",
      url: "/learning",
    },
    {
      name: "Industrial Learning",
      url: "/industrial-learning",
    },

    // {
    //   name: "Contact us",
    //   url: "/contact-us",
    // },
  ];
  return (
    <>
      <div class="container-fluid topbar">
        <div className="">
          <p className="mt-3 mking">
            {" "}
            new post
            <FiMinus width={10} size={20} />
            <span className="mking">making hybrid working work </span>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="" style={{ position: "relative" }}>
          <div className="Navbar mt-4">
            <NavLink to="/">
              <img className="logo" src={logo} alt="logo" />
            </NavLink>
            <div className={`nav-items    ${isOpen && "open"}`}>
              {links.map((val) => (
                <NavLink
                  onClick={() => setIsOpen(false)}
                  className="link"
                  to={val.url}
                >
                  {val.name}
                </NavLink>
              ))}
              <Button
                className="ms-3"
                text="uppercash"
                bg="#ffb905"
                color="black"
                padding="8px 1.2em 8px 1.2em"
                rounded="20px"
                shadow=" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              >
                Contact us
              </Button>
              <div className=" border-bottm mt-4"></div>
            </div>
            <div
              className={`nav-toggle ${isOpen && "open"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Navbar;
