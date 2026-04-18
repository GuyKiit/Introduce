const projects = [
  {
    title: 'Nexus: Real-time Analytics',
    description: 'A high-performance dashboard for monitoring cloud infrastructure metrics in real-time, using WebSockets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript']
  },
  {
    title: 'Synapse: Headless CMS',
    description: 'A minimal, developer-focused headless CMS focused on speed and simplicity of content delivery.',
    image: '/Group-11.png',
    tags: ['Next.js', 'Node.js']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-gray-200 dark:border-white/5">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">Selected projects demonstrating my technical philosophy.</p>
        </div>
        <a href="https://github.com/GuyKiit"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-[#a89eff] hover:text-[#c4bcff] transition-colors">
          View GitHub
          <span className="ml-2">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl glass border border-transparent dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0a] via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 bg-white/10 dark:bg-[#4f3cdc]/10 group-hover:bg-transparent dark:group-hover:bg-[#4f3cdc]/0 transition-all duration-500 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="p-8 relative z-20 -mt-20">
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs rounded-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 shadow-lg">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#a89eff] transition-colors">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <button className="text-[#a89eff] hover:text-gray-900 dark:hover:text-white transition-colors border border-[#a89eff]/30 rounded-full px-6 py-2">
          View All on GitHub
        </button>
      </div>
    </section>
  );
};

export default Projects;
