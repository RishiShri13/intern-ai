import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp } from "@/animations/fade";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import GlassCard from "@/components/common/GlassCard";
import AuroraBackground from "@/components/common/AuroraBackground";
import AnimatedGrid from "@/components/common/AnimatedGrid";

import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import StatsCard from "./StatsCard";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-32">
      <AuroraBackground />
      <AnimatedGrid />
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid min-h-[85vh] items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <HeroBadge />

            <div className="mt-8">
              <Heading
                title={
                  <>
                    Build Smarter
                    <br />
                    Manage{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                      Internships
                    </span>
                    <br />
                    with AI
                  </>
                }
                subtitle="InternAI is an AI-powered internship and mentorship platform helping organizations manage interns, mentors, attendance, performance, analytics, AI workflows, certifications, and collaboration from one intelligent dashboard."
              />
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">
              <PrimaryButton>
                Get Started

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </PrimaryButton>

              <SecondaryButton>
                Live Demo
              </SecondaryButton>
            </div>

            {/* Stats */}

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
            className="hidden justify-center lg:flex"
          >
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-0 rounded-[40px] bg-cyan-500/20 blur-3xl" />

              <GlassCard className="relative rounded-[32px] p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      AI Dashboard
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      Company Overview
                    </h3>
                  </div>

                  <span className="rounded-xl bg-cyan-500/20 px-4 py-2 text-cyan-300">
                    Live
                  </span>
                </div>

                <div className="space-y-5">
                  <div className="rounded-xl bg-white/5 p-5">
                    <p className="text-sm text-slate-400">
                      📊 Attendance Today
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                      96%
                    </h2>
                  </div>

                  <div className="rounded-xl bg-white/5 p-5">
                    <p className="text-sm text-slate-400">
                      ✅ Tasks Completed
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                      1,482
                    </h2>
                  </div>

                  <div className="rounded-xl bg-white/5 p-5">
                    <p className="text-sm text-slate-400">
                      🤖 AI Productivity Score
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-cyan-400">
                      Excellent
                    </h2>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}