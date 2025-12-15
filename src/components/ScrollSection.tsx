import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

const ScrollSection = ({ 
  children, 
  className = "", 
  direction = "up",
  delay = 0 
}: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create smooth opacity transition
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.8]
  );

  // Direction-based transforms
  const getTransform = () => {
    switch (direction) {
      case "up":
        return useTransform(scrollYProgress, [0, 0.3], [60, 0]);
      case "down":
        return useTransform(scrollYProgress, [0, 0.3], [-60, 0]);
      case "left":
        return useTransform(scrollYProgress, [0, 0.3], [60, 0]);
      case "right":
        return useTransform(scrollYProgress, [0, 0.3], [-60, 0]);
      default:
        return useTransform(scrollYProgress, [0, 0.3], [60, 0]);
    }
  };

  const transform = getTransform();
  
  const isHorizontal = direction === "left" || direction === "right";

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y: isHorizontal ? 0 : transform,
        x: isHorizontal ? transform : 0,
      }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
