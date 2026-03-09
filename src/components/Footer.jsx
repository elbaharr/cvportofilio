import React from 'react'

import { useTranslation } from "react-i18next";
import { FiHeart } from "react-icons/fi";

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[var(--bg-color)] border-t border-[var(--border-color)] text-[var(--text-main)] py-8 transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-2">
        <p className="text-sm text-center text-[var(--text-muted)]">
          {t("footer.copyright")}
        </p>
        <p className="text-sm text-[var(--text-muted)] flex items-center gap-1">
          {t("footer.designedBy")} <FiHeart className="text-red-500" /> {currentYear}
        </p>
      </div>
    </footer>
  );
}

export default Footer