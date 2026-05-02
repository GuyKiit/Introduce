import { Menu, Moon, Sun, X, Languages } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { translations, t } from '../i18n/translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const { lang, toggleLang } = useLang();
  const nav = translations.navbar;

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      // Update URL hash without causing a page jump
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="fixed w-full z-50 glass border-b border-gray-200 dark:border-white/5 top-0 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 transition-colors duration-300">
              Kittiwin.dev
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium">{t(nav.about, lang)}</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium">{t(nav.skills, lang)}</a>
              <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium">{t(nav.education, lang)}</a>
              <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium">{t(nav.experience, lang)}</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium">{t(nav.projects, lang)}</a>

              {/* Language toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 group"
                title="Switch Language"
              >
                <Languages size={18} className="group-hover:rotate-12 transition-transform" />
                <span className="text-xs font-semibold tracking-wider min-w-[20px]">
                  {lang === 'en' ? 'TH' : 'EN'}
                </span>
              </button>

              <button
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5"
                title="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            {/* Language toggle (mobile) */}
            <button
              onClick={toggleLang}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 flex items-center gap-1"
            >
              <Languages size={20} />
              <span className="text-xs font-semibold">{lang === 'en' ? 'TH' : 'EN'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-gray-200 dark:border-white/5 absolute w-full transition-colors duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium">{t(nav.about, lang)}</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium">{t(nav.skills, lang)}</a>
            <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium">{t(nav.education, lang)}</a>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium">{t(nav.experience, lang)}</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium">{t(nav.projects, lang)}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
