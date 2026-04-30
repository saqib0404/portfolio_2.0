"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function About() {
  return (
    <section id="about" className="bg-background-dark py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          {/* Left: Profile Image Card */}
          <motion.div variants={itemVariants} className="md:col-span-5 lg:col-span-4">
            <div className="bg-muted-gray/5 backdrop-blur-xl border border-muted-gray/20 p-4 rounded-2xl relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted-gray/10 border border-muted-gray/30">
                <img
                  alt="Portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="/banner.png"
                />
              </div>
              <div className="mt-6 space-y-1">
                <p className="font-display text-2xl text-primary tracking-tight font-medium">Saqib Ahmad</p>
                <p className="font-display text-xs text-muted-gray uppercase tracking-[0.2em] font-bold">Web Developer</p>
              </div>

              {/* Decorative Code Element */}
              <div className="absolute -bottom-4 -right-4 p-3 bg-muted-gray/10 backdrop-blur-md rounded-xl border border-primary/20 hidden md:block">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Biography */}
          <motion.div variants={itemVariants} className="md:col-span-7 lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-background-light font-bold tracking-tight">Architecting the Digital Frontier</h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <motion.section variants={itemVariants} className="space-y-2">
                <h3 className="font-display text-xs text-primary tracking-widest uppercase font-bold">The Foundation</h3>
                <p className="font-display text-lg text-muted-gray leading-relaxed">
                  I am a software engineer with a deep passion for building high-performance, scalable systems that solve complex real-world problems. My journey into technology began with a fascination for how logic translates into interactive experiences, leading me to master the intricacies of modern full-stack development.
                </p>
              </motion.section>

              <motion.section variants={itemVariants} className="space-y-2">
                <h3 className="font-display text-xs text-primary tracking-widest uppercase font-bold">Core Philosophy</h3>
                <p className="font-display text-lg text-muted-gray leading-relaxed">
                  I believe in technical precision and architectural integrity. Every line of code should serve a purpose, and every system should be designed with future scalability in mind. My approach combines minimalist design principles with robust backend engineering to create seamless user journeys.
                </p>
              </motion.section>
            </div>

            {/* Tech Tags / Action Button */}
            <motion.div variants={itemVariants} className="flex pt-4">
              <button className="bg-primary text-background-dark px-8 py-3 rounded-xl font-display font-bold hover:bg-background-light active:scale-95 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(161,194,189,0.3)]">
                <span className="material-symbols-outlined">download</span>
                Download CV
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
    </section>
  );
}
