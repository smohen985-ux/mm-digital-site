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

const STORY = [
{
  title: "Learning the industry from the inside",
    body: "M1 spent years working in digital marketing before starting M&M, learning firsthand what actually moves the needle for a business and what's just there to look good in a slide deck.",
    },
{
title: "Seeing the same problem again and again",
  body: "Working across different industries and business types made one thing clear: small business owners kept getting sold jargon and long contracts instead of results they could actually see.",
  },
{
title: "Building M&M around what was missing",
  body: "M&M was founded to fix that: no long contracts, direct access to the person running your ads, and reports written in plain English — not dashboards nobody reads.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-24">
    <div className="container grid grid-cols-1 items-start gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
    <div>
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

  <Reveal index={0}>
  <div className="rounded-[20px] border border-border bg-surface p-10 text-center">
  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accentBtn text-3xl font-extrabold tracking-tight text-white">
  M1
  </div>
  <div className="mb-1 text-xl font-bold text-ink">M1</div>
  <div className="text-sm font-medium text-muted">Founder</div>
  </div>
  </Reveal>
  </div>

  <div className="container">
  <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
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

  <div className="mt-24 max-w-[640px]">
  <Reveal index={0} as="p" className="mb-6 text-xs font-semibold uppercase tracking-wide text-muted">
  Our Story
</Reveal>
  <Reveal index={1} as="h2" isTitle className="text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
  How M&amp;M got started.
  </Reveal>
  </div>

  <div className="mt-8 flex max-w-[760px] flex-col gap-8">
  {STORY.map((s, i) => (
  <Reveal key={s.title} index={i} className="flex items-start gap-4">
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-[15px] font-extrabold text-accent">
  {i + 1}
  </div>
  <div>
  <h3 className="mb-2 text-[22px] font-bold text-ink">{s.title}</h3>
  <p className="mb-0 text-sm text-muted">{s.body}</p>
  </div>
  </Reveal>
  ))}
</div>
  </div>
  </section>
  );
}
