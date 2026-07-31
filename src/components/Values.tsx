import { Eye, Users, BarChart3, Lightbulb, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const VALUES = [
  {
    icon: Eye,
    title: "Transparency",
    body: "We tell you what's working—and what isn't.",
  },
  {
    icon: Users,
    title: "Partnership",
    body: "Your success is our success.",
  },
  {
    icon: BarChart3,
    title: "Accountability",
    body: "We measure what matters.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We continuously improve.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    body: "If we're not the right fit, we'll tell you.",
  },
];

export default function Values() {
  return (
    <section id="values" className="py-24">
      <div className="container">
        <div className="mb-16 max-w-[640px]">
          <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
            Our values
          </Reveal>
          <Reveal index={1} as="h2" isTitle className="text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
            What we stand for.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal
                key={v.title}
                index={i}
                className="rounded-2xl border border-border bg-surface p-6 text-center transition-[border-color,transform] hover:-translate-y-1 hover:border-accent"
              >
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-1.5 text-base font-bold text-ink">{v.title}</h3>
                <p className="mb-0 text-[13px] text-muted">{v.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
