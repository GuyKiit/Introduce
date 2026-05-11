import { Download } from 'lucide-react';
import type React from 'react';
import { useLang } from '../i18n/LanguageContext';
import { translations, t } from '../i18n/translations';

const Hero = () => {
  const { lang } = useLang();
  const hero = translations.hero;

  const handleViewProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', '#projects');
  };



  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 flex flex-col items-center flex-grow min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/10 text-xs text-emerald-700 dark:text-emerald-300 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            {t(hero.badge, lang)}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            {t(hero.headingLine1, lang)} <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#816bf8] via-[#4f3cdc] to-[#25187e]">
              {t(hero.headingLine2, lang)}
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            {t(hero.description, lang)}
          </p>



          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`${import.meta.env.BASE_URL}Resume_Kittiwin_Intanil_Software_Developer.pdf`}
              download="Resume_Kittiwin_Intanil_Software_Developer.pdf"
              className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 py-3 rounded-full font-medium transition-colors flex items-center"
            >
              <Download className="mr-2 w-4 h-4" />
              {t(hero.downloadCV, lang)}
            </a>
          </div>
        </div>

        <div className="hidden lg:block w-full max-w-md relative">
          {/* Glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#4f3cdc] to-purple-600 opacity-20 blur-2xl" />

          {/* Editor Window */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">

            {/* Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100/80 dark:bg-[#1e1e1e]/90 backdrop-blur-sm border-b border-gray-200 dark:border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-3 flex items-center gap-1">
                <span className="text-xs px-3 py-0.5 rounded-t bg-white dark:bg-[#252526] text-gray-700 dark:text-gray-300 border-t border-x border-gray-200 dark:border-white/10 font-mono">
                  developer.ts
                </span>
              </div>
            </div>

            {/* Code Body */}
            <div className="bg-white/70 dark:bg-[#1e1e1e]/80 backdrop-blur-sm px-4 py-5">
              <table className="text-sm font-mono w-full border-collapse">
                <tbody>
                  <tr className="leading-6 hover:bg-[#4f3cdc]/5 transition-colors">
                    <td className="select-none text-right pr-4 text-gray-300 dark:text-gray-600 w-6 text-xs">1</td>
                    <td className="text-gray-800 dark:text-gray-200"><span className="text-pink-400">const</span> <span className="text-sky-300">developer</span> <span className="text-gray-400">=</span> {'{'}</td>
                  </tr>
                  <tr className="leading-6 hover:bg-[#4f3cdc]/5 transition-colors">
                    <td className="select-none text-right pr-4 text-gray-300 dark:text-gray-600 w-6 text-xs">2</td>
                    <td className="text-gray-800 dark:text-gray-200"><span className="text-gray-500">{'  '}</span><span className="text-[#9cdcfe]">name</span><span className="text-gray-400">:</span> <span className="text-[#ce9178]">'Kittiwin Intanil'</span><span className="text-gray-400">,</span></td>
                  </tr>
                  <tr className="leading-6 hover:bg-[#4f3cdc]/5 transition-colors">
                    <td className="select-none text-right pr-4 text-gray-300 dark:text-gray-600 w-6 text-xs">3</td>
                    <td className="text-gray-800 dark:text-gray-200"><span className="text-gray-500">{'  '}</span><span className="text-[#9cdcfe]">role</span><span className="text-gray-400">:</span> <span className="text-[#ce9178]">'Software Developer'</span><span className="text-gray-400">,</span></td>
                  </tr>
                  <tr className="leading-6 hover:bg-[#4f3cdc]/5 transition-colors">
                    <td className="select-none text-right pr-4 text-gray-300 dark:text-gray-600 w-6 text-xs">4</td>
                    <td className="text-gray-800 dark:text-gray-200"><span className="text-gray-500">{'  '}</span><span className="text-[#9cdcfe]">skills</span><span className="text-gray-400">: [</span></td>
                  </tr>
                  <tr className="leading-6 hover:bg-[#4f3cdc]/5 transition-colors">
                    <td className="select-none text-right pr-4 text-gray-300 dark:text-gray-600 w-6 text-xs">5</td>
                    <td className="text-gray-800 dark:text-gray-200"><span className="text-gray-500">{'    '}</span><span className="text-[#ce9178]">'React'</span><span className="text-gray-400">, </span><span className="text-[#ce9178]">'.NET 8'</span><span className="text-gray-400">, </span><span className="text-[#ce9178]">'SQL'</span><span className="text-gray-400">,</span></td>
                  </tr>
                  <tr className="leading-6 hover:bg-[#4f3cdc]/5 transition-colors">
                    <td className="select-none text-right pr-4 text-gray-300 dark:text-gray-600 w-6 text-xs">6</td>
                    <td className="text-gray-800 dark:text-gray-200"><span className="text-gray-500">{'    '}</span><span className="text-[#ce9178]">'AI-Assisted'</span></td>
                  </tr>
                  <tr className="leading-6 hover:bg-[#4f3cdc]/5 transition-colors">
                    <td className="select-none text-right pr-4 text-gray-300 dark:text-gray-600 w-6 text-xs">7</td>
                    <td className="text-gray-800 dark:text-gray-200"><span className="text-gray-500">{'  '}],</span></td>
                  </tr>
                  <tr className="leading-6 hover:bg-[#4f3cdc]/5 transition-colors">
                    <td className="select-none text-right pr-4 text-gray-300 dark:text-gray-600 w-6 text-xs">8</td>
                    <td className="text-gray-800 dark:text-gray-200"><span className="text-gray-500">{'  '}</span><span className="text-[#9cdcfe]">passionate</span><span className="text-gray-400">:</span> <span className="text-[#569cd6]">true</span></td>
                  </tr>
                  <tr className="leading-6 hover:bg-[#4f3cdc]/5 transition-colors">
                    <td className="select-none text-right pr-4 text-gray-300 dark:text-gray-600 w-6 text-xs">9</td>
                    <td className="text-gray-800 dark:text-gray-200"><span className="text-gray-400">{'}'}</span><span className="text-gray-400">;</span></td>
                  </tr>
                  <tr className="leading-6">
                    <td className="select-none text-right pr-4 text-gray-300 dark:text-gray-600 w-6 text-xs">10</td>
                    <td />
                  </tr>
                  <tr className="leading-6 hover:bg-[#4f3cdc]/5 transition-colors">
                    <td className="select-none text-right pr-4 text-gray-300 dark:text-gray-600 w-6 text-xs">11</td>
                    <td className="text-gray-800 dark:text-gray-200"><span className="text-sky-300">developer</span><span className="text-gray-400">.</span><span className="text-[#dcdcaa]">solveProblem</span><span className="text-gray-400">();</span></td>
                  </tr>
                  <tr className="leading-6">
                    <td className="select-none text-right pr-4 text-gray-300 dark:text-gray-600 w-6 text-xs">12</td>
                    <td><span className="inline-block w-2 h-4 bg-[#a89eff] align-middle animate-pulse rounded-sm" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
