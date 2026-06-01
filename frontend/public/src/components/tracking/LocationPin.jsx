export default function LocationPin({ label, sublabel, type = "user" }) {
  const colors = {
    user: "bg-violet-600",
    destination: "bg-green-500",
    obstacle: "bg-amber-500",
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-10 h-10 rounded-full ${colors[type]} flex items-center justify-center shadow-lg`}
      >
        {type === "user" && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        )}
        {type === "destination" && <span className="text-white text-lg">🏁</span>}
        {type === "obstacle" && <span className="text-white text-lg">⚠️</span>}
      </div>
      {label && (
        <div className="mt-1 bg-[#111827] border border-white/10 rounded-lg px-2 py-1 text-center shadow">
          <p className="text-white text-xs font-semibold">{label}</p>
          {sublabel && <p className="text-gray-400 text-xs">{sublabel}</p>}
        </div>
      )}
    </div>
  );
}
