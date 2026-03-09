import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import sanhour from "/sanhour.png";
import ecommerce from "/ecommerce.png";
import foucs from "/foucs.png";

const projects = [
  {
    id: 1,
    image: foucs,
    title: "Focus Laser Platform",
    role: "Frontend Developer & API Integration",
    des: "An integrated web platform for managing industrial machines (Laser/Fiber). Features a dynamic product catalog, user dashboard for quotes/support, and an admin panel linked with Supabase.",
    link: "https://focus-laser-front.vercel.app/",
    tags: ["Node.js", "Supabase", "Express", "Bootstrap"],
  },
  {
    id: 2,
    image: sanhour,
    title: "Senhour El-Baharaya",
    role: "Co-Founder & Lead Front-End",
    des: "A comprehensive local services platform for Senhour village. Built a secure user system with roles (Admin, Moderator, User).",
    link: "https://sanhour.elbahar.top/",
    tags: ["React", "Tailwind", "User Roles"],
  },
  {
    id: 3,
    image: ecommerce, // Placeholder for El Manhag if needed
    title: "El Manhag Team Platform",
    role: "Founder & Team Leader",
    des: "Educational platform for Business Information Systems students, centralizing lectures, summaries, and revision sessions.",
    link: "https://elmanhag.com/", // Based on search info
    tags: ["Leadership", "Web Dev", "Education"],
  }
];

import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="py-24 bg-[var(--bg-color)] transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-main)] mb-4">
            {t("projects.title")} <span className="text-blue-500">{t("projects.highlight")}</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl overflow-hidden border border-[var(--border-color)] group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white text-blue-900 rounded-full shadow-xl"
                  >
                    <FiExternalLink size={24} />
                  </motion.a>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">{project.title}</h3>
                <p className="text-blue-500 text-sm font-medium mb-4">{project.role}</p>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-grow">
                  {project.des}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-6 flex items-center gap-2 text-[var(--text-main)] font-bold hover:text-blue-400 transition-colors group/link"
                >
                  {t("projects.viewProject")} <FiExternalLink className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
