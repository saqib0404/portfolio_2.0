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

export default function Contact() {
  return (
    <section id="contact" className="bg-background-dark py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="font-display text-5xl md:text-6xl text-background-light mb-6 font-bold">Let's Connect</h1>
          <p className="font-display text-lg text-muted-gray max-w-2xl leading-relaxed">
            Looking for someone who understands both the learning journey and the engineering craft? Let's build something impactful together.
          </p>
        </motion.header>

        {/* Bento Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Main Contact Card (8 columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-8 flex flex-col bg-muted-gray/10 backdrop-blur-xl border border-muted-gray/20 rounded-2xl p-8 lg:p-12 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-display text-sm text-primary uppercase tracking-widest font-medium">Open to new opportunities</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl text-background-light mb-12 font-medium">Ready for Your Next Challenge</h2>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a href="mailto:saqibahmad0404@gmail.com" className="flex items-center gap-4 p-4 bg-muted-gray/5 backdrop-blur-md rounded-xl border border-transparent hover:border-primary/40 transition-colors cursor-pointer group min-w-0">
                <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform flex-shrink-0">mail</span>
                <div className="min-w-0">
                  <p className="font-display text-muted-gray text-[10px] uppercase tracking-wider mb-1">Email</p>
                  <p className="font-display text-background-light text-sm truncate" title="saqibahmad0404@gmail.com">saqibahmad0404@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/saqib-ahmad-dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-muted-gray/5 backdrop-blur-md rounded-xl border border-transparent hover:border-primary/40 transition-colors cursor-pointer group min-w-0">
                <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform flex-shrink-0">link</span>
                <div className="min-w-0">
                  <p className="font-display text-muted-gray text-[10px] uppercase tracking-wider mb-1">LinkedIn</p>
                  <p className="font-display text-background-light text-sm truncate" title="in/saqibahmad0404">in/saqibahmad0404</p>
                </div>
              </a>

              <a href="https://github.com/saqib0404" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-muted-gray/5 backdrop-blur-md rounded-xl border border-transparent hover:border-primary/40 transition-colors cursor-pointer group min-w-0">
                <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform flex-shrink-0">code</span>
                <div className="min-w-0">
                  <p className="font-display text-muted-gray text-[10px] uppercase tracking-wider mb-1">GitHub</p>
                  <p className="font-display text-background-light text-sm truncate" title="@saqib0404">@saqib0404</p>
                </div>
              </a>
            </div>

            <div className="mt-auto">
              <button className="w-full md:w-auto bg-primary text-background-dark px-8 py-4 rounded-xl font-display text-lg font-bold hover:bg-background-light transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                Start a Conversation
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            {/* Abstract Visual Element */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700"></div>
          </motion.div>

          {/* Side Cards (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Available For Card */}
            <motion.div variants={itemVariants} className="bg-muted-gray/10 backdrop-blur-xl border border-muted-gray/20 rounded-2xl p-8">
              <h3 className="font-display text-sm text-background-light mb-6 flex items-center gap-3 tracking-wide">
                <span className="material-symbols-outlined text-primary text-xl">work</span>
                Available For
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-gray/40"></span>
                  <span className="font-display text-muted-gray">Software Engineering</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-gray/40"></span>
                  <span className="font-display text-muted-gray">Full-Stack Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-gray/40"></span>
                  <span className="font-display text-muted-gray">Technical Support</span>
                </li>
              </ul>
            </motion.div>

            {/* Work Preferences Card */}
            <motion.div variants={itemVariants} className="bg-muted-gray/10 backdrop-blur-xl border border-muted-gray/20 rounded-2xl p-8 flex-grow">
              <h3 className="font-display text-sm text-background-light mb-6 flex items-center gap-3 tracking-wide">
                <span className="material-symbols-outlined text-primary text-xl">settings</span>
                Work Preferences
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-gray mb-1 font-display">Location</p>
                  <p className="font-display text-background-light text-sm">Remote, Hybrid or On-Site</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-gray mb-1 font-display">Team</p>
                  <p className="font-display text-background-light text-sm">Collaborative Agile Systems</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-gray mb-1 font-display">Scale</p>
                  <p className="font-display text-background-light text-sm">Mid to Enterprise Projects</p>
                </div>
              </div>
            </motion.div>

            {/* Subtle Image Integration */}
            <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden h-40 bg-muted-gray/10 backdrop-blur-xl border border-muted-gray/20 relative group">
              <img
                alt="Coding workspace"
                className="w-full h-full object-cover opacity-40 mix-blend-luminosity transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6mM33QzrjMxBuLviWl2hwmO97yT18HNoVgrA3P3oQnwfqAh6FP4vSzjacOptYj5fVvsMcm3UjnCw8Y4lba3jjEQ0ILSJlsE0YAcEpRDsd6WR7F6CYab2CfNfKWKrISunR6Bh9vejuEW_WvDlO8i8oBU4kqMPFqFFjmPt8rBzQQn_n0uEwBLntUIQfXpc3ZVQwnomVEzc1gy5LThZ8VgLr_mHi3BsTgtNtLarXrFFLti0Wkw5u_wYdbDXuZnkTzCcOuHTic15TuLw"
              />
              <div className="absolute inset-0 bg-background-dark/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
