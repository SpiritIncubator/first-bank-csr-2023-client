'use client'

import { ReactNode } from "react";
import { motion } from 'framer-motion';

type LayoutProps = {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <motion.div style={{ height: '100%' }} variants={variants} initial="hidden" animate="enter" transition={{ type: 'spring' }}>
      {children}
    </motion.div>
  )
}

export default Layout;