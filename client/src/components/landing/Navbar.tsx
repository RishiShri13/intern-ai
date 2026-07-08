import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import Container from "@/components/common/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "AI",
      href: "#ai",
    },
    {
      label: "Dashboard",
      href: "#dashboard",
    },
    {
      label: "Pricing",
      href: "#pricing",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Container className="py-4">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-2xl"
        >
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-black tracking-tight"
          >
            Intern
            <span className="text-cyan-400">AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Link to="/login">
              <SecondaryButton>
                Login
              </SecondaryButton>
            </Link>

            <Link to="/login">
              <PrimaryButton>
                Get Started
              </PrimaryButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-4 rounded-2xl border border-white/10 bg-slate-900/95 p-6 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-300 transition hover:text-cyan-400"
                >
                  {item.label}
                </a>
              ))}

              <Link to="/login" onClick={() => setOpen(false)}>
                <SecondaryButton>
                  Login
                </SecondaryButton>
              </Link>

              <Link to="/login" onClick={() => setOpen(false)}>
                <PrimaryButton>
                  Get Started
                </PrimaryButton>
              </Link>
            </div>
          </motion.div>
        )}
      </Container>
    </header>
  );
}