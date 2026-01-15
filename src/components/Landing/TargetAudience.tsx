import { CheckCircle2 } from "lucide-react";

const TargetAudience = () => {
  const data = [
    {
      role: "Creators",
      tagline: "Grow from 0 → 1M",
      items: ["AI content repurposing", "Cross-post everywhere", "Video thumbnail optimization"]
    },
    {
      role: "Small Businesses",
      tagline: "First customer → Thousands",
      items: ["WhatsApp & SMS marketing", "Simple CRM", "Audience segmentation"]
    },
    {
      role: "Agencies",
      tagline: "Scale client campaigns",
      items: ["Multi-account access", "White-label reports", "Bulk scheduling 2025"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Built for Every Growth Journey</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {data.map((box, i) => (
          <div key={i} className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent">
            <div className="bg-[#0a0a0a] rounded-[2.4rem] p-10 h-full">
              <h3 className="text-2xl font-bold mb-1">{box.role}</h3>
              <p className="text-orange-500 text-sm mb-8 font-semibold">{box.tagline}</p>
              <ul className="space-y-4 text-left">
                {box.items.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-400 text-sm">
                    <CheckCircle2 size={18} className="text-orange-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TargetAudience;