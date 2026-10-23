import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [dark,      setDark]      = useState(true);
  const [lang,      setLang]      = useState(i18n.language);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggleLang = () => {
    const next = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(next);
    window.localStorage.setItem("i18nextLng", next);
    setLang(next);
  };

  const links = [
    { name: t("navbar.home"),       href: "#home"       },
    { name: t("navbar.about"),      href: "#about"      },
    { name: t("navbar.skills"),     href: "#skills"     },
    { name: t("navbar.projects"),   href: "#projects"   },
    { name: t("navbar.experience"), href: "#experience" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-effect border-b border-[var(--border)] py-3"
          : "bg-transparent py-5"
      }`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <motion.a href="#home" initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}}
            className="text-xl font-black tracking-tighter text-[var(--text)]">
            ELBAHAR<span className="text-indigo-500">.</span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link, i) => (
              <motion.a key={i} href={link.href}
                initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} transition={{delay: i * 0.07}}
                className="relative px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text)] rounded-lg hover:bg-white/5 transition-all group">
                {link.name}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            ))}
          </nav>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-2">
            <button onClick={toggleLang}
              className="px-3 py-1.5 text-xs font-bold rounded-lg text-indigo-400 border border-indigo-500/25 hover:bg-indigo-500/10 transition-all">
              {lang === "en" ? "ع" : "En"}
            </button>
            <button onClick={() => setDark(!dark)}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-white/5 transition-all">
              {dark ? <FiSun size={16}/> : <FiMoon size={16}/>}
            </button>
            <a href="#contact"
              className="px-5 py-2 text-xs font-bold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-[0_0_16px_rgba(99,102,241,0.3)] hover:shadow-[0_0_24px_rgba(99,102,241,0.45)]">
              {t("navbar.contact")}
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggleLang}
              className="px-3 py-1.5 text-xs font-bold rounded-lg text-indigo-400 border border-indigo-500/25">
              {lang === "en" ? "ع" : "En"}
            </button>
            <button onClick={() => setDark(!dark)}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-muted)] border border-[var(--border)]">
              {dark ? <FiSun size={16}/> : <FiMoon size={16}/>}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text)] border border-[var(--border)] hover:bg-white/5 transition-all">
              {isOpen ? <FiX size={18}/> : <FiMenu size={18}/>}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 z-40 md:hidden"
            style={{background:"rgba(3,7,18,0.97)", backdropFilter:"blur(20px)"}}>
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {links.map((link, i) => (
                <motion.a key={i} href={link.href}
                  initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.06}}
                  onClick={()=>setIsOpen(false)}
                  className="text-2xl font-bold text-[var(--text)] hover:text-indigo-400 transition-colors tracking-tight">
                  {link.name}
                </motion.a>
              ))}
              <motion.a href="#contact"
                initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:links.length*0.06}}
                onClick={()=>setIsOpen(false)}
                className="mt-4 px-10 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm">
                {t("navbar.contact")}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
