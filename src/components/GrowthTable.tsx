"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";

type Family = "ads" | "search" | "web" | "data" | "consult" | "video";

const FAMILIES: { id: Family; label: string; color: string }[] = [
  { id: "ads", label: "Paid Ads", color: "#FF4B1F" },
  { id: "search", label: "Search", color: "#FF8A3D" },
  { id: "web", label: "Websites", color: "#F2C14E" },
  { id: "data", label: "Analytics", color: "#5FC9A8" },
  { id: "consult", label: "Consulting", color: "#7AA7FF" },
  { id: "video", label: "Video", color: "#C084FC" },
];

type Element = {
  n: number;
  sym: string;
  name: string;
  family: Family;
  desc: string;
};

const ELEMENTS: Element[] = [
  { n: 1, sym: "Ga", name: "Google Ads", family: "ads", desc: "Show up the moment customers search for what you sell." },
  { n: 2, sym: "Fb", name: "Facebook Ads", family: "ads", desc: "Reach the right local audience by interest, age and area." },
  { n: 3, sym: "Ig", name: "Instagram Ads", family: "ads", desc: "Scroll-stopping visuals that turn followers into customers." },
  { n: 4, sym: "Tt", name: "TikTok Ads", family: "ads", desc: "Short-form ads built for attention and awareness." },
  { n: 5, sym: "Yt", name: "YouTube Ads", family: "ads", desc: "Video ads in front of people already watching." },
  { n: 6, sym: "Se", name: "SEO", family: "search", desc: "Rank higher on Google and grow free, organic traffic." },
  { n: 7, sym: "Ot", name: "Organic Traffic", family: "search", desc: "Visitors who find you without paying per click." },
  { n: 8, sym: "Vi", name: "Visibility", family: "search", desc: "Be found where your customers are already searching." },
  { n: 9, sym: "Wd", name: "Web Design", family: "web", desc: "A site that builds credibility at first glance." },
  { n: 10, sym: "Mf", name: "Mobile-First", family: "web", desc: "Fast, thumb-friendly pages for on-the-go customers." },
  { n: 11, sym: "Cv", name: "Conversion", family: "web", desc: "Pages designed to turn visitors into paying customers." },
  { n: 12, sym: "Ux", name: "User Experience", family: "web", desc: "Clear layouts that make it easy to say yes." },
  { n: 13, sym: "Rp", name: "Reporting", family: "data", desc: "Plain-English reports — no marketing jargon." },
  { n: 14, sym: "Ld", name: "Leads", family: "data", desc: "Track every call, form and booking we bring in." },
  { n: 15, sym: "Ro", name: "ROI", family: "data", desc: "See exactly what each dollar returns." },
  { n: 16, sym: "Bc", name: "Business Consulting", family: "consult", desc: "A second opinion on operations and growth decisions." },
  { n: 17, sym: "Ai", name: "AI Consulting", family: "consult", desc: "Help choosing and using AI tools that actually save time." },
  { n: 18, sym: "Mk", name: "Marketing Strategy", family: "consult", desc: "A clear plan for where to spend and why." },
  { n: 19, sym: "Av", name: "AI Video", family: "video", desc: "Polished promo videos without a production crew." },
  { n: 20, sym: "Sv", name: "Short-Form", family: "video", desc: "Reels and shorts made for social feeds." },
  { n: 21, sym: "Bv", name: "Bio Videos", family: "video", desc: "Put a face and a story behind your business." },
  { n: 22, sym: "Pf", name: "Profiles", family: "video", desc: "Written bios that build trust before the first call." },
];

const colorOf = (f: Family) => FAMILIES.find((x) => x.id === f)!.color;
const labelOf = (f: Family) => FAMILIES.find((x) => x.id === f)!.label;

export default function GrowthTable() {
  const [family, setFamily] = useState<Family | null>(null);
  const [active, setActive] = useState<Element>(ELEMENTS[0]);

  const lit = (e: Element) => family === null || e.family === family;

  return (
    <section id="growth-table" className="py-24">
      <div className="container">
        <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
          Everything we do
        </Reveal>
        <Reveal index={1} as="h2" isTitle className="mb-4 text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
          The periodic table of <span className="font-light italic text-accent">growth.</span>
        </Reveal>
        <Reveal index={2} as="p" className="mb-8 max-w-[52ch] text-lg text-[#C7C7C9]">
          {ELEMENTS.length} elements in {FAMILIES.length} families. Hover a family to light it up,
          or pick any element to see what it does for your business.
        </Reveal>

        {/* Family chips */}
        <Reveal index={3} className="mb-8 flex flex-wrap gap-2.5">
          {FAMILIES.map((f) => {
            const on = family === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onMouseEnter={() => setFamily(f.id)}
                onMouseLeave={() => setFamily(null)}
                onFocus={() => setFamily(f.id)}
                onBlur={() => setFamily(null)}
                onClick={() => setFamily(on ? null : f.id)}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors"
                style={{
                  borderColor: on ? f.color : "#2A2A2E",
                  background: on ? `${f.color}1f` : "transparent",
                  color: on ? "#F5F5F2" : "#9C9C9F",
                }}
              >
                <span className="h-2.5 w-2.5 rounded-sm" style={{ background: f.color }} />
                {f.label}
              </button>
            );
          })}
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          {/* Table */}
          <div
            className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-6 xl:grid-cols-8"
            onMouseLeave={() => setFamily(null)}
          >
            {ELEMENTS.map((e, i) => {
              const c = colorOf(e.family);
              const on = lit(e);
              const selected = active.n === e.n;
              return (
                <motion.button
                  key={e.n}
                  type="button"
                  initial={{ opacity: 0, y: 24, rotateX: -40 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                  transition={{ delay: i * 0.03, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, scale: 1.06 }}
                  onMouseEnter={() => {
                    setActive(e);
                    setFamily(e.family);
                  }}
                  onFocus={() => setActive(e)}
                  onClick={() => setActive(e)}
                  aria-pressed={selected}
                  aria-label={`${e.name}: ${e.desc}`}
                  className="relative flex aspect-square flex-col justify-between rounded-lg border p-2 text-left transition-[opacity,filter,background-color,border-color] duration-300 sm:p-2.5"
                  style={{
                    borderColor: selected ? c : on ? `${c}66` : "#2A2A2E",
                    background: on ? `linear-gradient(160deg, ${c}2e, ${c}0d)` : "#151517",
                    opacity: on ? 1 : 0.28,
                    filter: on ? "none" : "grayscale(1)",
                    boxShadow: selected ? `0 0 24px -6px ${c}` : "none",
                  }}
                >
                  <span className="text-[10px] font-semibold text-muted">{e.n}</span>
                  <span className="text-xl font-extrabold leading-none text-ink sm:text-2xl">{e.sym}</span>
                  <span className="truncate text-[9px] text-muted sm:text-[10px]">{e.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Detail card */}
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-border bg-surface p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.n}
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full blur-3xl"
                  style={{ background: `${colorOf(active.family)}40` }}
                />
                <p
                  className="mb-4 text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: colorOf(active.family) }}
                >
                  {labelOf(active.family)} &middot; No. {active.n}
                </p>
                <p
                  className="mb-2 text-7xl font-extrabold leading-none"
                  style={{ color: colorOf(active.family) }}
                >
                  {active.sym}
                </p>
                <p className="mb-3 text-xl font-bold text-ink">{active.name}</p>
                <p className="text-[15px] text-[#C7C7C9]">{active.desc}</p>
              </motion.div>
            </AnimatePresence>
            <a
              href="#contact"
              className="absolute bottom-6 left-6 text-sm font-semibold text-accent hover:underline"
            >
              Mix your formula &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
