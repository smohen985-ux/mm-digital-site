"use client";

import React, { useEffect, useRef } from "react";
  import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

interface MousePos {
  x: number | null;
y: number | null;
radius: number;
}

class Particle {
x: number;
y: number;
directionX: number;
directionY: number;
size: number;
color: string;
ctx: CanvasRenderingContext2D;
canvas: HTMLCanvasElement;
mouse: MousePos;

constructor(
x: number,
y: number,
directionX: number,
directionY: number,
size: number,
color: string,
ctx: CanvasRenderingContext2D,
canvas: HTMLCanvasElement,
mouse: MousePos
) {
this.x = x;
this.y = y;
this.directionX = directionX;
this.directionY = directionY;
this.size = size;
this.color = color;
this.ctx = ctx;
this.canvas = canvas;
this.mouse = mouse;
}

draw() {
  this.ctx.beginPath();
this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
this.ctx.fillStyle = this.color;
this.ctx.fill();
}

update() {
if (this.x > this.canvas.width || this.x < 0) {
this.directionX = -this.directionX;
}
if (this.y > this.canvas.height || this.y < 0) {
this.directionY = -this.directionY;
}

if (this.mouse.x !== null && this.mouse.y !== null) {
const dx = this.mouse.x - this.x;
const dy = this.mouse.y - this.y;
const distance = Math.sqrt(dx * dx + dy * dy);
if (distance < this.mouse.radius + this.size) {
const forceDirectionX = dx / distance;
const forceDirectionY = dy / distance;
const force = (this.mouse.radius - distance) / this.mouse.radius;
this.x -= forceDirectionX * force * 5;
this.y -= forceDirectionY * force * 5;
}
}

this.x += this.directionX;
this.y += this.directionY;
this.draw();
}
}

const fadeUpVariants = {
hidden: { opacity: 0, y: 20 },
visible: (i: number) => ({
  opacity: 1,
    y: 0,
transition: { delay: i * 0.2 + 0.3, duration: 0.7, ease: "easeOut" as const },
}),
        };

export default function AetherFlowHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

useEffect(() => {
  const canvas = canvasRef.current;
if (!canvas) return;
const ctx = canvas.getContext("2d");
if (!ctx) return;

let animationFrameId: number;
let particles: Particle[] = [];
const mouse: MousePos = { x: null, y: null, radius: 160 };

function init() {
  if (!canvas || !ctx) return;
particles = [];
const numberOfParticles = (canvas.height * canvas.width) / 12000;
for (let i = 0; i < numberOfParticles; i++) {
const size = Math.random() * 1.6 + 1;
const x = Math.random() * (canvas.width - size * 2) + size;
const y = Math.random() * (canvas.height - size * 2) + size;
const directionX = Math.random() * 0.4 - 0.2;
const directionY = Math.random() * 0.4 - 0.2;
const color = "rgba(255, 122, 77, 0.85)";
particles.push(
  new Particle(x, y, directionX, directionY, size, color, ctx, canvas, mouse)
  );
}
}

function resizeCanvas() {
  if (!canvas) return;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
init();
}

function connect() {
  if (!canvas || !ctx) return;
for (let a = 0; a < particles.length; a++) {
for (let b = a; b < particles.length; b++) {
const dx = particles[a].x - particles[b].x;
const dy = particles[a].y - particles[b].y;
const distance = dx * dx + dy * dy;
if (distance < (canvas.width / 7) * (canvas.height / 7)) {
const opacityValue = Math.max(1 - distance / 24000, 0);
ctx.strokeStyle = `rgba(255, 75, 31, ${opacityValue})`;
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(particles[a].x, particles[a].y);
ctx.lineTo(particles[b].x, particles[b].y);
ctx.stroke();
}
}
}
}

function animate() {
  animationFrameId = requestAnimationFrame(animate);
if (!canvas || !ctx) return;
ctx.fillStyle = "#0E0E10";
ctx.fillRect(0, 0, canvas.width, canvas.height);
for (let i = 0; i < particles.length; i++) particles[i].update();
connect();
}

function handleMouseMove(event: MouseEvent) {
  mouse.x = event.clientX;
mouse.y = event.clientY;
}
function handleMouseOut() {
  mouse.x = null;
mouse.y = null;
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("mouseout", handleMouseOut);

resizeCanvas();
animate();

return () => {
  window.removeEventListener("resize", resizeCanvas);
window.removeEventListener("mousemove", handleMouseMove);
window.removeEventListener("mouseout", handleMouseOut);
cancelAnimationFrame(animationFrameId);
};
}, []);

return (
  <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-bg">
  <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

  <div className="relative z-10 text-center p-6">
  <motion.div
  custom={0}
  variants={fadeUpVariants}
  initial="hidden"
  animate="visible"
  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6 backdrop-blur-sm"
  >
  <Zap className="h-4 w-4 text-accent" />
  <span className="text-sm font-medium text-gray-200">
  Marketing for real businesses
</span>
</motion.div>

<motion.h1
custom={1}
variants={fadeUpVariants}
  initial="hidden"
  animate="visible"
  className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-ink"
  >
  We run your ads.
  <br />
  You run your business.
  </motion.h1>

  <motion.p
  custom={2}
  variants={fadeUpVariants}
  initial="hidden"
  animate="visible"
  className="max-w-2xl mx-auto text-lg text-gray-400 mb-10"
  >
  No long contracts. You talk to the person running your ads. Reports in
plain English — not a dashboard nobody reads.
  </motion.p>

  <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
  <a
  href="#contact"
  className="px-8 py-4 bg-accentBtn text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300 inline-flex items-center gap-2"
  >
  Get a Free Ad Account Review
<ArrowRight className="h-5 w-5" />
</a>
</motion.div>
</div>
</div>
);
}
