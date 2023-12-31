import { motion } from "framer-motion";
import React from "react";
import SkillCardComponent from "../skills/skill-card.component";
import InViewAnimation from "./in-view.animation";

type Props = {
  content: Array<any>;
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.2,
    },
  },
};

const VariationAnimation: React.FC<Props> = ({ content }) => {
  return (
    <div>
      <InViewAnimation>
        <motion.div
          className="container grid grid-cols-2 sm:grid-cols-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {content.map((index) => (
            <div key={Math.floor(Math.random() * 1e4)}>
              <motion.div
                key={index}
                className="item mx-4   sm:w-[10rem] h-full"
                variants={item}
              >
                <SkillCardComponent
                  key={Math.floor(Math.random() * 1e4)}
                  name={index.name}
                  rating={index.rating}
                  icon={index.icon}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </InViewAnimation>
    </div>
  );
};

export default VariationAnimation;
