import {
  Brain,
  Briefcase,
  BarChart3,
  GraduationCap,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Brain,
    title: "AI Assistant",
    description:
      "Generate reports, summarize progress, review code and assist interns using AI.",
  },
  {
    icon: Briefcase,
    title: "Internship Management",
    description:
      "Manage companies, mentors, interns, departments and internship programs effortlessly.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Visualize attendance, performance, tasks and productivity with interactive charts.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description:
      "Track skills, progress, certificates and personalized learning roadmaps.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Multi-tenant architecture with role-based access control and complete data isolation.",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Collaboration",
    description:
      "Integrated chat, notifications and mentor feedback for seamless teamwork.",
  },
];

export default function Features() {
  return (
    <Section
      id="features"
      className="py-28"
    >
      <Container>
        <Heading
          center
          badge="Everything You Need"
          title="Powerful Features Built for Modern Internships"
          subtitle="InternAI combines AI, analytics, collaboration and automation into one intelligent platform."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}