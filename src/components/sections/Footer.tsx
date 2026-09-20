import { Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate?: (target: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <a
            href="/#hero"
            onClick={(e) => handleLink(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 border-2 border-primary rounded-lg flex items-center justify-center font-display font-bold text-primary transition-transform duration-300 group-hover:scale-105">
              A
            </div>
            <span className="font-display font-semibold text-lg text-white">
              Abhishek<span className="text-primary">.</span>
            </span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-sm text-slate-400">
          <a
            href="/#about"
            onClick={(e) => handleLink(e, '#about')}
            className="hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="/#services"
            onClick={(e) => handleLink(e, '#services')}
            className="hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="/#projects"
            onClick={(e) => handleLink(e, '#projects')}
            className="hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="/#products"
            onClick={(e) => handleLink(e, '#products')}
            className="hover:text-primary transition-colors"
          >
            Products
          </a>
          <a
            href="/privacy-policy"
            onClick={(e) => handleLink(e, '/privacy-policy')}
            className="hover:text-primary-light transition-colors text-slate-300 font-medium inline-flex items-center gap-1.5"
          >
            <ShieldCheck size={14} className="text-primary" />
            Privacy Policy
          </a>
          <a
            href="/#contact"
            onClick={(e) => handleLink(e, '#contact')}
            className="hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>

        <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
          Portfolio by Abhishek Sharma — built with
          <Heart size={14} className="text-secondary fill-secondary" />
          and passion for clean code
        </p>
        <p className="text-slate-600 text-xs mt-3">
          © {new Date().getFullYear()} Abhishek Sharma · Sharma Productions Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
