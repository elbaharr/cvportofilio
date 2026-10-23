import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiUsers, FiStar, FiBookOpen, FiMapPin } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Ayman Sports Agency (aymansports.com)",
    period: "2026 – Present",
    location: "Cairo, Egypt",
    color: { dot: "bg-emerald-500", glow: "bg-emerald-500/20", text: "text-emerald-400", border: "hover:border-emerald-500/30" },
    icon: <FiBriefcase size={14} />,
    points: [
      "Developed and launched the official FIFA-licensed agency platform — trials booking, team camps, and player & coach directories.",
      "Built authentication, dashboards and admin workflows backed by Supabase and a custom REST API.",
      "Implemented multilingual support (EN / AR / FR / ES) with a fully responsive, mobile-first design.",
    ],
  },
  {
    title: "Co-Founder & Front-End Developer",
    company: "Senhour El-Baharaya Website",
    period: "Jan 2022 – Present",
    location: "Fayoum",
    color: { dot: "bg-blue-500", glow: "bg-blue-500/20", text: "text-blue-400", border: "hover:border-blue-500/30" },
    icon: <FiBriefcase size={14} />,
    points: [
      "Designed and developed a front-end website with local services (news, shops, craftsmen, medical assistance).",
      "Built a secure user system with roles: Admin, Moderator, User.",
    ],
  },
  {
    title: "Founder & Team Leader",
    company: "El Manhag Team",
    period: "Nov 2021 – Present",
    location: "Cairo",
    color: { dot: "bg-indigo-500", glow: "bg-indigo-500/20", text: "text-indigo-400", border: "hover:border-indigo-500/30" },
    icon: <FiUsers size={14} />,
    points: [
      "Founded and led a student team producing educational content for BIS students.",
      "Developed and managed the official team website to centralize resources.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Focus Laser Website",
    period: "Jan 2026 – Mar 2026",
    location: "Cairo",
    color: { dot: "bg-sky-500", glow: "bg-sky-500/20", text: "text-sky-400", border: "hover:border-sky-500/30" },
    icon: <FiBriefcase size={14} />,
    points: [
      "Developed the official website using HTML, CSS and JavaScript.",
      "Translated brand identity into functional, optimized web pages.",
    ],
  },
  {
    title: "Teaching Assistant (BIS)",
    company: "El-Abassia Higher Institute",
    period: "May 2026",
    location: "Cairo, Egypt",
    color: { dot: "bg-emerald-500", glow: "bg-emerald-500/20", text: "text-emerald-400", border: "hover:border-emerald-500/30" },
    icon: <FiBookOpen size={14} />,
    points: [
      "Delivered introductory lectures in Programming Fundamentals.",
      "Supervised examinations ensuring compliance with regulations.",
    ],
  },
];

const activities = [
  {
    title: "Team Leader",
    org: "El Manhag Team",
    period: "Sep 2023 – Sep 2025",
    desc: "Led programming & IT skill sessions (HTML, CSS). Supervised members, prepared tasks, and supported students.",
  },
  {
    title: "Project Leader",
    org: "Enactus New Cairo Academy",
    period: "Jan 2023 – Sep 2024",
    desc: "Developed and managed project plans and team initiatives.",
  },
  {
    title: "Member – ET5 Team",
    org: "IEEE New Cairo Academy",
    period: "",
    desc: "Organized programming workshops and attended PR technical sessions (presentation, public speaking, formal writing).",
  },
];

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeLeft  = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55 } } };
const fadeRight = { hidden: { opacity: 0, x:  20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55 } } };
const fadeUp    = { hidden: { opacity: 0, y:  18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5  } } };

function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-28 bg-[var(--bg)] relative overflow-hidden transition-colors duration-300">

      {/* ambient */}
      <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/6 rounded-full blur-[140px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <span className="section-tag"><FiBriefcase size={10} /> Experience</span>
          <h2 className="section-heading">{t("experience.title")} <span>{t("experience.highlight")}</span></h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── Timeline ── */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-8 flex items-center gap-2">
              <FiBriefcase size={12} /> Work Experience
            </h3>
            <div className="relative pl-6 border-l border-[var(--border)] space-y-6">
              {experiences.map((exp, i) => (
                <motion.div key={i} variants={fadeLeft} className="relative group">
                  {/* dot */}
                  <div className={`absolute -left-[29px] top-4 w-3 h-3 rounded-full ${exp.color.dot} border-2 border-[var(--bg)] shadow-[0_0_8px_2px] ${exp.color.glow} transition-all group-hover:scale-125`} />

                  <div className={`glass-effect ios-card-rounded border border-[var(--border)] ${exp.color.border} p-5 relative overflow-hidden transition-all duration-300 group`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {/* period + location */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${exp.color.text}`}>{exp.period}</span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-[10px] text-[var(--text-muted)]">
                          <FiMapPin size={9} /> {exp.location}
                        </span>
                      )}
                    </div>
                    <h4 className="relative z-10 text-sm font-bold text-[var(--text)] mb-0.5">{exp.title}</h4>
                    <p className={`relative z-10 text-xs font-semibold ${exp.color.text} mb-3`}>{exp.company}</p>
                    <ul className="relative z-10 space-y-1.5">
                      {exp.points.map((pt, pi) => (
                        <li key={pi} className="flex items-start gap-2 text-[var(--text-muted)] text-xs leading-relaxed">
                          <span className={`mt-1.5 w-1 h-1 rounded-full ${exp.color.dot} flex-shrink-0`} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Activities ── */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-8 flex items-center gap-2">
              <FiStar size={12} /> {t("experience.extracurricular")}
            </h3>
            <div className="space-y-4">
              {activities.map((act, i) => (
                <motion.div key={i} variants={fadeRight}
                  whileHover={{ x: 4 }}
                  className="glass-effect ios-card-rounded border border-[var(--border)] hover:border-indigo-500/30 p-5 group relative overflow-hidden transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 flex items-start justify-between gap-3 mb-1">
                    <h4 className="text-sm font-bold text-[var(--text)] group-hover:text-indigo-400 transition-colors">{act.title}</h4>
                    {act.period && <span className="text-[10px] text-indigo-400 font-semibold flex-shrink-0">{act.period}</span>}
                  </div>
                  <p className="relative z-10 text-indigo-400 text-xs font-semibold mb-2">{act.org}</p>
                  <p className="relative z-10 text-[var(--text-muted)] text-xs leading-relaxed">{act.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Experience;