import { Code2, Globe, Smartphone, Server, Cloud, Database } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTilt } from '@/hooks/useTilt';

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    description:
      'Using waterfall and agile methodologies to perform rapid application development tailored to each project type.',
    color: '#22d3ee',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Websites designed to work flawlessly across every device and equipment, with accessibility at the core.',
    color: '#10b981',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description:
      'Best-in-class mobile app development across all latest platforms, trends, tools, and industry standards.',
    color: '#fbbf24',
  },
  {
    icon: Server,
    title: 'Domain & Hosting',
    description:
      'Domain registration, web app hosting, Firebase hosting, payment gateway integration, SSL certificates, and more.',
    color: '#22d3ee',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'Scalable cloud deployments, CI/CD pipelines, and infrastructure as code for modern web applications.',
    color: '#10b981',
  },
  {
    icon: Database,
    title: 'Database & Backend Architecture',
    description:
      'Designing secure RESTful APIs, optimized relational database schemas (SQL Server, PostgreSQL), and robust server-side logic.',
    color: '#fbbf24',
  }
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, transform, glare, handleMouseMove, handleMouseLeave } = useTilt(10);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="reveal preserve-3d glass rounded-2xl p-8 group cursor-pointer"
      style={{
        transform: transform || 'perspective(1000px)',
        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease',
        transitionDelay: `${index * 100}ms`,
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, ${service.color}15, transparent 50%)`,
          opacity: glare.opacity,
          transition: 'opacity 0.3s ease',
        }}
      />
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 preserve-3d"
        style={{
          background: `${service.color}15`,
          border: `1px solid ${service.color}30`,
          transform: 'translateZ(40px)',
        }}
      >
        <Icon size={28} style={{ color: service.color }} strokeWidth={1.5} />
      </div>
      <h3
        className="font-display text-xl font-semibold mb-3 text-white"
        style={{ transform: 'translateZ(30px)' }}
      >
        {service.title}
      </h3>
      <p
        className="text-slate-400 leading-relaxed text-sm"
        style={{ transform: 'translateZ(20px)' }}
      >
        {service.description}
      </p>
    </div>
  );
}

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-32 px-6">
      <div
        ref={ref}
        className={`reveal ${isVisible ? 'visible' : ''} max-w-7xl mx-auto`}
      >
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            What I Do
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-4">
            Architecting robust software solutions
          </h2>
          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            I am a full-stack software engineer with extensive professional experience specializing in robust backend architectures, cloud services, and cross-platform mobile applications. Passionate about translating complex business workflows into clean, high-performance, and user-centric software products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
