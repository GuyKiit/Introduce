import { Code2, Database, LayoutTemplate, Server } from 'lucide-react';

const skillsData = [
  {
    icon: <Code2 className="w-6 h-6 text-[#a89eff]" />,
    title: 'Frontend Development',
    description: 'Building responsive, interactive UIs using React, TypeScript, and modern CSS frameworks like Tailwind.'
  },
  {
    icon: <Server className="w-6 h-6 text-[#a89eff]" />,
    title: 'Backend Development',
    description: 'Architecting robust APIs and services utilizing .NET Core, focusing on microservices and scalability.'
  },
  {
    icon: <Database className="w-6 h-6 text-[#a89eff]" />,
    title: 'Database Management',
    description: 'Designing efficient schemas and optimizing complex queries in MS SQL Server to ensure data integrity.'
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-[#a89eff]" />,
    title: 'UI/UX Implementation',
    description: 'Translating Figma designs into pixel-perfect, accessible components using tools like Material-UI.'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <h2 className="text-3xl font-bold mb-12">Technical Arsenal</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-xl glass hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 cursor-default border border-white/5 hover:border-[#4f3cdc]/50"
          >
            <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 border border-white/10">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
