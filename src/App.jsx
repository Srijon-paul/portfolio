import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Work } from './components/Work';
import { Engineering } from './components/Engineering';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundSystem } from './components/BackgroundSystem';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-accent-red selection:text-white" id="top">
      <Analytics />
      <BackgroundSystem />
      <Navbar />

      <main>
        <Hero />
        <Metrics />

        <Work />
        <Engineering />

        <Experience />

        <About />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
