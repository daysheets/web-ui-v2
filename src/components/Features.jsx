import React from "react";
import styles from "../styles";
import { routing, dragAndDrop, shortcuts } from "../assets";
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
      delay: 0.1,
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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: 30,
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

const Features = () => {
  return (
    <section
      className={`${styles.sectionBox} bg-gradient-to-t from-lightWhite to-white`}
    >
      <div className={`${styles.contentBox} px-4 `}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className={`${styles.h2Box} my-[32px]`}
        >
          <h2 className={`${styles.h2} pb-[32px] text-center pt-[32px] `}>
            Experience data entry in <span className="text-blue">minutes</span>,
            not hours.
          </h2>
          <div>
            <p className={`text-darkBlue ${styles.h2Body}`}>
              A new era of efficiency to tour management, with tabbing, imports,
              and time-saving shortcuts.
            </p>
          </div>
        </motion.div>

        <div className={`${styles.twoColBox}`}>
          {" "}
          {/* Feature 1 */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.75 }}
            className={` text-darkBlue`}
          >
            {" "}
            {/* Text Box */}
            <h6 className={`${styles.tag}`}>Fast tour creation</h6>
            <h3 className={`${styles.h3}`}>
              Tab through your routing, we’ll check the drives.
            </h3>
            <p className={`${styles.body}`}>
              Enter your entire tour without using the mouse. We’ll calculate
              your distances between cities, and flag any overdrives.
            </p>
          </motion.div>
          <div className="pt-[32px] lg:pt-0  rounded-xl ">
            {" "}
            {/* Image Box */}
            <img
              src={routing}
              alt="Daysheets routing UI"
              className="rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        <div className={`${styles.twoColBox}`}>
          {" "}
          {/* Feature 2 */}
          <div className="pt-[32px] lg:pt-0">
            {" "}
            {/* Image Box */}
            <img
              src={dragAndDrop}
              alt="Drag and drop personnel"
              className="rounded-xl max-h-[300px]"
              loading="lazy"
            />
          </div>
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.75 }}
            className={`text-darkBlue order-first lg:order-last`}
          >
            {" "}
            {/* Text Box */}
            <h6 className={`${styles.tag}`}>Drag & Drop Personnel</h6>
            <h3 className={`${styles.h3}`}>
              Effortlessly import your personnel, in record time.
            </h3>
            <p className={`${styles.body}`}>
              Simply drag your spreadsheet into the app, and with a few clicks,
              your whole team is on Daysheets.
            </p>
          </motion.div>
        </div>

        <div className={`${styles.twoColBox} pb-0`}>
          {" "}
          {/* Feature 3 */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.75 }}
            className={`text-darkBlue`}
          >
            {" "}
            {/* Text Box */}
            <h6 className={`${styles.tag}`}>Shortcuts</h6>
            <h3 className={`${styles.h3}`}>
              Designed around tabbing, and shortcuts.
            </h3>
            <p className={`${styles.body}`}>
              Daysheets is optimized to move as fast as you do. Less clicks,
              means more time for other things.
            </p>
          </motion.div>
          <div className=" lg:pt-0 rounded-xl">
            {" "}
            {/* Image Box */}
            <img
              src={shortcuts}
              alt="Daysheets shortcuts icons"
              className="pt-[64px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
