import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Features",
    "AI",
    "Pricing",
    "Testimonials",
    "FAQ",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
        >
          {/* Logo */}

          <h1 className="text-2xl font-black tracking-tight">
            Intern<span className="text-cyan-400">AI</span>
          </h1>

          {/* Desktop */}

          <nav className="hidden md:flex gap-8">
            {links.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-slate-300 transition hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Buttons */}

          <div className="hidden md:flex gap-3">
            <button className="rounded-lg border border-white/10 px-5 py-2 hover:bg-white/10 transition">
              Login
            </button>

            <button className="rounded-lg bg-cyan-500 px-5 py-2 font-medium hover:bg-cyan-400 transition">
              Get Started
            </button>
          </div>

          {/* Mobile */}

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </motion.div>

        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">

              {links.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-300 hover:text-cyan-400"
                >
                  {item}
                </a>
              ))}

              <button className="rounded-lg border border-white/10 py-3">
                Login
              </button>

              <button className="rounded-lg bg-cyan-500 py-3 font-semibold">
                Get Started
              </button>

            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}