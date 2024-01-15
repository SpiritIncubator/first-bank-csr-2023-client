import { motion } from 'framer-motion';
import React, { ReactNode, CSSProperties } from 'react';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
} & React.CSSProperties;

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, ...styles }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
      style={{ ...styles }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;