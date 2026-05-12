import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SocialProof from "./components/SocialProof";
import ProblemSolution from "./components/ProblemSolution";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import CaseStudy from "./components/CaseStudy";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans selection:bg-[#e6ff4b] selection:text-black">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <ProblemSolution />
      <HowItWorks />
      <Services />
      <CaseStudy />
      {/* <Pricing /> */}
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
