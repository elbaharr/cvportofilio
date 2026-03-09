import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const contactMethods = [
    {
      icon: <FiMail size={24} />,
      label: "Email",
      value: "am.dev2003@gmail.com",
      link: "mailto:am.dev2003@gmail.com",
      color: "text-red-400",
    },
    {
      icon: <FiPhone size={24} />,
      label: "Phone",
      value: "(+20) 112 759 4310",
      link: "tel:+201127594310",
      color: "text-green-400",
    },
    {
      icon: <FiLinkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/elbaharr",
      link: "https://www.linkedin.com/in/elbaharr",
      color: "text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--bg-color)] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-main)] mb-4">
            {t("contact.title")} <span className="text-blue-500">{t("contact.highlight")}</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[var(--text-main)]">{t("contact.infoTitle")}</h3>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                {t("contact.infoText")}
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 glass-effect ios-card-rounded border border-[var(--border-color)] group transition-all"
                >
                  <div className={`${method.color} bg-white/5 p-4 rounded-xl group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-widest">{method.label}</p>
                    <p className="text-[var(--text-main)] font-medium text-lg">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-10 rounded-3xl border border-[var(--border-color)] shadow-2xl"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[var(--text-muted)] uppercase ml-1">{t("contact.name")}</label>
                <input
                  type="text"
                  placeholder={t("contact.name")}
                  className="w-full px-6 py-4 bg-white/5 border border-[var(--border-color)] rounded-2xl text-[var(--text-main)] focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[var(--text-muted)] uppercase ml-1">{t("contact.email")}</label>
                <input
                  type="email"
                  placeholder={t("contact.email")}
                  className="w-full px-6 py-4 bg-white/5 border border-[var(--border-color)] rounded-2xl text-[var(--text-main)] focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[var(--text-muted)] uppercase ml-1">{t("contact.message")}</label>
                <textarea
                  rows="4"
                  placeholder={t("contact.message")}
                  className="w-full px-6 py-4 bg-white/5 border border-[var(--border-color)] rounded-2xl text-[var(--text-main)] focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-all"
              >
                {t("contact.send")} <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;