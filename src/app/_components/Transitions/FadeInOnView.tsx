import { motion, Variants } from 'framer-motion';
import React, { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';

type FadeInOnViewProps = {
  children: ReactNode;
  delay?: number;
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FadeInOnView: React.FC<FadeInOnViewProps> = ({ children, delay = 0 }) => {
  return (
    <InView triggerOnce={true}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1.5, delay }}
        >
          {children}
        </motion.div>
      )}
    </InView>
  );
};

export default FadeInOnView;
