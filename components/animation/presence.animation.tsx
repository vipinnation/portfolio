"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  duration?: number;
};

const PresenceAnimation: React.FC<Props> = ({ children, duration }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={"empty"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: duration || 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PresenceAnimation;
