import { useState, useEffect } from 'react';
import group1Image from '../assets/Group 1.png';
import scImage from '../assets/SC.png';
import closeImage from '../assets/CLOSE.png';
import email from '../assets/email.png';
import { useLang } from '../i18n/LanguageContext';
import { translations, t } from '../i18n/translations';
import type { Language } from '../i18n/translations';

type Project = {
  title: string;
  descriptionEn: string;
  descriptionTh: string;
  images: string[];
  tags: string[];
};

const projects: Project[] = [
  {
    title: 'Corrective Action System (CAS)',
    descriptionEn: translations.projects.cas.description.en,
    descriptionTh: translations.projects.cas.description.th,
    images: [group1Image, scImage, closeImage, email],
    tags: ['React', '.NET 8', 'SQL Server']
  },
];

const ProjectCard = ({ project, lang }: { project: Project; lang: Language }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <div className="group relative overflow-hidden rounded-2xl glass border border-transparent dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300">
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0a] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-white/10 dark:bg-[#4f3cdc]/10 group-hover:bg-transparent dark:group-hover:bg-[#4f3cdc]/0 transition-all duration-500 z-10"></div>
        
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} preview ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-1000 ${
              idx === currentImageIndex 
                ? 'opacity-100 group-hover:scale-105' 
                : 'opacity-0 scale-100'
            }`}
          />
        ))}
      </div>

      <div className="p-8 relative z-20 -mt-20">
        <div className="flex gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 text-xs rounded-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 shadow-lg">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#a89eff] transition-colors">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
          {lang === 'en' ? project.descriptionEn : project.descriptionTh}
        </p>
      </div>
    </div>
  );
};

const Projects = () => {
  const { lang } = useLang();
  const proj = translations.projects;

  return (
    <section id="projects" className="py-24 border-t border-gray-200 dark:border-white/5">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">{t(proj.title, lang)}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t(proj.subtitle, lang)}</p>
        </div>
        <a href="https://github.com/GuyKiit"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-[#a89eff] hover:text-[#c4bcff] transition-colors">
          {t(proj.viewGitHub, lang)}
          <span className="ml-2">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} lang={lang} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <button className="text-[#a89eff] hover:text-gray-900 dark:hover:text-white transition-colors border border-[#a89eff]/30 rounded-full px-6 py-2">
          {t(proj.viewAllGitHub, lang)}
        </button>
      </div>
    </section>
  );
};

export default Projects;
