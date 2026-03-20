import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 selection:bg-[#4f3cdc]/30">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
