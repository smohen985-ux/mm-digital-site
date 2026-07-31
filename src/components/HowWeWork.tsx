import { Reveal } from "./Reveal";

const CARDS = [
  {
    label: "Dedicated Partnership",
    title: "One business. One dedicated marketing partner.",
    body: "You'll work directly with the professional managing your account—not a rotating team or multiple layers of communication. We take the time to understand your business, goals, and customers so every decision supports your long-term growth.",
  },
  {
    label: "Transparent Communication",
    title: "Always know where your investment is going.",
    body: "We provide straightforward reporting focused on the metrics that matter—qualified leads, conversions, and business growth—without unnecessary jargon or confusing dashboards.",
  },
  {
    label: "Continuous Optimization",
    title: "Marketing that continuously improves.",
    body: "Digital marketing isn't “set and forget.” We monitor performance, analyze results, and continually optimize campaigns to maximize your return on investment.",
  },
  {
    label: "Clear Expectations",
    title: "No surprises, no hidden fees.",
    body: "You'll know exactly what you're paying for, what to expect, and when to expect results — before we ever start working together.",
  },
  {
    label: "Hands-On Involvement",
    title: "We stay closely involved in your account, always.",
    body: "From strategy to execution, your dedicated partner is actively managing your campaigns day to day — not checking in once a month.",
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
          <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
            Who we serve
          </Reveal>
          <Reveal index={1} as="h2" isTitle className="text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
            Built for businesses ready to grow with a real partner.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal
              key={c.label}
              index={i}
              className="rounded-2xl border border-border bg-bg p-8 transition-[border-color,transform] hover:-translate-y-1 hover:border-accent"
            >
              <span className="mb-3 block text-xs font-bold uppercase tracking-wide text-accent">
                {c.label}
              </span>
              <h3 className="mb-2 text-xl font-bold text-ink">{c.title}</h3>
              <p className="mb-0 text-[15px] text-muted">{c.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal index={5} as="p" className="mx-auto mt-12 max-w-[720px] text-center text-[15px] text-muted">
          If we don&rsquo;t believe our services are the right fit for your business, we&rsquo;ll
          tell you. Our goal is to build long-term partnerships based on trust, not sell services
          that won&rsquo;t create value.
        </Reveal>
      </div>
    </section>
  );
}
