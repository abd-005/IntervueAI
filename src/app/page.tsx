import { CTA } from "@/components/CTA";
import Features from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
    </main>
  );
}
