import { Star, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const CLIENTS = [
  {
    initials: "AM",
    name: "ABC Market",
    industry: "Local Grocery",
    before: "80/day",
    after: "125/day",
    metricLabel: "customers",
    quote: "Best marketing investment we've made.",
  },
  {
    initials: "SA",
    name: "Sunset Auto Repair",
    industry: "Auto Repair",
    before: "12/mo",
    after: "34/mo",
    metricLabel: "leads",
    quote: "They finally made our ad spend make sense.",
  },
  {
    initials: "BS",
    name: "Bright Smile Dental",
    industry: "Dental Practice",
    before: "40/mo",
    after: "68/mo",
    metricLabel: "new patients",
    quote: "Clear reports, real results, no fluff.",
  },
];

export default function Reviews() {
  return (
    <section id="client-success" className="bg-gradient-to-b from-surface2 to-bg py-24">
      <div className="container">
        <div className="mb-16 max-w-[640px]">
          <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
            Client success
          </Reveal>
          <Reveal index={1} as="h2" isTitle className="text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
            Real businesses. Real results.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CLIENTS.map((c, i) => (
            <Reveal
              key={c.name}
              index={i}
              className="rounded-2xl border border-border bg-surface p-8 transition-[border-color,transform] hover:-translate-y-1 hover:border-accent"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accentBtn text-sm font-extrabold tracking-tight text-white">
                  {c.initials}
                </div>
                <div>
                  <div className="text-base font-bold text-ink">{c.name}</div>
                  <div className="text-xs text-muted">{c.industry}</div>
                </div>
              </div>

              <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-border bg-bg px-4 py-3">
                <span className="text-sm font-semibold text-muted">{c.before}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm font-extrabold text-accent">{c.after}</span>
                <span className="text-xs text-muted">{c.metricLabel}</span>
              </div>

              <div className="mb-3 flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-0 text-lg font-medium leading-snug text-ink">&ldquo;{c.quote}&rdquo;</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
