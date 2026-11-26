import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ServicesMarquee from './components/ServicesMarquee.jsx';
import Services from './components/Services.jsx';
import Feature from './components/Feature.jsx';
import Showreel from './components/Showreel.jsx';
import Works from './components/Works.jsx';
import Testimonials from './components/Testimonials.jsx';
import Process from './components/Process.jsx';
import Pricing from './components/Pricing.jsx';
import Team from './components/Team.jsx';
import LetsTalk from './components/LetsTalk.jsx';
import Footer from './components/Footer.jsx';
import { useRevealOnScroll } from './hooks/useMotion.js';

export default function App() {
  useRevealOnScroll();
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <ServicesMarquee />
        <Services />
        <Feature />
        <Showreel />
        <Works />
        <Testimonials />
        <Process />
        <Pricing />
        <Team />
        <LetsTalk />
      </main>
      <Footer />
    </>
  );
}
