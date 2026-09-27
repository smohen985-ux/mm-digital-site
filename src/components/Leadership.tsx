import { Reveal } from "./Reveal";

export default function Leadership() {
  return (
    <section id="leadership" className="py-24">
      <div className="container flex max-w-[720px] flex-col items-start text-left">
        <Reveal index={0} as="h2" isTitle className="mb-8 text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
          Real expertise. Real results. The M&amp;M story.
        </Reveal>
        <Reveal index={1} as="p" className="mb-6 max-w-[52ch] text-lg text-[#C7C7C9]">
          M&amp;M Digital Pro was founded by a digital marketing professional with a
          master&rsquo;s in business and seven years of hands-on experience helping
          businesses grow their online presence and revenue. Working across a wide
          range of industries and business models made clear how the right marketing
          strategy can transform a business — and how the wrong one can quietly hold
          it back.
        </Reveal>
        <Reveal index={2} as="p" className="text-muted">
          That experience became the foundation for M&amp;M: an agency built not just to run
          campaigns, but to act as a genuine growth partner that takes real ownership of your
          results. Everything we do is grounded in transparency, clear performance, and a real
          commitment to your long-term success.
        </Reveal>
      </div>
    </section>
  );
}
