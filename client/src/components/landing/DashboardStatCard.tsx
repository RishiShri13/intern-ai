import type { LucideIcon } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";

interface DashboardStatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  color?: string;
}

export default function DashboardStatCard({
  icon: Icon,
  title,
  value,
  color = "text-cyan-400",
}: DashboardStatCardProps) {
  return (
    <GlassCard className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {value}
          </h3>
        </div>

        <Icon
          size={30}
          className={color}
        />
      </div>
    </GlassCard>
  );
}