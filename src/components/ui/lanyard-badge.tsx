"use client";

import { useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { Check, RotateCw } from "lucide-react";

const PERKS = [
  "One dedicated expert",
  "Month-to-month, no lock-in",
  "Plain-English reports",
  "Free ad account review",
];

/**
 * A conference-style ID badge hanging from a lanyard. It sways gently on its
 * own, can be dragged and flung (it springs back like a pendulum), and flips
 * over on click to show what clients get.
 */
export default function LanyardBadge() {
  const reduceMotion = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  const [dragging, setDragging] = useState(false);

  // Horizontal drag offset drives the swing angle, so the card pivots
  // around the clip at the top of the lanyard.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-220, 0, 220], [-28, 0, 28]);
  const strapLength = useTransform(y, (v) => 150 + Math.max(0, v));

  const swingBack = () => {
    setDragging(false);
    animate(x, 0, { type: "spring", stiffness: 120, damping: 6, mass: 0.9 });
    animate(y, 0, { type: "spring", stiffness: 200, damping: 14 });
  };

  return (
    <div className="relative flex h-[560px] w-full select-none justify-center">
      {/* Anchor bar the lanyard hangs from */}
      <div className="absolute top-0 h-2 w-16 rounded-full bg-border" />

      {/* Outer layer: gentle idle sway */}
      <motion.div
        className="absolute top-1"
        style={{ transformOrigin: "50% 0%" }}
        animate={{ rotate: reduceMotion || dragging || flipped ? 0 : [-3, 3, -3] }}
        transition={
          reduceMotion || dragging || flipped
            ? { duration: 0.6 }
            : { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }
      >
      {/* Inner layer: swing driven by dragging the card */}
      <motion.div
        className="flex flex-col items-center"
        style={{ rotate, transformOrigin: "50% 0%" }}
      >
        {/* Strap */}
        <motion.div
          className="w-[22px] rounded-b-sm"
          style={{
            height: strapLength,
            backgroundImage:
              "repeating-linear-gradient(180deg, rgba(255,255,255,0.12) 0 6px, transparent 6px 18px), linear-gradient(180deg, #C93D0F, #FF4B1F)",
          }}
        >
          <div className="mx-auto h-full w-[2px] bg-white/10" />
        </motion.div>

        {/* Metal clip */}
        <div className="-mt-1 h-7 w-9 rounded-md border border-[#55555b] bg-gradient-to-b from-[#8a8a90] to-[#3a3a3f] shadow-lg" />
        <div className="-mt-1 h-3 w-5 rounded-b-md border-x border-b border-[#55555b]" />

        {/* Card */}
        <motion.button
          type="button"
          aria-label={flipped ? "Show front of badge" : "Flip badge to see what you get"}
          drag
          dragElastic={0.18}
          dragConstraints={{ left: -220, right: 220, top: 0, bottom: 120 }}
          style={{ x, y }}
          onDragStart={() => setDragging(true)}
          onDragEnd={swingBack}
          onTap={() => !dragging && setFlipped((f) => !f)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ cursor: "grabbing" }}
          className="relative -mt-1 h-[340px] w-[240px] cursor-grab [perspective:1200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <motion.div
            className="relative h-full w-full [transform-style:preserve-3d]"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
          >
            {/* Front */}
            <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-[#3a3a3f] bg-gradient-to-b from-[#232327] to-[#161618] p-5 text-left shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(255,75,31,0.35)] [backface-visibility:hidden]">
              <div className="mx-auto mb-4 h-2 w-12 rounded-full bg-black/60" />
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
                  Growth Partner ID
                </span>
                <span className="text-[10px] font-semibold text-muted">No. 0001</span>
              </div>

              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accentBtn text-3xl font-extrabold text-white shadow-inner">
                M<span className="text-pillInk/70">&amp;</span>M
              </div>

              <p className="text-center text-lg font-extrabold leading-tight text-ink">
                M&amp;M Digital Pro
              </p>
              <p className="mb-4 text-center text-xs text-muted">Founder &middot; Digital Marketing</p>

              <div className="mt-auto grid grid-cols-2 gap-2 border-t border-border pt-3 text-[11px]">
                <div>
                  <p className="text-muted">Experience</p>
                  <p className="font-semibold text-ink">7 years</p>
                </div>
                <div>
                  <p className="text-muted">Contract</p>
                  <p className="font-semibold text-ink">Month-to-month</p>
                </div>
              </div>

              {/* Barcode */}
              <div className="mt-3 flex h-6 items-end gap-[2px] opacity-60">
                {Array.from({ length: 34 }).map((_, i) => (
                  <span
                    key={i}
                    className="bg-ink"
                    style={{ width: i % 3 === 0 ? 3 : 1, height: `${60 + ((i * 37) % 40)}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Back */}
            <div className="absolute inset-0 flex flex-col rounded-2xl border border-[#3a3a3f] bg-gradient-to-b from-[#2a1712] to-[#161618] p-5 text-left shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="mx-auto mb-5 h-2 w-12 rounded-full bg-black/60" />
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-accent">
                What you get
              </p>
              <p className="mb-5 text-xl font-extrabold leading-tight text-ink">
                A partner, not a vendor.
              </p>
              <ul className="space-y-3">
                {PERKS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-[#C7C7C9]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-auto text-[11px] text-muted">Tap to flip back</p>
            </div>
          </motion.div>
        </motion.button>
      </motion.div>
      </motion.div>

      <p className="absolute bottom-0 flex items-center gap-1.5 text-xs text-muted">
        <RotateCw className="h-3.5 w-3.5" /> Drag to swing &middot; tap to flip
      </p>
    </div>
  );
}
