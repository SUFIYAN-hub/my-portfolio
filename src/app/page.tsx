import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Full Stack Web Developer
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}