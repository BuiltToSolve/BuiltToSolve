import {
  Globe,
  Smartphone,
  Shield,
  QrCode,
  Coins,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTilt } from '@/hooks/useTilt';

const projects = [  
  {
    title: 'Tripster',
    category: 'iOS / Android',
    price: 'Free',
    image: 'assets/images/tripster.png',
    icon: Smartphone,
    color: '#10b981',
    featured: true,
    badge: 'Popular Mobile App',
    description: 'A modern travel companion app for discovering places, planning itineraries, and navigating trips on the go.',
    tags: ['React Native', 'Travel', 'Navigation'],
    link: 'https://play.google.com/store/apps/details?id=com.rambler.tripster',
  },
  {
    title: 'Key Vault',
    category: 'iOS / Android',
    price: 'Free',
    image: 'assets/images/keyVault.png',
    icon: Shield,
    color: '#fbbf24',
    featured: false,
    badge: null,
    description: 'Securely store, organize, and manage your passwords locally with encrypted vault storage.',
    tags: ['Security', 'Encryption', 'Offline'],
    link: 'https://play.google.com/store/apps/details?id=com.rambler.pmapp',
  },
  {
    title: 'Offline Chess',
    category: 'Website',
    price: 'Free',
    image: 'assets/images/OfflineChess.jpg',
    icon: Globe,
    color: '#22d3ee',
    featured: true,
    badge: 'Featured Web App',
    description: 'A full-featured offline chess game built for the web with AI opponent and local multiplayer.',
    tags: ['Web App', 'Chess Engine', 'Canvas'],
    link: 'https://offlinechess.web.app/',
  },
  {
    title: 'QR Code Manager',
    category: 'iOS / Android',
    price: 'Free',
    image: 'assets/images/qrCodeManager.jpg',
    icon: QrCode,
    color: '#22d3ee',
    featured: false,
    badge: null,
    description: 'Create, customize, scan, and organize QR codes with history export and quick actions.',
    tags: ['Scanner', 'Generator', 'Productivity'],
    link: 'https://play.google.com/store/apps/details?id=net.aksharma.qrcode',
  },
  {
    title: 'Toss Coin',
    category: 'iOS / Android',
    price: 'Free',
    image: 'assets/images/tossCoin.webp',
    icon: Coins,
    color: '#f59e0b',
    featured: false,
    badge: null,
    description: 'Flip a coin with realistic haptics and 3D physics to make daily decisions with a simple flick!',
    tags: ['3D Physics', 'Haptics', 'Decisions'],
    link: 'https://play.google.com/store/apps/details?id=com.rambler.tosscoin',
  },
];

function ProjectCard({
  project,
  index,
  isFeatured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  isFeatured?: boolean;
}) {
  const { ref, transform, handleMouseMove, handleMouseLeave } = useTilt(isFeatured ? 6 : 8);
  const Icon = project.icon;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`reveal preserve-3d group rounded-3xl overflow-hidden glass flex flex-col justify-between h-full border border-white/10 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${
        isFeatured ? 'bg-gradient-to-b from-white/[0.06] to-white/[0.02]' : ''
      }`}
      style={{
        transform: transform || 'perspective(1000px)',
        transition: 'transform 0.3s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div>
        {/* Card Image Banner */}
        <div
          className={`relative overflow-hidden ${isFeatured ? 'h-64 sm:h-72' : 'h-52'}`}
          style={{ transform: 'translateZ(30px)' }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
            <div
              className="px-3 py-1.5 rounded-xl glass-strong text-xs font-medium flex items-center gap-2 backdrop-blur-md"
              style={{ color: project.color }}
            >
              <Icon size={14} />
              <span>{project.category}</span>
            </div>
            {isFeatured && project.badge && (
              <div className="px-3 py-1.5 rounded-xl bg-primary/20 border border-primary/30 text-primary text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md">
                <Sparkles size={12} />
                <span>{project.badge}</span>
              </div>
            )}
          </div>

          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-accent/20 border border-accent/30 text-accent text-xs font-semibold backdrop-blur-md">
            {project.price}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-7" style={{ transform: 'translateZ(20px)' }}>
          <h3
            className={`font-display font-bold text-white mb-2.5 group-hover:text-primary-light transition-colors ${
              isFeatured ? 'text-2xl' : 'text-xl'
            }`}
          >
            {project.title}
          </h3>

          <p className="text-slate-400 text-sm mb-5 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0" style={{ transform: 'translateZ(20px)' }}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all hover:text-primary-light"
        >
          <span>View Project</span>
          <ExternalLink
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="relative py-32 px-6">
      <div
        ref={ref}
        className={`reveal ${isVisible ? 'visible' : ''} max-w-7xl mx-auto`}
      >
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            A selection of apps and websites I've built - from games to security
            tools to travel companions.
          </p>
        </div>

        {/* 2 + 3 Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 perspective-1000">
          {projects.map((project, i) => {
            const isFeatured = i < 2;
            const isLast = i === 4;

            // Desktop (lg): 2 cards in Row 1 (6 cols each = 12), 3 cards in Row 2 (4 cols each = 12)
            // Tablet (md): 2 cards in Row 1, 2 cards in Row 2, 5th card centered across 2 cols
            const colClass = isFeatured
              ? 'lg:col-span-6'
              : isLast
              ? 'lg:col-span-4 md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none w-full'
              : 'lg:col-span-4';

            return (
              <div key={project.title} className={colClass}>
                <ProjectCard
                  project={project}
                  index={i}
                  isFeatured={isFeatured}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
