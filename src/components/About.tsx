const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Intent Behind the Code</h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              My journey started with a fascination for how bits and bytes could create meaningful human experiences. I don't just write functions, I architect digital solutions with a focus on precision, scalability, and user intent.
            </p>
            <p>
              As a recent graduate, I've spent thousands of hours refining my craft in the React ecosystem, finding beauty in the logic of state management and the efficiency of cloud-native deployments.
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden glass p-2 border border-white/10 shadow-2xl group">
            <div className="absolute inset-0 bg-[#4f3cdc]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Kittiwin Intaml Portrait" 
              className="w-full h-full object-cover rounded-xl filter grayscale contrast-125 object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
