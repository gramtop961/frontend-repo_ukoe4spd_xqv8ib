import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Simple top bar */}
      <header className="sticky top-0 z-20 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-orange-400" />
            <span className="font-semibold tracking-tight">Varia</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#get-started" className="rounded-lg bg-white px-3 py-1.5 font-medium text-slate-900 hover:bg-slate-100">Start free</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Integrations />
        <CTA />
      </main>

      <footer className="border-t border-white/5 bg-slate-950 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <span>© {new Date().getFullYear()} Varia Inc. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
