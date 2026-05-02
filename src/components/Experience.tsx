import { CheckCircle2 } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import { translations, t } from '../i18n/translations';

const Experience = () => {
  const { lang } = useLang();
  const exp = translations.experience;


  return (
    <section id="experience" className="py-24 border-t border-gray-200 dark:border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] gap-10 lg:gap-12">
        <div className="pt-6 md:pt-8">
          <h2 className="text-3xl font-bold">{t(exp.title, lang)}</h2>
        </div>

        <div className="relative rounded-lg border border-transparent bg-transparent p-6 dark:border-transparent dark:bg-transparent md:p-8">
          <div className="absolute -left-[7px] top-8 hidden h-3.5 w-3.5 rounded-full bg-[#5a4fcf] shadow-[0_0_14px_#5a4fcf] md:block" />
          <div className="hidden md:block absolute left-[-1px] top-0 h-full border-l border-gray-200 dark:border-white/10" />

          <div className="relative">
            <div className="mb-3 inline-flex rounded-full border border-transparent bg-transparent px-3 py-1 text-xs font-semibold text-[#5a4fcf] dark:text-[#c4bcff]">
              {t(exp.duration, lang)}
            </div>
            <h3 className="text-2xl font-bold">{t(exp.role, lang)}</h3>
            <h4 className="mt-2 text-base text-gray-600 dark:text-gray-400">
              {t(exp.company, lang)}
            </h4>

            <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
              {[exp.bullet1, exp.bullet2].map((item) => (
                <li key={item.en} className="flex gap-3 leading-relaxed">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#5a4fcf]" />
                  <span>{t(item, lang)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">

              {['React', '.NET Core', 'SQL'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#a89eff]/30 bg-[#a89eff]/5 px-3 py-1 text-xs font-medium text-[#5a4fcf] dark:text-[#c4bcff]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
