import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
};

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;