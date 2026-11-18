import React, { useEffect, useState } from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';
import { useMouse } from '../hooks/useMouse';

export const Cursor: React.FC = () => {
  const mouse = useMouse();
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.1 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    if (mouse.x > 0 && mouse.y > 0 && !mouse.isTouch) {
      cursorX.set(mouse.x);
      cursorY.set(mouse.y);
      setIsVisible(true);
    }
  }, [mouse.x, mouse.y, mouse.isTouch, cursorX, cursorY]);

  if (shouldReduceMotion || mouse.isTouch || !isVisible) {
    return null;
  }

  const isExpanded = mouse.isHoveredInteractive;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: isExpanded ? 44 : 12,
        height: isExpanded ? 44 : 12,
        opacity: isExpanded ? 0.35 : 0.85,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="fixed top-0 left-0 rounded-full bg-[#d4261c] pointer-events-none z-[9999]"
    />
  );
};

