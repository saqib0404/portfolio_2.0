"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "code",
    title: "Web Development",
    description: "Crafting high-performance websites with modern frameworks and pixel-perfect attention to detail."
  },
  {
    icon: "support",
    title: "Technical Support",
    description: "Providing comprehensive technical support to help you with any issues or problems you may face."
  },
  {
    icon: "database",
    title: "Backend Architecture",
    description: "Scaling applications with robust server-side logic and optimized database management systems."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Services() {
  return (
    <section id="services" className="bg-background-light dark:bg-background-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-pixel font-black text-background-dark dark:text-background-light opacity-10"
          >
            MY SERVICES
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <p className="text-muted-gray text-sm leading-relaxed">
              I offer a wide range of development services, from building responsive websites to providing technical support.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="group p-8 rounded-3xl bg-white/5 dark:bg-white/5 border border-primary/10 hover:border-primary transition-all duration-300 shadow-xl"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block">{service.icon}</span>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-gray text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
