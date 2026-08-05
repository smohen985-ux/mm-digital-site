import { Reveal } from "./Reveal";

const TEAM = [
  { initials: "M1", name: "M1", role: "Founder" },
  { initials: "M2", name: "M2", role: "CEO" },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24">
      <div className="container flex max-w-[720px] flex-col items-start text-left">
        <Reveal index={0} as="h2" isTitle className="mb-8 text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
          Real expertise. Real results. The M&amp;M story.
        </Reveal>
        <Reveal index={1} as="p" className="mb-6 max-w-[52ch] text-lg text-[#C7C7C9]">
          M&amp;M was founded by M1, a digital marketing professional with a master&rsquo;s in
          business and seven years of hands-on experience helping businesses grow their online
          presence and revenue. Working across a wide range of industries and business models
          showed her firsthand how the right marketing strategy can transform a business — and
          how the wrong one can quietly hold it back.
        </Reveal>
        <Reveal index={2} as="p" className="text-muted">
          That experience became the foundation for M&amp;M: an agency built not just to run
          campaigns, but to act as a genuine growth partner that takes real ownership of your
          results. Everything we do is grounded in transparency, clear performance, and a real
          commitment to your long-term success.
        </Reveal>

        <Reveal index={3} className="mt-12 flex w-full flex-wrap gap-10 border-t border-border pt-10">
          {TEAM.map((m) => (
            <div key={m.name} className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accentBtn text-xl font-extrabold tracking-tight text-white">
                {m.initials}
              </div>
              <div>
                <div className="text-lg font-bold text-ink">{m.name}</div>
                <div className="text-sm font-medium text-muted">{m.role}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
