import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import GlassCard from "@/components/common/GlassCard";

const faqs = [
  {
    question: "What is InternAI?",
    answer:
      "InternAI is an AI-powered internship and mentorship management platform built for companies of every size.",
  },
  {
    question: "Can multiple companies use InternAI?",
    answer:
      "Yes. Every company gets complete multi-tenant data isolation and independent dashboards.",
  },
  {
    question: "Does InternAI provide AI features?",
    answer:
      "Yes. AI assists with reports, internship management, analytics, task generation, feedback, and more.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade authentication, role-based access control, encrypted passwords, and secure APIs.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <Container>
        <Heading
          center
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about InternAI."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-5">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="overflow-hidden">
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-400 leading-8">
                  {faq.answer}
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}