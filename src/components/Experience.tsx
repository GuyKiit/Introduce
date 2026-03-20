const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-white/5">
      <div className="flex flex-col md:flex-row gap-12">
        <h2 className="text-3xl font-bold md:w-1/4">Experience</h2>
        
        <div className="md:w-3/4 relative border-l border-white/10 pl-8 pb-8">
          <div className="absolute w-3 h-3 bg-[#5a4fcf] rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_#5a4fcf]"></div>
          
          <div className="mb-2 text-sm text-[#a89eff] tracking-wider font-semibold">JUN 2023 — PRESENT</div>
          <h3 className="text-2xl font-bold mb-1">Software Developer Intern</h3>
          <h4 className="text-lg text-gray-400 mb-6">TechFlow Systems</h4>
          
          <ul className="space-y-4 text-gray-300 mb-8 list-none pr-4 md:pr-0">
            <li className="flex items-start">
              <span className="mr-3 text-[#5a4fcf] mt-1">•</span>
              <span>Frontend details on: Developed high-performance Single Page Application (SPA) using React ecosystem, red-ux managing states to secure asynchronous state management.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#5a4fcf] mt-1">•</span>
              <span>Constantly improving team efficiency and usability of APIs to build reliable solutions. Developed clean code validating standard solutions.</span>
            </li>
          </ul>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">React</span>
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">.NET Core</span>
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">SQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
