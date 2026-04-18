import { Bot, Code2, Database, LayoutTemplate, Server } from 'lucide-react';

const mainSkills = [
  {
    icon: <Code2 className="w-6 h-6 text-[#a89eff]" />,
    title: 'Frontend Development',
    description: 'Building responsive, interactive UIs using React, TypeScript, and modern CSS frameworks like Tailwind.',
    tags: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: <Server className="w-6 h-6 text-[#a89eff]" />,
    title: 'Backend Development',
    description: 'Architecting robust APIs and services utilizing .NET Core, focusing on microservices and scalability.',
    tags: ['.NET 8', 'C#', 'REST API']
  },
  {
    icon: <Database className="w-6 h-6 text-[#a89eff]" />,
    title: 'Database Management',
    description: 'Designing efficient schemas and optimizing complex queries in MS SQL Server to ensure data integrity.',
    tags: ['MS SQL Server', 'Query Optimization']
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-[#a89eff]" />,
    title: 'UI/UX Implementation',
    description: 'Translating Figma designs into pixel-perfect, accessible components using tools like Material-UI.',
    tags: ['Figma', 'Material-UI', 'Accessibility']
  }
];

const aiSkill = {
  icon: <Bot className="w-6 h-6 text-[#a89eff]" />,
  title: 'AI-Assisted Development',
  description:
    'Leveraging AI tools for prompt engineering, code generation, and debugging — using them as a productivity multiplier while maintaining full ownership of design and code quality.',
  tags: ['Prompt Engineering', 'Gemini', 'Claude']
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-gray-200 dark:border-white/5">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-3">What I Work With</h2>
        <p className="text-gray-500 dark:text-gray-400">The stack and tools I reach for when building things.</p>
      </div>

      {/* Main Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {mainSkills.map((skill, index) => (
          <div
            key={index}
            className="relative p-6 rounded-xl glass transition-all duration-300 hover:-translate-y-2 cursor-default border border-transparent dark:border-white/5 hover:border-gray-300 dark:hover:border-[#4f3cdc]/50 flex flex-col overflow-hidden group"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#816bf8]/0 via-transparent to-[#25187e]/0 group-hover:from-[#816bf8]/10 group-hover:to-[#25187e]/10 transition-all duration-500 pointer-events-none" />

            <div className="relative w-12 h-12 rounded-lg bg-white dark:bg-[#1a1a1a] flex items-center justify-center mb-6 border border-gray-200 dark:border-white/10">
              {skill.icon}
            </div>
            <h3 className="relative text-xl font-semibold mb-3">{skill.title}</h3>
            <p className="relative text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
              {skill.description}
            </p>
            <div className="relative flex flex-wrap gap-2 mt-4">
              {skill.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full border border-[#a89eff]/30 text-[#a89eff] bg-[#a89eff]/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* AI Featured Card */}
      <div className="relative p-6 rounded-xl glass border border-[#4f3cdc]/30 hover:border-[#4f3cdc]/60 transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden group">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#816bf8]/5 via-transparent to-[#25187e]/5 group-hover:from-[#816bf8]/10 group-hover:to-[#25187e]/10 transition-all duration-500 pointer-events-none" />

        <div className="relative flex flex-col md:flex-row md:items-center gap-6">
          {/* Icon */}
          <div className="w-12 h-12 rounded-lg bg-white dark:bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-[#4f3cdc]/30">
            {aiSkill.icon}
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold">{aiSkill.title}</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#a89eff]/10 border border-[#a89eff]/30 text-[#a89eff]">
                Modern Workflow
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {aiSkill.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 md:flex-col md:items-end shrink-0">
            {aiSkill.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full border border-[#a89eff]/30 text-[#a89eff] bg-[#a89eff]/5 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
