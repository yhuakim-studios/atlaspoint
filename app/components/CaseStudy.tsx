"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { X, CheckCircle2, TrendingDown, Zap } from "lucide-react";

/* ─── Animated counter hook ─── */
function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(id);
      } else {
        setValue(Math.round(start));
      }
    }, 16);
    return () => clearInterval(id);
  }, [active, target, duration]);
  return value;
}

const CaseStudy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  /* Intersection Observer — triggers once, low threshold for reliability */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Animated numbers */
  const resolvedCount = useCountUp(96, 1800, isVisible);
  const avgResponse = useCountUp(118, 1800, isVisible);

  /* Helper: staggered fade-in class + inline delay */
  const fadeUpStyle = useCallback(
    (delayMs: number) => ({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.7s ease ${delayMs}ms, transform 0.7s ease ${delayMs}ms`,
    }),
    [isVisible],
  );

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* ─── Text Side ─── */}
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <div className="text-[#e6ff4b] font-semibold tracking-wide uppercase text-sm mb-4">
              Case Study: Fintech Startup
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Scaling support during hypergrowth
            </h2>
            <p className="text-neutral-300 text-lg mb-8">
              A leading digital wallet faced a massive support backlog after a
              viral marketing campaign. Traditional hiring couldn&apos;t keep up.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-sm text-neutral-400 mb-1">
                  Before AtlasPoint
                </div>
                <div className="font-medium flex items-center text-red-400">
                  <X className="h-4 w-4 mr-1" /> 48h Response Time
                </div>
              </div>
              <div>
                <div className="text-sm text-neutral-400 mb-1">
                  After 1 Week
                </div>
                <div className="text-white font-medium flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-1 text-[#e6ff4b]" />{" "}
                  &lt; 2h Response Time
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-[#e6ff4b] pl-4 py-2 mt-4">
              <p className="text-lg text-neutral-200 italic mb-4">
                &quot;AtlasPoint helped us deploy a 20-person support team in
                less than 48 hours. They saved our customer experience.&quot;
              </p>
              <footer className="text-sm text-neutral-400">
                — Sarah Jenkins, VP of Ops at FinScale
              </footer>
            </blockquote>
          </div>

          {/* ─── Animated Visual Side ─── */}
          <div
            ref={sectionRef}
            className="lg:w-1/2 bg-neutral-900 relative min-h-[520px]"
          >
            {/* Radial glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(230,255,75,0.08)_0%,_transparent_70%)]" />

            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Content container — no negative offsets, proper padding */}
            <div className="relative h-full p-8 lg:p-10 flex flex-col justify-center gap-4">
              {/* ── Main chart card ── */}
              {/* ── Main Illustration ── */}
              <div
                className="bg-white/5 backdrop-blur-md rounded-xl p-2 border border-white/10 shadow-xl overflow-hidden relative group"
                style={fadeUpStyle(0)}
              >
                <div className="relative aspect-square md:aspect-video w-full">
                  <Image
                    src="/assets/humaaans-data.png"
                    alt="Data Improvement Illustration"
                    fill
                    className="object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Overlay for "Live" status to keep the feel of the previous component */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
                    {isVisible && (
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#e6ff4b] opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e6ff4b]" />
                      </span>
                    )}
                    <span className="text-[#e6ff4b] text-[10px] font-bold uppercase tracking-wider">
                      Live Results
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Floating stat cards row ── */}
              <div className="flex gap-3">
                {/* Resolution rate card */}
                <div
                  className="flex-1 bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10"
                  style={fadeUpStyle(500)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-[#e6ff4b]/15">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#e6ff4b]" />
                    </div>
                    <span className="text-neutral-400 text-xs font-medium">
                      Resolution Rate
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white tabular-nums">
                    {resolvedCount}
                    <span className="text-[#e6ff4b]">%</span>
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    First-contact resolution
                  </div>
                </div>

                {/* Avg response card */}
                <div
                  className="flex-1 bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10"
                  style={fadeUpStyle(700)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-[#e6ff4b]/15">
                      <TrendingDown className="h-3.5 w-3.5 text-[#e6ff4b]" />
                    </div>
                    <span className="text-neutral-400 text-xs font-medium">
                      Avg. Response
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white tabular-nums">
                    {avgResponse}
                    <span className="text-[#e6ff4b] text-lg ml-0.5">min</span>
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    ↓ 95% from previous
                  </div>
                </div>
              </div>

              {/* ── Bottom notification toast ── */}
              <div
                className="bg-[#e6ff4b]/10 backdrop-blur-md rounded-lg px-4 py-3 border border-[#e6ff4b]/20 flex items-center gap-3"
                style={fadeUpStyle(1000)}
              >
                <div className="p-1.5 rounded-full bg-[#e6ff4b]/20 shrink-0">
                  <Zap className="h-3.5 w-3.5 text-[#e6ff4b]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[#e6ff4b] font-semibold">
                    Deployment Complete
                  </div>
                  <div className="text-xs text-neutral-400 truncate">
                    20 agents onboarded — all KPIs exceeded
                  </div>
                </div>
                <div className="text-[10px] text-neutral-500 whitespace-nowrap">
                  2m ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
