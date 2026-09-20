import { useState } from 'react';
import {
  ShieldCheck,
  FileText,
  Lock,
  Youtube,
  UserCheck,
  Mail,
  ExternalLink,
  Copy,
  Check,
  Calendar,
  Building2,
  MapPin,
  ArrowLeft,
  ChevronRight,
  Database,
  Cookie,
  Server,
  User,
  Scale,
} from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigateHome: (hash?: string) => void;
}

const SECTIONS = [
  { id: 'intro', title: '1. Introduction & Acceptance' },
  { id: 'definitions', title: '2. Definitions' },
  { id: 'data-collection', title: '3. Data Collection & Purpose' },
  { id: 'security', title: '4. Security & Safeguards' },
  { id: 'youtube-api', title: '5. YouTube API & Google Disclosures' },
  { id: 'grievance', title: '6. Grievance Officer' },
  { id: 'contact', title: '7. Contact Us' },
];

export function PrivacyPolicy({ onNavigateHome }: PrivacyPolicyProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aksharma.net@hotmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-28 pb-20 px-6 max-w-7xl mx-auto">
      {/* Background Glows */}
      <div
        className="glow-orb w-[500px] h-[500px] bg-primary/15 anim-glow-pulse fixed -top-20 -left-20 pointer-events-none"
      />
      <div
        className="glow-orb w-[400px] h-[400px] bg-accent/10 anim-glow-pulse fixed bottom-10 right-0 pointer-events-none"
        style={{ animationDelay: '2s' }}
      />

      {/* Top Navigation / Breadcrumbs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <button
          onClick={() => onNavigateHome('#hero')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass hover:glass-strong text-slate-300 hover:text-primary-light transition-all duration-300 text-sm font-medium group"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1 text-primary" />
          Back to Portfolio
        </button>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <button
            onClick={() => onNavigateHome('#hero')}
            className="hover:text-primary-light transition-colors"
          >
            Home
          </button>
          <ChevronRight size={14} className="text-slate-600" />
          <span className="text-primary font-medium">Privacy Policy</span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="relative rounded-3xl p-8 sm:p-12 glass-strong border border-white/10 mb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/30 mb-6">
            <ShieldCheck size={16} className="text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary-light">
              Official Legal Document
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-6">
            Your privacy is of utmost importance to us. This document details how{' '}
            <span className="text-white font-medium">Yukti Dev</span> collects, protects,
            and utilizes information when you access our platforms, services, and applications.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg">
              <Building2 size={15} className="text-primary" />
              <span>Yukti Dev</span>
            </div>
            <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg">
              <Calendar size={15} className="text-secondary" />
              <span>Effective Date: 13/12/2022</span>
            </div>
            <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg">
              <Scale size={15} className="text-accent" />
              <span>IT Act, 2000 & 2011 Rules Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Sidebar + Content */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Sticky Table of Contents on Desktop */}
        <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
          <div className="glass-strong rounded-2xl p-5 border border-white/10">
            <h2 className="font-display font-semibold text-white text-base mb-4 flex items-center gap-2">
              <FileText size={18} className="text-primary" />
              Table of Contents
            </h2>
            <nav className="space-y-1.5">
              {SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? 'bg-primary/20 text-primary-light font-medium border border-primary/30'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{sec.title}</span>
                    <ChevronRight
                      size={14}
                      className={`transition-transform duration-200 ${
                        isActive ? 'rotate-90 text-primary' : 'text-slate-600 group-hover:translate-x-0.5'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick Contact Badge */}
          <div className="glass rounded-2xl p-5 border border-white/5 space-y-3">
            <div className="flex items-center gap-2.5 text-white font-medium text-sm">
              <Mail size={16} className="text-secondary" />
              <span>Have privacy queries?</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Reach out to our Grievance Officer directly for questions regarding your data or security.
            </p>
            <div className="flex items-center justify-between bg-surface/80 rounded-xl px-3 py-2 border border-white/5 text-xs text-slate-300">
              <span className="truncate mr-2">aksharma.net@hotmail.com</span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 hover:bg-white/10 rounded-lg text-primary transition-colors flex-shrink-0"
                title="Copy email"
              >
                {copiedEmail ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-8 space-y-8">
          {/* Section 1: Introduction */}
          <section id="intro" className="glass-strong rounded-2xl p-6 sm:p-8 border border-white/10 scroll-mt-28">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                <FileText size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">1. Introduction & Acceptance</h2>
            </div>

            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The user of this Application/Website (<span className="text-white font-medium">“User”</span>) agrees to be bound
                by the terms and conditions of this privacy policy (<span className="text-white font-medium">“Policy”</span>). In the event the terms and conditions of the Policy are not agreeable to the User, the User is requested to refrain from using this Website/Application.
              </p>
              <p>
                <span className="text-white font-medium">Yukti Dev</span> is concerned about the privacy of the data and information of the Users accessing the website/Application –{' '}
                <a
                  href="https://aksharma-net.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light underline font-medium inline-flex items-center gap-1"
                >
                  https://aksharma-net.web.app
                  <ExternalLink size={13} />
                </a>{' '}
                or its various mobile applications.
              </p>
              <p>
                This Policy is a legally binding document between the User and Yukti Dev. The terms of this Policy will be effective upon the User’s acceptance of the same (directly or indirectly in electronic form, by clicking on the “I accept the Privacy Policy” tab or by use of the Website) and will govern the relationship between the User and Yukti Dev.
              </p>
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-slate-200 text-sm space-y-2">
                <p className="font-semibold text-primary-light flex items-center gap-2">
                  <Scale size={16} />
                  Information Technology Act, 2000 Electronic Contract
                </p>
                <p className="text-slate-300 text-xs sm:text-sm">
                  This Policy forms an electronic contract within the provisions of the Information Technology Act, 2000 (“IT Act”), the rules made thereunder and the amended provisions pertaining to electronic documents/records in various statutes as amended by the IT Act, from time to time. This Policy does not require any physical, electronic or digital signature.
                </p>
              </div>
              <p>
                This Policy shall, at all times be read and construed in consonance and along with the terms of use and access of the Website (“T&C”). Yukti Dev will not differentiate between who is using the device to access the Website, so long as the log in/access credentials match with yours. In order to make the best use of the Website/Application and enable your Information to be captured accurately, it is essential that you have logged in using your own credentials.
              </p>
              <p>
                Our Platform provides tools and solutions for teachers, students, creators, and professionals. You must be <span className="text-white font-semibold">18 years of age or older</span> to visit or use the Website and/or Application in any manner. If you are under 18, you should review this Privacy Policy with your parent or legal guardian to make sure that you and your parent or legal guardian understands and agrees to it.
              </p>
            </div>
          </section>

          {/* Section 2: Definitions */}
          <section id="definitions" className="glass-strong rounded-2xl p-6 sm:p-8 border border-white/10 scroll-mt-28">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary">
                <Database size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">2. Definitions</h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Unless otherwise defined elsewhere in this Privacy Policy, the following terms shall have the meanings assigned to them below:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass rounded-xl p-5 border border-white/5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2.5 text-primary mb-2.5">
                  <Database size={18} />
                  <h3 className="font-display font-semibold text-white text-base">Usage Data</h3>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Information and data collected and captured automatically as a result of the use of the Service or from the Service infrastructure itself.
                </p>
              </div>

              <div className="glass rounded-xl p-5 border border-white/5 hover:border-secondary/30 transition-colors">
                <div className="flex items-center gap-2.5 text-secondary mb-2.5">
                  <Cookie size={18} />
                  <h3 className="font-display font-semibold text-white text-base">Cookies</h3>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Small data files stored on your device (computer or mobile device) to retain preferences and ensure optimal browsing performance.
                </p>
              </div>

              <div className="glass rounded-xl p-5 border border-white/5 hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-2.5 text-accent mb-2.5">
                  <User size={18} />
                  <h3 className="font-display font-semibold text-white text-base">Data Controller</h3>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  A natural or legal person who determines the purposes for which and the manner in which personal data is processed. For this Policy, <span className="text-slate-200">Yukti Dev</span> is the Data Controller.
                </p>
              </div>

              <div className="glass rounded-xl p-5 border border-white/5 hover:border-primary-light/30 transition-colors">
                <div className="flex items-center gap-2.5 text-primary-light mb-2.5">
                  <Server size={18} />
                  <h3 className="font-display font-semibold text-white text-base">Data Processors</h3>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Any natural or legal person who processes data on behalf of the Data Controller. We may use reputable third-party Service Providers to process data securely.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Data Collection & Purpose */}
          <section id="data-collection" className="glass-strong rounded-2xl p-6 sm:p-8 border border-white/10 scroll-mt-28">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent">
                <ShieldCheck size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">3. Data Collection & Purpose</h2>
            </div>

            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 mb-6">
              <p>
                The information collected from you is categorized as <span className="text-white font-medium">“Personal Information”</span>, <span className="text-white font-medium">“Sensitive Personal Information”</span>, and <span className="text-white font-medium">“Associated Information”</span> under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data of Information) Rules, 2011.
              </p>
              <p>
                Yukti Dev collects and utilizes your Personal Data strictly for legitimate business, educational, and legal purposes, including:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {[
                { title: 'Comply with Legal Obligations', desc: 'Adhering to statutory requirements, lawful requests, court orders, and applicable regulations.' },
                { title: 'Protect & Defend Rights', desc: 'Safeguarding the proprietary rights, intellectual property, and assets of the Company.' },
                { title: 'Prevent & Investigate Wrongdoing', desc: 'Detecting security breaches, fraud, abusive behaviors, and unauthorized platform access.' },
                { title: 'Protect Personal & Public Safety', desc: 'Upholding user integrity and preventing threats to individual safety or the general public.' },
                { title: 'Shield Against Legal Liability', desc: 'Maintaining necessary evidence and adherence to contracted terms and conditions.' },
                { title: 'Service Delivery & Optimization', desc: 'Delivering tailored application features, reliable communications, and platform improvements.' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Security & Safeguards */}
          <section id="security" className="glass-strong rounded-2xl p-6 sm:p-8 border border-white/10 scroll-mt-28">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                <Lock size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">4. Data Security Practice & Procedure</h2>
            </div>

            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                The security of your data is paramount to us. We maintain robust administrative, technical, and physical safeguards designed to ensure the security, integrity, and confidentiality of User data, protecting against anticipated threats or unauthorized access.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 my-4">
                <div className="glass rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-primary font-bold text-lg mb-1">Encryption</div>
                  <p className="text-xs text-slate-400">Industry-standard data encryption both in transit and at rest.</p>
                </div>
                <div className="glass rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-accent font-bold text-lg mb-1">Firewalls</div>
                  <p className="text-xs text-slate-400">Perimeter security and restricted role-based internal access.</p>
                </div>
                <div className="glass rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-secondary font-bold text-lg mb-1">Risk Audits</div>
                  <p className="text-xs text-slate-400">Periodic risk assessments and compliance reviews.</p>
                </div>
              </div>
              <p>
                We use vetted third-party Service Providers for specialized purposes such as payment collections. Any information shared in relation to payments is governed by the stringent privacy policies adopted by such certified payment partners.
              </p>
              <p className="text-xs text-slate-400 italic">
                *Note: While we implement comprehensive commercial measures to safeguard your information, no transmission method over the Internet or electronic storage mechanism is 100% invulnerable.
              </p>
            </div>
          </section>

          {/* Section 5: YouTube Data API Disclosures */}
          <section id="youtube-api" className="glass-strong rounded-2xl p-6 sm:p-8 border border-white/10 scroll-mt-28">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
                <Youtube size={20} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-white">5. YouTube API & Google Services Disclosure</h2>
                <span className="text-xs text-red-400 font-medium">Integration & Third-Party Terms</span>
              </div>
            </div>

            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Certain features of our application integrate with <span className="text-white font-medium">YouTube Data APIs</span> to help users manage their YouTube accounts. This primarily includes adding videos to YouTube channels and querying channel metadata. We strictly adhere to the YouTube API Services Terms and Developer Policies when utilizing these services.
              </p>

              <div className="p-4 rounded-xl bg-surface/80 border border-white/10 space-y-3">
                <h4 className="text-sm font-semibold text-white">YouTube Data API Scopes Requested:</h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-2 text-slate-300 font-mono bg-black/30 p-2.5 rounded-lg border border-white/5">
                    <span className="text-primary font-bold">1.</span>
                    <div>
                      <span className="text-primary-light">https://www.googleapis.com/auth/youtube</span>
                      <p className="text-slate-400 font-sans text-xs mt-0.5">Used to view user channel metadata and video information.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300 font-mono bg-black/30 p-2.5 rounded-lg border border-white/5">
                    <span className="text-primary font-bold">2.</span>
                    <div>
                      <span className="text-primary-light">https://www.googleapis.com/auth/youtube.upload</span>
                      <p className="text-slate-400 font-sans text-xs mt-0.5">Enables users to upload video content directly to their linked YouTube channel.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-semibold text-white">Associated Policies & User Controls:</h4>
                <div className="grid sm:grid-cols-3 gap-3">
                  <a
                    href="https://security.google.com/settings/security/permissions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl glass hover:glass-strong border border-white/5 hover:border-primary/40 transition-all flex flex-col justify-between group text-xs"
                  >
                    <div>
                      <span className="font-semibold text-white block mb-1">Revoke Access</span>
                      <p className="text-slate-400">Manage or revoke permissions anytime via Google Security settings.</p>
                    </div>
                    <span className="text-primary mt-3 inline-flex items-center gap-1 font-medium group-hover:underline">
                      Google Settings <ExternalLink size={12} />
                    </span>
                  </a>

                  <a
                    href="http://www.google.com/policies/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl glass hover:glass-strong border border-white/5 hover:border-primary/40 transition-all flex flex-col justify-between group text-xs"
                  >
                    <div>
                      <span className="font-semibold text-white block mb-1">Google Privacy Policy</span>
                      <p className="text-slate-400">Review Google's global privacy and data handling practices.</p>
                    </div>
                    <span className="text-primary mt-3 inline-flex items-center gap-1 font-medium group-hover:underline">
                      google.com/policies <ExternalLink size={12} />
                    </span>
                  </a>

                  <a
                    href="https://www.youtube.com/t/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl glass hover:glass-strong border border-white/5 hover:border-primary/40 transition-all flex flex-col justify-between group text-xs"
                  >
                    <div>
                      <span className="font-semibold text-white block mb-1">YouTube Terms</span>
                      <p className="text-slate-400">By using our app, users agree to YouTube Terms of Service.</p>
                    </div>
                    <span className="text-primary mt-3 inline-flex items-center gap-1 font-medium group-hover:underline">
                      youtube.com/t/terms <ExternalLink size={12} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Grievance Officer */}
          <section id="grievance" className="glass-strong rounded-2xl p-6 sm:p-8 border border-white/10 scroll-mt-28">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary">
                <UserCheck size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">6. Grievance Officer Details</h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              In accordance with the <span className="text-white font-medium">Information Technology Act, 2000</span> and rules made thereunder, the name and contact details of the Grievance Officer are published below:
            </p>

            <div className="rounded-2xl p-6 glass border border-secondary/30 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">Abhishek Sharma</h3>
                  <p className="text-sm text-secondary font-medium">Grievance Officer & Founder</p>
                  <p className="text-xs text-slate-400">Yukti Dev</p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 text-secondary text-sm font-medium transition-all self-start sm:self-auto"
                >
                  {copiedEmail ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                  {copiedEmail ? 'Email Copied!' : 'Copy Contact Email'}
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Registered Address</span>
                    <p className="text-slate-200 mt-1 leading-relaxed">
                      Varanasi, Uttar Pradesh (221005), India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Official Grievance Email</span>
                    <a
                      href="mailto:aksharma.net@hotmail.com"
                      className="text-primary hover:text-primary-light font-medium underline mt-1 inline-block"
                    >
                      aksharma.net@hotmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Contact Us & Updates */}
          <section id="contact" className="glass-strong rounded-2xl p-6 sm:p-8 border border-white/10 scroll-mt-28">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                <Mail size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">7. Contact Us & Policy Amendments</h2>
            </div>

            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                We reserve the right to amend and supplement this Privacy Policy at any time. Whenever there is a change, updates will be reflected on this page along with the revision date. We encourage you to regularly review this Privacy Policy to stay informed about how we safeguard your personal information.
              </p>
              <p>
                If you have any questions, clarifications, or feedback regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="mailto:aksharma.net@hotmail.com"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-bg font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                >
                  <Mail size={16} />
                  Send an Email
                </a>

                <button
                  onClick={() => onNavigateHome('#contact')}
                  className="px-6 py-3 rounded-xl glass hover:glass-strong border border-white/10 text-white font-medium text-sm transition-all duration-300 inline-flex items-center gap-2"
                >
                  Go to Portfolio Contact Form
                </button>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <span>Document Reference: SPPL-PP-2022-V1</span>
                <span>Last Updated: 13/12/2022</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
