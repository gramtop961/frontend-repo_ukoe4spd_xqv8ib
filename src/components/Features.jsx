import React from 'react';
import { MessageSquare, Upload, Link as LinkIcon, Headphones, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Prompt-first Builder',
    desc: 'Define your agent entirely in natural language. No flows or code required.'
  },
  {
    icon: Upload,
    title: 'Bring Your Knowledge',
    desc: 'Upload PDFs and docs or paste URLs. Your agent learns and answers from your content.'
  },
  {
    icon: Headphones,
    title: 'Chat & Voice Ready',
    desc: 'Offer multilingual chat or voice support with seamless channel switching.'
  },
  {
    icon: LinkIcon,
    title: 'Deploy Anywhere',
    desc: 'Website widget, WhatsApp, phone, Slack and more — all in a click.'
  },
  {
    icon: Zap,
    title: 'Real-time Sandbox',
    desc: 'Instantly test conversations, refine prompts, and iterate without friction.'
  },
  {
    icon: Shield,
    title: 'Enterprise Guardrails',
    desc: 'Role-based access, redaction, and safe responses for production use.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything you need to launch AI agents</h2>
          <p className="mt-3 text-slate-300">
            From idea to live in minutes. Varia removes the complexity so you can focus on outcomes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-xl bg-indigo-500/15 p-3 text-indigo-300 ring-1 ring-inset ring-indigo-500/20">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
