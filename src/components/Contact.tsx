"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 text-left">
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.12, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 -top-32 z-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,75,31,0.22)_0%,rgba(14,14,16,0)_70%)] blur-2xl"
      />
      <div className="container relative z-10">
        <div className="mb-12 max-w-[640px]">
          <Reveal index={0} as="p" className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-muted before:content-[''] before:h-[7px] before:w-[7px] before:shrink-0 before:rounded-full before:bg-accent">
            Contact us
          </Reveal>
          <Reveal index={1} as="h2" isTitle className="mb-3 text-[28px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
            Let&rsquo;s look at what you&rsquo;re doing now.
          </Reveal>
          <Reveal index={2} as="p" className="max-w-[52ch] text-lg text-[#C7C7C9]">
            Free, no obligation. We&rsquo;ll tell you straight whether we can help.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-16">
          <Reveal index={0}>
            <div className="mb-12 flex max-w-[560px] items-start gap-3.5 rounded-xl border border-l-[3px] border-border border-l-accent bg-surface px-8 py-6">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <p className="mb-0 text-base font-medium leading-normal text-ink">
                No long contracts. Plain English reports. A real person on the phone.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="text-[15px]">
                <span className="mb-0.5 block text-xs font-semibold text-muted">Call</span>
                <a href="tel:+15555550142" className="font-semibold text-ink hover:text-accent">
                  (555) 555-0142
                </a>
              </div>
              <div className="text-[15px]">
                <span className="mb-0.5 block text-xs font-semibold text-muted">Email</span>
                <a
                  href="mailto:hello@mmdigital.com"
                  className="font-semibold text-ink hover:text-accent"
                >
                  hello@mmdigital.com
                </a>
              </div>
              <div className="text-[15px]">
                <span className="mb-0.5 block text-xs font-semibold text-muted">Hours</span>
                Monday – Friday, 9am – 5pm
              </div>
            </div>
          </Reveal>

          <Reveal index={1}>
            <form
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-8"
              action="mailto:hello@mmdigital.com"
              method="post"
              encType="text/plain"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="Name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-[10px] border border-border bg-bg px-3.5 py-3 text-[15px] text-ink focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  required
                  placeholder="you@business.com"
                  className="w-full rounded-[10px] border border-border bg-bg px-3.5 py-3 text-[15px] text-ink focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="business" className="mb-1.5 block text-xs font-semibold text-muted">
                  Business
                </label>
                <input
                  id="business"
                  name="Business"
                  type="text"
                  placeholder="What do you run?"
                  className="w-full rounded-[10px] border border-border bg-bg px-3.5 py-3 text-[15px] text-ink focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-muted">
                  What do you need help with?
                </label>
                <textarea
                  id="message"
                  name="Message"
                  placeholder="Tell us a little about what you're looking for"
                  className="min-h-[100px] w-full resize-y rounded-[10px] border border-border bg-bg px-3.5 py-3 text-[15px] text-ink focus:border-accent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-accentBtn px-7 py-[15px] text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:opacity-90 active:scale-[0.96]"
              >
                Get a Free Ad Account Review
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
