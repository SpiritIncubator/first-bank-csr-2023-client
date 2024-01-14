import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the prop types
type CardQueueAnimationProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T, index: number) => React.Key;
};


const CardQueueAnimation = <T extends {}>({
  items,
  renderItem,
  keyExtractor
}: CardQueueAnimationProps<T>) => {
  return (
    <>
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.div
            key={keyExtractor(item, index)}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            {renderItem(item, index)}
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default CardQueueAnimation;
