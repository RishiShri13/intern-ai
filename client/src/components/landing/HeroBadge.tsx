import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 backdrop-blur-xl">
      <Sparkles size={18} />

       Trusted by 100+ Companies
    </div>
  );
}