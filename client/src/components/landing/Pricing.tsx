import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";

import PricingCard from "./PricingCard";

const plans = [
  {
    title: "Starter",
    price: "$29",
    description: "Perfect for startups",
    features: [
      "Up to 50 interns",
      "AI Dashboard",
      "Attendance",
      "Task Management",
    ],
  },
  {
    title: "Professional",
    price: "$99",
    description: "Most companies choose this",
    popular: true,
    features: [
      "Unlimited interns",
      "AI Analytics",
      "Performance Prediction",
      "Certificates",
      "Mentor Management",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Large organizations",
    features: [
      "Unlimited Everything",
      "Dedicated Infrastructure",
      "Advanced AI",
      "SSO",
      "Audit Logs",
      "24/7 Support",
    ],
  },
];

export default function Pricing() {
  return (
    <Section id="pricing">
      <Container>
        <Heading
          center
          badge="Pricing"
          title="Simple Pricing"
          subtitle="Choose the perfect plan for your organization."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </Container>
    </Section>
  );
}