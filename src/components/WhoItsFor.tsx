import { Reveal } from "./Reveal";

const BADGES = ["Restaurants", "Salons & Spas", "Gyms & Studios", "Contractors", "Local Retail"];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-24">
      <div className="container">
        <div className="max-w-[640px]">
          <Reveal index={0} as="h2" isTitle className="mb-6 text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
            Built for owners, not marketing departments.
          </Reveal>
          <Reveal index={1} as="p" className="max-w-[52ch] text-lg text-[#C7C7C9]">
            You run a restaurant, a salon, a gym, a contracting business, a shop. You don&rsquo;t
            have time to learn ad platforms, and you shouldn&rsquo;t have to. If an agency has
            already taken your money and shown you nothing, we get it — that&rsquo;s how most of
            our clients found us.
          </Reveal>
        </div>
        <Reveal index={0} className="mt-8 flex flex-wrap gap-4">
          {BADGES.map((b) => (
            <span
              key={b}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium text-muted"
            >
              {b}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
