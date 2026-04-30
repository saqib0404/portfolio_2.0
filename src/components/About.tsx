"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-background-dark py-24 px-6 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-medium leading-[1.3] text-background-light text-center">
          I’m a <span className="text-primary font-bold">developer with 3 years of experience</span> in <span className="text-primary underline underline-offset-8">full-stack development</span>. I specialize in building efficient, user-friendly applications using technologies like <span className="font-bold">React and Node.js</span>. I’m passionate about solving problems and creating seamless digital experiences.
        </h2>
      </motion.div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
    </section>
  );
}
