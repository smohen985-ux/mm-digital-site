import { Reveal } from "./Reveal";

const FAQS = [
{
  q: "Do I have to sign a long contract?",
    a: "No. Everything is month to month. If you want to stop, you tell us and we stop — no cancellation fee, no fine print.",
    },
{
q: "Who actually runs my ads?",
  a: "One person on our team, and you'll have their direct contact. Not a call center, not a different account manager every few months.",
  },
{
q: "What if it isn't working?",
  a: "We'll tell you honestly, in plain terms, and talk through what to change or whether to stop. We'd rather say that than keep charging you.",
  },
{
q: "Do you write and design the ads too, or just run them?",
  a: "We handle the whole thing — the copy, the creative, the targeting, and the day-to-day management.",
  },
{
q: "How will I know what you're doing with my money?",
  a: "Regular reports written in plain English — what we spent, what it got you, and what we're doing next. No dashboard you have to learn.",
  },
{
q: "What kind of businesses do you work with?",
  a: "Owner-operated local businesses — restaurants, salons, gyms, contractors, and local retail. If that's not you, we'll say so up front.",
  },
];

export default function FAQs() {
  return (
    <section id="faqs" className="bg-gradient-to-b from-surface2 to-bg py-24">
    <div className="container">
    <div className="mb-16 max-w-[640px]">
    <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
    FAQs
    </Reveal>
    <Reveal index={1} as="h2" isTitle className="text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
    Questions owners actually ask.
    </Reveal>
    </div>

    <div className="flex max-w-[820px] flex-col gap-4">
    {FAQS.map((f, i) => (
    <Reveal key={f.q} index={i}>
    <details className="group rounded-2xl border border-border bg-surface px-8">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-base font-semibold text-ink group-open:text-accent">
    {f.q}
    <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border">
    <span className="absolute h-[1.5px] w-2.5 bg-muted" />
    <span className="absolute h-2.5 w-[1.5px] bg-muted transition-transform group-open:rotate-90 group-open:opacity-0" />
    </span>
    </summary>
    <p className="mb-6 text-[15px] text-muted">{f.a}</p>
    </details>
    </Reveal>
    ))}
</div>
    </div>
    </section>
    );
}
