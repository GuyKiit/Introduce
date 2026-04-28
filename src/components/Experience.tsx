import { useLang } from '../i18n/LanguageContext';
import { translations, t } from '../i18n/translations';

const Experience = () => {
  const { lang } = useLang();
  const exp = translations.experience;

  return (
    <section id="experience" className="py-24 border-t border-gray-200 dark:border-white/5">
      <div className="flex flex-col md:flex-row gap-12">
        <h2 className="text-3xl font-bold md:w-1/4">{t(exp.title, lang)}</h2>

        <div className="md:w-3/4 relative border-l border-gray-200 dark:border-white/10 pl-8 pb-8">
          <div className="absolute w-3 h-3 bg-[#5a4fcf] rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_#5a4fcf]"></div>

          <div className="mb-2 text-sm text-[#a89eff] tracking-wider font-semibold">{t(exp.duration, lang)} </div>
          <h3 className="text-2xl font-bold mb-1">{t(exp.role, lang)}</h3>
          <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-6">บริษัท ไทยรุ่งเรือง เทคโนโลยี จำกัด</h4>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300 mb-8 list-none pr-4 md:pr-0">
            <li className="flex items-start">
              <span className="mr-3 text-[#5a4fcf] mt-1">•</span>
              <span>{t(exp.bullet1, lang)}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#5a4fcf] mt-1">•</span>
              <span>{t(exp.bullet2, lang)}</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">React</span>
            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">.NET Core</span>
            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">SQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
