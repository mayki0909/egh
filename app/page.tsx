import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-page">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
