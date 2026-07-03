import { Star } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";

interface Props {
  name: string;
  role: string;
  company: string;
  review: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  review,
}: Props) {
  return (
    <GlassCard className="h-full">
      <div className="flex gap-1 text-yellow-400">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={16}
            fill="currentColor"
          />
        ))}
      </div>

      <p className="mt-5 text-slate-300 leading-8">
        "{review}"
      </p>

      <div className="mt-8">
        <h4 className="font-semibold">
          {name}
        </h4>

        <p className="text-sm text-slate-400">
          {role}
        </p>

        <p className="text-cyan-400 text-sm">
          {company}
        </p>
      </div>
    </GlassCard>
  );
}