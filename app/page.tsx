import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FromThuy from "@/components/FromThuy";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Workflow from "@/components/Workflow";
import WhyItWorks from "@/components/WhyItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FromThuy />
      <Problem />
      <Solution />
      <HowItWorks />
      <Workflow />
      <WhyItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
