import { motion } from 'framer-motion';
import React, { ReactNode, CSSProperties } from 'react';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties
};

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, style }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
      style={{...style}}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;