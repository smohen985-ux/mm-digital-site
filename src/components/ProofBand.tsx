import { Reveal } from "./Reveal";

const CATEGORIES = ["Restaurants", "Salons & Spas", "Gyms & Studios", "Contractors", "Local Retail"];

const PROOF = [
{ figure: "0", label: "Months minimum contract" },
{ figure: "1", label: "Person you talk to, every time" },
{ figure: "4", label: "Services. No upsells." },
];

export default function ProofBand() {
  const track = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES];
return (
  <>
  <div className="overflow-hidden border-y border-border py-8">
  <div className="flex w-max animate-marquee gap-16">
  {track.map((c, i) => (
  <span key={i} className="whitespace-nowrap text-[15px] font-semibold uppercase tracking-wide text-muted">
  {c}
</span>
  ))}
</div>
  </div>

  <div className="bg-bg">
  <div className="container grid grid-cols-1 gap-4 py-16 md:grid-cols-3">
  {PROOF.map((p, i) => (
  <Reveal key={p.label} index={i} className="rounded-2xl border border-border bg-surface p-8">
  <div className="mb-2 text-[44px] font-extrabold leading-none tracking-tight text-accent">
  {p.figure}
  </div>
  <div className="text-sm font-medium text-muted">{p.label}</div>
  </Reveal>
  ))}
</div>
  </div>
  </>
  );
}
