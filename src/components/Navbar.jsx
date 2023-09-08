import React, { useState, useEffect } from "react";
import styles from "../styles"; // Import css modules stylesheet as styles
import { logo } from "../assets"; // Import assets
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import { PopupButton } from "react-calendly";
import Popup from "./Popup";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [isHidden, setIsHidden] = useState(true);

  const toggleDisplay = () => {
    setIsHidden(!isHidden);
  };

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <Popup isOpen={popupOpen} onClose={closePopup} formId="navbar-form" />

      <div
        className={`${styles.navBox} bg-frostedGlass border-[1px] border-gray backdrop-filter backdrop-blur bg-opacity-30 relative`}
      >
        {/* Demo Modal */}

        <div
          className={`fixed left-0 top-0 right-0 h-[100vh] mx-auto justify-center items-center bg-dimBlack z-40 ${
            isHidden ? "hidden" : "flex"
          }`}
        >
          <div className={`flex flex-col lg:flex-row`}>
            <div className="bg-blue lg:rounded-l-lg rounded-t-lg flex-col w-full lg:flex lg:max-w-[560px]">
              {" "}
              {/* Modal contents */}
              <div className="my-[16px] ml-[32px]">
                <div
                  className="bg-white w-[32px] h-[32px] flex flex-col items-center justify-center rounded-full cursor-pointer"
                  onClick={toggleDisplay}
                >
                  <AiOutlineClose size={20} color="blue" />
                </div>

                <h3
                  className={`${styles.h3} pt-[16px] text-white text-left hidden lg:block`}
                >
                  Book a Demo of Daysheets
                </h3>
                <p
                  className={`${styles.body} text-white text-left hidden lg:block`}
                >
                  Eliminate tedious time spent on data entry. We’ve re-imagined
                  how to organize tours. Daysheets allows you to enjoy your day
                  off. Doesn’t that sound nice?{" "}
                </p>
              </div>
            </div>

            <div className="mx-auto flex flex-row">
              {" "}
              {/* Calendly */}
              <div className="App bg-lightWhite rounded-r-lg lg:hidden">
                <InlineWidget
                  url="https://calendly.com/michael-csc/daysheets-demo"
                  styles={{ height: "800px", width: "320px" }}
                />
              </div>
              <div className="App bg-lightWhite rounded-r-lg hidden lg:flex px-[16px]">
                <InlineWidget
                  url="https://calendly.com/michael-csc/daysheets-demo"
                  styles={{ height: "950px", width: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.contentBox} flex justify-between items-center h-[72px] px-4`}
        >
          {/* Navbar contents */}
          <div>
            <Link to="/">
              <img src={logo} alt="Daysheets logo" className="h-[40px]" />
            </Link>
          </div>
          <div className="flex-row items-center gap-[16px] hidden md:flex">
            {" "}
            {/* Navbar links and button */}
            <ul className="flex flex-row">
              <li className="p-4 text-darkBlue">
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
            <div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className={`App bg-blue text-black text-center ${styles.button} cursor-pointer`}
              onClick={openPopup}
            >
              <button>Download Daysheets</button>
            </div>
            <div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className={`App bg-blue text-black text-center ${styles.buttonBlack}`}
            >
              <PopupButton
                url="https://calendly.com/benatdaysheets/30"
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById("root")}
                text="Book a Demo"
              />
            </div>
          </div>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? (
              <AiOutlineClose size={20} color="darkBlue" />
            ) : (
              <AiOutlineMenu size={20} color="darkBlue" />
            )}
          </div>
          {/* Mobile Nav */}
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-[100vh] py-[16px] px-[16px] border-r border-r-gray-900 bg-lightWhite ease-in-out duration-500"
                : "fixed left-[-100%] top-0 w-[60%] h-[100vh] py-[16px] px-[16px] border-r border-r-gray-900 bg-lightWhite ease-in-out duration-500"
            }
          >
            <div>
              <Link to="/">
                <img src={logo} alt="Daysheets logo" className="h-[64px]" />
              </Link>
            </div>

            <div className="flex flex-col">
              <ul className="pt-24 pb-8 text-black ">
                <li className="p-4 border-b border-gray-600 text-darkBlue">
                  <Link to="/pricing">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
