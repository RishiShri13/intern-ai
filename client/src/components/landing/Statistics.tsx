import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";

import StatisticCard from "./StatisticCard";

const stats = [
  {
    value: "250+",
    label: "Companies",
  },
  {
    value: "15K+",
    label: "Interns",
  },
  {
    value: "600+",
    label: "Mentors",
  },
  {
    value: "98%",
    label: "Completion Rate",
  },
  {
    value: "24/7",
    label: "AI Assistant",
  },
  {
    value: "40+",
    label: "Countries",
  },
];

export default function Statistics() {
  return (
    <Section id="statistics">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <Heading
            center
            badge="Global Impact"
            title="Trusted by Leading Organizations"
            subtitle="Helping companies, mentors, and interns collaborate with AI-powered workflows across the world."
          />

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <StatisticCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}