import { Search, Megaphone, Globe2, TrendingUp, Compass, BarChart3 } from "lucide-react";
import { Reveal } from "./Reveal";
import { AdMockupIllustration } from "./ui/illustrations";

const SOLUTIONS = [
  {
    icon: Search,
    number: "Solution 1",
    title: "Google Ads",
    tagline: "Get in front of customers when they're ready to buy.",
    body: "We create, manage, and optimize Google Ads campaigns that generate qualified leads, maximize your advertising budget, and deliver measurable business results.",
  },
  {
    icon: Megaphone,
    number: "Solution 2",
    title: "Social Media Advertising",
    tagline: "Turn social media into a customer acquisition engine.",
    body: "Reach your ideal audience through strategic Facebook, Instagram, TikTok, and YouTube advertising designed to increase awareness, generate leads, and grow your business.",
  },
  {
    icon: Globe2,
    number: "Solution 3",
    title: "Website Design & Development",
    tagline: "Build a website that works as hard as you do.",
    body: "We design fast, mobile-friendly websites that build credibility, improve user experience, and convert visitors into paying customers.",
  },
  {
    icon: TrendingUp,
    number: "Solution 4",
    title: "Search Engine Optimization (SEO)",
    tagline: "Be found where your customers are searching.",
    body: "Improve your visibility on Google with SEO strategies that increase organic traffic, strengthen your online presence, and deliver sustainable long-term growth.",
  },
  {
    icon: Compass,
    number: "Solution 5",
    title: "Marketing Strategy & Growth Consulting",
    tagline: "Make smarter marketing decisions with confidence.",
    body: "From campaign strategy to business positioning, we provide expert guidance and data-driven insights that help you invest in what works and eliminate what doesn't.",
  },
  {
    icon: BarChart3,
    number: "Solution 6",
    title: "Analytics & Performance Reporting",
    tagline: "Know exactly where your marketing dollars are going.",
    body: "Receive clear, easy-to-understand reports that focus on the metrics that matter—leads, conversions, and return on investment—not marketing jargon.",
  },
];

export default function Services() {
  return (
    <section id="solutions" className="py-24">
      <div className="container grid grid-cols-1 items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
        <div className="max-w-[640px]">
          <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
            Our solutions
          </Reveal>
          <Reveal index={1} as="h2" isTitle className="text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
            Six ways we grow your business.
          </Reveal>
        </div>

        <Reveal index={1} className="order-first md:order-last">
          <AdMockupIllustration />
        </Reveal>
      </div>

      <div className="container">
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {SOLUTIONS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal
                key={s.title}
                index={i}
                className="rounded-2xl border border-border bg-surface p-12 transition-[border-color,transform] hover:-translate-y-1 hover:border-accent"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-accent">
                  {s.number}
                </span>
                <h3 className="mb-2 text-[22px] font-bold text-ink">{s.title}</h3>
                <p className="mb-3 text-[15px] font-semibold text-ink">{s.tagline}</p>
                <p className="mb-0 text-[15px] text-muted">{s.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
