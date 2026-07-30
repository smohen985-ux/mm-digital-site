import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    quote: "They call when something's wrong, not just when they want more money.",
    cite: "Owner, family-run diner — Columbus, OH",
  },
  {
    quote: "First agency that ever explained what my ad spend actually did.",
    cite: "Owner, auto repair shop — San Antonio, TX",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-gradient-to-b from-surface2 to-bg py-24">
      <div className="container">
        <div className="mb-16 max-w-[640px]">
          <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
            From owners like you
          </Reveal>
          <Reveal index={1} as="h2" isTitle className="text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
            What it sounds like when it works.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.cite}
              index={i}
              className="rounded-2xl border border-border bg-surface p-12 transition-[border-color,transform] hover:-translate-y-1 hover:border-accent"
            >
              <div className="mb-3 flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-3 text-lg font-medium leading-snug text-ink">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-medium text-muted">{t.cite}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
