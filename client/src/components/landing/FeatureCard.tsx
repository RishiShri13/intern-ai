import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import GlassCard from "@/components/common/GlassCard";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <GlassCard className="h-full p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
          <Icon
            size={28}
            className="text-cyan-400"
          />
        </div>

        <h3 className="mb-4 text-2xl font-bold">
          {title}
        </h3>

        <p className="leading-7 text-slate-400">
          {description}
        </p>
      </GlassCard>
    </motion.div>
  );
}