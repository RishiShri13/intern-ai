import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";

import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Manager",
    company: "TechNova",
    review:
      "InternAI completely transformed how we manage interns and mentors.",
  },
  {
    name: "Michael Lee",
    role: "Engineering Manager",
    company: "CloudStack",
    review:
      "The AI recommendations and analytics save our team countless hours.",
  },
  {
    name: "Emily Carter",
    role: "Talent Acquisition",
    company: "NextGen Labs",
    review:
      "Beautiful UI, powerful features, and incredibly easy to use.",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>

        <Heading
          center
          badge="Testimonials"
          title="Loved by Companies Worldwide"
          subtitle="Trusted by startups and enterprises to streamline internship management."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              {...item}
            />
          ))}

        </div>

      </Container>
    </Section>
  );
}