"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: "ADVANCED", icon: "devicon-javascript-plain colored" },
  { name: "React", level: "ADVANCED", icon: "devicon-react-original colored" },
  { name: "Next.js", level: "ADVANCED", icon: "devicon-nextjs-plain" },
  { name: "TypeScript", level: "INTERMEDIATE", icon: "devicon-typescript-plain colored" },
  { name: "Tailwind CSS", level: "ADVANCED", icon: "devicon-tailwindcss-original colored" },
  { name: "Prisma", level: "INTERMEDIATE", icon: "devicon-prisma-original" },
  { name: "Node.js", level: "ADVANCED", icon: "devicon-nodejs-plain colored" },
  { name: "Express.js", level: "ADVANCED", icon: "devicon-express-original" },
  { name: "Redux", level: "INTERMEDIATE", icon: "devicon-redux-original colored" },
  { name: "PostgreSQL", level: "INTERMEDIATE", icon: "devicon-postgresql-plain colored" },
  { name: "MongoDB", level: "ADVANCED", icon: "devicon-mongodb-plain colored" },
  { name: "Mongoose", level: "INTERMEDIATE", icon: "devicon-mongoose-original colored" },
  { name: "Firebase", level: "INTERMEDIATE", icon: "devicon-firebase-plain colored" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Skills() {
  return (
    <section className="bg-background-light dark:bg-background-dark py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display font-bold tracking-tight text-background-dark dark:text-background-light"
          >
            My <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6 origin-left"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-muted-gray max-w-2xl mx-auto text-lg md:text-xl font-display font-medium"
          >
            I specialize in the modern web ecosystem, focusing on performance, scalability, and clean code.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6"
        >
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md border border-primary/10 hover:border-primary/40 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg group cursor-pointer"
            >
              <i className={`${skill.icon} text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 dark:text-background-light`}></i>
              <h3 className="text-background-dark dark:text-background-light font-display font-semibold text-lg">{skill.name}</h3>
              <p className="text-[10px] font-bold tracking-widest text-muted-gray mt-2">{skill.level}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
