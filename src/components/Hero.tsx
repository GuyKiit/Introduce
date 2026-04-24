import { ArrowRight, Download, Loader2 } from 'lucide-react';
import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import CvDocument from './CvDocument';

const Hero = () => {
  const cvRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleDownloadCV = async () => {
    if (!cvRef.current || isExporting) return;
    setIsExporting(true);
    try {
      const options = {
        margin: 0,
        filename: 'Kittiwin_Intanil_CV.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          // html2canvas ไม่รองรับ oklch() ที่ Tailwind v4 ใช้
          // ลบ stylesheet ทั้งหมดออกก่อน capture (CvDocument ใช้ inline styles อยู่แล้ว)
          onclone: (_clonedDoc: Document, element: HTMLElement) => {
            const doc = element.ownerDocument;
            doc.querySelectorAll('link[rel="stylesheet"], style').forEach(el => el.remove());
          },
        },
        jsPDF: { unit: 'px' as const, format: [794, 1123] as [number, number], orientation: 'portrait' as const },
      };
      await html2pdf().set(options).from(cvRef.current).save();
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center flex-grow min-h-screen">
      {/* Hidden CV document — captured by html2pdf, never visible to the user */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0, pointerEvents: 'none' }}>
        <CvDocument ref={cvRef} />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-xs text-gray-600 dark:text-gray-300 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            New to the field, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#816bf8] via-[#4f3cdc] to-[#25187e]">
              not to the craft
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Hey, I'm Kittiwin — a Software Developer who loves building things that just work, from clean interfaces to solid back-end logic.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 py-3 rounded-full font-medium transition-colors flex items-center group">
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleDownloadCV}
              disabled={isExporting}
              className="glass hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isExporting ? (
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              ) : (
                <Download className="mr-2 w-4 h-4" />
              )}
              {isExporting ? 'Generating…' : 'Download CV'}
            </button>
          </div>
        </div>

        <div className="hidden lg:block w-full max-w-md relative">
          {/* Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#4f3cdc] to-purple-600 opacity-20 blur-2xl" />

          {/* Editor Window */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">

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
                    <td className="text-gray-800 dark:text-gray-200"><span className="text-pink-400">const</span> <span className="text-sky-300">developer</span> <span className="text-gray-400"> =</span> {'{'}</td>
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
