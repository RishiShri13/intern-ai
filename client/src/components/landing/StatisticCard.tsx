import { motion } from "framer-motion";

import GlassCard from "@/components/common/GlassCard";

interface StatisticCardProps {
  value: string;
  label: string;
}

export default function StatisticCard({
  value,
  label,
}: StatisticCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <GlassCard className="h-full p-8 text-center">
        <h3 className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-5xl font-black text-transparent">
          {value}
        </h3>

        <p className="mt-4 text-lg text-slate-400">
          {label}
        </p>
      </GlassCard>
    </motion.div>
  );
}