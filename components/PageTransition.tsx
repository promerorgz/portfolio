"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.61, 1, 0.88, 1],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        className="min-h-screen"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            enter: { opacity: 1 },
          }}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
