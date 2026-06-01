export default function RoutePolyline() {
  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-4">
      <h4 className="text-white font-semibold text-sm mb-3">Route Info</h4>
      <div className="flex flex-col gap-2">
        {/* Origin */}
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center gap-1 mt-1">
            <div className="w-3 h-3 rounded-full bg-violet-500" />
            <div className="w-px h-8 bg-violet-500/30" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">Park Street</p>
            <p className="text-gray-500 text-xs">Current Location</p>
          </div>
        </div>

        {/* Destination */}
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">Esplanade</p>
            <p className="text-gray-500 text-xs">Destination · 1.2 km</p>
          </div>
        </div>
      </div>

      {/* Speed */}
      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-gray-500">Speed</span>
        <span className="text-xs text-white font-semibold">4.2 km/h</span>
      </div>
    </div>
  );
}
