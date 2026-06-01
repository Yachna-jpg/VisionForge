const steps = [
  {
    number: 1,
    icon: "🎧",
    title: "Wear Earphones",
    description: "Connect your earphones and start the app.",
    color: "#8B5CF6",
  },
  {
    number: 2,
    icon: "🎙️",
    title: "Speak Destination",
    description: "Tell Navora where you want to go.",
    color: "#3B82F6",
  },
  {
    number: 3,
    icon: "📍",
    title: "Get Voice Guidance",
    description: "Navora guides you step-by-step to your destination.",
    color: "#06B6D4",
  },
  {
    number: 4,
    icon: "⚠️",
    title: "Obstacle Alerts",
    description: "Get real-time alerts for obstacles and hazards.",
    color: "#F59E0B",
  },
  {
    number: 5,
    icon: "✅",
    title: "Reach Safely",
    description: "Navigate safely and reach your destination.",
    color: "#10B981",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[#0d1120]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            How{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Navora
            </span>{" "}
            Works
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Five simple steps to navigate your world safely and independently.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, idx) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center gap-4 flex-1">
              {/* Arrow between steps on desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-10 text-gray-600 z-20">
                  →
                </div>
              )}

              {/* Icon circle */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl border"
                style={{
                  backgroundColor: `${step.color}15`,
                  borderColor: `${step.color}30`,
                  boxShadow: `0 0 30px ${step.color}15`,
                }}
              >
                {step.icon}
              </div>

              {/* Step number */}
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: step.color }}
              >
                {step.number}
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[140px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
