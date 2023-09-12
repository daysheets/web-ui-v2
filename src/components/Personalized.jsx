import React from "react";
import styles from "../styles";
import { notes, hotels } from "../assets";
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

const Personalized = () => {
  return (
    <section className={`${styles.sectionBox} bg-darkBlue overflow-hidden`}>
      <div className={`${styles.contentBox} px-4 pb-[64px] relative`}>
        {/* Heading */}
        <div className={`${styles.h2Box} pb-[80px]`}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className={` bg-dimWhite text-white px-6 py-2 rounded-full font-semibold w-fit mx-auto`}
          >
            <h5>Visibility</h5>
          </motion.div>
          <motion.h2
            variants={fadeUp2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className={`${styles.h2} text-center text-white pt-[32px]`}
          >
            A personalized experience,{" "}
            <span className="text-blue">for everyone</span> on your tour.
          </motion.h2>
          <div>
            <motion.p
              variants={fadeUp2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              className={` text-white ${styles.h2Body}`}
            >
              Manage your entire team from one place, even if they’re split
              across different cities. Your experience is the command center,
              they only see what they need.
            </motion.p>
          </div>
        </div>

        <div className={`${styles.twoColBox}`}>
          {" "}
          {/* Feature 1 */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.75 }}
            className={` text-white col-span-1`}
          >
            {" "}
            {/* Text Box */}
            <h6 className={`${styles.tag}`}>Personalized Notes</h6>
            <h3 className={`${styles.h3}`}>
              Notes for groups, individuals, and you.
            </h3>
            <p className={`${styles.body} text-white`}>
              Create as many note as needed , and specify who see’s them. Team
              members even have their own daily note section where they can keep
              the dirt.
            </p>
          </motion.div>
          <div className="pt-[32px] lg:pt-0 col-span-1">
            {" "}
            {/* Image Box */}
            <img src={notes} alt="Notes UI" loading="lazy" />
          </div>
        </div>

        <div className={`${styles.twoColBox}`}>
          {" "}
          {/* Feature 2 */}
          <div className="pt-[32px] lg:pt-0">
            {" "}
            {/* Image Box */}
            <img src={hotels} alt="Hotels UI" loading="lazy" />
          </div>
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.75 }}
            className={` text-white order-first lg:order-last lg:ml-[80px]`}
          >
            {" "}
            {/* Text Box */}
            <h6 className={`${styles.tag}`}>Group events</h6>
            <h3 className={`${styles.h3}`}>
              Ensure privacy and avoid confusion with visibility.
            </h3>
            <p className={`${styles.body} text-white`}>
              Group specific events and reservations allows you to ensure your
              band shows up to the right call time, in the correct lobby.
            </p>
          </motion.div>
        </div>

        <div className="bg-blue h-[640px] w-[640px] absolute top-[1000px] left-[320px] rounded-full blur-[320px] z-0 opacity-30"></div>
      </div>
    </section>
  );
};

export default Personalized;
