import React from 'react';

function CTA() {
  return (
    <section id="get-started" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="absolute inset-0 -top-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />

      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 p-8 backdrop-blur">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-semibold sm:text-3xl">Ready to build something great?</h3>
          <p className="mt-3 text-slate-300">Start for free. Upgrade when you need more power. No credit card required.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-emerald-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              Create your account
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              View documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
