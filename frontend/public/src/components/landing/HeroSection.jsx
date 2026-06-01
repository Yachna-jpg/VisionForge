import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0a0e1a]">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-violet-300 text-xs font-medium">AI Powered Mobility Assistant</span>
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">
              Navigate Safely.
            </h1>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Live Independently.
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Navora is an AI-powered voice assistant that helps visually impaired
            individuals navigate the world safely with real-time guidance, obstacle
            detection, and live support from guardians and volunteers.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => navigate("/voice-assistant")}
              className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-violet-500/25"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>
              </svg>
              Try Demo
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fillOpacity="0.2"/>
                <path d="M10 8l6 4-6 4V8z"/>
              </svg>
              Watch Video
            </button>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex -space-x-2">
              {["#8B5CF6", "#3B82F6", "#10B981", "#F59E0B"].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#0a0e1a] flex items-center justify-center text-xs text-white font-bold"
                  style={{ backgroundColor: color }}
                >
                  {["A", "B", "C", "D"][i]}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Trusted by <span className="text-white font-semibold">10,000+</span> users and caregivers
            </p>
          </div>
        </div>

        {/* Right: Floating UI cards */}
        <div className="relative flex items-center justify-center h-[500px]">
          {/* Center person illustration placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-violet-600/30 to-blue-600/20 border border-violet-500/20 flex items-center justify-center">
              <div className="w-44 h-44 rounded-full bg-gradient-to-br from-violet-700/40 to-blue-700/30 border border-violet-400/20 flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Floating card: AI Voice */}
          <div className="absolute top-8 right-4 bg-[#111827] border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl animate-bounce-slow">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              </svg>
            </div>
            <div>
              <p className="text-white text-xs font-semibold">AI Voice</p>
              <p className="text-gray-400 text-xs">Assistant</p>
            </div>
          </div>

          {/* Floating card: Obstacle */}
          <div className="absolute top-1/3 left-0 bg-[#111827] border border-amber-500/30 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div>
              <p className="text-amber-400 text-xs font-semibold">Obstacle</p>
              <p className="text-gray-400 text-xs">Detected</p>
            </div>
          </div>

          {/* Floating card: Safe to Cross */}
          <div className="absolute bottom-16 right-0 bg-[#111827] border border-green-500/30 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4M12 16h.01"/>
              </svg>
            </div>
            <div>
              <p className="text-green-400 text-xs font-semibold">Safe to</p>
              <p className="text-gray-400 text-xs">Cross Road</p>
            </div>
          </div>

          {/* Pulse rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full border border-violet-500/10 animate-ping-slow" />
          </div>
        </div>
      </div>
    </section>
  );
}
