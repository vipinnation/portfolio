"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const RotateAnimation: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RotateAnimation;
