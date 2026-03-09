import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiUser, FiCalendar, FiMapPin } from "react-icons/fi";

import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 bg-[var(--bg-color)] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-main)] mb-4">
            {t("about.title")} <span className="text-blue-500">{t("about.highlight")}</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 ios-card-rounded border border-[var(--border-color)] space-y-6 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center gap-4 text-blue-500 mb-6">
              <FiUser size={28} />
              <h3 className="text-2xl font-bold text-[var(--text-main)]">{t("about.personalProfile")}</h3>
            </div>
            <p className="relative z-10 text-[var(--text-muted)] leading-relaxed text-lg">
              {t("about.profileText")}
            </p>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-[var(--text-muted)]">
                <FiCalendar className="text-blue-500" />
                <span>{t("about.born")}</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--text-muted)]">
                <FiMapPin className="text-blue-500" />
                <span>{t("about.location")}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 ios-card-rounded border border-[var(--border-color)] space-y-6 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center gap-4 text-indigo-500 mb-6">
              <FiBookOpen size={28} />
              <h3 className="text-2xl font-bold text-[var(--text-main)]">{t("about.education")}</h3>
            </div>
            <div className="relative z-10 space-y-4">
              <div className="border-l-2 border-indigo-500 pl-6 py-2">
                <h4 className="text-xl font-bold text-[var(--text-main)]">{t("about.degree")}</h4>
                <p className="text-indigo-500 font-medium">{t("about.university")}</p>
                <p className="text-sm text-[var(--text-muted)] mt-1 opacity-80">{t("about.grade")}</p>
                <ul className="text-[var(--text-muted)] mt-3 space-y-2 text-sm">
                  <motion.li initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>• {t("about.eduPoint1")}</motion.li>
                  <motion.li initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>• {t("about.eduPoint2")}</motion.li>
                  <motion.li initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>• {t("about.eduPoint3")}</motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
