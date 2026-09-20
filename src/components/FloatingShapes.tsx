import { useMousePosition } from '@/hooks/useMousePosition';

export function FloatingShapes() {
  const mouse = useMousePosition();

  const shapes = [
    { size: 80, top: '15%', left: '8%', delay: '0s', depth: 30, color: '#22d3ee', shape: 'cube' },
    { size: 60, top: '70%', left: '12%', delay: '1.5s', depth: 50, color: '#10b981', shape: 'pyramid' },
    { size: 100, top: '20%', left: '85%', delay: '0.8s', depth: 40, color: '#fbbf24', shape: 'sphere' },
    { size: 50, top: '75%', left: '80%', delay: '2s', depth: 60, color: '#22d3ee', shape: 'cube' },
    { size: 70, top: '45%', left: '92%', delay: '1.2s', depth: 35, color: '#10b981', shape: 'ring' },
    { size: 40, top: '50%', left: '5%', delay: '2.5s', depth: 70, color: '#fbbf24', shape: 'sphere' },
  ];

  return (
    <>
      {shapes.map((s, i) => {
        const tx = mouse.x * s.depth;
        const ty = mouse.y * s.depth;
        return (
          <div
            key={i}
            className="absolute pointer-events-none anim-float-y"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              transform: `translate(${tx}px, ${ty}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            {s.shape === 'cube' && (
              <div
                className="w-full h-full preserve-3d anim-float-rotate"
                style={{ animationDelay: s.delay }}
              >
                <div
                  className="w-full h-full border-2 rounded-lg"
                  style={{
                    borderColor: `${s.color}50`,
                    background: `${s.color}08`,
                    boxShadow: `0 0 30px ${s.color}20, inset 0 0 20px ${s.color}10`,
                    transform: 'rotateX(45deg) rotateZ(45deg)',
                  }}
                />
              </div>
            )}
            {s.shape === 'sphere' && (
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${s.color}40, ${s.color}10 60%, transparent)`,
                  boxShadow: `0 0 40px ${s.color}30`,
                }}
              />
            )}
            {s.shape === 'pyramid' && (
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(135deg, ${s.color}30, transparent)`,
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  filter: `drop-shadow(0 0 15px ${s.color}40)`,
                }}
              />
            )}
            {s.shape === 'ring' && (
              <div
                className="w-full h-full rounded-full border-4 anim-float-rotate"
                style={{
                  borderColor: `${s.color}50`,
                  boxShadow: `0 0 25px ${s.color}30`,
                }}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
