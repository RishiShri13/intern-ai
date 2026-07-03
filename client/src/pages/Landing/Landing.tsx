import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Companies from "@/components/landing/Companies";
import Features from "@/components/landing/Features";
import AISection from "@/components/landing/AISection";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Statistics from "@/components/landing/Statistics";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Companies />
        <Features />
        <AISection />
        <DashboardPreview />
        <Statistics />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}