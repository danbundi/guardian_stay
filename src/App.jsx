// src/App.jsx
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BentoHero from './components/BentoHero';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App">
      <BentoHero />
      <Footer/>
      {/* We'll add other sections below */}
    </div>
  );
}

export default App;