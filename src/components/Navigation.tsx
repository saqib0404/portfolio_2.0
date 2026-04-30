"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      // If we scroll past 90% of the viewport height, switch to sticky top mode
      if (latest > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [scrollY]);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={clsx(
        "z-50 transition-all duration-500 hidden md:flex items-center gap-1",
        isScrolled
          ? "fixed top-6 left-1/2 -translate-x-1/2 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl px-2 py-2 rounded-full border border-primary/20 shadow-lg"
          : "absolute bottom-8 left-1/2 -translate-x-1/2 bg-background-dark/10 dark:bg-background-light/10 backdrop-blur-xl px-2 py-2 rounded-full border border-white/10"
      )}
    >
      <a className="px-5 py-2 rounded-full bg-primary text-background-dark font-semibold text-sm" href="#">Home</a>
      <a className="px-5 py-2 rounded-full hover:bg-white/10 text-background-dark dark:text-background-light font-medium text-sm transition-colors" href="#">Services</a>
      <a className="px-5 py-2 rounded-full hover:bg-white/10 text-background-dark dark:text-background-light font-medium text-sm transition-colors" href="#">Works</a>
      <a className="px-5 py-2 rounded-full hover:bg-white/10 text-background-dark dark:text-background-light font-medium text-sm transition-colors" href="#">Blog</a>
      <a className="px-5 py-2 rounded-full hover:bg-white/10 text-background-dark dark:text-background-light font-medium text-sm transition-colors" href="#">Contact</a>
    </motion.div>
  );
}
