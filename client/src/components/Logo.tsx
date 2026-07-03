import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex cursor-pointer items-center gap-2"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 font-black text-white shadow-lg shadow-cyan-500/30">
        IA
      </div>

      <h2 className="text-2xl font-black tracking-tight">
        Intern
        <span className="text-cyan-400">AI</span>
      </h2>
    </motion.div>
  );
}