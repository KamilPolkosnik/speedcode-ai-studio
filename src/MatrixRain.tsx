import { useEffect, useRef } from "react";

const CHARS = "01"; // extend if you want more symbols

export interface MatrixRainProps {
  density?: number;   // 0..1, lower => more resets => denser rain
  fontSize?: number;  // px
  speed?: number;     // fall speed multiplier
}

export default function MatrixRain({ density = 0.9, fontSize = 16, speed = 1.0 }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];

    const setFont = () => {
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`;
      ctx.textBaseline = "top";
    };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      setFont();
      columns = Math.max(1, Math.floor(width / fontSize));
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
    }

    function draw() {
      // Fade the whole canvas a bit to create trailing effect
      ctx.fillStyle = "rgba(10, 15, 20, 0.15)"; // background fade
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < columns; i++) {
        const y = drops[i] * fontSize;
        const x = i * fontSize;

        // Head (brighter)
        const headChar = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.fillText(headChar, x, y);

        // Trail (green)
        const tailChar = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillStyle = "hsl(152, 86%, 45%)";
        ctx.fillText(tailChar, x, y - fontSize);

        // Reset drop randomly after it falls beyond bottom based on density
        if (y > height && Math.random() > density) {
          drops[i] = Math.floor(Math.random() * -50);
        }
        drops[i] += speed;
      }
      rafRef.current = requestAnimationFrame(draw);
    }

    function start() {
      resize();
      // Initial clear
      ctx.fillStyle = "rgba(10, 15, 20, 1)";
      ctx.fillRect(0, 0, width, height);
      if (!mqReduced.matches) {
        rafRef.current = requestAnimationFrame(draw);
      }
    }

    start();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [density, fontSize, speed]);

  return <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />;
}
