import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Bot, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-90">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/95" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center md:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
          <Bot className="h-4 w-4 text-indigo-300" />
          No‑code Conversational AI for teams
        </div>

        <h1 className="font-semibold tracking-tight text-white [text-wrap:balance] text-4xl md:text-6xl">
          Build AI agents by simply writing prompts
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Varia lets you create, test, and deploy chat and voice agents without code. Upload docs, add website links, and launch to chat, voice, WhatsApp, or your site—instantly.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
          >
            <Rocket className="h-4 w-4" />
            Start free — no credit card
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore features <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-slate-200 backdrop-blur">
            • One‑click deployment
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-slate-200 backdrop-blur">
            • Real‑time sandbox
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-slate-200 backdrop-blur">
            • Multilingual voice
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
