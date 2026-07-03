import { motion } from "framer-motion";

interface Props {
  user?: boolean;
  text: string;
}

export default function AIChatBubble({
  user = false,
  text,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className={`flex ${
        user ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-sm rounded-2xl px-5 py-3 ${
          user
            ? "bg-cyan-500 text-black"
            : "border border-white/10 bg-white/5 backdrop-blur-xl"
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
}