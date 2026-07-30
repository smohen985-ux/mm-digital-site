import { Reveal } from "./Reveal";

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
      <div className="container max-w-[720px]">
        <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
          About us
        </Reveal>
        <Reveal index={1} as="h2" isTitle className="mb-8 text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
          Why M&amp;M exists.
        </Reveal>
        <Reveal index={2} as="p" className="mb-6 max-w-[52ch] text-lg text-[#C7C7C9]">
          Most small business owners have hired an agency before. Money went out every month, and
          nothing came back but a login they never used and a report full of words like
          &ldquo;impressions&rdquo; and &ldquo;engagement.&rdquo; M&amp;M started because that
          shouldn&rsquo;t be normal.
        </Reveal>
        <Reveal index={3} as="p" className="text-muted">
          We keep the team small on purpose. Fewer clients, more attention, and one person who
          actually knows your business answering when you call. We only take on businesses we
          think we can genuinely help — if we don&rsquo;t think we&rsquo;re a fit, we&rsquo;ll
          tell you that too.
        </Reveal>
      </div>

      <div className="container">
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {VALUES.map((v, i) =>
            v.href ? (
              <Reveal key={v.title} index={i} as="div">
                <a
                  href={v.href}
                  className="block rounded-2xl border border-border bg-surface p-8 transition-[border-color,transform] hover:-translate-y-1 hover:border-accent"
                >
                  <span className="mb-3 block text-xs font-bold uppercase tracking-wide text-accent">
                    {v.label}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-ink">{v.title}</h3>
                  <p className="mb-0 text-sm text-muted">{v.body}</p>
                </a>
              </Reveal>
            ) : (
              <Reveal
                key={v.title}
                index={i}
                className="rounded-2xl border border-border bg-surface p-8"
              >
                <span className="mb-3 block text-xs font-bold uppercase tracking-wide text-accent">
                  {v.label}
                </span>
                <h3 className="mb-2 text-lg font-bold text-ink">{v.title}</h3>
                <p className="mb-0 text-sm text-muted">{v.body}</p>
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}
