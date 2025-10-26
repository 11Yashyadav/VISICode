"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dots: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 80; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 🔹 Adjust colors according to theme
      const dotColor = theme === "dark" ? "#38bdf8" : "#0ea5e9";
      const lineColor =
        theme === "dark" ? "rgba(56,189,248" : "rgba(14,165,233";
      const bgFade =
        theme === "dark" ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.15)";

      ctx.fillStyle = bgFade;
      ctx.fillRect(0, 0, width, height);

      for (const dot of dots) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();

        for (const other of dots) {
          const dx = dot.x - other.x;
          const dy = dot.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `${lineColor},${1 - dist / 120})`;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [theme]);

  return (
    <section
      className={`relative flex flex-col justify-center items-center h-screen text-center overflow-hidden transition-colors duration-700 ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-3xl px-4">
        <div
          className={`text-sm font-mono mb-4 border rounded-full inline-block px-3 py-1 backdrop-blur transition-colors duration-700 ${
            theme === "dark"
              ? "text-sky-400 border-sky-700 bg-sky-950/40"
              : "text-sky-600 border-sky-300 bg-sky-100/60"
          }`}
        >
          &lt;/&gt; AI-Powered Code Analysis
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Visualize Your Code <br />
          <span
            className={`bg-gradient-to-r text-transparent bg-clip-text transition-colors duration-700 ${
              theme === "dark"
                ? "from-sky-400 to-indigo-500"
                : "from-sky-600 to-indigo-400"
            }`}
          >
            Like Never Before
          </span>
        </h1>
        <p
          className={`mb-8 text-lg transition-colors duration-700 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Transform static source code into interactive, real-time visual graphs
          and logic flows. Debug faster, understand deeper.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/visualizer">
            <button
              className={`
      font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform 
      ${
        theme === "dark"
          ? "bg-sky-500 hover:bg-sky-600 hover:scale-105 hover:shadow-lg shadow-sky-400 text-white  bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 "
          : "bg-sky-600 hover:bg-sky-700 hover:scale-105 hover:shadow-lg shadow-sky-300 text-white  bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 "
      }
    `}
            >
              Try It Now &lt;/&gt;
            </button>
          </Link>

          {/* External link */}

          <a
            href="https://github.com/11Yashyadav/VISICode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`font-semibold py-3 px-6 rounded-xl border transition-all duration-300 ${
                theme === "dark"
                  ? "border-sky-400 hover:bg-sky-950 text-sky-300"
                  : "border-sky-600 hover:bg-sky-100 text-sky-700"
              }`}
            >
              View on Github
            </button>
          </a>
        </div>
      </div>

      {/* Floating function call snippets */}
      <div
        className={`absolute text-xs font-mono px-3 py-2 rounded-lg top-[30%] left-[10%] backdrop-blur-sm transition-colors duration-700 ${
          theme === "dark"
            ? "text-sky-300 bg-sky-950/60"
            : "text-sky-700 bg-sky-100/80"
        }`}
      >
        function analyze() {"{"}
      </div>

      <div
        className={`absolute text-xs font-mono px-3 py-2 rounded-lg bottom-[25%] right-[20%] backdrop-blur-sm transition-colors duration-700 ${
          theme === "dark"
            ? "text-purple-300 bg-purple-950/60"
            : "text-purple-700 bg-purple-100/80"
        }`}
      >
        visualize(data);
      </div>
      <div
        className={`absolute text-xs font-mono px-3 py-2 rounded-lg top-[60%] left-[70%] backdrop-blur-sm transition-colors duration-700 ${
          theme === "dark"
            ? "text-emerald-300 bg-emerald-950/60"
            : "text-emerald-700 bg-emerald-100/80"
        }`}
      >
        const result = parse();
      </div>
    </section>
  );
};

export default Hero;
