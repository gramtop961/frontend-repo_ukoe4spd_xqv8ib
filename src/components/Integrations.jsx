import React from 'react';
import { Plug, Database, Globe, Webhook, Table, Book, MessageSquare } from 'lucide-react';

const integrations = [
  { name: 'CRMs', icon: Database },
  { name: 'Notion', icon: Book },
  { name: 'Google Sheets', icon: Table },
  { name: 'Slack', icon: MessageSquare },
  { name: 'Webhooks', icon: Webhook },
  { name: 'Web & WhatsApp', icon: Globe }
];

const Integrations = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Connect your stack</h2>
          <p className="mt-3 text-slate-300">Power up agents with the tools you already use. Sync data, trigger workflows, and close the loop.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {integrations.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-5 text-center">
              <span className="rounded-lg bg-white/10 p-3 text-indigo-300 ring-1 ring-inset ring-white/10">
                <item.icon className="h-6 w-6" />
              </span>
              <span className="text-sm text-slate-200">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-orange-400/10 p-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold">One-click deployment</h3>
              <p className="mt-1 text-sm text-slate-300">Publish to your website widget, voice line, or messaging channels without code.</p>
            </div>
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400">
              <Plug className="h-4 w-4" />
              Deploy now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
