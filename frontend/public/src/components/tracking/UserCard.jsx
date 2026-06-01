import Avatar from "../ui/Avatar";

export default function UserCard() {
  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-4 flex items-center justify-between gap-4">
      {/* Left: avatar + name */}
      <div className="flex items-center gap-3">
        <Avatar name="Arjun Sharma" size="md" />
        <div>
          <p className="text-white font-semibold text-sm">Arjun Sharma</p>
          <p className="text-green-400 text-xs font-medium">● On the way</p>
        </div>
      </div>

      {/* Right: ETA + distance */}
      <div className="flex gap-6">
        <div className="text-right">
          <p className="text-2xl font-black text-white">20</p>
          <p className="text-xs text-gray-400">min ETA</p>
          <p className="text-xs text-gray-500">to Destination</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black text-white">1.2</p>
          <p className="text-xs text-gray-400">km left</p>
          <p className="text-xs text-gray-500 mt-1">
            Updated <span className="text-gray-400">2 min ago</span>
          </p>
        </div>
      </div>
    </div>
  );
}
