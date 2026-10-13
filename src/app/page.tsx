import Nav from "@/components/Nav";
import AnimatedBackground from "@/components/AnimatedBackground";
import AetherFlowHero from "@/components/ui/aether-flow-hero";
import ProofBand from "@/components/ProofBand";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Services from "@/components/Services";
import GrowthTable from "@/components/GrowthTable";
import HowWeWork from "@/components/HowWeWork";
import WhoItsFor from "@/components/WhoItsFor";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Nav />
      <main>
        <div id="home">
          <AetherFlowHero />
        </div>
        <ProofBand />
        <About />
        <Leadership />
        <Services />
        <GrowthTable />
        <HowWeWork />
        <WhoItsFor />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
