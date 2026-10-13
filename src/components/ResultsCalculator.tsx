"use client";

import { useEffect, useMemo, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import { Reveal } from "./Reveal";

/**
 * Rough planning benchmarks for local-business paid search/social.
 * cpc: average cost per click, cvr: click -> lead rate,
 * close: lead -> paying customer rate, value: typical customer value.
 * These are deliberately conservative ballpark figures, shown as a range.
 */
const INDUSTRIES = [
  { id: "restaurant", label: "Restaurant", cpc: 1.95, cvr: 0.05, close: 0.6, value: 45 },
  { id: "salon", label: "Salon & Spa", cpc: 2.5, cvr: 0.08, close: 0.5, value: 85 },
  { id: "gym", label: "Gym & Studio", cpc: 2.3, cvr: 0.07, close: 0.3, value: 480 },
  { id: "contractor", label: "Contractor", cpc: 6.5, cvr: 0.05, close: 0.25, value: 2500 },
  { id: "retail", label: "Local Retail", cpc: 1.5, cvr: 0.03, close: 0.4, value: 60 },
] as const;

type IndustryId = (typeof INDUSTRIES)[number]["id"];

const MIN = 300;
const MAX = 5000;
const STEP = 100;
const SPREAD = 0.25; // show results as ±25%

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const num = (n: number) => Math.round(n).toLocaleString("en-US");

function CountUp({ value, format }: { value: number; format: (n: number) => string }) {
  const mv = useMotionValue(value);
  const text = useTransform(mv, (v) => format(v));
  useEffect(() => {
    const controls = animate(mv, value, { duration: 0.6, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [mv, value]);
  return <motion.span>{text}</motion.span>;
}

function Range({ value, format }: { value: number; format: (n: number) => string }) {
  return (
    <>
      <CountUp value={value * (1 - SPREAD)} format={format} />
      <span className="mx-1 text-muted">–</span>
      <CountUp value={value * (1 + SPREAD)} format={format} />
    </>
  );
}

export default function ResultsCalculator() {
  const [industryId, setIndustryId] = useState<IndustryId>("salon");
  const [budget, setBudget] = useState(1500);

  const industry = INDUSTRIES.find((i) => i.id === industryId)!;

  const r = useMemo(() => {
    const clicks = budget / industry.cpc;
    const leads = clicks * industry.cvr;
    const customers = leads * industry.close;
    const revenue = customers * industry.value;
    return { clicks, leads, customers, revenue };
  }, [budget, industry]);

  const pct = ((budget - MIN) / (MAX - MIN)) * 100;

  // Funnel bar widths, relative to clicks, with a visible minimum.
  const leadW = Math.max(12, (r.leads / r.clicks) * 100 * 4);
  const custW = Math.max(6, (r.customers / r.clicks) * 100 * 4);

  return (
    <section id="calculator" className="py-24">
      <div className="container">
        <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
          Results calculator
        </Reveal>
        <Reveal index={1} as="h2" isTitle className="mb-4 text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
          What could your ad budget <span className="font-light italic text-accent">bring in?</span>
        </Reveal>
        <Reveal index={2} as="p" className="mb-10 max-w-[52ch] text-lg text-[#C7C7C9]">
          Pick your business and slide your monthly budget. We&rsquo;ll show a realistic range
          based on typical results for businesses like yours.
        </Reveal>

        <Reveal index={3} className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Inputs */}
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <p className="mb-3 text-sm font-semibold text-ink">Your business</p>
            <div className="mb-8 flex flex-wrap gap-2">
              {INDUSTRIES.map((i) => {
                const on = i.id === industryId;
                return (
                  <button
                    key={i.id}
                    type="button"
                    onClick={() => setIndustryId(i.id)}
                    aria-pressed={on}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      on
                        ? "border-accent bg-accent/15 text-ink"
                        : "border-border text-muted hover:border-[#444] hover:text-ink"
                    }`}
                  >
                    {i.label}
                  </button>
                );
              })}
            </div>

            <div className="mb-3 flex items-end justify-between">
              <label htmlFor="budget" className="text-sm font-semibold text-ink">
                Monthly ad budget
              </label>
              <span className="text-3xl font-extrabold text-accent">
                <CountUp value={budget} format={money} />
              </span>
            </div>
            <input
              id="budget"
              type="range"
              min={MIN}
              max={MAX}
              step={STEP}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="calc-range w-full"
              style={{
                background: `linear-gradient(90deg, #FF4B1F ${pct}%, #2A2A2E ${pct}%)`,
              }}
            />
            <div className="mt-2 flex justify-between text-xs text-muted">
              <span>{money(MIN)}</span>
              <span>{money(MAX)}+</span>
            </div>

            <p className="mt-8 flex items-start gap-2 text-xs leading-relaxed text-muted">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Estimates use typical industry averages for clicks, inquiries and close rates.
              They aren&rsquo;t a guarantee — your free review gives you real numbers for your
              business.
            </p>
          </div>

          {/* Results */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[#241612] to-surface p-6 md:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

            <p className="mb-6 text-sm font-semibold text-muted">Estimated each month</p>

            {/* Funnel */}
            <div className="mb-8 space-y-4">
              {[
                { label: "Visitors to your site", value: r.clicks, w: 100 },
                { label: "Calls, bookings & inquiries", value: r.leads, w: leadW },
                { label: "New paying customers", value: r.customers, w: custW },
              ].map((row, i) => (
                <div key={row.label}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-4">
                    <span className="text-sm text-[#C7C7C9]">{row.label}</span>
                    <span className="whitespace-nowrap text-lg font-bold text-ink">
                      <Range value={row.value} format={num} />
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#2A2A2E]">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background:
                          i === 2
                            ? "linear-gradient(90deg,#FF4B1F,#FFB27A)"
                            : "linear-gradient(90deg,#C93D0F,#FF4B1F)",
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, row.w)}%` }}
                      transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8 rounded-xl border border-accent/30 bg-black/20 p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
                Potential new revenue
              </p>
              <p className="text-3xl font-extrabold text-ink md:text-4xl">
                <Range value={r.revenue} format={money} />
              </p>
              <p className="mt-1 text-xs text-muted">
                Based on a typical {industry.label.toLowerCase()} customer worth about{" "}
                {money(industry.value)}.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accentBtn px-6 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get my real numbers — free review
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
