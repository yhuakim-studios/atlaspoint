import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-black">
      {/* Dark gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(230,255,75,0.04)_0%,_transparent_70%)] pointer-events-none"></div>

      {/* Abstract Background Effects - Light Beams */}

      {/* Left Light Beam */}
      <div className="absolute top-1/2 left-0 w-[45%] md:w-[40%] h-[400px] md:h-[600px] -translate-y-1/2 pointer-events-none opacity-70 mix-blend-screen">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
          <defs>
            <linearGradient id="left-beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e6ff4b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#e6ff4b" stopOpacity="0" />
            </linearGradient>
            <pattern id="left-dot-pattern" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.5" fill="rgba(230,255,75,0.2)" />
            </pattern>
            <mask id="left-beam-mask">
              <polygon points="0,0 100,50 0,100" fill="white" />
            </mask>
            <linearGradient id="left-fade" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g mask="url(#left-beam-mask)">
            <rect width="100%" height="100%" fill="url(#left-beam-grad)" />
            <rect width="100%" height="100%" fill="url(#left-dot-pattern)" mask="url(#left-fade)" />
          </g>

          {/* Glowing Edges */}
          <line x1="0" y1="0" x2="100" y2="50" stroke="url(#left-fade)" strokeWidth="0.3" />
          <line x1="0" y1="100" x2="100" y2="50" stroke="url(#left-fade)" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Right Light Beam */}
      <div className="absolute top-1/2 right-0 w-[45%] md:w-[40%] h-[400px] md:h-[600px] -translate-y-1/2 pointer-events-none opacity-70 mix-blend-screen">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
          <defs>
            <linearGradient id="right-beam-grad" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#e6ff4b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#e6ff4b" stopOpacity="0" />
            </linearGradient>
            <pattern id="right-dot-pattern" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.5" fill="rgba(230,255,75,0.2)" />
            </pattern>
            <mask id="right-beam-mask">
              <polygon points="100,0 0,50 100,100" fill="white" />
            </mask>
            <linearGradient id="right-fade" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g mask="url(#right-beam-mask)">
            <rect width="100%" height="100%" fill="url(#right-beam-grad)" />
            <rect width="100%" height="100%" fill="url(#right-dot-pattern)" mask="url(#right-fade)" />
          </g>

          {/* Glowing Edges */}
          <line x1="100" y1="0" x2="0" y2="50" stroke="url(#right-fade)" strokeWidth="0.3" />
          <line x1="100" y1="100" x2="0" y2="50" stroke="url(#right-fade)" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Background central glow behind text */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e6ff4b]/8 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Logo/Brand Mark above title */}
        <div className="flex items-center gap-2 mb-8 select-none">
          <div className="w-7 h-7 rounded-lg bg-[#e6ff4b] flex items-center justify-center">
            <span className="font-black text-black text-xs">A</span>
          </div>
          <span className="text-white font-medium text-lg tracking-wide">AtlasPoint</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold text-white tracking-tight leading-[1.05] max-w-5xl mx-auto mb-8">
          Deploy trained customer support teams in 48 hours
        </h1>

        <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Scale your operations with pre-trained support staff. AtlasPoint handles the hiring, onboarding, and management so you can grow without HR overhead.
        </p>

        {/* Input Form */}
        <div className="w-full max-w-[500px] mx-auto relative z-20">
          <form className="flex flex-col sm:flex-row gap-2 bg-white/5 backdrop-blur-md p-1.5 rounded-xl border border-white/10 shadow-2xl">
            <input
              type="email"
              placeholder="Your work e-mail"
              className="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-0 text-base"
              required
            />
            <button
              type="submit"
              className="bg-[#e6ff4b] hover:bg-[#d4ed45] text-black px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              Request Staff
            </button>
          </form>
          <p className="text-sm text-neutral-500 mt-6 font-medium">
            Start hiring for free or <a href="#" className="underline hover:text-white transition-colors underline-offset-4">book a demo</a>
          </p>
        </div>

        {/* Logos Row */}
        <div className="mt-32 w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-30 grayscale pointer-events-none">
          <span className="text-xl font-bold text-white tracking-widest font-serif">Canada</span>
          <span className="text-xl font-black text-white tracking-tighter uppercase">Decathlon</span>
          <span className="text-xl font-semibold text-white flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12 2L2 22h20L12 2z" /></svg> Raycast
          </span>
          <span className="text-xl font-bold text-white tracking-widest uppercase">Ametek</span>
          <span className="text-xl font-bold text-white flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" /></svg> redis
          </span>
          <span className="text-xl font-semibold text-white flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><circle cx="12" cy="12" r="10" /></svg> Octopus Deploy
          </span>
          <span className="text-xl font-medium text-white tracking-wide">accenture</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
