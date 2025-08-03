
"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // 0 is no parallax, 1 is normal scroll
}

export function ScrollAnimate({ children, className, speed = 0.5 }: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
