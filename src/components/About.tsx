import guyImage from '../assets/guy1.jpg';
import { useLang } from '../i18n/LanguageContext';
import { translations, t } from '../i18n/translations';

const About = () => {
  const { lang } = useLang();
  const about = translations.about;

  return (
    <section id="about" className="py-24 border-t border-gray-200 dark:border-white/5">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t(about.title, lang)}</h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            <p>
              {t(about.paragraph1, lang)}
            </p>
            <p>
              {t(about.paragraph2, lang)}
            </p>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          {/* เพิ่ม group และบรรทัด hover:scale-[1.02] เพื่อให้ตัวกรอบขยับนิดๆ หรือไม่ใส่ก็ได้ครับ */}
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden glass p-2 shadow-2xl group transition-transform duration-500">

            {/* เพิ่ม transition-transform duration-500 และ group-hover:scale-110 */}
            <img
              // src="https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbSFsFFh2P8F4Qvjl5avopBgNsFWzLW4ZyfnE9QnrPPnwEwSlUXPhN.jpg"
              src={guyImage}

              alt="Kittiwin Intanil"
              className="w-full h-full object-cover rounded-xl object-center transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
