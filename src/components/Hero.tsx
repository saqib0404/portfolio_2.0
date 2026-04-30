"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import Navigation from "./Navigation";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pixel-text-anim",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", stagger: 0.1 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <h1 className="text-[12vw] font-pixel font-black tracking-tighter uppercase leading-none text-muted-gray/10 dark:text-primary/10">
          DEVELOPER
        </h1>
      </div>
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-20">
        <h1 ref={textRef} className="text-[12vw] font-pixel font-black tracking-tighter uppercase leading-none pixel-text pixel-text-anim">
          DEVELOPER
        </h1>
      </div>

      <motion.div style={{ y }} className="relative z-10 w-full max-w-4xl px-4 flex justify-center items-end h-[716px]">
        <img
          alt="Portrait"
          className="h-full object-contain filter grayscale-[20%] drop-shadow-2xl translate-y-4"
          src="/hero.png"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute left-10 md:left-[10%] top-[60%] z-30 hidden sm:block"
      >
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium text-muted-gray">Full-Stack Projects</p>
          </div>
          <div className="relative">
            <div className="w-12 h-[1px] bg-primary"></div>
            <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-10 md:right-[10%] top-[55%] z-30 hidden sm:block"
      >
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-[1px] bg-primary"></div>
            <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></div>
          </div>
          <div className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 rounded-xl border border-primary/20 max-w-[200px]">
            <p className="text-lg font-bold text-primary">Tech Enthusiast</p>
            <p className="text-xs text-muted-gray mt-1 leading-relaxed">
              Passionate about building innovative and scalable web applications.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-10 md:left-[10%] z-30 flex gap-4 text-muted-gray"
      >
        <a href="https://github.com/saqib0404" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted-gray/10 backdrop-blur-md border border-primary/20 hover:bg-primary hover:text-background-dark hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(161,194,189,0)] hover:shadow-[0_0_15px_rgba(161,194,189,0.4)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/saqib-ahmad-dev/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted-gray/10 backdrop-blur-md border border-primary/20 hover:bg-primary hover:text-background-dark hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(161,194,189,0)] hover:shadow-[0_0_15px_rgba(161,194,189,0.4)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a href="https://www.facebook.com/saqib.ahmad.52459615" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted-gray/10 backdrop-blur-md border border-primary/20 hover:bg-primary hover:text-background-dark hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(161,194,189,0)] hover:shadow-[0_0_15px_rgba(161,194,189,0.4)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a href="mailto:saqibahmad0404@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted-gray/10 backdrop-blur-md border border-primary/20 hover:bg-primary hover:text-background-dark hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(161,194,189,0)] hover:shadow-[0_0_15px_rgba(161,194,189,0.4)]">
          <span className="material-symbols-outlined text-[20px]">mail</span>
        </a>
      </motion.div>

      <Navigation />
    </section>
  );
}
