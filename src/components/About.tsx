import { Reveal } from "./Reveal";
import { GrowthChartIllustration } from "./ui/illustrations";

const VALUES = [
  {
    label: "Our Approach",
    title: "Small on purpose",
    body: "Fewer clients, more attention. You get a real person who knows your business, not a rotating cast of account managers.",
    href: undefined as string | undefined,
  },
  {
    label: "Our Promise",
    title: "No long contracts",
    body: "Everything is month to month. If we're not earning it, you can walk — no fine print, no cancellation fee.",
    href: undefined as string | undefined,
  },
  {
    label: "Get Started",
    title: "Work with us",
    body: "Free, no-obligation look at what you're doing now. We'll tell you straight if we can help.",
    href: "#contact",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-24">
      <div className="container grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <div>
          <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
            About us
          </Reveal>
          <Reveal index={1} as="h2" isTitle className="mb-8 text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
            Why M&amp;M Digital Pro Exists
          </Reveal>
          <Reveal index={2} as="p" className="mb-6 max-w-[52ch] text-lg text-[#C7C7C9]">
            Many small business owners have invested in digital marketing without seeing
            meaningful results. Too often, they receive complicated reports filled with
            marketing jargon but little clarity on how their investment is helping their
            business grow. At M&amp;M Digital Pro, we believe marketing should be transparent,
            measurable, and focused on real business outcomes.
          </Reveal>
          <Reveal index={3} as="p" className="text-muted">
            That&rsquo;s why we intentionally keep our client portfolio small. Every client
            works with a dedicated marketing professional who understands their business,
            provides clear communication, and continually refines strategies based on
            performance. We only partner with businesses where we believe we can create real
            value, and if we&rsquo;re not the right fit, we&rsquo;ll say so.
          </Reveal>
        </div>

        <Reveal index={1}>
          <GrowthChartIllustration />
        </Reveal>
      </div>

      <div className="container">
        <div className="mt-20 grid grid-cols-1 divide-y divide-border border-t border-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {VALUES.map((v, i) => {
            const content = (
              <>
                <span className="mb-3 block text-xs font-bold uppercase tracking-wide text-accent">
                  {v.label}
                </span>
                <h3 className="mb-2 text-lg font-bold text-ink">{v.title}</h3>
                <p className="mb-0 text-sm text-muted">{v.body}</p>
              </>
            );
            return (
              <Reveal
                key={v.title}
                index={i}
                as="div"
                className="px-1 py-8 first:pl-0 last:pr-0 md:px-8 md:py-2"
              >
                {v.href ? (
                  <a href={v.href} className="block transition-opacity hover:opacity-70">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
