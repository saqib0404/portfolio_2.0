"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > window.innerHeight * 0.92) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "hero";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold to detect when section is in view
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to set initial active section
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={clsx(
            "px-5 py-2 rounded-full font-medium text-sm transition-all duration-300",
            activeSection === link.href.substring(1)
              ? "bg-primary text-background-dark font-semibold shadow-md"
              : "hover:bg-white/10 text-background-dark dark:text-background-light hover:text-primary"
          )}
        >
          {link.name}
        </a>
      ))}
    </motion.div>
  );
}
