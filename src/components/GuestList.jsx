import React from "react";
import styles from "../styles";
import {
  phoneBubbles,
  chatBubble1,
  chatBubble2,
  chatBubble3,
  chatBubbles_M,
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
      delay: 0.25,
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
      delay: 0,
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
      delay: 0.15,
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
      delay: 0,
      ease: "easeOut",
    },
  },
};

const GuestList = () => {
  return (
    <div className={`${styles.sectionBox} bg-white px-[32px]`}>
      <div className={`${styles.contentBoxBig}`}>
        {/* Grid */}
        <div className="flex flex-col text-center lg:grid lg:grid-cols-6 lg:justify-items-center lg:text-left">
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className={`${styles.h2Box} flex flex-col items-center text-center lg:text-left lg:items-start h-full col-span-2`}
          >
            <div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              className={` bg-dimBlue text-blue px-6 py-2 rounded-full font-semibold w-fit lg:mr-auto`}
            >
              <h5>Guest Lists</h5>
            </div>

            <h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              className={`${styles.h2} text-left text-darkBlue pt-[32px]`}
            >
              Guest list <span className="text-blue">galore</span>.
            </h2>

            <div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
            >
              <p className={` text-darkBlue lg:${styles.h2BodyLeft} pb-[32px]`}>
                No matter where you are, Daysheets makes it easy to manage your
                guest lists.
              </p>
            </div>

            <div
              variants={fadeUp2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              className="flex flex-col gap-[16px]"
            >
              <div className={`flex flex-col items-center lg:items-start`}>
                <p className={`${styles.body} font-bold`}>
                  Approve, reject, export, wherever.
                </p>
                <p
                  className={`${styles.body} text-darkBlue text-center lg:text-left`}
                >
                  Whether you’re on your phone or computer, maintain your guest
                  list, and send it when you’re ready.
                </p>
              </div>

              <div className={`flex flex-col items-center lg:items-start`}>
                <p className={`${styles.body} font-bold`}>
                  Submissions in one place.
                </p>
                <p
                  className={`${styles.body} text-darkBlue text-center lg:text-left`}
                >
                  Set who can make requests through Daysheets. Our sleek design
                  makes it simple for all team members.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Box */}
          <div className="px-16 lg:px-16 rounded-xl h-full col-span-4 flex-col items-center justify-center relative hidden lg:flex">
            <div className="relative">
              <motion.img
                src={chatBubble1}
                alt="Text message bubble"
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="absolute h-[40px] right-[-32px] top-[160px]"
                loading="lazy"
              />
              <motion.img
                src={chatBubble2}
                alt="Text message bubble"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="absolute h-[40px] left-8 top-[64px]"
                loading="lazy"
              />
              <motion.img
                src={chatBubble3}
                alt="Text message bubble"
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="absolute h-[40px] left-8 top-[240px]"
                loading="lazy"
              />
              <img
                src={phoneBubbles}
                alt="Product screenshot"
                className="px-8 py-8 object-cover w-full object-left-top"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <img
              src={chatBubbles_M}
              alt="Product screenshot"
              className="lg:hidden"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestList;
