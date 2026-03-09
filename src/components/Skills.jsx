import React from "react";
import { motion } from "framer-motion";
import { 
  FiCode, FiLayout, FiGitBranch, FiBriefcase, FiAward, 
  FiSmartphone, FiServer, FiCpu, FiMessageSquare, FiUsers 
} from "react-icons/fi";

import { useTranslation } from "react-i18next";

const skillCategories = [
  {
    key: "frontend",
    icon: <FiLayout className="text-blue-500" />,
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX Concepts"],
  },
  {
    key: "tools",
    icon: <FiCode className="text-indigo-500" />,
    skills: ["Git/GitHub", "Microsoft Office", "VS Code"],
  },
  {
    key: "soft",
    icon: <FiUsers className="text-emerald-500" />,
    skills: ["Project Management", "Team Leadership", "Public Speaking", "Content Creation"],
  },
];

const certifications = [
  {
    title: "Front-End Development Diploma",
    issuer: "Route Academy",
    desc: "HTML, CSS, JavaScript focus with modern practices.",
    link: "/CSS_Cert.pdf"
  },
  {
    title: "SQL & MySQL",
    issuer: "Unihance",
    desc: "Database design, queries, and manipulation.",
    link: "/MySQL_Cert.pdf"
  },
  {
    title: "C++ Programming",
    issuer: "Unihance",
    desc: "Fundamentals of C++ and OOP concepts.",
    link: "/C++_Cert.pdf"
  },
  {
    title: "Digital Marketing Fundamentals",
    issuer: "Google",
    desc: "SEO, SEM, and Digital Strategy.",
    link: "#"
  },
];

function Skills() {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 bg-[var(--bg-color)] relative transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-main)] mb-4">
            {t("skills.title")} <span className="text-blue-500">{t("skills.highlight")}</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect p-8 ios-card-rounded border border-[var(--border-color)] hover:border-blue-500/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-[var(--text-main)] mb-6">{t(`skills.${category.key}`)}</h3>
              <div className="relative z-10 flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    className="px-4 py-2 bg-blue-500/5 rounded-xl text-[var(--text-muted)] text-sm border border-[var(--border-color)] transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-[var(--text-main)] mb-4 flex items-center justify-center gap-3">
            <FiAward className="text-yellow-500 animate-pulse" /> {t("skills.certifications")}
          </h3>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 ios-card-rounded border border-[var(--border-color)] hover:bg-blue-500/5 transition-colors flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-[var(--text-main)] mb-2">{cert.title}</h4>
                <p className="text-blue-500 text-sm font-medium mb-3">{cert.issuer}</p>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-4">{cert.desc}</p>
              </div>
              {cert.link && cert.link !== "#" && (
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="relative z-10 inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 text-xs font-bold transition-colors mt-auto"
                >
                  <FiAward /> {t("projects.viewProject")}
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
