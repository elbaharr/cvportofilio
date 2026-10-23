import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiGlobe, FiExternalLink, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const WHATSAPP_NUM = "201127594310";

const contacts = [
  { icon: <FiMail     size={16}/>, label:"Email",    value:"me@elbahar.top",             link:"mailto:me@elbahar.top",                    color:"text-blue-400",   bg:"bg-blue-500/10",   border:"hover:border-blue-500/30"   },
  { icon: <FiPhone    size={16}/>, label:"Phone",    value:"(+20) 112 759 4310",         link:"tel:+201127594310",                         color:"text-emerald-400",bg:"bg-emerald-500/10",border:"hover:border-emerald-500/30" },
  { icon: <FiLinkedin size={16}/>, label:"LinkedIn", value:"linkedin.com/in/elbaharr",   link:"https://www.linkedin.com/in/elbaharr",      color:"text-sky-400",    bg:"bg-sky-500/10",    border:"hover:border-sky-500/30"    },
  { icon: <FiGithub   size={16}/>, label:"GitHub",   value:"github.com/elbaharr",        link:"https://github.com/elbaharr",               color:"text-purple-400", bg:"bg-purple-500/10", border:"hover:border-purple-500/30" },
  { icon: <FiGlobe    size={16}/>, label:"Website",  value:"elbahar.top",               link:"https://elbahar.top/",                      color:"text-violet-400", bg:"bg-violet-500/10", border:"hover:border-violet-500/30" },
];

const stagger = { hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.08}} };
const fadeUp  = { hidden:{opacity:0,y:16}, visible:{opacity:1,y:0,transition:{duration:0.5}} };

function Contact() {
  const { t } = useTranslation();
  const waLink = `https://wa.me/${WHATSAPP_NUM}?text=Hi%20Abdelrahman%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`;

  return (
    <section id="contact" className="py-28 bg-[var(--bg-2)] relative overflow-hidden transition-colors duration-300">

      {/* ambient */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/6 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="mb-16">
          <span className="section-tag"><FiMessageCircle size={10}/> Contact</span>
          <h2 className="section-heading">{t("contact.title")} <span>{t("contact.highlight")}</span></h2>
          <div className="accent-line mt-4" />
          <p className="text-[var(--text-muted)] mt-5 max-w-lg text-sm leading-relaxed">{t("contact.infoText")}</p>
        </motion.div>

        <div className="max-w-3xl">

          {/* ── WhatsApp CTA ── */}
          <motion.a
            href={waLink} target="_blank" rel="noopener noreferrer"
            initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}}
            viewport={{once:true}}
            whileHover={{scale:1.015, y:-3}} whileTap={{scale:0.98}}
            className="group relative flex flex-col sm:flex-row items-center gap-5 sm:gap-8 w-full mb-8 p-5 sm:p-7 rounded-2xl border border-green-500/25 overflow-hidden transition-all duration-300"
            style={{ background: "linear-gradient(135deg, rgba(22,163,74,0.12), rgba(16,185,129,0.06))" }}
          >
            {/* shimmer */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
            {/* glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{boxShadow:"0 0 40px rgba(22,163,74,0.2), inset 0 0 40px rgba(22,163,74,0.05)"}} />

            {/* icon block */}
            <div className="relative z-10 flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                  <FaWhatsapp size={32} />
                </div>
              </div>
            </div>

            {/* text */}
            <div className="relative z-10 flex-1 text-center sm:text-left">
              <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1">⚡ Fastest Response</p>
              <h3 className="text-xl font-black text-[var(--text)] mb-0.5">Chat on WhatsApp</h3>
              <p className="text-[var(--text-muted)] text-sm">Usually replies within a few hours</p>
            </div>

            {/* button */}
            <div className="relative z-10 flex-shrink-0 flex items-center gap-2 bg-green-500 group-hover:bg-green-400 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg">
              Start Chat <FiExternalLink size={14}/>
            </div>
          </motion.a>

          {/* ── Contact Grid ── */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{once:true}}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {contacts.map((c, i) => (
              <motion.a key={i} href={c.link} target="_blank" rel="noopener noreferrer"
                variants={fadeUp} whileHover={{y:-4, scale:1.02}}
                className={`group flex items-center gap-3.5 px-4 py-4 glass-effect ios-card-rounded border border-[var(--border)] ${c.border} transition-all duration-300 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`relative z-10 w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center ${c.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {c.icon}
                </div>
                <div className="relative z-10 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-0.5">{c.label}</p>
                  <p className="text-[var(--text)] text-xs font-semibold truncate">{c.value}</p>
                </div>
                <FiExternalLink size={12} className="relative z-10 ml-auto text-[var(--text-muted)] opacity-0 group-hover:opacity-60 flex-shrink-0 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>

          {/* ── Availability ── */}
          <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.3}}
            className="flex justify-center sm:justify-start">
            <div className="flex items-center gap-2.5 glass-effect px-5 py-2.5 rounded-full border border-emerald-500/20">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-xs font-semibold">{t("contact.availability")}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;