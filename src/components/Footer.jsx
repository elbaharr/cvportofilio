import React from 'react';
import { FiHeart, FiGithub } from "react-icons/fi";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)] transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--text-muted)]">
          {t("footer.copyright")}
        </p>
        <p className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
          {t("footer.designedBy")}
          <FiHeart size={12} className="text-red-500" />
          <a href="https://github.com/elbaharr" target="_blank" className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
            Abdelrahman
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;