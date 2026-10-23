import React from "react";
import { motion } from "framer-motion";
import { FiLayout, FiCode, FiUsers, FiZap, FiGlobe, FiAward, FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const skillCategories = [
  {
    key: "frontend",
    icon: <FiLayout size={20} />,
    color: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", hover: "hover:border-blue-500/40", tag: "bg-blue-500/10 text-blue-300 border-blue-500/25" },
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap"],
  },
  {
    key: "tools",
    icon: <FiCode size={20} />,
    color: { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400", hover: "hover:border-indigo-500/40", tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/25" },
    skills: ["Git / GitHub", "Supabase", "Microsoft Office"],
  },
  {
    key: "soft",
    icon: <FiUsers size={20} />,
    color: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400", hover: "hover:border-emerald-500/40", tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25" },
    skills: ["Project Management", "Team Leadership", "Public Speaking"],
  },
  {
    key: "aitools",
    icon: <FiZap size={20} />,
    color: { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-400", hover: "hover:border-violet-500/40", tag: "bg-violet-500/10 text-violet-300 border-violet-500/25" },
    skills: ["ChatGPT", "Claude", "Gemini", "Prompt Engineering"],
  },
];

const languages = [
  { lang: "Arabic",  level: "Native",       pct: 100, from: "#6366f1", to: "#818cf8" },
  { lang: "English", level: "Intermediate", pct: 65,  from: "#3b82f6", to: "#60a5fa" },
];

const certifications = [
  { title: "Front-End Development Diploma",  issuer: "Route Academy",         type: "Diploma",  desc: "HTML, CSS, JavaScript & modern web practices.", link: "/CSS_Cert.pdf" },
  { title: "Front-End Development Training", issuer: "Bdaya Team",            type: "Training", desc: "HTML & CSS fundamentals in student activity projects.", link: null },
  { title: "SQL & MySQL",                    issuer: "Unihance",              type: "Course",   desc: "Database design, queries, and data manipulation.", link: "/MySQL_Cert.pdf" },
  { title: "Digital Marketing Fundamentals", issuer: "Google – Maharat",      type: "Course",   desc: "SEO, SEM, social media & digital strategy.", link: null },
  { title: "C++ Programming",                issuer: "Unihance",              type: "Course",   desc: "C++ fundamentals, problem-solving and OOP.", link: "/C++_Cert.pdf" },
];

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp  = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-28 bg-[var(--bg-2)] relative overflow-hidden transition-colors duration-300">

      {/* ambient */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-600/6 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-violet-600/6 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <span className="section-tag"><FiLayout size={10} /> Skills</span>
          <h2 className="section-heading">{t("skills.title")} <span>{t("skills.highlight")}</span></h2>
          <div className="accent-line mt-4" />
        </motion.div>

        {/* ── Skill Cards ── */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {skillCategories.map((cat, i) => (
            <motion.div key={i} variants={fadeUp}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`glass-effect ios-card-rounded border ${cat.color.border} ${cat.color.hover} p-6 relative overflow-hidden group transition-all duration-300`}>
              <div className={`absolute inset-0 ${cat.color.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* icon */}
              <div className={`relative z-10 w-10 h-10 rounded-xl ${cat.color.bg} border ${cat.color.border} flex items-center justify-center ${cat.color.text} mb-4 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="relative z-10 text-sm font-bold text-[var(--text)] mb-3">
                {t(`skills.${cat.key}`)}
              </h3>
              <div className="relative z-10 flex flex-wrap gap-1.5">
                {cat.skills.map((sk, j) => (
                  <span key={j} className={`skill-tag ${cat.color.tag} border`}>{sk}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Languages ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-effect ios-card-rounded border border-[var(--border)] p-7 mb-12 hover:border-[var(--border-hover)] transition-all group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <FiGlobe size={16} />
            </div>
            <h3 className="font-bold text-[var(--text)]">{t("skills.languages")}</h3>
          </div>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {languages.map((lang, i) => (
              <div key={i} className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[var(--text)] text-sm">{lang.lang}</span>
                  <span className="text-[var(--text-muted)] text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-[var(--border)]">{lang.level}</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: `${lang.pct}%` }}
                    transition={{ duration: 1.4, ease: "easeOut", delay: i * 0.2 }}
                    viewport={{ once: true }}
                    style={{ background: `linear-gradient(90deg, ${lang.from}, ${lang.to})` }}
                    className="h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Certifications ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <FiAward size={16} />
            </div>
            <h3 className="font-bold text-[var(--text)] text-lg">{t("skills.certifications")}</h3>
          </div>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div key={i} variants={fadeUp}
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass-effect ios-card-rounded border border-[var(--border)] hover:border-amber-500/25 p-6 flex flex-col group relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start justify-between gap-3 mb-2">
                <h4 className="text-sm font-bold text-[var(--text)] leading-snug">{cert.title}</h4>
                <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                  {cert.type}
                </span>
              </div>
              <p className="relative z-10 text-indigo-400 text-xs font-semibold mb-2">{cert.issuer}</p>
              <p className="relative z-10 text-[var(--text-muted)] text-xs leading-relaxed flex-grow">{cert.desc}</p>
              {cert.link && (
                <motion.a href={cert.link} target="_blank" rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="relative z-10 mt-4 inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-xs font-bold transition-colors">
                  <FiExternalLink size={12} /> View Certificate
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
