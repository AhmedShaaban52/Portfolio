"use client"
import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const QUERY = '(pointer: fine)';

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false; 
}

const CustomCursor = () => {
  const hasFinePointer = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isHiddenByLeave, setIsHiddenByLeave] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const isHidden = !hasFinePointer || isHiddenByLeave;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseLeave = () => setIsHiddenByLeave(true);
    const handleMouseEnter = () => setIsHiddenByLeave(false);

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    if (isHidden) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [mouseX, mouseY, isHidden]);

  useEffect(() => {
    if (isHidden) return;

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    const selector = 'a, button, input, textarea, select, [role="button"], .cursor-pointer';
    const interactiveElements = document.querySelectorAll<HTMLElement>(selector);
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    const attachListeners = (nodeList: NodeList) => {
      nodeList.forEach((node) => {
        if (node.nodeType === 1) {
          const element = node as Element;
          if (element.matches(selector)) {
            element.addEventListener('mouseenter', handleHoverStart);
            element.addEventListener('mouseleave', handleHoverEnd);
          }
          const children = element.querySelectorAll(selector);
          children.forEach((child) => {
            child.addEventListener('mouseenter', handleHoverStart);
            child.addEventListener('mouseleave', handleHoverEnd);
          });
        }
      });
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => attachListeners(mutation.addedNodes));
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-9999 flex items-center justify-center"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          initial={false}
          animate={{
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 90 : 0,
            opacity: isHovering ? 1 : 0.5,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative flex h-8 w-8 items-center justify-center text-blue-500"
        >
          <div className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-current" />
          <div className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-current" />
          <div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-current" />
          <div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-current" />
        </motion.div>
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-10000 h-1.5 w-1.5 bg-blue-400 shadow-[0_0_8px_#60a5fa]"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: isHovering ? 0 : 1, opacity: isHovering ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </>
  );
};

export default CustomCursor;