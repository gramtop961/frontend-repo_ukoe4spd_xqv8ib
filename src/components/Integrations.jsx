import React from 'react';
import { Github, Slack, Database, Cloud } from 'lucide-react';

const integrations = [
  { name: 'GitHub', icon: Github },
  { name: 'Slack', icon: Slack },
  { name: 'MongoDB', icon: Database },
  { name: 'Cloud', icon: Cloud },
];

function Integrations() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">Works with your stack</h2>
        <p className="mt-3 text-slate-300">Connect your favorite tools and ship features without changing your workflow.</p>
      </div>

      <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-4">
        {integrations.map(({ name, icon: Icon }) => (
          <div key={name} className="flex w-full flex-col items-center gap-3 rounded-xl border border-slate-800 bg-white/5 p-6 text-center backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
              <Icon className="h-6 w-6" />
            </div>
            <span className="text-sm text-slate-300">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Integrations;
