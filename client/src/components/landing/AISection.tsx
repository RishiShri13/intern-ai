import {
  Sparkles,
  Brain,
} from "lucide-react";

import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";

import AIChatBubble from "./AIChatBubble";
import PromptChip from "./PromptChip";

export default function AISection() {
  return (
    <Section id="ai" className="py-32">
      <Container>
        <Heading
          center
          badge="AI Powered"
          title="Your Intelligent Internship Assistant"
          subtitle="Automate repetitive work, generate reports, review code, summarize progress and help mentors make better decisions."
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* CHAT */}

          <GlassCard className="p-8">
            <div className="mb-8 flex items-center gap-3">
              <Sparkles
                className="text-cyan-400"
                size={26}
              />

              <h3 className="text-2xl font-bold">
                AI Assistant
              </h3>
            </div>

            <div className="space-y-4">

              <AIChatBubble
                user
                text="Generate this week's progress report."
              />

              <AIChatBubble
                text="Done! I analyzed attendance, tasks and mentor feedback."
              />

              <AIChatBubble
                user
                text="Review John's submitted React project."
              />

              <AIChatBubble
                text="Code quality: Excellent. Suggested 3 improvements."
              />

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              <PromptChip text="Generate Resume" />

              <PromptChip text="Review Code" />

              <PromptChip text="Performance Summary" />

              <PromptChip text="Create Certificate" />

            </div>
          </GlassCard>

          {/* AI Dashboard */}

          <GlassCard className="p-8">

            <div className="mb-8 flex items-center gap-3">

              <Brain
                className="text-cyan-400"
                size={28}
              />

              <h3 className="text-2xl font-bold">
                AI Insights
              </h3>

            </div>

            <div className="space-y-5">

              <div className="rounded-xl bg-white/5 p-5">
                🤖 Productivity Score
                <h2 className="mt-2 text-3xl font-bold text-cyan-400">
                  94%
                </h2>
              </div>

              <div className="rounded-xl bg-white/5 p-5">
                📈 Attendance Trend
                <h2 className="mt-2 text-3xl font-bold">
                  Increasing
                </h2>
              </div>

              <div className="rounded-xl bg-white/5 p-5">
                ⚡ AI Recommendation
                <p className="mt-2 text-slate-400">
                  Schedule weekly mentor sessions
                  for better intern engagement.
                </p>
              </div>

            </div>

          </GlassCard>

        </div>
      </Container>
    </Section>
  );
}