import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

type ZoomBounceProps = {
  children: ReactNode;
  trigger: boolean;
} & React.CSSProperties

const zoomBounceVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const ZoomBounce: React.FC<ZoomBounceProps> = ({ children, trigger, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      animate={trigger ? "visible" : "hidden"}
      variants={zoomBounceVariants}
      style={{ ...props }}
    >
      {children}
    </motion.div >
  );
};

export default ZoomBounce;
