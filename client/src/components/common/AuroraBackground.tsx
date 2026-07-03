import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -60, 60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px]"
      />
    </div>
  );
}