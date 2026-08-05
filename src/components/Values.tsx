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
          <Reveal index={0} as="h2" isTitle className="text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
            What we stand for.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 divide-y divide-border border-t border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:grid-cols-5">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal
                key={v.title}
                index={i}
                className="px-1 py-8 first:pl-0 last:pr-0 sm:px-6"
              >
                <Icon className="mb-4 h-5 w-5 text-accent" />
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
