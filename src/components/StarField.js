'use client';

import { useEffect, useRef } from 'react';

const STAR_COUNT = 80;

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    let animId;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 1;

      for (const s of stars) {
        // Move diagonally (shooting star feel)
        s.x -= s.speed * 0.6;
        s.y -= s.speed * 0.3;

        // Wrap around
        if (s.x < -5) s.x = w + 5;
        if (s.y < -5) s.y = h + 5;

        // Twinkle
        const alpha = s.opacity * (0.5 + 0.5 * Math.sin(t * s.twinkleSpeed + s.twinkleOffset));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        // Tiny trail
        if (s.size > 1) {
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x + s.speed * 4, s.y + s.speed * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
