import {
  Code2,
  MonitorSmartphone,
  BarChart3,
  PenTool,
  Smartphone,
  TrendingUp,
  Server,
  Gamepad2,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Building responsive, high-performance web applications using modern stacks (.NET, Next.js or React) optimized for speed, accessibility, and scale.',
    color: '#22d3ee',
  },
  {
    icon: PenTool,
    title: 'Website Designing',
    description:
      'Outstanding website design that makes a lasting impression. Every pixel is intentional, every layout purposeful.',
    color: '#10b981',
  },
  {
    icon: BarChart3,
    title: 'Software Consulting',
    description:
      'Designing secure, maintainable backend systems, robust database schemas (SQL Server, PostgreSQL), and cloud-integrated microservices/APIs.',
    color: '#fbbf24',
  },
  {
    icon: MonitorSmartphone,
    title: 'Analytics',
    description:
      'Software analytics covering source code, static and dynamic characteristics specific to your software systems.',
    color: '#22d3ee',
  },
  {
    icon: Smartphone,
    title: 'Android / iOS App Development',
    description:
      'End-to-end mobile app development using React Native, native modules, and cross-platform frameworks—delivering smooth, reliable app store-ready experiences.',
    color: '#10b981',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'SEO experts helping you connect with potential customers through digital channels and online strategies.',
    color: '#fbbf24',
  },
  {
    icon: Server,
    title: 'Hosting',
    description:
      'Setting up reliable production environments, handling cloud deployments (Azure, Aws or Github), domain management, and CI/CD pipelines.',
    color: '#22d3ee',
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    description:
      'Games for Android, web, iOS, and Windows using cutting-edge technologies and modern game engines.',
    color: '#10b981',
  },
];

export function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="glow-orb w-[600px] h-[600px] bg-primary/8"
        style={{ top: '20%', left: '-10%' }}
      />

      <div
        ref={ref}
        className={`reveal ${isVisible ? 'visible' : ''} max-w-7xl mx-auto relative z-10`}
      >
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Capabilities
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-4">
            Full-Stack Services
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            From concept to deployment - everything you need to build, launch,
            and grow your digital product.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="reveal group relative rounded-2xl glass p-6 hover:bg-surface-light/40 transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.color}12, transparent 70%)`,
                  }}
                />

                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{
                    background: `${service.color}15`,
                    border: `1px solid ${service.color}25`,
                  }}
                >
                  <Icon
                    size={24}
                    style={{ color: service.color }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="relative font-display text-base font-semibold text-white mb-2 group-hover:text-primary-light transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
