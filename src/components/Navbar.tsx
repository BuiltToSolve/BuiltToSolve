import { useEffect, useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentRoute?: 'home' | 'privacy-policy';
  onNavigate?: (target: string) => void;
}

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export function Navbar({ currentRoute = 'home', onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
      setOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('#hero');
      setOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="/#hero"
          onClick={handleLogoClick}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 border-2 border-primary rounded-lg flex items-center justify-center font-display font-bold text-primary text-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            A
          </div>
          <span className="font-display font-semibold text-lg text-white tracking-tight">
            Abhishek<span className="text-primary">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => {
            const isPrivacy = link.href === '/privacy-policy';
            const isActive = isPrivacy && currentRoute === 'privacy-policy';

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm transition-colors duration-300 font-medium relative group flex items-center gap-1.5 ${
                  isActive
                    ? 'text-primary-light font-semibold'
                    : 'text-slate-300 hover:text-primary-light'
                }`}
              >
                {isPrivacy && <ShieldCheck size={14} className={isActive ? 'text-primary' : 'text-slate-400 group-hover:text-primary'} />}
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 rounded-full ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-bg font-medium text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-strong mt-3 mx-4 rounded-xl p-6 flex flex-col gap-4 border border-white/10">
          {links.map((link) => {
            const isPrivacy = link.href === '/privacy-policy';
            const isActive = isPrivacy && currentRoute === 'privacy-policy';

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center gap-2 transition-colors font-medium py-1 ${
                  isActive
                    ? 'text-primary-light font-semibold'
                    : 'text-slate-300 hover:text-primary-light'
                }`}
              >
                {isPrivacy && <ShieldCheck size={16} className="text-primary" />}
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="mt-2 text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-bg font-medium text-sm"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
