import { Menu } from "lucide-react";


import Logo from "./Logo";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <div className="container mx-auto px-6 py-6">

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-8 py-5 backdrop-blur-3xl shadow-2xl">

          <Logo />

          <nav className="hidden items-center gap-10 lg:flex">

            <NavLink title="Features" />

            <NavLink title="AI" />

            <NavLink title="Dashboard" />

            <NavLink title="Pricing" />

            <NavLink title="FAQ" />

          </nav>

          <div className="hidden items-center gap-4 lg:flex">

            <button className="rounded-xl border border-white/10 px-6 py-3 transition hover:bg-white/5">
              Login
            </button>

            <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:scale-105 hover:bg-cyan-400">
              Get Started
            </button>

          </div>

          <button className="lg:hidden">

            <Menu />

          </button>

        </div>

      </div>

    </header>
  );
}