
import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variantsRTL = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const variantsLTR = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

type LayoutProps = {
  children: ReactNode;
  direction: 'rtl' | 'ltr'
  delay?: number;
}

export default function FadeInHorizontal({ children, direction = "ltr", delay }: LayoutProps) {

  return <motion.div style={{ height: '100%' }}
    variants={direction === 'rtl' ? variantsRTL : variantsLTR}
    initial="hidden"
    animate="enter"
    transition={{ type: 'spring', delay }}>
    {children}
  </motion.div>
}