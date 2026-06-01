export default function SOSAlert({ active = false, onDismiss }) {
  if (!active) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4">
      <div className="bg-red-600 text-white rounded-2xl p-4 shadow-2xl flex items-center gap-3 animate-bounce">
        <span className="text-2xl">🆘</span>
        <div className="flex-1">
          <p className="font-bold text-sm">SOS Alert Active</p>
          <p className="text-xs text-red-200">Guardian has been notified with your location.</p>
        </div>
        <button
          onClick={onDismiss}
          className="text-red-200 hover:text-white text-xs underline"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
