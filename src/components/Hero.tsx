import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center flex-grow min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-xs text-gray-600 dark:text-gray-300 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Junior by title, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#816bf8] via-[#4f3cdc] to-[#25187e]">
              Senior by curiosity
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            I'm Kittiwin Intanil, a Software Developer crafting scalable applications and elegant interfaces with modern web technologies.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 py-3 rounded-full font-medium transition-colors flex items-center group">
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/Introduce/cv.pdf"
              download="Kittiwin_Intanil_CV.pdf"
            >
              <button className="glass hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center">
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </button>
            </a>
          </div>
        </div>

        <div className="hidden lg:block w-full max-w-md relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#4f3cdc] to-purple-600 opacity-20 blur-2xl"></div>
          <div className="relative rounded-2xl glass p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <pre className="text-sm font-mono text-gray-700 dark:text-gray-300 overflow-x-auto">
              <code>
                <span className="text-pink-400">const</span> developer = {'{'}
                <br />
                {'  '}name: <span className="text-green-400">'Kittiwin Intanil'</span>,
                <br />
                {'  '}role: <span className="text-green-400">'Software Developer'</span>,
                <br />
                {'  '}skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'.NET 8'</span>, <span className="text-green-400">'SQL'</span>],
                <br />
                {'  '}passionate: <span className="text-orange-400">true</span>
                <br />
                {'}'};
                <br /><br />
                developer.<span className="text-blue-400">solveProblem</span>();
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
