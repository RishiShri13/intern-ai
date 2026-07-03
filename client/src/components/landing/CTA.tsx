import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import GlassCard from "@/components/common/GlassCard";

export default function CTA() {
  return (
    <Section>
      <Container>
        <GlassCard className="relative overflow-hidden p-14 text-center">

          {/* Background Glow */}

          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />

          <div className="relative">

            <h2 className="text-4xl font-black md:text-6xl">
              Ready to Build the Future
              <br />
              of Internship Management?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Join companies using AI to automate internship management,
              mentor collaboration, attendance tracking, analytics,
              and performance prediction.
            </p>

            <div className="mt-10">
              <PrimaryButton>
                Start Free Trial
              </PrimaryButton>
            </div>

          </div>

        </GlassCard>
      </Container>
    </Section>
  );
}