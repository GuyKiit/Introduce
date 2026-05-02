import { useLang } from '../i18n/LanguageContext';
import { translations, t } from '../i18n/translations';

const Education = () => {
  const { lang } = useLang();
  const edu = translations.education;

  return (
    <section id="education" className="py-24 border-t border-gray-200 dark:border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] gap-10 lg:gap-12">
        <div className="pt-6 md:pt-8">
          <h2 className="text-3xl font-bold">{t(edu.title, lang)}</h2>
        </div>

        <div className="relative rounded-lg border border-transparent bg-transparent p-6 dark:border-transparent dark:bg-transparent md:p-8">
          <div className="absolute -left-[7px] top-8 hidden h-3.5 w-3.5 rounded-full bg-[#5a4fcf] shadow-[0_0_14px_#5a4fcf] md:block" />
          <div className="hidden md:block absolute left-[-1px] top-0 h-full border-l border-gray-200 dark:border-white/10" />

          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold leading-snug">{t(edu.degree, lang)}</h3>
              <p className="mt-2 text-sm text-[#5a4fcf] dark:text-[#a89eff]">
                {t(edu.institution, lang)}
                <span className="mx-2 text-gray-400 dark:text-gray-600">·</span>
                {t(edu.faculty, lang)}
              </p>
            </div>
            <div className="shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:pt-1">
              {t(edu.years, lang)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
