import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiCode } from "react-icons/fi";
import sanhour   from "/sanhour.png";
import elmanhag  from "/elmanhag.png";
import foucs     from "/foucs.png";
import ayman     from "/ayman.png";
import { useTranslation } from "react-i18next";

const projects = [
  {
    image: ayman,
    title: "Ayman Sports Agency",
    role: "Full-Stack Developer",
    desc: "FIFA-licensed football agency platform (aymansports.com). Trials & showcases booking, team camps, player & coach profiles, custom package requests and a complete auth system.",
    link: "https://aymansports.com/",
    tags: ["Full Stack", "Supabase", "REST API", "4 Languages"],
    accent: "from-emerald-600/20 to-teal-600/10",
    border: "hover:border-emerald-500/30",
    tag_color: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    image: foucs,
    title: "Focus Laser Platform",
    role: "Frontend Developer",
    desc: "Industrial machine management platform (Laser/Fiber). Dynamic product catalog, user dashboard for quotes & support, admin panel with Supabase integration.",
    link: "https://focus-laser-front.vercel.app/",
    tags: ["HTML/CSS", "JavaScript", "Supabase", "Bootstrap"],
    accent: "from-blue-600/20 to-indigo-600/10",
    border: "hover:border-blue-500/30",
    tag_color: "text-blue-300 bg-blue-500/10 border-blue-500/20",
  },
  {
    image: sanhour,
    title: "Senhour El-Baharaya",
    role: "Co-Founder & Lead Front-End",
    desc: "Comprehensive local services platform for Senhour village — news, shops, craftsmen, and medical assistance with a multi-role user system.",
    link: "https://sanhour.elbahar.top/",
    tags: ["React", "Tailwind", "User Roles"],
    accent: "from-indigo-600/20 to-violet-600/10",
    border: "hover:border-indigo-500/30",
    tag_color: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    image: elmanhag,
    title: "El Manhag Team Platform",
    role: "Founder & Team Leader",
    desc: "Educational platform for Business Information Systems students, centralizing lectures, summaries, and revision sessions.",
    link: "https://elmanhag.com/",
    tags: ["Leadership", "Web Dev", "Education"],
    accent: "from-violet-600/20 to-purple-600/10",
    border: "hover:border-violet-500/30",
    tag_color: "text-violet-300 bg-violet-500/10 border-violet-500/20",
  },
];

const stagger = { hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.12}} };
const fadeUp  = { hidden:{opacity:0,y:24}, visible:{opacity:1,y:0,transition:{duration:0.6}} };

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-28 bg-[var(--bg-2)] relative overflow-hidden transition-colors duration-300">

      {/* ambient */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-indigo-600/6 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="mb-16">
          <span className="section-tag"><FiCode size={10}/> Projects</span>
          <h2 className="section-heading">{t("projects.title")} <span>{t("projects.highlight")}</span></h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{once:true}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article key={i} variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`group glass-effect ios-card-rounded border border-[var(--border)] ${p.border} overflow-hidden flex flex-col transition-all duration-300`}>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-b ${p.accent} z-10`} />
                <img src={p.image} alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* hover overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{background:"rgba(3,7,18,0.55)", backdropFilter:"blur(4px)"}}>
                  <a href={p.link} target="_blank"
                    className="w-12 h-12 bg-white text-[var(--bg)] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                    <FiExternalLink size={20}/>
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((tag, j) => (
                    <span key={j} className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${p.tag_color}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-base font-bold text-[var(--text)] mb-1">{p.title}</h3>
                <p className="text-indigo-400 text-xs font-semibold mb-3">{p.role}</p>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed flex-grow">{p.desc}</p>

                <a href={p.link} target="_blank"
                  className="mt-5 flex items-center gap-2 text-xs font-bold text-[var(--text-muted)] hover:text-indigo-400 transition-colors group/link">
                  {t("projects.viewProject")}
                  <FiExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"/>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
