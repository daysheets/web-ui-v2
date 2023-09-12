import React from "react";
import styles from "../styles";
import { exports, room, personnel, transfer, pdf } from "../assets";
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

const Exports = () => {
  return (
    <section className={`${styles.sectionBox} bg-lightWhite px-8`}>
      <div className={`${styles.contentBoxBig}`}>
        <div className={`${styles.h2BoxFlat} pb-[16px] lg:pb-0`}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className={` bg-dimBlue text-blue px-6 py-2 rounded-full font-semibold w-fit mx-auto`}
          >
            <h5>Exports</h5>
          </motion.div>
          <motion.h2
            variants={fadeUp2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className={`${styles.h2} text-center text-darkBlue pt-[32px]`}
          >
            Endless exports with complete customization.
          </motion.h2>
        </div>

        {/* Mobile */}
        <div className="flex flex-col lg:hidden text-darkBlue gap-[16px]">
          <div className="flex items-center gap-[24px]">
            <div>
              <img
                src={personnel}
                alt="CSV Illustration"
                className="max-h-[160px]"
                loading="lazy"
              />
            </div>
            <div>
              <h5 className={`${styles.h5}`}>Rooming Lists</h5>
              <p className={styles.body}>
                Send quick rooming lists to a hotel, or your travel agent.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[24px]">
            <div>
              <img
                src={personnel}
                alt="CSV Illustration"
                className="max-h-[160px]"
                loading="lazy"
              />
            </div>
            <div>
              <h5 className={`${styles.h5}`}>Personnel Manifests</h5>
              <p className={styles.body}>
                Send quick rooming lists to a hotel, or your travel agent.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[24px]">
            <div>
              <img
                src={transfer}
                alt="CSV Illustration"
                className="max-h-[160px]"
                loading="lazy"
              />
            </div>
            <div>
              <h5 className={`${styles.h5}`}>Transfer Grids</h5>
              <p className={styles.body}>
                Send quick rooming lists to a hotel, or your travel agent.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[24px]">
            <div>
              <img
                src={pdf}
                alt="PDF Illustration"
                className="max-h-[160px]"
                loading="lazy"
              />
            </div>
            <div>
              <h5 className={`${styles.h5}`}>Custom Day Sheets</h5>
              <p className={styles.body}>
                Send quick rooming lists to a hotel, or your travel agent.
              </p>
            </div>
          </div>
        </div>

        {/* Destop */}
        <div className=" mx-auto hidden lg:grid grid-cols-4 gap-y-[12px] gap-x-[32px] justify-center items-center text-darkBlue">
          <motion.img
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 1 }}
            src={exports}
            alt="Arrows"
            className="col-span-4 w-[75%] mx-auto pb-[32px]"
            loading="lazy"
          />
          <motion.img
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 1 }}
            src={room}
            alt="CSV Illustration"
            className="w-[160px] mx-auto"
            loading="lazy"
          />
          <motion.img
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 1 }}
            src={personnel}
            alt="CSV Illustration"
            className="w-[160px] mx-auto"
            loading="lazy"
          />
          <motion.img
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 1 }}
            src={transfer}
            alt="CSV Illustration"
            className="w-[160px] mx-auto"
            loading="lazy"
          />
          <motion.img
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 1 }}
            src={pdf}
            alt="PDF Illustration"
            className="w-[160px] mx-auto"
            loading="lazy"
          />
          <motion.div className="mx-auto">
            <p
              className={`text-xl font-bold text-center font-body text-darkBlue pb-[8px]`}
            >
              Rooming Lists
            </p>
            <p className={`text-center ${styles.body}`}>
              Send quick rooming lists to a hotel, or your travel agent.
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center">
            <p
              className={`text-xl font-bold text-center font-body text-darkBlue pb-[8px]`}
            >
              Personnel Manifests
            </p>
            <p className={`text-center ${styles.body}`}>
              Choose the necessary details to export, and go.
            </p>
          </motion.div>
          <motion.div className="mx-auto">
            <p
              className={`text-xl font-bold text-center font-body text-darkBlue pb-[8px]`}
            >
              Transfer Grids
            </p>
            <p className={`text-center ${styles.body}`}>
              Send a grid to your ground service, or to the festival.
            </p>
          </motion.div>
          <motion.div className="mx-auto">
            <p
              className={`text-xl font-bold text-center font-body text-darkBlue pb-[8px]`}
            >
              Custom Day Sheets
            </p>
            <p className={`text-center ${styles.body}`}>
              Add local weather in one click. How cool is that?{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Exports;
