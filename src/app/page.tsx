import Nav from "@/components/Nav";
import AetherFlowHero from "@/components/ui/aether-flow-hero";
import ProofBand from "@/components/ProofBand";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import WhoItsFor from "@/components/WhoItsFor";
import Reviews from "@/components/Reviews";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
return (
<>
<Nav />
<main>
<div id="home">
<AetherFlowHero />
</div>
<ProofBand />
<About />
<Leadership />
<Services />
<HowWeWork />
<WhoItsFor />
<Reviews />
<FAQs />
<Contact />
</main>
<Footer />
</>
);
}
