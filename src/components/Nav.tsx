"use client";

import { useState } from "react";

const LINKS = [
{ href: "#home", label: "Home" },
{ href: "#about", label: "About" },
{ href: "#services", label: "Services" },
{ href: "#how-we-work", label: "How We Work" },
{ href: "#reviews", label: "Reviews" },
{ href: "#faqs", label: "FAQs" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

return (
<div className="sticky top-6 z-30 px-4">
<header className="mx-auto max-w-[1160px] rounded-full border border-border bg-[rgba(20,20,22,0.75)] backdrop-blur-md">
<div className="flex items-center justify-between py-2.5 pl-6 pr-2.5">
<div className="text-lg font-extrabold tracking-tight">
M<span className="text-accent">&amp;</span>M Digital
</div>
<nav className="flex items-center gap-12">
<div className="hidden gap-8 min-[800px]:flex">
{LINKS.map((l) => (
<a key={l.href} href={l.href} className="text-sm font-medium text-muted hover:text-ink">
{l.label}
</a>
))}
</div>

<button
className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] min-[800px]:hidden"
aria-expanded={open}
aria-controls="mobileMenu"
aria-label="Toggle menu"
onClick={() => setOpen((v) => !v)}
>
<span className={`h-[2px] w-5 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
<span className={`h-[2px] w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
<span className={`h-[2px] w-5 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
</button>

<a className="inline-flex items-center gap-2 rounded-full bg-pill px-7 py-[15px] text-sm font-semibold text-pillInk transition-transform hover:-translate-y-0.5 active:scale-[0.96]" href="#contact">
Contact Us
</a>
</nav>
</div>
</header>

<div
id="mobileMenu"
className={`mx-auto mt-2 max-w-[1160px] overflow-hidden rounded-[20px] border border-border bg-[rgba(20,20,22,0.95)] backdrop-blur-md transition-[max-height,opacity] duration-300 min-[800px]:hidden ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}`}
>
<div className="flex flex-col px-4 pb-8 pt-4">
{LINKS.map((l, i) => (
<a
key={l.href}
href={l.href}
onClick={() => setOpen(false)}
className={`py-3.5 text-[15px] font-medium text-muted hover:text-ink ${i !== LINKS.length - 1 ? "border-b border-border" : ""}`}
>
{l.label}
</a>
))}
</div>
</div>
</div>
);
}
