import { useEffect, useState, useRef } from 'react';

export interface MousePosition {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  speed: number;
  isHoveredInteractive: boolean;
  isTouch: boolean;
}

export function useMouse(): MousePosition {
  const [mouse, setMouse] = useState<MousePosition>({
    x: -100,
    y: -100,
    speedX: 0,
    speedY: 0,
    speed: 0,
    isHoveredInteractive: false,
    isTouch: false,
  });

  const lastPos = useRef({ x: 0, y: 0, time: Date.now() });

  useEffect(() => {
    // Detect touch device
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    if (isTouchDevice) {
      setMouse((prev) => ({ ...prev, isTouch: true }));
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = Math.max(1, now - lastPos.current.time);
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;

      const speedX = dx / dt;
      const speedY = dy / dt;
      const speed = Math.sqrt(speedX * speedX + speedY * speedY);

      lastPos.current = { x: e.clientX, y: e.clientY, time: now };

      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target?.closest('a, button, input, textarea, select, [role="button"], [data-cursor-hover], .cursor-pointer')
      );

      setMouse({
        x: e.clientX,
        y: e.clientY,
        speedX,
        speedY,
        speed,
        isHoveredInteractive: isInteractive,
        isTouch: false,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mouse;
}

