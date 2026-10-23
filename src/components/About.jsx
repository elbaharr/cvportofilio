import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiUser, FiCalendar, FiMapPin, FiShield, FiCode } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

function About() {
  const { t } = useTranslation();

  const infoItems = [
    { icon: <FiCalendar size={15} />, label: t("about.born"),          color: "text-blue-400"   },
    { icon: <FiMapPin   size={15} />, label: t("about.location"),      color: "text-indigo-400" },
    { icon: <FiShield   size={15} />, label: t("about.militaryStatus"),color: "text-emerald-400"},
    { icon: <FiCode     size={15} />, label: "BIS Graduate · 2021–2025", color: "text-violet-400" },
  ];

  return (
    <section id="about" className="py-28 bg-[var(--bg)] relative overflow-hidden transition-colors duration-300">

      {/* ambient */}
      <div className="pointer-events-none absolute top-0 right-1/3 w-96 h-96 bg-indigo-600/6 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item}
          className="mb-16">
          <span className="section-tag"><FiUser size={10}/> About</span>
          <h2 className="section-heading">
            {t("about.title")} <span>{t("about.highlight")}</span>
          </h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── Left: Profile ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Profile Card */}
            <div className="glass-effect ios-card-rounded border border-[var(--border)] p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                    <FiUser size={16} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text)]">{t("about.personalProfile")}</h3>
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem]">
                  {t("about.profileText")}
                </p>
              </div>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {infoItems.map((info, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                  className="flex items-center gap-3 px-5 py-3.5 glass-effect ios-card-rounded border border-[var(--border)] hover:border-[var(--border-hover)] transition-all group">
                  <span className={`${info.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>{info.icon}</span>
                  <span className="text-[var(--text-muted)] text-sm">{info.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Education ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass-effect ios-card-rounded border border-[var(--border)] p-8 h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400">
                    <FiBookOpen size={16} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text)]">{t("about.education")}</h3>
                </div>

                {/* Timeline item */}
                <div className="relative pl-5 border-l-2 border-indigo-500/40">
                  {/* dot */}
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[var(--bg)]" />

                  <h4 className="text-base font-bold text-[var(--text)] leading-snug">
                    {t("about.degree")}
                  </h4>
                  <p className="text-indigo-400 text-sm font-medium mt-1">{t("about.university")}</p>
                  <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium">
                    {t("about.grade")}
                  </span>

                  <ul className="mt-4 space-y-2.5">
                    {["about.eduPoint1","about.eduPoint2","about.eduPoint3"].map((key, i) => (
                      <motion.li key={i}
                        initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }} viewport={{ once: true }}
                        className="flex items-start gap-2 text-[var(--text-muted)] text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/60 flex-shrink-0" />
                        {t(key)}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
