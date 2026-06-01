import { Link } from "react-router-dom";

export default function Footer() {
  const links = {
    Product: ["Features", "How It Works", "Pricing", "Changelog"],
    Company: ["About Us", "Blog", "Careers", "Press"],
    Support: ["Help Center", "Contact", "Privacy Policy", "Terms"],
    Community: ["Volunteers", "For Guardians", "Partners", "Accessibility"],
  };

  return (
    <footer className="bg-[#0d1120] border-t border-white/5 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white font-bold text-lg">Navora</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              AI-powered mobility assistant for visually impaired individuals.
              Navigate safely. Live independently.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {["twitter", "linkedin", "github"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-violet-600/20 flex items-center justify-center text-gray-400 hover:text-violet-400 transition-colors text-xs font-bold uppercase"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="flex flex-col gap-3">
              <h4 className="text-white font-semibold text-sm">{title}</h4>
              {items.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © 2026 Navora. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Made with ❤️ for accessibility
          </p>
        </div>
      </div>
    </footer>
  );
}
