import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [currentLanguage]);

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    setCurrentLanguage(newLang);
  };

  const NavbarLinks = [
    { id: 1, name: t("navbar.home"), link: "#home" },
    { id: 2, name: t("navbar.about"), link: "#about" },
    { id: 3, name: t("navbar.skills"), link: "#skills" },
    { id: 4, name: t("navbar.projects"), link: "#projects" },
    { id: 5, name: t("navbar.experience"), link: "#experience" },
  ];

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-effect shadow-2xl ios-rounded py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12 text-[var(--text-main)]">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-black tracking-tighter"
        >
          ELBAHAR<span className="text-blue-500">.</span>
        </motion.a>

        <nav className="hidden md:flex items-center space-x-8">
          {NavbarLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative text-sm font-medium uppercase tracking-widest hover:text-blue-500 transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleLanguage}
            className="p-2 glass-effect rounded-xl text-blue-500 font-bold text-sm"
          >
            {currentLanguage === 'en' ? 'ع' : 'En'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 glass-effect rounded-xl text-blue-500"
          >
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-effect px-6 py-2 rounded-full text-sm font-bold border border-[var(--border-color)] hover:bg-blue-500 hover:text-white transition-all shadow-lg"
          >
            {t("navbar.contact")}
          </motion.a>
        </nav>

        <div className="flex items-center space-x-4 md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleLanguage}
            className="p-2 glass-effect rounded-xl text-blue-500 font-bold text-sm"
          >
            {currentLanguage === 'en' ? 'ع' : 'En'}
          </motion.button>
          <button
            className="p-2 glass-effect rounded-xl text-blue-500"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            className="p-2 glass-effect rounded-xl text-[var(--text-main)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-[var(--bg-color)] backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {NavbarLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold tracking-widest hover:text-blue-500 transition-colors text-[var(--text-main)]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="#contact"
              className="px-10 py-4 glass-effect rounded-full text-xl font-bold border border-[var(--border-color)] text-[var(--text-main)]"
              onClick={() => setIsOpen(false)}
            >
              {t("navbar.contact")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
