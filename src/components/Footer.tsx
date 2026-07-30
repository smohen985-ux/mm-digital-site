const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-wrap items-start justify-between gap-8">
        <div>
          <div className="text-lg font-extrabold tracking-tight">
            M<span className="text-accent">&amp;</span>M Digital
          </div>
          <p className="mt-4 text-[13px] text-muted">
            Serving small business owners across the U.S.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted no-underline hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container">
        <p className="mt-12 text-[13px] text-muted">© 2026 M&amp;M Digital. All rights reserved.</p>
      </div>
    </footer>
  );
}
