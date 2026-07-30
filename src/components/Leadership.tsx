import { Reveal } from "./Reveal";

const TEAM = [
{ initials: "M1", name: "M1", role: "Founder" },
{ initials: "M2", name: "M2", role: "CEO" },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24">
    <div className="container flex max-w-[720px] flex-col items-start text-left">
    <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 self-start text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
    Leadership &amp; Vision
</Reveal>
    <Reveal index={1} as="h2" isTitle className="mb-8 text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
    Real expertise. Real results. The M&amp;M story.
</Reveal>
<Reveal index={2} as="p" className="mb-6 max-w-[52ch] text-lg text-[#C7C7C9]">
    M&amp;M was founded by M1, a digital marketing professional with a master&rsquo;s in
business and seven years of hands-on experience helping businesses grow their online
presence and revenue. Working across a wide range of industries and business models
showed her firsthand how the right marketing strategy can transform a business — and
how the wrong one can quietly hold it back.
  </Reveal>
  <Reveal index={3} as="p" className="text-muted">
  That experience became the foundation for M&amp;M: an agency built not just to run
campaigns, but to act as a genuine growth partner that takes real ownership of your
results. Everything we do is grounded in transparency, clear performance, and a real
commitment to your long-term success.
  </Reveal>

  <Reveal index={4} className="mt-12 flex w-full flex-wrap gap-4">
  {TEAM.map((m) => (
  <div
  key={m.name}
  className="max-w-[260px] flex-1 basis-[200px] rounded-[20px] border border-border bg-surface p-8 text-center"
  >
  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accentBtn text-3xl font-extrabold tracking-tight text-white">
  {m.initials}
  </div>
  <div className="mb-1 text-xl font-bold text-ink">{m.name}</div>
  <div className="text-sm font-medium text-muted">{m.role}</div>
  </div>
  ))}
</Reveal>
  </div>
  </section>
  );
}
