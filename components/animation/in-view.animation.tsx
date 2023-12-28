"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const InViewAnimation: React.FC<Props> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default InViewAnimation;
