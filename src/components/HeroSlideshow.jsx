import { useEffect, useState } from "react";
import ArchitecturalGlassBackground from "./ArchitecturalGlassBackground";

export default function HeroSlideshow({ images, lang }) {
  const ar = lang === "ar";
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motion = () => setReduced(media.matches);
    const visibility = () => setVisible(!document.hidden);
    motion(); visibility();
    media.addEventListener("change", motion);
    document.addEventListener("visibilitychange", visibility);
    return () => { media.removeEventListener("change", motion); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  useEffect(() => {
    if (paused || hovered || focused || reduced || !visible) return;
    const timer = window.setInterval(() => setActive(value => (value + 1) % images.length), 7000);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reduced, visible, images.length, active]);
  const labels = ar ? ["التخرج", "بيئة الدراسة", "التعلّم بالتطبيق"] : ["Graduation", "Learning spaces", "Learning in practice"];
  return <section className="home-hero editorial-hero" aria-label={ar ? "مرحبًا بك في الكلية" : "Welcome to the Faculty"}
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className="faculty-slides" aria-hidden="true">{images.map((src, index) => <img key={src} src={src} alt="" className={index === active ? "faculty-slide is-active" : "faculty-slide"} fetchPriority={index === 0 ? "high" : "auto"}/>)}</div>
    <div className="hero-overlay"/>
    <ArchitecturalGlassBackground/>
    <div className="shell home-hero-content">
      <span className="hero-university-name">{ar ? "جامعة بدر بالقاهرة" : "BADR UNIVERSITY IN CAIRO"}</span>
      <h1>{ar ? "كلية إدارة الأعمال والاقتصاد" : "Faculty of Business & Economics"}</h1>
      <p className="hero-lead">{ar ? "فهم أعمق للأعمال. رؤية أوسع للاقتصاد." : "A deeper understanding of business. A broader perspective on economics."}</p>
      <div className="hero-actions"><a className="button hero-primary" href="/programs">{ar ? "استكشف البرامج" : "Explore programs"}<span aria-hidden="true">↗</span></a><a className="hero-admissions-link" href="/admissions">{ar ? "القبول والرسوم" : "Admissions & fees"}<span aria-hidden="true">↗</span></a></div>
      <div className="faculty-slide-controls" role="group" aria-label={ar ? "صور الواجهة" : "Hero images"}>
        {images.map((_, index) => <button key={index} aria-label={labels[index]} aria-pressed={active === index} onClick={() => { setActive(index); setPaused(true); }}><span>{String(index + 1).padStart(2, "0")}</span><i className={active === index ? "is-active" : ""}/></button>)}
        {!reduced && <button className="slide-pause" onClick={() => setPaused(value => !value)} aria-label={paused ? (ar ? "تشغيل تبديل الصور" : "Play slideshow") : (ar ? "إيقاف تبديل الصور" : "Pause slideshow")}>{paused ? "▷" : "Ⅱ"}</button>}
      </div>
    </div>
  </section>;
}
