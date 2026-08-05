import { Reveal } from "./Reveal";

const CARDS = [
  {
    number: "01",
    label: "Dedicated Partnership",
    title: "One business. One dedicated marketing partner.",
    body: "You'll work directly with the professional managing your account—not a rotating team or multiple layers of communication. We take the time to understand your business, goals, and customers so every decision supports your long-term growth.",
  },
  {
    number: "02",
    label: "Transparent Communication",
    title: "Always know where your investment is going.",
    body: "We provide straightforward reporting focused on the metrics that matter—qualified leads, conversions, and business growth—without unnecessary jargon or confusing dashboards.",
  },
  {
    number: "03",
    label: "Continuous Optimization",
    title: "Marketing that continuously improves.",
    body: "Digital marketing isn't “set and forget.” We monitor performance, analyze results, and continually optimize campaigns to maximize your return on investment.",
  },
  {
    number: "04",
    label: "Honest Recommendations",
    title: "We only succeed when our clients succeed.",
    body: "If we don't believe our services are the right fit for your business, we'll tell you. Our goal is to build long-term partnerships based on trust, not sell services that won't create value.",
  },
  {
    number: "05",
    label: "Customized Strategies",
    title: "No two businesses are the same.",
    body: "Every marketing strategy is tailored to your industry, audience, competition, and business objectives. We don't rely on one-size-fits-all templates.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="who-we-serve"
      className="bg-gradient-to-b from-surface2 to-bg py-24"
    >
      <div className="container">
        <div className="mb-16 max-w-[640px]">
          <Reveal index={1} as="h2" isTitle className="text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
            Built for businesses ready to grow with a real partner.
          </Reveal>
        </div>

        <div className="divide-y divide-border border-t border-border">
          {CARDS.map((c, i) => (
            <Reveal
              key={c.label}
              index={i}
              className="group grid grid-cols-1 gap-2 py-8 transition-colors md:grid-cols-[100px_1fr_1.4fr] md:items-baseline md:gap-8"
            >
              <span className="text-2xl font-extrabold tracking-tight text-border transition-colors group-hover:text-accent">
                {c.number}
              </span>
              <div>
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-accent">
                  {c.label}
                </span>
                <h3 className="text-lg font-bold text-ink">{c.title}</h3>
              </div>
              <p className="mb-0 text-[15px] text-muted">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
