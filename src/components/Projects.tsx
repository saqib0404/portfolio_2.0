"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Quick-Bite",
    description: "A modern, scalable frontend application for the Quick-Bite food delivery platform. Built with Next.js and TypeScript, this client provides an intuitive interface for customers, restaurant providers, and administrators to manage orders, menus, and reviews seamlessly.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "Prisma", "Node.js", "Better Auth", "Stripe"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk415P7jJrA8Pnu4uTEppUqT89jJ8Zg3JjZukjPXqf_OQQm_fGYyqh0hq--KQkLpix4ScyeOIVhon1afCbiVvd4NtHCNNXv5j3Sqs8c5toJN8bgfR-6yIjhhFaKFDYe5VFOKQsDkPPbwelOUkr4p7oo_1oLuTUkcHwhtHoAG23QB2RZmgrL-P2PTncEHXpkiwqVxbqTBE62o8ilErhICL3_jBdhOqbbp02xqV8I0amA0ZI8zlARaRihoAkGh4_Ch2H1P4tRcq7UuI",
    reverse: false,
    githubClient: "https://github.com/saqib0404/quick-bite-client",
    githubServer: "https://github.com/saqib0404/quick-bite-server",
    githubLink: undefined,
    liveLink: "https://quick-bite-client-five.vercel.app",
    githubIcon: "terminal"
  },
  {
    id: "02",
    title: "Movie Titles API",
    description: "A collection movie list app that fetches and displays real-time data using complex API interactions. Implements asynchronous programming and comprehensive error handling.",
    tags: ["JavaScript", "API Integration", "Git"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaIlLUqJOy4Fa58Jh85gdiYn7A9IfHqjQiof_0DcufJsFFm1PZqIpfKrbqmMTmfI3jt-uNBIgPDofJP7gFq2lM735QGXSBv_t2z4yUAvc9VMrA16Obg8WPQn70TA6-A8skibsoYTfulbsxInzHomEJdm46l3m2-xUXkqFFJRFP85xubOBm2RUZk_lWCd30TDRFrZSctdLTiFnUWZaXyPNgJiUbvhJHD9UVmZNeQJv8B3hzFW3b6vUepUWydk_dqgo5EYjx_9-5NGI",
    reverse: true,
    githubClient: undefined,
    githubServer: undefined,
    githubLink: "#",
    liveLink: "#",
    githubIcon: "code"
  },
  {
    id: "03",
    title: "JS Calculator",
    description: "A precision-focused calculator application leveraging mathematical algorithm concepts for accurate floating-point arithmetic. Features a clean, distraction-free interface.",
    tags: ["Node.js", "Algorithms", "Math JS"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZd1ocQ-7pwKJnlIHqSeUltJ0GaVba5qR-vB_OMpk0tph8KtOfWqF3YSYT0xTpc6Zu7o6_SHOJpVP_C6h9AF7v75rfGk8IiWSLmLRf7CEQPzKlTNhsyL0Ht7VGvBLNl4DjVKjsdOes-gje-xpuM7WJyK7VYkps-EuCvu5OOK71qXO-P4EwxvTjEa7-S6d4SGixzq-Op3GP3aV_b1Q4u-CnirZFJTopFlZ1fG9gf-II0W3tNU3ADVVoQ01Ld9saRqAYSktqVjpsTT4",
    reverse: false,
    githubClient: undefined,
    githubServer: undefined,
    githubLink: "#",
    liveLink: "#",
    githubIcon: "integration_instructions"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="bg-background-dark py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 mb-12"
        >
          <span className="text-muted-gray font-display text-xs uppercase tracking-widest font-bold">Portfolio</span>
          <h1 className="text-primary font-display text-5xl md:text-6xl font-bold tracking-tight">Featured Projects</h1>
          <p className="text-muted-gray max-w-2xl font-display text-lg mt-4 leading-relaxed">
            A selection of my most impactful work, ranging from complex logic systems to seamless front-end integrations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`bg-muted-gray/5 backdrop-blur-xl border border-muted-gray/20 rounded-2xl overflow-hidden flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} h-full group`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 overflow-hidden">
                <div
                  className="w-full h-full min-h-[300px] md:min-h-[400px] bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url("${project.image}")` }}
                ></div>
              </div>

              {/* Project Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-muted-gray/10 text-muted-gray border border-muted-gray/20 font-display text-[10px] uppercase tracking-wider rounded-full font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-background-light font-display text-3xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-gray font-display text-base leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  {project.githubClient && (
                    <a href={project.githubClient} target="_blank" rel="noopener noreferrer" className="bg-primary text-background-dark px-4 py-3 rounded-xl font-display font-bold text-sm flex items-center gap-2 hover:bg-background-light transition-colors active:scale-95 shadow-[0_0_15px_rgba(161,194,189,0.2)]">
                      <span className="material-symbols-outlined text-lg">code</span>
                      Client Repo
                    </a>
                  )}
                  {project.githubServer && (
                    <a href={project.githubServer} target="_blank" rel="noopener noreferrer" className="bg-primary text-background-dark px-4 py-3 rounded-xl font-display font-bold text-sm flex items-center gap-2 hover:bg-background-light transition-colors active:scale-95 shadow-[0_0_15px_rgba(161,194,189,0.2)]">
                      <span className="material-symbols-outlined text-lg">dns</span>
                      Server Repo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-background-dark px-6 py-3 rounded-xl font-display font-bold text-sm flex items-center gap-2 hover:bg-background-light transition-colors active:scale-95 shadow-[0_0_15px_rgba(161,194,189,0.2)]">
                      <span className="material-symbols-outlined text-lg">{project.githubIcon}</span>
                      View Github
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-primary font-display font-bold text-sm flex items-center gap-2 hover:opacity-80 transition-opacity group/link">
                      View Project
                      <span className="material-symbols-outlined text-lg transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="p-8 text-center border-t border-muted-gray/20 mt-16"
        >
          <p className="text-muted-gray font-display text-lg mb-6">Interested in working together or seeing more?</p>
          <div className="flex justify-center flex-wrap gap-4">
            <a href="https://www.linkedin.com/in/saqib-ahmad-dev/" target="_blank" rel="noopener noreferrer">
              <button className="bg-background-light text-background-dark px-8 py-3 rounded-xl font-display font-bold hover:bg-primary transition-colors active:scale-95 shadow-md">

                Contact Me
              </button>
            </a>
            <button className="border border-muted-gray text-primary px-8 py-3 rounded-xl font-display font-bold hover:bg-muted-gray/10 transition-colors active:scale-95">
              Full Resume
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
