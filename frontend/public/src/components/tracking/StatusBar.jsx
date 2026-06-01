const statuses = [
  {
    icon: "✅",
    label: "Safe",
    sub: "All good",
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
  {
    icon: "🧭",
    label: "On Route",
    sub: "Following route",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: "🔋",
    label: "Battery",
    sub: "70%",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    icon: "🆘",
    label: "SOS Alert",
    sub: "Not Active",
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
  },
];

export default function StatusBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {statuses.map((s) => (
        <div
          key={s.label}
          className={`flex flex-col items-center justify-center gap-1 p-3 rounded-xl border ${s.bg}`}
        >
          <span className="text-xl">{s.icon}</span>
          <p className={`text-sm font-semibold ${s.color}`}>{s.label}</p>
          <p className="text-xs text-gray-500">{s.sub}</p>
        </div>
      ))}
    </div>
  );
}
