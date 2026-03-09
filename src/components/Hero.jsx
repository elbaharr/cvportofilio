import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from "react-icons/fi";
import pc from "/pc.png";
import cv from "/cv.pdf";

import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[var(--bg-color)] overflow-hidden transition-colors duration-300">
      {/* Dynamic Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"
      ></motion.div>

      <Navbar />

      <main
        id="home"
        className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10 pt-32 pb-20"
      >
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-blue-500 font-mono tracking-widest uppercase text-sm md:text-base">
              {t("hero.hello")}
            </h3>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[var(--text-main)] leading-none">
              {t("hero.name")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                {t("hero.surname")}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4">
            <span className="glass-effect px-4 py-2 rounded-full text-blue-500 text-sm font-semibold border border-blue-500/20">
              {t("hero.role1")}
            </span>
            <span className="glass-effect px-4 py-2 rounded-full text-indigo-500 text-sm font-semibold border border-indigo-500/20">
              {t("hero.role2")}
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[var(--text-muted)] max-w-2xl text-base sm:text-lg leading-relaxed font-light px-4 sm:px-0"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start items-center gap-6">
            <a
              href={cv}
              download
              className="group relative flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              {t("hero.downloadCV")} <FiDownload className="group-hover:translate-y-1 transition-transform" />
            </a>

            <div className="flex items-center gap-4">
              {[
                { icon: <FiGithub size={22} />, link: "https://github.com/elbaharr" },
                { icon: <FiLinkedin size={22} />, link: "https://www.linkedin.com/in/elbaharr" },
                { icon: <FiMail size={22} />, link: "mailto:am.dev2003@gmail.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-3 glass-effect rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)] transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.figure
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 hidden md:flex justify-end relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent blur-3xl rounded-full"></div>
          <img
            src={pc}
            alt="Hero Visual"
            className="relative z-10 w-full max-w-lg object-contain drop-shadow-[0_0_50px_rgba(37,99,235,0.2)]"
          />
        </motion.figure>
      </main>
    </div>
  );
}

export default Hero;
