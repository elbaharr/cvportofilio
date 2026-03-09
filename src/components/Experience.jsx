import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiUsers, FiStar } from "react-icons/fi";

const experiences = [
  {
    type: "Work",
    title: "Co-Founder & Front-End Developer",
    company: "Senhour El-Baharaya Website Project",
    period: "2023 - Present",
    desc: "Designed and developed a front-end website offering local services. Built a secure user system with roles (Admin, Moderator, User).",
    icon: <FiBriefcase />,
  },
  {
    type: "Work",
    title: "Founder & Team Leader",
    company: "El Manhag Team - Educational Platform",
    period: "2022 - Present",
    desc: "Founded and led a student team producing educational content. Developed the official website to centralize resources.",
    icon: <FiUsers />,
  },
  {
    type: "Work",
    title: "Graphic Designer & Technical Instructor",
    company: "Ensan Charity",
    period: "2021 - 2023",
    desc: "Designed visual content and delivered programming training sessions to volunteers, simplifying technical concepts.",
    icon: <FiStar />,
  },
];

const activities = [
  {
    title: "Team Leader",
    org: "El Manhag Team",
    desc: "Founded and led a student initiative to teach programming and IT skills (HTML, CSS).",
  },
  {
    title: "Project Leader",
    org: "Enactus New Cairo Academy",
    desc: "Developed and managed project plans and team initiatives.",
  },
  {
    title: "Member",
    org: "IEEE New Cairo Academy (ET5 Team)",
    desc: "Organized workshops and attended PR technical sessions.",
  },
];

import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-24 bg-[var(--bg-color)] transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-main)] mb-4">
            {t("experience.title")} <span className="text-blue-500">{t("experience.highlight")}</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-[var(--text-main)] flex items-center gap-3 mb-8">
              <FiBriefcase className="text-blue-500" /> {t("experience.highlight")}
            </h3>
            <div className="space-y-8 border-l-2 border-[var(--border-color)] ml-4 pl-8 relative">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-[var(--bg-color)] group-hover:scale-150 group-hover:bg-blue-400 transition-all duration-300"></div>
                  <motion.div 
                    whileHover={{ x: 10, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                    className="glass-effect p-6 ios-card-rounded border border-[var(--border-color)] hover:border-blue-500/30 transition-all relative overflow-hidden group/card"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <span className="relative z-10 text-xs font-bold text-blue-500 uppercase tracking-widest">{exp.period}</span>
                    <h4 className="relative z-10 text-xl font-bold text-[var(--text-main)] mt-1 group-hover/card:text-blue-500 transition-colors">{exp.title}</h4>
                    <p className="relative z-10 text-[var(--text-muted)] font-medium text-sm mb-3">{exp.company}</p>
                    <p className="relative z-10 text-[var(--text-muted)] opacity-80 text-sm leading-relaxed">{exp.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-[var(--text-main)] flex items-center gap-3 mb-8">
              <FiStar className="text-indigo-500" /> Extracurricular
            </h3>
            <div className="grid gap-6">
              {activities.map((act, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 ios-card-rounded border border-[var(--border-color)] hover:bg-indigo-500/5 transition-colors"
                >
                  <h4 className="text-lg font-bold text-[var(--text-main)] mb-1">{act.title}</h4>
                  <p className="text-indigo-500 font-medium text-sm mb-2">{act.org}</p>
                  <p className="text-[var(--text-muted)] text-sm">{act.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;