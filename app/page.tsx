import Navbar from './components/Navbar';
import ScrollThemeSync from './components/ScrollThemeSync';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import FAQ from './components/FAQ';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-page">
      <ScrollThemeSync />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Projects />
        <About />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
