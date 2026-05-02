import { useEffect, useState } from 'react';
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
    tags: ['React', '.NET 8', 'SQL Server'],
  },
];

const ProjectCard = ({ project, lang }: { project: Project; lang: Language }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;
    const interval = window.setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3200);
    return () => window.clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="group relative overflow-hidden rounded-lg glass border border-gray-200 transition-all duration-300 hover:border-gray-300 dark:border-white/10 dark:hover:border-white/20">
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-black/30">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-[#0a0a0a] dark:via-black/20" />
        <div className="absolute inset-0 z-10 bg-white/5 transition-all duration-500 group-hover:bg-transparent dark:bg-[#4f3cdc]/10 dark:group-hover:bg-[#4f3cdc]/0" />

        {project.images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`${project.title} preview ${idx + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
              idx === currentImageIndex ? 'opacity-100 group-hover:scale-[1.02]' : 'scale-100 opacity-0'
            }`}
          />
        ))}

        <div className="absolute bottom-4 right-4 z-20 flex gap-1.5">
          {project.images.map((img, idx) => (
            <span
              key={img}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentImageIndex ? 'w-5 bg-[#a89eff]' : 'w-1.5 bg-gray-400/60 dark:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 -mt-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#0a0a0a]/90 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-[#a89eff]">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
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
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="mb-2 text-3xl font-bold">{t(proj.title, lang)}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t(proj.subtitle, lang)}</p>
        </div>
        <a
          href="https://github.com/GuyKiit"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center text-[#a89eff] transition-colors hover:text-[#c4bcff] md:inline-flex"
        >
          {t(proj.viewGitHub, lang)}
          <span className="ml-2">-&gt;</span>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} lang={lang} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <a
          href="https://github.com/GuyKiit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full border border-[#a89eff]/30 px-6 py-2 text-[#a89eff] transition-colors hover:text-gray-900 dark:hover:text-white"
        >
          {t(proj.viewAllGitHub, lang)}
        </a>
      </div>
    </section>
  );
};

export default Projects;
