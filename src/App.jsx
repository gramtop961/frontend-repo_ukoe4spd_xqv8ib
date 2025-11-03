import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Integrations from './components/Integrations.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Hero />
      <Features />
      <Integrations />
      <CTA />
      <footer className="py-10 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} NovaSaaS — Built with React, Tailwind, and Spline.
        </p>
      </footer>
    </div>
  );
}

export default App;
