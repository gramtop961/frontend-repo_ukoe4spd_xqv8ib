import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6yqg8g3l8cKkylrQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live demo
        </span>
        <h1 className="mt-6 bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Build delightful product experiences
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Launch faster with a modern stack. Interactive 3D, beautiful UI, and a robust API — all working together.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-emerald-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            Get started free
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
