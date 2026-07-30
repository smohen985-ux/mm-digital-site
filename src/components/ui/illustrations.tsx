"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, ArrowUpRight } from "lucide-react";

/**
 * Small self-animating SVG/illustration components used to give sections a
 * visual, "digital marketing" anchor instead of pure text/cards. Each one
 * triggers its own draw-in / pop-in animation the first time it scrolls
 * into view.
 */

export function GrowthChartIllustration() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-border bg-surface p-8">
      <div className="mb-6 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
          <span className="h-[7px] w-[7px] rounded-full bg-accent" />
          Ad performance
        </span>
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
          className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent"
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
          +128%
        </motion.span>
      </div>

      <svg viewBox="0 0 300 140" className="w-full" fill="none">
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="0"
            y1={20 + i * 30}
            x2="300"
            y2={20 + i * 30}
            stroke="#2A2A2E"
            strokeOpacity={0.5}
            strokeWidth="1"
          />
        ))}

        <motion.path
          d="M0,110 C40,105 60,90 90,85 C120,80 140,95 170,70 C200,45 220,55 250,30 C265,17 280,20 300,10"
          stroke="url(#growthGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />

        <motion.path
          d="M0,110 C40,105 60,90 90,85 C120,80 140,95 170,70 C200,45 220,55 250,30 C265,17 280,20 300,10 L300,140 L0,140 Z"
          fill="url(#growthFill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />

        <motion.circle
          cx="300"
          cy="10"
          r="5"
          fill="#FF4B1F"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 1.05, duration: 0.35, ease: "easeOut" }}
        />

        <defs>
          <linearGradient id="growthGradient" x1="0" y1="0" x2="300" y2="0">
            <stop offset="0%" stopColor="#FF7A4D" />
            <stop offset="100%" stopColor="#FF4B1F" />
          </linearGradient>
          <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF4B1F" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FF4B1F" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
        {[
          { label: "Clicks", value: "3.2k" },
          { label: "Leads", value: "214" },
          { label: "Cost / lead", value: "$11" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.4, ease: "easeOut" }}
          >
            <div className="text-lg font-extrabold tracking-tight text-ink">{stat.value}</div>
            <div className="text-xs text-muted">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function AdMockupIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="mx-auto w-full max-w-sm overflow-hidden rounded-[20px] border border-border bg-surface"
    >
      <div className="flex items-center gap-2 border-b border-border px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-auto rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-accent">
          Sponsored
        </span>
      </div>

      <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-accent/25 via-accentBtn/15 to-surface2">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,122,77,0.35),transparent_60%)]"
        />
      </div>

      <div className="space-y-2 px-5 pt-4">
        <div className="h-2.5 w-3/4 rounded-full bg-border" />
        <div className="h-2.5 w-1/2 rounded-full bg-border" />
      </div>

      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-4 text-muted">
          <motion.span
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.3, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.9, duration: 0.45, ease: "easeOut" }}
            className="flex items-center gap-1.5"
          >
            <Heart className="h-4 w-4 text-accent" fill="currentColor" />
            <span className="text-xs font-semibold">1.2k</span>
          </motion.span>
          <span className="flex items-center gap-1.5">
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs font-semibold">84</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Share2 className="h-4 w-4" />
            <span className="text-xs font-semibold">37</span>
          </span>
        </div>
        <span className="rounded-full bg-accentBtn px-4 py-1.5 text-xs font-semibold text-white">
          Learn More
        </span>
      </div>
    </motion.div>
  );
}
