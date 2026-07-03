import { Check } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";
import PrimaryButton from "@/components/common/PrimaryButton";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
}: PricingCardProps) {
  return (
    <GlassCard
      className={`relative flex h-full flex-col p-8 transition duration-300 hover:-translate-y-2 ${
        popular ? "border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.35)]" : ""
      }`}
    >
      {popular && (
        <div className="absolute right-6 top-6 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-2 text-slate-400">{description}</p>

      <div className="mt-8">
        <span className="text-5xl font-black">{price}</span>
        <span className="text-slate-400"> / month</span>
      </div>

      <div className="my-8 h-px bg-white/10" />

      <ul className="space-y-4 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check className="text-cyan-400" size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <PrimaryButton className="w-full">
          Get Started
        </PrimaryButton>
      </div>
    </GlassCard>
  );
}