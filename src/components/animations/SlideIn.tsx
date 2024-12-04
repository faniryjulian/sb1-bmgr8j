import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
}

export function SlideIn({ children, direction = 'left', delay = 0 }: SlideInProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        x: direction === 'left' ? -100 : 100 
      }}
      animate={inView ? { 
        opacity: 1, 
        x: 0 
      } : { 
        opacity: 0, 
        x: direction === 'left' ? -100 : 100 
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}