'use client'

import { ReactNode } from "react";
import FadeInHorizontal from "@/app/_components/Transitions/FadeInHorizontal";
import { motion } from 'framer-motion';

type LayoutProps = {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <FadeInHorizontal direction="rtl">
      {children}
    </FadeInHorizontal>
  )
}

export default Layout;