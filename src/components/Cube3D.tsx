import { useEffect, useRef, useState } from 'react';
import {
  Code2,
  Globe,
  Smartphone,
  Server,
  Cloud,
  Shield,
  Rotate3d,
} from 'lucide-react';

const faces = [
  { icon: Code2, label: 'Code', color: '#22d3ee' },
  { icon: Globe, label: 'Web', color: '#10b981' },
  { icon: Smartphone, label: 'Mobile', color: '#fbbf24' },
  { icon: Server, label: 'Backend', color: '#22d3ee' },
  { icon: Cloud, label: 'Cloud', color: '#10b981' },
  { icon: Shield, label: 'Security', color: '#fbbf24' },
];

interface Cube3DProps {
  mouse?: { x: number; y: number };
}

export function Cube3D({ mouse }: Cube3DProps) {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [isDraggingState, setIsDraggingState] = useState(false);

  // References for animation loop to avoid re-renders
  const currentRot = useRef({ x: -15, y: 25, z: 0 });
  const targetRot = useRef({ x: -15, y: 25, z: 0 });
  const ambientAngle = useRef(25);
  const dragOffset = useRef({ x: 0, y: 0 });
  const lastDragPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const mouseRef = useRef(mouse || { x: 0, y: 0 });

  // Keep mouseRef updated without triggering re-render effects
  useEffect(() => {
    if (mouse) {
      mouseRef.current = mouse;
    }
  }, [mouse]);

  // Pointer drag events
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDragging.current = true;
    setIsDraggingState(true);
    lastDragPos.current = { x: e.clientX, y: e.clientY };
    velocity.current = { x: 0, y: 0 };
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastDragPos.current.x;
    const dy = e.clientY - lastDragPos.current.y;

    dragOffset.current.x += dx * 0.7;
    dragOffset.current.y += dy * 0.7;

    velocity.current = { x: dx * 0.7, y: dy * 0.7 };
    lastDragPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      isDragging.current = false;
      setIsDraggingState(false);
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  const handleDoubleClick = () => {
    // Reset manual rotation on double click
    dragOffset.current = { x: 0, y: 0 };
    velocity.current = { x: 0, y: 0 };
  };

  // Global safety listener for pointer release
  useEffect(() => {
    const onWindowPointerUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        setIsDraggingState(false);
      }
    };
    window.addEventListener('pointerup', onWindowPointerUp);
    return () => window.removeEventListener('pointerup', onWindowPointerUp);
  }, []);

  useEffect(() => {
    let animId: number;

    const animate = (time: number) => {
      // 1. Handle inertia decay and ambient advance
      if (!isDragging.current) {
        if (Math.abs(velocity.current.x) > 0.01 || Math.abs(velocity.current.y) > 0.01) {
          dragOffset.current.x += velocity.current.x;
          dragOffset.current.y += velocity.current.y;
          velocity.current.x *= 0.94;
          velocity.current.y *= 0.94;
        }

        // Ambient gentle spin when not hovered
        if (!isHovered.current) {
          ambientAngle.current = (ambientAngle.current + 0.3) % 360;
        }
      }

      // 2. Compute targets from mouse position + drag offset
      const m = mouseRef.current;
      // Pitch: vertical mouse position (-80 to +80 deg brings top/bottom faces completely into view)
      const mousePitch = m.y * 80;
      // Yaw: horizontal mouse position (wide 160 deg coverage) + ambient spin
      const mouseYaw = m.x * 160;
      // Roll: subtle gyroscopic bank on lateral move
      const mouseRoll = -m.x * 12;

      // Gentle floating bob
      const floatWave = Math.sin(time * 0.0015) * 5;

      targetRot.current.x = mousePitch + dragOffset.current.y + floatWave;
      targetRot.current.y = ambientAngle.current + mouseYaw + dragOffset.current.x;
      targetRot.current.z = mouseRoll;

      // 3. Smooth interpolation (lerp)
      const lerpFactor = isDragging.current ? 0.35 : 0.08;
      currentRot.current.x += (targetRot.current.x - currentRot.current.x) * lerpFactor;
      currentRot.current.y += (targetRot.current.y - currentRot.current.y) * lerpFactor;
      currentRot.current.z += (targetRot.current.z - currentRot.current.z) * lerpFactor;

      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(${currentRot.current.x.toFixed(2)}deg) rotateY(${currentRot.current.y.toFixed(2)}deg) rotateZ(${currentRot.current.z.toFixed(2)}deg)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`cube-scene ${isDraggingState ? 'cursor-grabbing' : 'cursor-grab'}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => {
          isHovered.current = true;
        }}
        onMouseLeave={() => {
          isHovered.current = false;
        }}
        onDoubleClick={handleDoubleClick}
        title="Move mouse or drag to rotate 3D cube from all angles. Double click to reset."
      >
        <div ref={cubeRef} className="cube-3d">
          {faces.map((face, i) => {
            const Icon = face.icon;
            const positionClass = [
              'cube-face--front',
              'cube-face--back',
              'cube-face--right',
              'cube-face--left',
              'cube-face--top',
              'cube-face--bottom',
            ][i];
            return (
              <div
                key={i}
                className={`cube-face ${positionClass}`}
                style={{
                  borderColor: `${face.color}50`,
                  boxShadow: `inset 0 0 35px ${face.color}15, 0 0 25px ${face.color}10`,
                }}
              >
                <div className="flex flex-col items-center gap-3 select-none pointer-events-none">
                  <div
                    className="p-3 rounded-2xl"
                    style={{
                      background: `${face.color}15`,
                      boxShadow: `0 0 20px ${face.color}25`,
                    }}
                  >
                    <Icon size={44} style={{ color: face.color }} strokeWidth={1.75} />
                  </div>
                  <span
                    className="text-sm font-display font-semibold tracking-wider uppercase"
                    style={{ color: face.color }}
                  >
                    {face.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Helper Cue */}
      {/* <div className="flex items-center gap-2 mt-8 px-3.5 py-1.5 rounded-full glass border border-white/10 text-xs text-slate-400 select-none shadow-lg shadow-black/20">
        <Rotate3d size={13} className="text-primary animate-spin" style={{ animationDuration: '6s' }} />
        <span>Drag or move mouse to explore all angles</span>
      </div> */}
    </div>
  );
}
