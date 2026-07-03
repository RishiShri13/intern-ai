import { motion } from "framer-motion";

interface Props {
  title: string;
}

export default function NavLink({ title }: Props) {
  return (
    <motion.a
      whileHover={{
        y: -2,
      }}
      href="#"
      className="relative text-slate-300 transition hover:text-white"
    >
      {title}

      <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
    </motion.a>
  );
}