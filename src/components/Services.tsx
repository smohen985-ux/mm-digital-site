import { Megaphone, Globe2, Search, Compass } from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
{
  icon: Megaphone,
    title: "Social Advertising",
    body: "Instagram, Facebook, YouTube, TikTok. We write the ads, run them, and check them every day. You don't touch a thing.",
    },
{
icon: Globe2,
  title: "Website Design & Build",
  body: "A site that loads fast, works on a phone, and gets people to call or book. Built for your business, not stitched together from a template.",
  },
{
icon: Search,
  title: "Google Ads",
  body: "You show up when someone searches for what you sell. We watch the spend closely so it doesn't leak.",
  },
{
icon: Compass,
  title: "Growth Consulting",
  body: "Where to spend next month, what's working, and what isn't. We look at your whole business, not just the ad account — pricing, offers, go-to-market, whatever's actually holding growth back. One straight conversation, not a 40-slide deck.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
    <div className="container">
    <div className="mb-16 max-w-[640px]">
    <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
    What we do
</Reveal>
    <Reveal index={1} as="h2" isTitle className="text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
    Four things. Done well.
    </Reveal>
    </div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    {SERVICES.map((s, i) => {
    const Icon = s.icon;
    return (
      <Reveal
      key={s.title}
      index={i}
      className="rounded-2xl border border-border bg-surface p-12 transition-[border-color,transform] hover:-translate-y-1 hover:border-accent"
      >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
      <Icon className="h-6 w-6 text-accent" />
      </div>
      <h3 className="mb-2 text-[22px] font-bold text-ink">{s.title}</h3>
      <p className="mb-0 text-[15px] text-muted">{s.body}</p>
      </Reveal>
      );
})}
</div>
  </div>
  </section>
  );
}
