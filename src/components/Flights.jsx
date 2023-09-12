import React from "react";
import styles from "../styles";
import { dragAndDropFlight, flightGrid } from "../assets";
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

const fadeRight = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
      ease: "easeOut",
    },
  },
};

const Flights = () => {
  return (
    <div
      className={`${styles.SectionBox} bg-gradient-to-t from-darkBlue to-blue py-[0] lg:py-[160px] `}
    >
      <div
        className={`${styles.contentBox} bg-white lg:px-[64px] lg:py-[64px] px-[8px] py-[64px] rounded-none lg:rounded-2xl`}
      >
        {" "}
        {/* Content Box */}
        <div className={`${styles.h2BoxFlat}`}>
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
            className={`${styles.h2} pb-[32px] text-center text-darkBlue pt-[32px]`}
          >
            Never enter a <span className="text-blue">flight</span>, or build a
            grid again.
          </motion.h2>
        </div>
        {/* Mobile */}
        <div className="flex flex-col gap-[32px] lg:hidden">
          <div className="">
            <div className="h-[2px] w-full bg-gray"></div>
            <h5 className={`${styles.tag} pt-[16px]`}>Step 1</h5>
            <h5 className={`${styles.h5} text-darkBlue`}>Upload Tickets.</h5>
            <p className={`${styles.body} text-darkBlue`}>
              View, sort and filter every flight across a tour, and export them
              as a spreadsheet. Daysheets eliminates the risk involved in
              manually creating flight grids.
            </p>
          </div>

          <div className=" bg-blue border-[1px] border-gray rounded-xl">
            <img
              src={dragAndDropFlight}
              alt="Plane tickets being uploaded to Daysheets"
              className=""
              loading="lazy"
            />
          </div>

          <div>
            <h5 className={`${styles.tag} pt-[16px]`}>Step 2</h5>
            <h5 className={`${styles.h5} text-darkBlue`}>
              Build flight grids, & export with complete customization.
            </h5>
            <p className={`${styles.body} text-darkBlue`}>
              View, sort and filter every flight across a tour, and export them
              as a spreadsheet. Daysheets eliminates the risk involved in
              manually creating flight grids.
            </p>
          </div>

          <div className="overflow-hidden h-[480px] bg-lightWhite border-[1px] border-gray rounded-xl pt-[32px]">
            <img
              src={flightGrid}
              alt="A Flight grid in Daysheets"
              className="w-[1000px] max-w-none"
              loading="lazy"
            />
          </div>
        </div>
        {/* Desktop */}
        <div className="gap-[32px] pt-[32px] hidden lg:grid lg:grid-cols-2 lg:grid-rows-[300px,480px]">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className="pb-16"
          >
            <div className="h-[2px] w-full bg-gray"></div>
            <h5 className={`${styles.tag} pt-[16px]`}>Step 1</h5>
            <h5 className={`${styles.h5} text-darkBlue`}>
              Upload tickets in any format.
            </h5>
            <p className={`${styles.body} text-darkBlue`}>
              Whether you engage a travel agent or book flights independently,
              just drag the ticket into Daysheets, and we’ll manage the data
              entry for you. Say goodbye to the hassle of manual input.
            </p>
          </motion.div>

          <div className=" bg-blue border-[1px] border-gray rounded-xl overflow-hidden">
            <img
              src={dragAndDropFlight}
              alt="Plane tickets being uploaded to Daysheets"
              className="h-full object-cover object-right"
              loading="lazy"
            />
          </div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >
            <div className="h-[2px] w-full bg-gray"></div>
            <h5 className={`${styles.tag} pt-[16px]`}>Step 2</h5>
            <h5 className={`${styles.h5} text-darkBlue`}>
              Build flight grids, & export with complete customization.
            </h5>
            <p className={`${styles.body} text-darkBlue`}>
              View, sort and filter every flight across a tour, and export them
              as a spreadsheet. Daysheets eliminates the risk involved in
              manually creating flight grids.
            </p>
          </motion.div>

          <div className="overflow-hidden bg-lightWhite border-[1px] border-gray rounded-xl pt-[32px]">
            <img
              src={flightGrid}
              alt="A Flight grid in Daysheets"
              className="w-[1000px] max-w-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
