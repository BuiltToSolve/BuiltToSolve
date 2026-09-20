import { ArrowDown, Sparkles } from 'lucide-react';
import { useMousePosition } from '@/hooks/useMousePosition';
import { Cube3D } from '@/components/Cube3D';
import { FloatingShapes } from '@/components/FloatingShapes';

export function Hero() {
  const mouse = useMousePosition();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Glow orbs */}
      <div
        className="glow-orb w-[500px] h-[500px] bg-primary/20 anim-glow-pulse"
        style={{ top: '10%', left: '5%' }}
      />
      <div
        className="glow-orb w-[400px] h-[400px] bg-accent/15 anim-glow-pulse"
        style={{ bottom: '10%', right: '5%', animationDelay: '2s' }}
      />
      <div
        className="glow-orb w-[300px] h-[300px] bg-secondary/10 anim-glow-pulse"
        style={{ top: '40%', left: '50%', animationDelay: '1s' }}
      />

      {/* Perspective grid floor */}
      <div className="grid-floor" />

      {/* Floating 3D shapes */}
      <FloatingShapes />

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
        style={{
          transform: `translate(${mouse.x * 15}px, ${mouse.y * 15}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        {/* Left: Text */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-sm text-slate-300 font-medium">
              Software Developer & Entrepreneur
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Code.</span>
            <br />
            <span className="gradient-text">Scale.</span>
            <br />
            <span className="gradient-text-amber">Deploy.</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
            I'm Abhishek Sharma - crafting software, websites, and mobile apps
            that solve real problems. From chess engines to Tripster: travel partner, I turn ideas into shipped products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-bg font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-bg font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right: 3D Cube */}
        <div className="flex flex-col items-center lg:items-end justify-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-3xl pointer-events-none scale-125">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/20 anim-glow-pulse" />
            </div>
            <Cube3D mouse={mouse} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} className="anim-float-y" />
      </div>
    </section>
  );
}
