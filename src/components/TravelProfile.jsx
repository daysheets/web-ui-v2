import React from "react";
import styles from "../styles";
import {
  profileExport,
  profileRequest,
  iPhoneMock,
  profileExportM,
  profileRequestM,
} from "../assets";
import { motion } from "framer-motion";

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

const TravelProfile = () => {
  return (
    <div className={`${styles.sectionBoxFlat} bg-lightWhite px-[8px]`}>
      <div className={`${styles.contentBoxBig}`}>
        {/* Heading */}
        <div className={`${styles.h2Box}`}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className={` bg-dimBlue text-blue px-6 py-2 rounded-full font-semibold w-fit mx-auto`}
          >
            <h5>Coming soon</h5>
          </motion.div>
          <motion.h2
            variants={fadeUp2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className={`${styles.h2} pb-[16px] text-center text-darkBlue pt-[32px]`}
          >
            Introducing <span className="text-blue">Travel Profiles</span>.
          </motion.h2>
          <motion.div
            variants={fadeUp2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >
            <p className={` text-darkBlue ${styles.h2Body}`}>
              Daysheets introduces a new era of efficiency to tour management,
              with easy tabbing, speedy imports, and time-saving shortcuts.
            </p>
          </motion.div>
        </div>

        {/* Mobile */}

        <div className="flex flex-col lg:hidden gap-[32px]">
          <div className="my-auto flex flex-col items-center">
            <h5 className={`${styles.tag} pt-[16px]`}>Step 1</h5>
            <p className={`${styles.h5} font-bold text-darkBlue text-center`}>
              Request travel profiles as team members join the tour.
            </p>
          </div>

          <div>
            <img
              src={profileRequestM}
              alt="Profile Requests"
              className="px-[16px]"
              loading="lazy"
            />
          </div>

          <div className="my-auto flex flex-col items-center">
            <h5 className={`${styles.tag} pt-[16px]`}>Step 2</h5>
            <p className={`${styles.h5} font-bold text-darkBlue text-center`}>
              Your team adds the missing details, and taps share.{" "}
            </p>
            {/*<p class={`${styles.body} text-darkBlue`}>Members can store key details like passport and flyer numbers to share with any Daysheets tour.  Profiles can also be exported as a PDF for tours not as hip. </p>*/}
          </div>

          <div className="relative h-[480px] overflow-hidden px-[16px]">
            <img src={iPhoneMock} alt="Profile Requests" loading="lazy" />
          </div>

          <div className="my-auto flex flex-col items-center">
            <h5 className={`${styles.tag} pt-[16px]`}>Step 3</h5>
            <p className={`${styles.h5} font-bold text-darkBlue text-center`}>
              Check missing details and export once all are submitted.
            </p>
            {/*<p class={`${styles.body} text-darkBlue`}>Monitor travel profile statuses live. Spot a missing passport? Send a push alert.  Ready?  Export as a spreadsheet for travel agents or border crossings.</p>*/}
          </div>

          <div>
            <img
              src={profileExportM}
              alt="Profile Requests"
              className="px-[16px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="grid-cols-1 hidden lg:grid lg:grid-cols-3 items-start gap-y-[32px] gap-x-[32px]">
          <div className="flex flex-col justify-start mb-auto">
            <div className="my-auto flex flex-col items-center mx-auto max-w-[336px]">
              <h5 className={`${styles.tag} pt-[16px]`}>Step 1</h5>
              <p className={`${styles.h5} font-bold text-darkBlue text-center`}>
                Request travel profiles as team members join the tour.
              </p>
              {/*<p class={`${styles.body} text-darkBlue`}>Choose the details you require and let Daysheets handle the rest. Your team will be guided to share all necessary information, right through the app.</p>*/}
            </div>
          </div>

          <div className="flex flex-col justify-start mb-auto ">
            <div className="my-auto flex flex-col items-center mx-auto max-w-[336px]">
              <h5 className={`${styles.tag} pt-[16px]`}>Step 2</h5>
              <p className={`${styles.h5} font-bold text-darkBlue text-center`}>
                Your team adds the missing details, and taps share.{" "}
              </p>
              {/*<p class={`${styles.body} text-darkBlue`}>Members can store key details like passport and flyer numbers to share with any Daysheets tour.  Profiles can also be exported as a PDF for tours not as hip. </p>*/}
            </div>
          </div>

          <div className="flex flex-col justify-start mb-auto">
            <div className="my-auto flex flex-col items-center mx-auto max-w-[336px]">
              <h5 className={`${styles.tag} pt-[16px]`}>Step 3</h5>
              <p className={`${styles.h5} font-bold text-darkBlue text-center`}>
                Check missing details and export once all are submitted.
              </p>
              {/*<p class={`${styles.body} text-darkBlue`}>Monitor travel profile statuses live. Spot a missing passport? Send a push alert.  Ready?  Export as a spreadsheet for travel agents or border crossings.</p>*/}
            </div>
          </div>

          <div className="pt-[64px]">
            <img
              src={profileRequest}
              alt="Profile Requests"
              className="mx-auto"
              loading="lazy"
            />
          </div>

          <div className="relative">
            <img
              src={iPhoneMock}
              alt="Profile Requests"
              className=" mx-auto"
              loading="lazy"
            />
          </div>

          <div className="pt-[64px]">
            <img
              src={profileExport}
              alt="Profile Requests"
              className="mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelProfile;
