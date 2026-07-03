import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Left Blob */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 40, -20],
          y: [-20, 30, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-10 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* Right Blob */}

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [30, -20, 30],
          y: [40, -40, 40],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        // ...existing code..
     className="absolute right-0 top-40 h-112.5 w-112.5 rounded-full bg-indigo-600/20 blur-[140px]"
    />

      

      {/* Bottom Blob */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]"
      />
    </>
  );
}