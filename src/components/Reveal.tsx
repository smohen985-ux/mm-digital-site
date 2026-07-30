"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE_SPRING: [number, number, number, number] = [0.22, 1, 0.36, 1];

const base: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: EASE_SPRING },
    },
  };

const title: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.985, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.52, ease: EASE_SPRING },
    },
  };

type RevealProps = {
  children: ReactNode;
  as?: "div" | "h1" | "h2" | "p" | "span";
  index?: number;
  isTitle?: boolean;
  className?: string;
  style?: React.CSSProperties;
  };

export function Reveal({ children, as = "div", index = 0, isTitle = false, className, style }: RevealProps) {
  const variants = isTitle ? title : base;
  const viewport = { once: true, margin: "0px 0px -60px 0px", amount: 0.15 } as const;
  const transition = { delay: index * 0.045 };

  switch (as) {
    case "h1":
    return (
      <motion.h1 className={className} style={style} variants={variants} initial="hidden" whileInView="visible" viewport={viewport} transition={transition}>
      {children}
      </motion.h1>
      );
    case "h2":
    return (
      <motion.h2 className={className} style={style} variants={variants} initial="hidden" whileInView="visible" viewport={viewport} transition={transition}>
      {children}
      </motion.h2>
      );
    case "p":
    return (
      <motion.p className={className} style={style} variants={variants} initial="hidden" whileInView="visible" viewport={viewport} transition={transition}>
      {children}
      </motion.p>
      );
    case "span":
    return (
      <motion.span className={className} style={style} variants={variants} initial="hidden" whileInView="visible" viewport={viewport} transition={transition}>
      {children}
      </motion.span>
      );
    default:
    return (
      <motion.div className={className} style={style} variants={variants} initial="hidden" whileInView="visible" viewport={viewport} transition={transition}>
      {children}
      </motion.div>
      );
    }
  }

export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
  }
