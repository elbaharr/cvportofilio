import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload, FiGlobe, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import profile from "/profile.jpg";
import cv from "/cv.pdf";
import { useTranslation } from "react-i18next";

const socials = [
  { icon: <FiGithub   size={18} />, link: "https://github.com/elbaharr",             label: "GitHub"   },
  { icon: <FiLinkedin size={18} />, link: "https://www.linkedin.com/in/elbaharr",    label: "LinkedIn" },
  { icon: <FiMail     size={18} />, link: "mailto:me@elbahar.top",                   label: "Email"    },
  { icon: <FiPhone    size={18} />, link: "tel:+201127594310",                        label: "Phone"    },
  { icon: <FiGlobe   size={18} />, link: "https://elbahar.top/",                     label: "Website"  },
];

function Hero() {
  const { t } = useTranslation();

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item      = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } } };

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--bg)] overflow-hidden transition-colors duration-300">

      {/* ── Ambient background ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-0  w-[500px] h-[500px] bg-blue-600/10   rounded-full blur-[130px]" />
        {/* grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      <main id="home" className="flex-1 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 pt-28 sm:pt-32 pb-16 sm:pb-20 z-10">

        {/* ── Left: Text ── */}
        <motion.section
          variants={container} initial="hidden" animate="visible"
          className="flex-1 w-full max-w-2xl text-center md:text-left space-y-7"
        >
          {/* Badge */}
          <motion.div variants={item} className="flex justify-center md:justify-start">
            <span className="section-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse inline-block" />
              Available for work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={item} className="space-y-1">
            <p className="text-[var(--text-soft)] font-medium tracking-wide text-sm md:text-base">
              {t("hero.hello")}
            </p>
            <h1 className="text-[clamp(2.4rem,10vw,8rem)] font-black text-[var(--text)] leading-[0.95] tracking-tight">
              {t("hero.name")}
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-600 bg-clip-text text-transparent">
                {t("hero.surname")}
              </span>
            </h1>
          </motion.div>

          {/* Roles */}
          <motion.div variants={item} className="flex flex-wrap justify-center md:justify-start gap-2">
            {[t("hero.role1"), t("hero.role2"), t("hero.role3")].map((role, i) => (
              <span key={i}
                className="px-4 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm"
                style={{
                  background:   i === 0 ? "rgba(99,102,241,0.12)"  : i === 1 ? "rgba(59,130,246,0.1)"   : "rgba(16,185,129,0.1)",
                  borderColor:  i === 0 ? "rgba(99,102,241,0.3)"   : i === 1 ? "rgba(59,130,246,0.25)"  : "rgba(16,185,129,0.3)",
                  color:        i === 0 ? "#a5b4fc"                 : i === 1 ? "#93c5fd"                : "#6ee7b7"
                }}>
                {role}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p variants={item} className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed max-w-xl">
            {t("hero.description")}
          </motion.p>

          {/* CTA row */}
          <motion.div variants={item} className="flex flex-wrap justify-center md:justify-start items-center gap-3">
            <a href={cv} download
              className="group flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-[0_0_24px_rgba(99,102,241,0.35)] hover:shadow-[0_0_32px_rgba(99,102,241,0.5)]">
              <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
              {t("hero.downloadCV")}
            </a>

            <a href={`https://wa.me/201127594310?text=Hi%20Abdelrahman!`} target="_blank"
              className="group flex items-center gap-2.5 bg-green-600 hover:bg-green-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-[0_0_24px_rgba(22,163,74,0.3)] hover:shadow-[0_0_32px_rgba(22,163,74,0.45)]">
              <FaWhatsapp size={16} />
              WhatsApp
            </a>

            <a href="#contact"
              className="flex items-center gap-2 text-[var(--text-soft)] hover:text-[var(--text)] text-sm font-medium transition-colors">
              {t("navbar.contact")} <FiArrowRight size={14} />
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={item} className="flex justify-center md:justify-start items-center gap-2 pt-1">
            {socials.map((s, i) => (
              <motion.a key={i} href={s.link} target="_blank" aria-label={s.label}
                whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-[var(--text-muted)] hover:text-indigo-400 border border-[var(--border)] hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200">
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Right: Profile Photo ── */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex-1 flex justify-center items-center relative mt-4 md:mt-0"
        >
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-indigo-600/15 blur-[80px]" />
          </div>

          {/* Photo frame */}
          <div className="relative z-10 p-1.5 rounded-[2rem] bg-gradient-to-b from-indigo-500/40 to-transparent">
            <img src={profile} alt="Abdelrahman Elbahar"
              className="animate-float w-56 sm:w-72 md:w-80 lg:w-[24rem] aspect-square object-cover object-top rounded-[1.8rem]"
              style={{ boxShadow: "0 20px 60px rgba(99,102,241,0.25)" }} />
          </div>
        </motion.figure>

      </main>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--text-muted)] to-transparent" />
      </div>
    </div>
  );
}

export default Hero;
