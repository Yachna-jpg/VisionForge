import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SOSButton() {
  const [active, setActive] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const handlePress = () => {
    let count = 3;
    setCountdown(count);
    const interval = setInterval(() => {
      count -= 1;
      if (count === 0) {
        clearInterval(interval);
        setCountdown(null);
        setActive(true);
      } else {
        setCountdown(count);
      }
    }, 1000);
  };

  const handleCancel = () => {
    setActive(false);
    setCountdown(null);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {!active ? (
        <motion.button
          onMouseDown={handlePress}
          whileTap={{ scale: 0.95 }}
          className="relative w-20 h-20 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-xl shadow-red-500/30 transition-colors"
        >
          {countdown !== null && (
            <span className="absolute inset-0 flex items-center justify-center text-white text-3xl font-black">
              {countdown}
            </span>
          )}
          {countdown === null && (
            <span className="text-white font-black text-sm">SOS</span>
          )}
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-red-500"
            animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.button>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center animate-pulse shadow-xl shadow-red-500/50">
            <span className="text-white font-black text-xs text-center leading-tight">ALERT SENT</span>
          </div>
          <button
            onClick={handleCancel}
            className="text-xs text-gray-400 hover:text-white underline"
          >
            Cancel SOS
          </button>
        </div>
      )}
    </div>
  );
}
