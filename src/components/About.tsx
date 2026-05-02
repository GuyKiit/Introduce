import guyImage from '../assets/guy1.jpg';
import { useLang } from '../i18n/LanguageContext';
import { translations, t } from '../i18n/translations';

const About = () => {
  const { lang } = useLang();
  const about = translations.about;
  const details = [about.detail2];

  return (
    <section id="about" className="py-24 border-t border-gray-200 dark:border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_360px] items-center gap-12 lg:gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t(about.title, lang)}</h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            <p>{t(about.paragraph1, lang)}</p>
            <p>{t(about.paragraph2, lang)}</p>
          </div>

          <div className="mt-8 grid gap-3">
            {details.map((detail) => (
              <div
                key={detail.label.en}
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 dark:border-white/10 dark:bg-white/5"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5a4fcf] dark:text-[#a89eff]">
                  {t(detail.label, lang)}
                </div>
                <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  {t(detail.value, lang)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-80 rounded-lg overflow-hidden glass p-2 shadow-2xl group transition-transform duration-500 hover:-translate-y-1">
            <img
              src={guyImage}
              alt="Kittiwin Intanil"
              className="w-full h-full object-cover rounded-md object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
