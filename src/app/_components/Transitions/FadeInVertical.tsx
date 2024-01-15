import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const variantsDown = {
  hidden: { opacity: 0, x: 0, y: -100 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const variantsUp = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
}

type Props = {
  children: ReactNode;
  direction: 'up' | 'down';
  delay?: number;
} & Omit<React.CSSProperties, 'direction'>

const FadeInVertical: React.FC<Props> = ({ children, direction = "up", delay = 0, ...styles }) => {

  return <motion.div style={{ ...styles }}
    variants={direction === 'down' ? variantsDown : variantsUp}
    initial="hidden"
    animate="enter"
    transition={{ type: 'spring', delay }}>
    {children}
  </motion.div>
}


export default FadeInVertical