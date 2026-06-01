const stats = [
  { value: "10,000+", label: "Active Users" },
  { value: "50+", label: "Cities Covered" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9★", label: "App Rating" },
];

export default function TrustBadge() {
  return (
    <section className="py-16 bg-[#0a0e1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black text-violet-400 mb-1">{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-900/50 to-blue-900/30 border border-violet-500/20 p-10 text-center">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-violet-600/20 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col items-center gap-5">
            <span className="text-xs uppercase tracking-widest text-violet-300 font-semibold">
              Start Your Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white max-w-xl">
              Ready to Navigate the World with Confidence?
            </h2>
            <p className="text-gray-400 text-sm max-w-md">
              Join thousands of visually impaired individuals who navigate safely
              every day with Navora's AI-powered assistance.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <button className="px-7 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-violet-500/30">
                Get Started Free
              </button>
              <button className="px-7 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
