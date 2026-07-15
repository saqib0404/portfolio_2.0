"use client";

import { motion, type Variants } from "framer-motion";
import { useState, type ChangeEvent, type FormEvent } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showThanks, setShowThanks] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (feedback) {
      setFeedback(null);
    }
    if (showThanks) {
      setShowThanks(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      // 1. Create native FormData from the form element
      const formDataBody = new FormData();
      formDataBody.append("name", formData.name);
      formDataBody.append("email", formData.email);
      formDataBody.append("message", formData.message);
      formDataBody.append("_subject", `New portfolio message from ${formData.name}`);
      formDataBody.append("_captcha", "false");

      // 2. Send without overriding 'Content-Type' manually
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "24fe5faa-fdab-4f08-b24c-5813ad838251",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New portfolio message from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Server Error");
      }

      setFeedback({
        type: "success",
        message: "Thanks for reaching out. Your message has been sent successfully.",
      });
      setShowThanks(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission failed:", error);
      setFeedback({
        type: "error",
        message: "Something went wrong. Please email me directly at saqibahmad0404@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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

            <form onSubmit={handleSubmit} className="mt-auto w-full rounded-2xl border border-muted-gray/15 bg-background-dark/60 p-4 sm:p-6 md:p-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-muted-gray font-display">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-muted-gray/20 bg-background-dark/70 px-4 py-3 text-sm text-background-light outline-none transition focus:border-primary"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-muted-gray font-display">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-muted-gray/20 bg-background-dark/70 px-4 py-3 text-sm text-background-light outline-none transition focus:border-primary"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-muted-gray font-display">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="w-full rounded-xl border border-muted-gray/20 bg-background-dark/70 px-4 py-3 text-sm text-background-light outline-none transition focus:border-primary resize-y min-h-[140px]"
                />
              </label>

              {feedback ? (
                <div className="space-y-3">
                  <p className={`rounded-xl border px-4 py-3 text-sm ${feedback.type === "success" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-rose-500/30 bg-rose-500/10 text-rose-300"}`}>
                    {feedback.message}
                  </p>

                  {showThanks && feedback.type === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 to-transparent p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                          <span className="material-symbols-outlined">check_circle</span>
                        </div>
                        <div>
                          <p className="font-display text-sm font-semibold text-background-light">Thank you for reaching out.</p>
                          <p className="text-sm text-muted-gray">I will get back to you soon.</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </div>
              ) : null}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-sm text-muted-gray">
                  Prefer direct email? Reach me at <a href="mailto:saqibahmad0404@gmail.com" className="text-primary hover:text-background-light transition-colors">saqibahmad0404@gmail.com</a>
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-primary text-background-dark px-6 py-3 rounded-xl font-display text-base font-bold hover:bg-background-light transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Contact Me"}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </form>

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
