import { Reveal } from "./Reveal";

const TAGS = [
  {
    label: "The Deal",
    title: "No long contracts",
    body: "Month to month, always. If we're not earning it, you can walk.",
  },
  {
    label: "The Contact",
    title: "You talk to the person running your ads",
    body: "Not a rotating cast of account managers. One person, and they answer the phone.",
  },
  {
    label: "The Reports",
    title: "Plain English, every time",
    body: "What we spent, what it got you, what we're doing next. No logins, no jargon, no dashboards.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="bg-gradient-to-b from-surface2 to-bg py-24"
    >
      <div className="container">
        <div className="mb-16 max-w-[640px]">
          <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
            How we work
          </Reveal>
          <Reveal index={1} as="h2" isTitle className="text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
            Marketing you can keep an eye on.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TAGS.map((t, i) => (
            <Reveal
              key={t.title}
              index={i}
              className="rounded-2xl border border-border bg-bg p-8 transition-[border-color,transform] hover:-translate-y-1 hover:border-accent"
            >
              <span className="mb-3 block text-xs font-bold uppercase tracking-wide text-accent">
                {t.label}
              </span>
              <h3 className="mb-2 text-xl font-bold text-ink">{t.title}</h3>
              <p className="mb-0 text-[15px] text-muted">{t.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
