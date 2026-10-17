import { memo } from "react";
import "./AnimatedRibbonBackground.css";

// Long, shallow architectural edges; the visible area never contains a repeated wave.
const RIBBONS = [
  { path: "M0 74 C430 50 1010 105 1440 74 L1440 260 H0Z", color: "overlay", opacity: .14, duration: 24, phase: -6, x: "-4%", lift: "-4px", stretch: 1.018 },
  { path: "M0 100 C430 137 1010 64 1440 100 L1440 260 H0Z", color: "light", opacity: .28, duration: 26, phase: -13, x: "4%", lift: "4px", stretch: .982 },
  { path: "M0 126 C430 103 1010 153 1440 126 L1440 260 H0Z", color: "blue", opacity: .58, duration: 21, phase: -11, x: "-3%", lift: "-3px", stretch: 1.022 },
  { path: "M0 150 C430 178 1010 124 1440 150 L1440 260 H0Z", color: "navy", opacity: .42, duration: 23, phase: -17, x: "3%", lift: "3px", stretch: .982 },
];

/** Decorative absolute background. Use a positioned, clipped parent and foreground z-index > 0.
 * colors: { navy, blue, light, overlay }; opacity: 0–1 multiplier; speed: 1 = normal,
 * 2 = twice as fast; height: CSS length or pixels; layers: 1–4 (default 4).
 */
const AnimatedRibbonBackground = memo(function AnimatedRibbonBackground({
  colors = {}, opacity = 1, speed = 1,
  height = "clamp(120px, 16vw, 172px)", layers = 4, className = "",
}) {
  const count = Number.isFinite(layers) ? Math.min(4, Math.max(1, Math.round(layers))) : 4;
  const pace = Number.isFinite(speed) ? Math.max(.1, speed) : 1;
  const alpha = Number.isFinite(opacity) ? Math.min(1, Math.max(0, opacity)) : 1;
  const style = { "--ribbon-height": typeof height === "number" ? `${height}px` : height, "--ribbon-opacity": alpha };
  for (const key of ["navy", "blue", "light", "overlay"]) {
    if (colors[key]) style[`--ribbon-${key}`] = colors[key];
  }

  return <div className={`animated-ribbon-background ${className}`} style={style} aria-hidden="true">
    {RIBBONS.slice(0, count).map((ribbon, index) => <svg
      key={index} className="animated-ribbon-background__layer"
      viewBox="0 0 1440 240" preserveAspectRatio="none" focusable="false"
      style={{
        "--layer-color": `var(--ribbon-${ribbon.color})`, "--layer-opacity": ribbon.opacity,
        "--layer-duration": `${ribbon.duration / pace}s`, "--layer-delay": `${ribbon.phase / pace}s`,
        "--layer-x": ribbon.x, "--layer-lift": ribbon.lift, "--layer-stretch": ribbon.stretch,
      }}
    ><path d={ribbon.path}/></svg>)}
    <div className="animated-ribbon-background__fill"/>
  </div>;
});

export default AnimatedRibbonBackground;
