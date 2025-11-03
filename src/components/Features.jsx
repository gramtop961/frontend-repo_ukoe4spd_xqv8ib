import React from 'react';
import { Rocket, Shield, Zap, Layers } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Blazing fast',
    desc: 'Vite-powered frontend and a modern API deliver instant feedback and smooth interactions.',
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Best practices baked in. CORS configured, type-safe models, and clear separation of concerns.',
  },
  {
    icon: Zap,
    title: 'Real-time feel',
    desc: 'Fluid animations and delightful micro-interactions keep your users engaged and focused.',
  },
  {
    icon: Layers,
    title: 'Composable UI',
    desc: 'Clean, reusable components let you build new pages and flows with confidence.',
  },
];

function Features() {
  return (
    <section id="features" className="relative z-0 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to ship</h2>
        <p className="mt-3 text-slate-300">A thoughtfully designed toolkit to help you move from idea to launch without friction.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-slate-800 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
