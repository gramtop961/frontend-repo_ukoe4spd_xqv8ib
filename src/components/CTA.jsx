import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const perks = [
  'Unlimited testing in the sandbox',
  'One-click deployment to multiple channels',
  'Upload docs and URLs for instant context',
  'Works in any language with voice support'
];

const CTA = () => {
  return (
    <section id="get-started" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-fuchsia-500/15 to-orange-400/15 p-8 sm:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">Bring AI into your business today</h3>
              <p className="mt-3 text-slate-200">
                Start free, build your first agent in minutes, and scale when you’re ready.
              </p>
              <ul className="mt-6 space-y-3 text-slate-200">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                    <span className="text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm text-slate-300">
                  “Varia helped us launch a multilingual voice agent that now handles 70% of our support requests. We shipped in days, not months.”
                </p>
                <p className="mt-3 text-sm font-medium text-slate-200">— Product Lead, D2C brand</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Create your free agent <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-slate-400">No credit card required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
