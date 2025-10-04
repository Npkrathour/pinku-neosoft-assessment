"use client";

import React, { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";

type FramerWrapperProps = {
  children: ReactNode;
};

const FramerWrapper: React.FC<FramerWrapperProps> = ({ children }) => {
  const cardX: MotionValue<number> = useMotionValue(0);
  const cardY: MotionValue<number> = useMotionValue(0);

  const rotateX = useTransform(cardY, [-300, 300], [5, -5]);
  const rotateY = useTransform(cardX, [-300, 300], [-5, 5]);
  const cardRotateX = useTransform(cardY, [-300, 300], [8, -8]);
  const cardRotateY = useTransform(cardX, [-300, 300], [-8, 8]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      className="flex justify-center items-center h-screen overflow-hidden perspective-800"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 800 }}
    >
      <motion.div
        className="flex justify-center items-center w-full h-full transform-style-preserve-3d"
        style={{ rotateX, rotateY }}
      >
        <motion.div
          key="card"
          className="transform-style-preserve-3d"
          style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FramerWrapper;
