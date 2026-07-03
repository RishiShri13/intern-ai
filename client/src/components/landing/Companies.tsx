import { motion } from "framer-motion";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Infosys",
  "TCS",
  "Accenture",
  "IBM",
  "Adobe",
];

export default function Companies() {
  return (
    <Section id="companies" className="py-24">
      <Container>
        <Heading
          center
          badge="Trusted Worldwide"
          title="Trusted by Modern Companies"
          subtitle="InternAI helps startups, enterprises and educational organizations manage internships smarter with AI."
        />

        <div className="relative mt-16 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
            className="flex w-max gap-6"
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex h-20 min-w-[220px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-white/10"
              >
                <span className="text-xl font-semibold text-slate-300">
                  {company}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}