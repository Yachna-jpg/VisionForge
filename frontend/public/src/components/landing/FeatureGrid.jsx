import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: "🎙️",
    title: "AI Voice Assistant",
    description: "Natural voice interaction in multiple languages.",
    color: "#8B5CF6",
  },
  {
    icon: "📍",
    title: "Smart Navigation",
    description: "Accurate GPS navigation with step-by-step voice guidance.",
    color: "#3B82F6",
  },
  {
    icon: "⚠️",
    title: "Obstacle Detection",
    description: "Detects potholes, vehicles, animals, and other obstacles.",
    color: "#F59E0B",
  },
  {
    icon: "🚶",
    title: "Smart Road Crossing",
    description: "Detects traffic and guides you to cross roads safely.",
    color: "#06B6D4",
  },
  {
    icon: "🏥",
    title: "Find Nearby Places",
    description: "Ask about nearby places like shops, ATMs, hospitals and more.",
    color: "#EC4899",
  },
  {
    icon: "📡",
    title: "Live Tracking",
    description: "Guardians can track your live location in real-time.",
    color: "#10B981",
  },
  {
    icon: "🆘",
    title: "Emergency SOS",
    description: "Instant alerts to guardians with your live location.",
    color: "#EF4444",
  },
  {
    icon: "🤝",
    title: "Volunteer Support",
    description: "Get help from verified volunteers at affordable rates.",
    color: "#F97316",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Everything You Need,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              All in One Place
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Navora combines cutting-edge AI with accessibility-first design to
            empower every journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
