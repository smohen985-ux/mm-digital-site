/**
 * Site-wide animated backdrop that sits behind every section below the hero.
 * Pure CSS (transform/opacity only) so it stays GPU-cheap and works with the
 * static export. Motion pauses for visitors who prefer reduced motion.
 */
export default function AnimatedBackground() {
  return (
    <div aria-hidden className="animated-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Slow-drifting ember glows */}
      <div className="animated-bg__orb animated-bg__orb--1" />
      <div className="animated-bg__orb animated-bg__orb--2" />
      <div className="animated-bg__orb animated-bg__orb--3" />

      {/* Faint panning grid, faded toward the edges */}
      <div className="animated-bg__grid" />

      {/* Soft light sweep that passes across every so often */}
      <div className="animated-bg__sweep" />

      {/* Film grain to keep the gradients from banding */}
      <div className="animated-bg__grain" />
    </div>
  );
}
