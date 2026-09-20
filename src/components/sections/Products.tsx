import {
  School,
  MessageSquare,
  Hotel,
  ShoppingCart,
  HeartPulse,
  Store,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const products = [
  {
    icon: School,
    title: 'School ERP / CRM',
    platforms: ['Website', 'Android & iOS App', 'Windows Software'],
    color: '#22d3ee',
  },
  {
    icon: MessageSquare,
    title: 'CRM',
    platforms: ['Website'],
    color: '#10b981',
  },
  {
    icon: Hotel,
    title: 'Hotel Management',
    platforms: ['Website', 'Android & iOS App'],
    color: '#fbbf24',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    platforms: ['Website', 'Android & iOS App'],
    color: '#22d3ee',
  },
  {
    icon: HeartPulse,
    title: 'Hospital Management',
    platforms: ['Website', 'Android & iOS App', 'Windows Software'],
    color: '#10b981',
  },
  {
    icon: Store,
    title: 'Store Management',
    platforms: ['Website', 'Android & iOS App', 'Windows Software'],
    color: '#fbbf24',
  },
];

export function Products() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="products" className="relative py-32 px-6">
      <div
        ref={ref}
        className={`reveal ${isVisible ? 'visible' : ''} max-w-7xl mx-auto`}
      >
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Main Products
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-4">
            Software Products
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Production-ready systems deployed across web, mobile, and desktop powering real businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="reveal group relative rounded-2xl glass p-8 hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }}
                />

                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                    style={{
                      background: `${product.color}15`,
                      border: `1px solid ${product.color}30`,
                    }}
                  >
                    <Icon
                      size={28}
                      style={{ color: product.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-primary-light transition-colors">
                      {product.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="text-xs px-2.5 py-1 rounded-md bg-surface-light/50 text-slate-400 border border-white/5"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
