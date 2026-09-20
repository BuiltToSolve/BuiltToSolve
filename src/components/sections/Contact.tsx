import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${form.name}`;
    const body = `Hi Abhishek,\n${form.message}\n\nRegards\n${form.name}`;
    window.location.href = `mailto:aksharma.net@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call',
      value: '+91 87370 68395',
      href: 'tel:+918737068395',
      color: '#22d3ee',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'aksharma.net@hotmail.com',
      href: 'mailto:aksharma.net@hotmail.com',
      color: '#10b981',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Varanasi, India',
      href: '#',
      color: '#fbbf24',
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div
        className="glow-orb w-[500px] h-[500px] bg-primary/10"
        style={{ bottom: '0%', right: '-10%' }}
      />

      <div
        ref={ref}
        className={`reveal ${isVisible ? 'visible' : ''} max-w-7xl mx-auto relative z-10`}
      >
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-4">
            Let's Build Together
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind? Questions about products or services? Reach
            out — I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  className="reveal group flex items-center gap-5 p-6 rounded-2xl glass hover:scale-[1.02] transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${info.color}15`,
                      border: `1px solid ${info.color}30`,
                    }}
                  >
                    <Icon
                      size={24}
                      style={{ color: info.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">
                      {info.label}
                    </div>
                    <div className="text-white font-medium group-hover:text-primary-light transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-xl font-semibold text-white mb-6">
              Write a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface-light/40 border border-white/10 text-white placeholder-slate-500 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface-light/40 border border-white/10 text-white placeholder-slate-500 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface-light/40 border border-white/10 text-white placeholder-slate-500 transition-all resize-none"
                  placeholder="How can i help you?"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-bg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
              {sent && (
                <p className="text-accent text-sm text-center">
                  Your message has been sent. Thank you!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
