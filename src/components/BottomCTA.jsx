import React, { useState } from "react";
import styles from "../styles";
import { gradient } from "../assets";
import { motion } from "framer-motion";
import { PopupButton } from "react-calendly";
import Popup from "./Popup";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const fadeUp2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
      ease: "easeOut",
    },
  },
};

const BottomCTA = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div
      className={`${styles.sectionBox} pb-[64px] bg-white flex flex-col items-center px-[8px]`}
    >
      <Popup isOpen={popupOpen} onClose={closePopup} formId="bottom-form" />
      <div
        className={`${styles.contentBox} py-[120px] mx-[32px] w-full bg-blue flex flex-col items-center rounded-2xl relative z-10 overflow-hidden`}
      >
        <div className={`${styles.h2BoxFlat} z-10`}>
          <div className="flex flex-col items-center">
            <h2
              className={`${styles.h2} text-center pt-[16px] text-white pb-[16px]`}
            >
              Schedule a demo with a tour manager today.
            </h2>

            <div className="pb-[32px]">
              <p className={`text-white text-center`}>
                Daysheets is being built by seasoned tour & production managers.
                Schedule a demo for a glimpse into the future of touring.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-[16px]">
              <motion.button
                className={`${styles.heroButtonWhite} cursor-pointer`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
                onClick={openPopup}
              >
                Download Daysheets
              </motion.button>
              <motion.div
                className={`App bg-blue text-black text-center ${styles.heroButtonWhite}`}
                variants={fadeUp2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
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
              </motion.div>
            </div>
          </div>
        </div>

        <img
          src={gradient}
          alt="Gradient background"
          className="absolute z-0 top-0 opacity-50 w-full h-full"
        />
      </div>
    </div>
  );
};

export default BottomCTA;
