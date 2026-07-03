import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp } from "@/animations/fade";
import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import StatsCard from "./StatsCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <HeroBackground />

      <div className="relative container mx-auto min-h-screen px-6 lg:px-10">

        <div className="grid min-h-screen items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <HeroBadge />

            <h1 className="mt-8 text-5xl font-black leading-[0.9] md:text-7xl xl:text-8xl">

              Build Smarter

              <br />

              Manage

              <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                {" "}
                Internships
              </span>

              <br />

              with AI

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-400">

              InternAI is an AI-powered internship and mentorship platform
              helping organizations manage interns, mentors, attendance,
              analytics, performance, and certifications from a single
              intelligent dashboard.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="group flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-cyan-400">

                Get Started

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition hover:border-cyan-400 hover:bg-white/10">

                Live Demo

              </button>

            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

              <StatsCard
                number="100+"
                label="Companies"
              />

              <StatsCard
                number="10K+"
                label="Interns"
              />

              <StatsCard
                number="98%"
                label="Completion"
              />

              <StatsCard
                number="24/7"
                label="AI Assistant"
              />

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex justify-center"
          >

            <div className="relative w-full max-w-xl">

              {/* Glow */}

              <div className="absolute inset-0 rounded-[40px] bg-cyan-500/20 blur-3xl" />

              {/* Dashboard */}

              <div className="relative rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-3xl">

                <div className="mb-8 flex items-center justify-between">

                  <div>
                    <p className="text-sm text-slate-400">
                      AI Dashboard
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      Company Overview
                    </h3>
                  </div>

                  <div className="rounded-xl bg-cyan-500/20 px-4 py-2 text-cyan-300">
                    Live
                  </div>

                </div>

                <div className="space-y-5">

                  <div className="rounded-xl bg-white/5 p-5">
                    📊 Attendance Today
                    <h2 className="mt-2 text-3xl font-bold">96%</h2>
                  </div>

                  <div className="rounded-xl bg-white/5 p-5">
                    ✅ Tasks Completed
                    <h2 className="mt-2 text-3xl font-bold">1,482</h2>
                  </div>

                  <div className="rounded-xl bg-white/5 p-5">
                    🤖 AI Productivity Score
                    <h2 className="mt-2 text-3xl font-bold text-cyan-400">
                      Excellent
                    </h2>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}