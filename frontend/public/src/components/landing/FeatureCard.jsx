export function FeatureCard({ icon, title, description, color }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-5 bg-[#111827] rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all hover:-translate-y-1 group">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${color}20`, border: `1px solid ${color}30` }}
      >
        {icon}
      </div>
      <h3 className="text-white font-semibold text-sm">{title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  );
}
