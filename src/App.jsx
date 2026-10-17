import { useEffect, useMemo, useRef, useState } from "react";
import HeroSlideshow from "./components/HeroSlideshow";
import FacultyExperience from "./components/FacultyExperience";
import "./faculty-home.css";
import { alumniStories, news, programs, programDetails } from "./data";
import heroImage from "./assets/images/hero-business-lecture-hall.jpg";
import aboutImage from "./assets/images/about-collaboration.jpg";
import studentImage from "./assets/images/student-life.jpg";
import learningImage from "./assets/images/applied-learning.jpg";
import campusImage from "./assets/images/hero-business-campus.jpg";
import careerImage from "./assets/images/career-studio.jpg";
import alumniImage from "./assets/images/graduation-alumni.jpg";
import newsImage from "./assets/images/news-event.jpg";
import admissionsImage from "./assets/images/admissions-welcome.jpg";
import contactImage from "./assets/images/contact-campus.jpg";
import portalImage from "./assets/images/portal-login.jpg";
import bucLogo from "./assets/images/buc-logo.png";
import admissionStepsPhoto from "./assets/images/admission-steps-photo.jpg";
import tuitionFeesPhoto from "./assets/images/tuition-fees-photo.jpg";
import scholarshipsPhoto from "./assets/images/scholarships-photo.jpg";
import deanImage from "./assets/images/dean-mamdouh-mowafy.jpg";
import accountingProgram from "./assets/images/programs/accounting.jpg";
import accountingFinanceProgram from "./assets/images/programs/accounting-finance.jpg";
import bankingFinanceProgram from "./assets/images/programs/banking-finance.jpg";
import marketingProgram from "./assets/images/programs/marketing.jpg";
import humanResourcesProgram from "./assets/images/programs/human-resources.jpg";
import hospitalityProgram from "./assets/images/programs/hospitality-management.jpg";
import economicsProgram from "./assets/images/programs/economics.jpg";
import bisProgram from "./assets/images/programs/business-information-systems.jpg";
import dataScienceProgram from "./assets/images/programs/data-science.jpg";
import aiProgram from "./assets/images/programs/artificial-intelligence.jpg";

const programImages = {
  accounting: accountingProgram,
  "accounting-finance": accountingFinanceProgram,
  "banking-finance": bankingFinanceProgram,
  marketing: marketingProgram,
  "human-resources": humanResourcesProgram,
  "hospitality-management": hospitalityProgram,
  economics: economicsProgram,
  "business-information-systems": bisProgram,
  "data-science": dataScienceProgram,
  "artificial-intelligence": aiProgram,
};

const admissionCardImages = {
  steps: admissionStepsPhoto,
  fees: tuitionFeesPhoto,
  scholarship: scholarshipsPhoto,
};

const homeVideos = [
  {
    id: "-YY5IVzaHDw",
    titleAr: "الدراسة والتخصصات في كلية الأعمال",
    titleEn: "Study and specialisations in the Business Faculty",
    captionAr: "تقرير من قناة «في الجامعة» عن الدراسة في كلية إدارة الأعمال والاقتصاد بجامعة بدر.",
    captionEn: "A FilGamaa report on studying at BUC's School of Business and Economics.",
    embed: "https://www.youtube-nocookie.com/embed/-YY5IVzaHDw?start=99",
    url: "https://www.youtube.com/watch?v=-YY5IVzaHDw&t=99s",
  },
  {
    id: "L1oVXARxIQI",
    titleAr: "كلية إدارة الأعمال والاقتصاد في BUC",
    titleEn: "BUC School of Business and Economics",
    captionAr: "فيديو من قناة جامعة بدر بالقاهرة الرسمية.",
    captionEn: "A video from Badr University in Cairo's official channel.",
    embed: "https://www.youtube-nocookie.com/embed/L1oVXARxIQI",
    url: "https://www.youtube.com/watch?v=L1oVXARxIQI",
  },
  {
    id: "a8LMUcpw7fU",
    titleAr: "تعرّف على كلية إدارة الأعمال والاقتصاد",
    titleEn: "Explore the School of Business and Economics",
    captionAr: "فيديو آخر من قناة جامعة بدر بالقاهرة الرسمية.",
    captionEn: "Another video from Badr University in Cairo's official channel.",
    embed: "https://www.youtube-nocookie.com/embed/a8LMUcpw7fU?list=PL6aSf9H_OfbYt8zTG1Y3mQT4F2glqYjbr",
    url: "https://www.youtube.com/watch?v=a8LMUcpw7fU&list=PL6aSf9H_OfbYt8zTG1Y3mQT4F2glqYjbr",
  },
];

const businessSchoolSource = "https://buc.edu.eg/new-undergraduate/business-and-economics-new-1/";

const pageMeta = {
  "/": ["كلية إدارة الأعمال والاقتصاد", "Faculty of Business & Economics"],
  "/about": ["عن الكلية", "About the Faculty"],
  "/programs": ["البرامج الأكاديمية", "Academic Programs"],
  "/admissions": ["القبول والتحويل", "Admissions & Transfers"],
  "/student-life": ["الحياة الطلابية", "Student Life"],
  "/career": ["التدريب والتوظيف", "Career & Training"],
  "/news": ["الأخبار والفعاليات", "News & Events"],
  "/alumni": ["الخريجون", "Alumni"],
  "/contact": ["تواصل معنا", "Contact Us"],
  "/portal": ["بوابة Smart Faculty", "Smart Faculty Portal"],
};

function Crest() {
  return <span className="crest" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M8 23.5 32 11l24 12.5L32 36 8 23.5Zm9 9.5v12c8.4 8.2 21.6 8.2 30 0V33l-15 8-15-8Z"/></svg></span>;
}

function Arrow({ down = false }) {
  return <span aria-hidden="true" className="arrow">{down ? "↓" : "↗"}</span>;
}

function Header({ lang, setLang }) {
  const ar = lang === "ar";
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuGroups = [
    { titleAr: "اكتشف الكلية", titleEn: "DISCOVER", links: [
      ["/programs", "البرامج الدراسية", "Academic programs"],
      ["/#about-buc", "عن جامعة BUC", "About BUC"],
      ["/about", "عن الكلية", "About the Faculty"],
    ] },
    { titleAr: "رحلة الطالب", titleEn: "STUDENT JOURNEY", links: [
      ["/admissions", "القبول والرسوم والمنح", "Admissions, fees & scholarships"],
      ["/student-life", "الحياة الجامعية", "Student life"],
      ["/career", "التدريب والمستقبل المهني", "Career & training"],
      ["/news", "الأخبار والفعاليات", "News & events"],
    ] },
    { titleAr: "تواصل وخدمات", titleEn: "CONNECT & SERVICES", links: [
      ["/contact?topic=admissions", "استفسارات القبول", "Admissions enquiries"],
      ["/contact", "تواصل مع الكلية", "Contact the Faculty"],
      ["/alumni", "الخريجون", "Alumni"],
      ["/portal", "بوابة Smart Faculty", "Smart Faculty Portal"],
    ] },
  ];
  const close = () => setOpen(false);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = event => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = event => { if (!headerRef.current?.contains(event.target)) setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);
  return <header ref={headerRef} className={open ? "site-header menu-open" : "site-header"}>
    <img className="header-backdrop" src={heroImage} alt="" aria-hidden="true"/>
    <div className="shell nav-row">
      <div className="header-identity">
        <a className="brand brand-logo" href="/" onClick={close}><img src={bucLogo} alt={ar ? "جامعة بدر بالقاهرة" : "Badr University in Cairo"}/></a>
        <span className="header-faculty-name">{ar ? "كلية إدارة الأعمال والاقتصاد" : "Faculty of Business & Economics"}</span>
      </div>
      <div className="header-quicklinks">
        <a href="/programs">{ar ? "البرامج" : "PROGRAMS"}</a>
        <a href="/admissions">{ar ? "القبول والرسوم" : "ADMISSIONS & FEES"}</a>
        <a className="quicklink-cta" href="/contact?topic=admissions">{ar ? "اسأل فريق القبول" : "ASK ADMISSIONS"}<Arrow/></a>
      </div>
      <div className="nav-actions">
        <button className="language" onClick={() => setLang(ar ? "en" : "ar")} aria-label={ar ? "Switch to English" : "التبديل إلى العربية"}>{ar ? "EN" : "ع"}</button>
        <button ref={menuButtonRef} className={open ? "menu active" : "menu"} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-navigation" aria-label={ar ? (open ? "إغلاق القائمة" : "فتح القائمة") : (open ? "Close menu" : "Open menu")}><b>{ar ? "القائمة" : "MENU"}</b><i aria-hidden="true"><span/><span/><span/></i></button>
      </div>
      <nav id="site-navigation" className={open ? "nav-links open" : "nav-links"} aria-label={ar ? "التنقل الرئيسي" : "Main navigation"}>
        <div className="nav-intro"><span>{ar ? "كلية إدارة الأعمال والاقتصاد" : "FACULTY OF BUSINESS & ECONOMICS"}</span><strong>{ar ? "حدد وجهتك التالية" : "Find your next step"}</strong></div>
        <div className="nav-groups">{menuGroups.map(group => <div className="nav-group" key={group.titleEn}><h2>{ar ? group.titleAr : group.titleEn}</h2>{group.links.map(([href, a, e]) => <a key={href} href={href} onClick={close}>{ar ? a : e}<Arrow/></a>)}</div>)}</div>
        <a className="nav-contact" href="/contact?topic=admissions" onClick={close}><span>{ar ? "لديك سؤال قبل التقديم؟" : "A question before you apply?"}</span><strong>{ar ? "تواصل مع فريق القبول" : "Talk to Admissions"}<Arrow/></strong></a>
      </nav>
    </div>
  </header>;
}

function SocialIcon({ platform }) {
  const common = { viewBox: "0 0 24 24", width: 22, height: 22, fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  if (platform === "instagram") return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></svg>;
  if (platform === "linkedin") return <svg {...common}><rect x="2.5" y="2.5" width="19" height="19" rx="2"/><circle cx="7.2" cy="8" r="1" fill="currentColor" stroke="none"/><path d="M7.2 11v7M11.5 18v-7m0 3.2c0-2.1 1.2-3.3 3.1-3.3 1.9 0 2.9 1.3 2.9 3.3V18"/></svg>;
  if (platform === "x") return <svg {...common}><path d="M4.5 3.5h3.2l11.8 17h-3.2zM19 3.5 5 20.5"/></svg>;
  if (platform === "youtube") return <svg {...common}><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/></svg>;
  if (platform === "facebook") return <svg {...common}><circle cx="12" cy="12" r="9.5"/><path d="M13.9 20v-7h2.2l.3-2.7h-2.5V8.6c0-.8.3-1.2 1.3-1.2h1.3V5.1c-.6-.1-1.2-.1-1.8-.1-2.5 0-3.8 1.4-3.8 3.7v1.6H9V13h1.9v7" fill="currentColor" stroke="none"/></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-2.4 2.5-3.5 5.5-3.5 9s1.1 6.5 3.5 9c2.4-2.5 3.5-5.5 3.5-9S14.4 5.5 12 3Z"/></svg>;
}

function Footer({ lang }) {
  const ar = lang === "ar";
  const cols = [
    [ar ? "اكتشف" : "Explore", [["/#about-buc", ar ? "عن جامعة بدر" : "About BUC"], ["/about", ar ? "عن الكلية" : "About the Faculty"], ["/programs", ar ? "البرامج الأكاديمية" : "Academic programs"]]],
    [ar ? "رحلتك" : "Your journey", [["/admissions", ar ? "القبول والرسوم" : "Admissions & fees"], ["/student-life", ar ? "الحياة الجامعية" : "Student life"], ["/career", ar ? "التدريب والمستقبل المهني" : "Career & training"]]],
    [ar ? "المجتمع" : "Community", [["/news", ar ? "الأخبار والفعاليات" : "News & events"], ["/alumni", ar ? "الخريجون" : "Alumni"], ["/contact", ar ? "تواصل مع الكلية" : "Contact the Faculty"]]],
  ];
  const socials = [
    ["instagram", "Instagram", "https://www.instagram.com/badr.university.in.cairo.buc/"],
    ["linkedin", "LinkedIn", "https://www.linkedin.com/school/badr-university-buc/"],
    ["x", "X", "https://x.com/badruniversity"],
    ["youtube", "YouTube", "https://www.youtube.com/channel/UCvO4goB7ATvGwGsZhwecfwg"],
    ["facebook", "Facebook", "https://www.facebook.com/badr.university/"],
    ["website", ar ? "الموقع الرسمي للجامعة" : "Official BUC website", "https://buc.edu.eg/"],
  ];
  return <footer className="site-footer"><div className="footer-wave" aria-hidden="true"><svg viewBox="0 0 1440 100" preserveAspectRatio="none"><path className="footer-wave-accent" d="M-720 48C-540 16-360 76-180 44S180 8 360 45 720 76 900 43 1260 10 1440 45 1800 77 2160 42V100H-720Z"/><path className="footer-wave-base" d="M-720 63C-540 36-360 88-180 60S180 31 360 59 720 88 900 61 1260 32 1440 60 1800 89 2160 57V100H-720Z"/></svg></div>
    <div className="shell footer-grid">
      <div className="footer-brand"><a className="footer-logo" href="/"><img className="footer-brand-logo" src={bucLogo} alt={ar ? "شعار جامعة بدر بالقاهرة" : "Badr University in Cairo logo"}/></a><strong>{ar ? "كلية إدارة الأعمال والاقتصاد" : "Faculty of Business & Economics"}</strong><p>{ar ? "تعليم يجمع بين فهم الأعمال والاقتصاد وتطبيق المعرفة." : "Business and economics education that connects knowledge with practice."}</p></div>
      <div className="footer-info"><div><h3>{ar ? "الموقع" : "Location"}</h3><p>{ar ? "مدينة بدر، القاهرة، مصر" : "Badr City, Cairo, Egypt"}</p></div><div><h3>{ar ? "التواصل" : "Get in touch"}</h3><a href="/contact">{ar ? "تواصل مع الكلية" : "Contact the Faculty"} <Arrow/></a></div><div><h3>{ar ? "الجامعة" : "University"}</h3><a href="https://buc.edu.eg/" target="_blank" rel="noopener noreferrer">{ar ? "الموقع الرسمي لجامعة بدر" : "Official BUC website"} <Arrow/></a></div></div>
      <div className="footer-community"><div className="footer-social"><h3>{ar ? "تابع جامعة بدر" : "Follow BUC"}<span aria-hidden="true">///</span></h3><div className="footer-social-links">{socials.map(([platform, label, href]) => <a href={href} key={platform} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><SocialIcon platform={platform}/></a>)}</div></div><nav className="footer-links-grid" aria-label={ar ? "روابط أسفل الصفحة" : "Footer links"}>{cols.map(([title, items]) => <div className="footer-col" key={title}><h3>{title}</h3>{items.map(([href, label]) => <a key={href + label} href={href}>{label}</a>)}</div>)}</nav></div>
    </div><div className="footer-bottom-bar"><div className="shell footer-bottom"><span>© 2026 BUC · {ar ? "كلية إدارة الأعمال والاقتصاد" : "Faculty of Business & Economics"}</span><span>{ar ? "جامعة بدر بالقاهرة" : "Badr University in Cairo"}</span></div></div></footer>;
}

function Layout({ lang, setLang, children, dark = false, home = false }) {
  const classes = ["app", dark ? "dark-page" : "", home ? "landing-app" : ""].filter(Boolean).join(" ");
  return <div className={classes}><Header lang={lang} setLang={setLang}/>{children}<Footer lang={lang}/></div>;
}

function Eyebrow({ children }) { return <span className="eyebrow">{children}</span>; }

function SectionTitle({ eyebrow, title, text, action, href, lang }) {
  return <div className="section-title"><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div>{action && <a className="text-link" href={href}>{action}<Arrow/></a>}</div>;
}

function PageHero({ lang, eyebrow, title, accent, text, image, imagePosition = "center" }) {
  return <section className="page-hero"><img src={image} alt="" style={{ objectPosition: imagePosition }}/><div className="page-hero-shade"/><div className="shell page-hero-content"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}<em>{accent}</em></h1><p>{text}</p></div><div className="hero-index">BUC <b>01</b></div></section>;
}

function ProgramCard({ item, lang, index, inactive = false }) {
  const ar = lang === "ar";
  return <a className="program-card" href={`/programs/${item.slug}`} tabIndex={inactive ? -1 : undefined} aria-hidden={inactive || undefined}><figure className="program-card-image"><img src={programImages[item.slug]} alt={ar ? `صورة توضيحية تعبر عن برنامج ${item.ar}` : `Visual representing the ${item.en} program`} loading="lazy"/><span className="program-no">{String(index + 1).padStart(2, "0")}</span></figure><div className="program-card-body"><small>{item.code} · {ar ? item.deptAr : item.deptEn}</small><h3>{ar ? item.ar : item.en}</h3><p>{ar ? item.summaryAr : item.summaryEn}</p><span className="card-link">{ar ? "تفاصيل البرنامج" : "Program details"}<Arrow/></span></div></a>;
}

function ProgramCarousel({ lang }) {
  const ar = lang === "ar";
  const viewportRef = useRef(null);
  const movingRef = useRef(false);
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(3);
  const [animate, setAnimate] = useState(true);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [inView, setInView] = useState(false);
  const [interaction, setInteraction] = useState(0);
  const count = programs.length;
  const visibleCards = width >= 900 ? 3 : width >= 580 ? 2 : 1;
  const gap = 18;
  const cardWidth = width ? (width - gap * (visibleCards - 1)) / visibleCards : 380;
  const items = [...programs.slice(-3), ...programs, ...programs.slice(0, 3)];

  useEffect(() => {
    const viewport = viewportRef.current;
    const resize = new ResizeObserver(entries => setWidth(entries[0].contentRect.width));
    const intersection = new IntersectionObserver(entries => setInView(entries[0].isIntersecting), { threshold: .2 });
    resize.observe(viewport);
    intersection.observe(viewport);
    return () => { resize.disconnect(); intersection.disconnect(); };
  }, []);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion(); updateVisibility();
    media.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => { media.removeEventListener("change", updateMotion); document.removeEventListener("visibilitychange", updateVisibility); };
  }, []);
  useEffect(() => {
    if (!width || !inView || !pageVisible || focused || reducedMotion) return;
    const timer = window.setTimeout(() => {
      if (!movingRef.current) { movingRef.current = true; setPosition(value => value + 1); }
    }, 10000);
    return () => window.clearTimeout(timer);
  }, [width, inView, pageVisible, focused, reducedMotion, position, interaction]);

  const move = direction => {
    if (movingRef.current) return;
    if (reducedMotion) {
      setInteraction(value => value + 1);
      setPosition(value => value + direction < 3 ? count + 2 : value + direction >= count + 3 ? 3 : value + direction);
      return;
    }
    movingRef.current = !reducedMotion;
    setInteraction(value => value + 1);
    setPosition(value => value + direction);
  };
  const onSlideEnd = event => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    movingRef.current = false;
    if (position < 3 || position >= count + 3) {
      setAnimate(false);
      setPosition(position < 3 ? count + position : position - count);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    }
  };
  const active = ((position - 3 + count) % count) + 1;
  return <div className="program-carousel" onFocusCapture={event => { if (event.target.closest(".program-carousel-viewport")) setFocused(true); }} onBlurCapture={event => { if (!event.currentTarget.querySelector(".program-carousel-viewport")?.contains(event.relatedTarget)) setFocused(false); }}>
    <div className="program-carousel-stage">
      <button className="program-carousel-arrow previous" type="button" onClick={() => move(-1)} aria-label={ar ? "البرنامج السابق" : "Previous program"}>←</button>
      <div className="program-carousel-viewport" ref={viewportRef} role="region" aria-roledescription={ar ? "عرض برامج متحرك" : "Program carousel"} aria-label={ar ? "البرامج الأكاديمية" : "Academic programs"}>
        <div className="program-carousel-track" onTransitionEnd={onSlideEnd} style={{ gap, transform: `translate3d(${-position * (cardWidth + gap)}px,0,0)`, transition: animate && !reducedMotion ? undefined : "none" }}>
          {items.map((item, slot) => <div className="program-carousel-item" key={`${slot}-${item.slug}`} style={{ width: cardWidth }}><ProgramCard item={item} lang={lang} index={(slot - 3 + count) % count} inactive={slot < position || slot >= position + visibleCards}/></div>)}
        </div>
      </div>
      <button className="program-carousel-arrow next" type="button" onClick={() => move(1)} aria-label={ar ? "البرنامج التالي" : "Next program"}>→</button>
    </div>
    <p className="program-carousel-status" aria-live="off"><span>{String(active).padStart(2, "0")}</span><i/> {String(count).padStart(2, "0")}</p>
  </div>;
}

function AdmissionResourceCard({ number, kind, href, title, description, action, external = false }) {
  return <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
    <div className="admission-card-image"><img src={admissionCardImages[kind]} alt="" loading="lazy" decoding="async"/><span>{number}</span></div>
    <div className="admission-card-content"><h3>{title}</h3><p>{description}</p><b>{action}<Arrow/></b></div>
  </a>;
}

function Home({ lang, setLang }) {
  const ar = lang === "ar";
  return <Layout lang={lang} setLang={setLang} home>
    <main className="home-main faculty-home">
      <HeroSlideshow lang={lang} images={[alumniImage, heroImage, learningImage]}/>

      <div className="smart-access" id="journeys"><div className="shell">
        <div className="access-panel">
          <div className="access-features">{[
            ["01", "/programs", ar ? "البرامج الأكاديمية" : "ACADEMIC PROGRAMS", ar ? "اكتشف التخصص المناسب" : "Find your field", ar ? "تعرّف على مجالات الإدارة والتمويل والاقتصاد وتكنولوجيا الأعمال." : "Explore management, finance, economics and business technology.", ar ? "استكشف البرامج" : "Explore programs"],
            ["02", "/#experience", ar ? "طريقة الدراسة" : "HOW YOU LEARN", ar ? "التعلّم بالتطبيق" : "Learning through practice", ar ? "حالات ومشروعات تربط المعرفة بالقرارات الواقعية." : "Cases and projects that connect knowledge to real decisions.", ar ? "اكتشف التجربة" : "Discover the experience"],
            ["03", "/admissions", ar ? "خطوتك التالية" : "YOUR NEXT STEP", ar ? "خطط للتقديم" : "Plan your application", ar ? "خطوات القبول والرسوم وفرص الدعم في مكان واحد." : "Admission steps, fees and support in one place.", ar ? "دليل القبول" : "Admissions guide"],
          ].map(([no, href, small, title, body, action]) => <a className="access-feature" key={no} href={href}><span className="access-feature-top"><span>{no}</span><Arrow/></span><small>{small}</small><h2>{title}</h2><p>{body}</p><b>{action}</b></a>)}</div>
        </div>
      </div></div>

      <section className="section faculty-about" id="about-buc" aria-labelledby="faculty-about-heading"><div className="shell faculty-about-grid">
        <div className="faculty-about-copy" id="why-buc"><Eyebrow>{ar ? "عن الكلية" : "ABOUT THE FACULTY"}</Eyebrow><h2 id="faculty-about-heading">{ar ? "من فهم الأسواق\nإلى صناعة القرار." : "From understanding markets\nto making decisions."}</h2><p>{ar ? "في كلية إدارة الأعمال والاقتصاد بجامعة بدر بالقاهرة، تبدأ رحلتك بأساس في الإدارة والاقتصاد والتمويل، ثم تختار التخصص الذي يوافق اهتماماتك وطموحك." : "At BUC’s Faculty of Business and Economics, build a foundation in management, economics and finance, then choose the field that fits your interests and ambitions."}</p><div className="faculty-about-details"><div><strong>{ar ? "تعلّم الأساسيات" : "Build your foundation"}</strong><span>{ar ? "افهم كيف تعمل المؤسسات والأسواق." : "Understand how organisations and markets work."}</span></div><div><strong>{ar ? "تعمّق في تخصصك" : "Shape your specialisation"}</strong><span>{ar ? "قارن البرامج وما ستدرسه في كل مجال." : "Compare programs and what you will study in each field."}</span></div></div><div className="faculty-about-actions"><a className="text-link" href="/about">{ar ? "تعرّف على الكلية" : "Discover the Faculty"}<Arrow/></a><a href="https://buc.edu.eg/new-about-us/" target="_blank" rel="noopener noreferrer">{ar ? "عن جامعة بدر" : "About Badr University"} ↗</a></div></div>
        <figure className="faculty-about-collage">
          <div className="faculty-about-collage-grid">
            <img src={campusImage} alt={ar ? "مشهد توضيحي لطلاب أمام مبنى جامعي" : "Illustrative view of students outside a university building"} loading="lazy"/>
            <img src={economicsProgram} alt={ar ? "أدوات ورسوم لتحليل الأسواق والاقتصاد" : "Objects and charts illustrating economic analysis"} loading="lazy"/>
            <img src={newsImage} alt={ar ? "مشهد توضيحي لعرض أمام طلاب في قاعة" : "Illustrative presentation in a university auditorium"} loading="lazy"/>
            <img src={learningImage} alt={ar ? "مشهد توضيحي للتعلّم التطبيقي في مجال الأعمال" : "Illustrative applied business learning session"} loading="lazy"/>
          </div>
          <figcaption>{ar ? "مشاهد توضيحية لبيئة الدراسة ومجالاتها" : "Illustrative scenes of the learning environment and study fields"}</figcaption>
        </figure>
      </div></section>

      <section className="section programs-preview"><div className="shell"><SectionTitle lang={lang} eyebrow={ar ? "البرامج الأكاديمية" : "ACADEMIC PROGRAMS"} title={ar ? "اختر المجال الذي يشبه طموحك" : "Choose the field that matches your ambition"} text={ar ? "تعرّف على التخصصات، وقارن بين ما ستدرسه في كل مجال." : "Explore the fields and compare what you will study in each one."} action={ar ? "عرض كل البرامج" : "View all programs"} href="/programs"/><span className="program-total">{ar ? "١٠ برامج أكاديمية" : "10 academic programs"}</span><ProgramCarousel lang={lang}/></div></section>




      <FacultyExperience videos={homeVideos} lang={lang}/>



      <section className="section home-admissions" id="admissions-overview"><div className="shell">
        <SectionTitle lang={lang} eyebrow={ar ? "القبول والرسوم والمنح" : "ADMISSIONS, FEES & SCHOLARSHIPS"} title={ar ? "كل ما تحتاجه قبل اتخاذ القرار" : "Everything you need before deciding"} text={ar ? "تعرّف على خطوات التقديم، ثم راجع الرسوم والمنح من المصادر الرسمية للعام الذي ستتقدم فيه." : "Understand the application steps, then check fees and scholarships at the official sources for your entry year."}/>
        <div className="home-admission-grid">
          <AdmissionResourceCard number="01" kind="steps" href="/admissions" title={ar ? "شروط وخطوات القبول" : "Admission steps"} description={ar ? "ابدأ بالبرنامج المناسب، ثم راجع المستندات ومسار التقديم." : "Choose the right program, then review documents and the application route."} action={ar ? "راجع الخطوات" : "Review steps"}/>
          <AdmissionResourceCard number="02" kind="fees" href="https://buc.edu.eg/admission/tuition-fees/" external title={ar ? "الرسوم الدراسية" : "Tuition fees"} description={ar ? "افتح صفحة الجامعة الرسمية، وتأكد من رسوم سنة التقديم مع فريق القبول." : "Open the university's official page and confirm the current entry-year fee with Admissions."} action={ar ? "صفحة الرسوم الرسمية" : "Official fees page"}/>
          <AdmissionResourceCard number="03" kind="scholarship" href="https://buc.edu.eg/admission/scholarships/" external title={ar ? "المنح والدعم" : "Scholarships and support"} description={ar ? "راجع الشروط والمواعيد المتاحة قبل تقديم الطلب." : "Review the available criteria and dates before applying."} action={ar ? "صفحة المنح الرسمية" : "Official scholarships page"}/>
        </div>
      </div>

      <div className="home-faq"><div className="shell home-faq-grid"><div><Eyebrow>{ar ? "أسئلة قبل التقديم" : "BEFORE YOU APPLY"}</Eyebrow><h2>{ar ? "إجابات سريعة لك ولأسرتك" : "Quick answers for you and your family"}</h2><p>{ar ? "ولو احتجت إجابة تخص حالتك، تواصل مع فريق القبول مباشرة." : "For an answer specific to your situation, speak directly with Admissions."}</p><a className="text-link" href="/contact?topic=admissions">{ar ? "اسأل فريق القبول" : "Ask Admissions"}<Arrow/></a></div><div className="home-faq-list"><details><summary>{ar ? "كيف أختار البرنامج المناسب؟" : "How do I choose the right program?"}</summary><p>{ar ? "ابدأ بمقارنة محتوى البرامج وما ستدرسه وفرص العمل المرتبطة بكل مجال، ثم اسأل عن أي تفاصيل غير واضحة." : "Compare what each program teaches and its possible career directions, then ask about any unclear details."}</p></details><details><summary>{ar ? "أين أجد رسوم السنة الحالية؟" : "Where can I find the current tuition fee?"}</summary><p>{ar ? "راجع صفحة الرسوم الرسمية، وتأكد من القيمة النهائية وأي مصروفات إضافية مع إدارة القبول؛ فالرسوم تتغير من عام لآخر." : "Check the official fees page, then confirm the final amount and any additional costs with Admissions; fees can change each year."}</p></details><details><summary>{ar ? "هل توجد منح أو فرص دعم؟" : "Are scholarships or support available?"}</summary><p>{ar ? "تعلن الجامعة شروط المنح عبر صفحة المنح الرسمية، ويحدد فريق القبول ما ينطبق على طلبك." : "The university lists scholarship criteria on its official page; Admissions can clarify what applies to your application."}</p></details></div></div></div></section>


    </main>
  </Layout>;
}

function About({ lang, setLang }) {
  const ar = lang === "ar";
  return <Layout lang={lang} setLang={setLang}><main><PageHero lang={lang} image={aboutImage} imagePosition="center 45%" eyebrow={ar ? "عن الكلية" : "ABOUT THE FACULTY"} title={ar ? "نقرأ عالم الأعمال" : "We study business"} accent={ar ? "ونتعلّم كيف نؤثر فيه." : "and learn how to shape it."} text={ar ? "مجتمع أكاديمي يجمع الفهم الاقتصادي والإداري مع التفكير التحليلي والعمل التطبيقي." : "An academic community bringing economic and managerial understanding together with analytical thinking and practical work."}/>
    <section className="section"><div className="shell editorial-grid"><div><Eyebrow>{ar ? "هويتنا الأكاديمية" : "OUR ACADEMIC IDENTITY"}</Eyebrow><h2>{ar ? "فهم عميق، تطبيق واعٍ" : "Deep understanding, thoughtful application"}</h2></div><div><p>{ar ? "تبدأ التجربة من أساس مشترك في الإدارة والاقتصاد، ثم تمنح الطالب مساحة للتعمق في مجاله وبناء طريقة واضحة لتحليل المشكلات واتخاذ القرار." : "The experience begins with a shared foundation in business and economics, then gives each student room to specialise and build a clear way to analyse problems and make decisions."}</p><p>{ar ? "داخل القاعة وخارجها، تتقاطع المعرفة مع دراسة الحالات والعمل الجماعي والعروض والمشروعات، حتى يصبح الطالب قادرًا على شرح فكرته واختبارها وتحسينها." : "Inside and beyond the classroom, knowledge meets cases, teamwork, presentations and projects, helping students explain, test and improve their ideas."}</p></div></div></section>
    <section className="section soft"><div className="shell"><SectionTitle lang={lang} eyebrow={ar ? "ما يميز التجربة" : "THE EXPERIENCE"} title={ar ? "أربع ركائز تصنع رحلة واضحة" : "Four pillars create a clear journey"}/><div className="pillars">{[
      ["01", ar ? "أساس أكاديمي" : "Academic foundation", ar ? "مفاهيم راسخة في الإدارة والاقتصاد والتمويل تساعدك على قراءة المشهد كاملًا." : "Strong concepts across management, economics and finance help you see the full picture."],
      ["02", ar ? "تعلّم تطبيقي" : "Applied learning", ar ? "حالات ومشروعات وعروض تحوّل المعرفة إلى قرارات قابلة للنقاش." : "Cases, projects and presentations turn knowledge into decisions that can be tested."],
      ["03", ar ? "اختيار مرن" : "Flexible choice", ar ? "مجالات متنوعة تتيح لك بناء مسار يناسب اهتماماتك وقدراتك." : "A range of fields lets you build a path aligned with your interests and strengths."],
      ["04", ar ? "استعداد مهني" : "Career preparation", ar ? "تطوير مستمر للمهارات المهنية من أول عام وحتى التخرج." : "Career skills develop continuously from the first year through graduation."],
    ].map(([no, title, body]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section"><div className="shell split-story reverse"><div className="story-image"><img src={learningImage} alt=""/></div><div className="story-copy"><Eyebrow>{ar ? "داخل التجربة" : "INSIDE THE EXPERIENCE"}</Eyebrow><h2>{ar ? "الطالب شريك في التعلّم" : "Students take an active role in learning"}</h2><p>{ar ? "تمنح المناقشة والعمل الجماعي والمشروعات الطالب فرصة لاختبار أفكاره وتلقي الملاحظات وتطوير قدرته على العرض والدفاع عن القرار." : "Discussion, teamwork and projects let students test ideas, receive feedback and strengthen how they present and defend decisions."}</p><a className="text-link" href="/student-life">{ar ? "شاهد الحياة داخل الكلية" : "See life across the Faculty"}<Arrow/></a></div></div></section>
    <section className="section about-dean" id="dean-message"><div className="shell about-dean-grid"><img src={deanImage} alt={ar ? "الأستاذ الدكتور ممدوح عبد العليم موافي" : "Prof. Mamdouh Abd El-Alim Mowafy"} loading="lazy"/><div><Eyebrow>{ar ? "رسالة العميد" : "THE DEAN'S MESSAGE"}</Eyebrow><h2>{ar ? "تعليم للمستقبل، قائم على المعرفة والتطبيق" : "Learning for the future, grounded in knowledge and practice"}</h2><p>{ar ? "تؤكد رسالة عميد الكلية، أ.د. ممدوح عبد العليم موافي، إعداد خريجين يجمعون المعرفة والمهارات والقيم المهنية، مع الاهتمام بالتقنيات الحديثة والبحث التطبيقي والتعاون مع قطاعات العمل." : "The message from Prof. Mamdouh Abd El-Alim Mowafy focuses on preparing graduates with knowledge, skills and professional values, alongside modern technology, applied research and industry collaboration."}</p><a className="text-link" href={businessSchoolSource} target="_blank" rel="noopener noreferrer">{ar ? "اقرأ النص الكامل على موقع BUC" : "Read the full message on BUC's website"}<Arrow/></a></div></div></section>
  </main></Layout>;
}

function Programs({ lang, setLang }) {
  const ar = lang === "ar";
  const [query, setQuery] = useState("");
  const filtered = programs.filter(p => `${p.ar} ${p.en} ${p.code}`.toLowerCase().includes(query.toLowerCase()));
  return <Layout lang={lang} setLang={setLang}><main><section className="plain-hero"><div className="shell"><Eyebrow>{ar ? "البرامج الأكاديمية" : "ACADEMIC PROGRAMS"}</Eyebrow><h1>{ar ? "ابنِ مسارك في عالم الأعمال" : "Build your path in business"}</h1><p>{ar ? "ابدأ من أساس مشترك، ثم اختر المجال الذي ينسجم مع طريقة تفكيرك والفرص التي تريد استكشافها." : "Begin with a shared foundation, then choose the field that fits how you think and the opportunities you want to explore."}</p></div></section><section className="section programs-page"><div className="shell"><div className="program-tools"><label><span>{ar ? "ابحث عن برنامج" : "Find a program"}</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder={ar ? "اكتب اسم البرنامج أو رمزه" : "Type a program name or code"}/></label><p>{ar ? `${filtered.length} برامج` : `${filtered.length} programs`}</p></div><div className="program-grid all">{filtered.map((p, i) => <ProgramCard key={p.slug} item={p} lang={lang} index={i}/>)}</div></div></section></main></Layout>;
}

function ProgramDetail({ lang, setLang, item }) {
  const ar = lang === "ar";
  if (!item) return <NotFound lang={lang} setLang={setLang}/>;
  const details = programDetails[item.slug];
  const learning = ar ? details.learningAr : details.learningEn;
  const skills = ar ? details.skillsAr : details.skillsEn;
  const projects = ar ? details.projectsAr : details.projectsEn;
  const overview = ar ? details.overviewAr : details.overviewEn;
  return <Layout lang={lang} setLang={setLang}><main>
    <section className="program-hero rich-program-hero"><div className="shell"><a className="back-link" href="/programs">← {ar ? "جميع البرامج" : "All programs"}</a><div className="program-hero-grid"><div className="program-hero-copy"><Eyebrow>{item.code} · {ar ? item.deptAr : item.deptEn}</Eyebrow><h1>{ar ? item.ar : item.en}</h1><p>{ar ? item.summaryAr : item.summaryEn}</p><div className="hero-actions"><a className="button gold" href="/admissions">{ar ? "راجع خطوات القبول" : "Review admissions"}<Arrow/></a><a className="button outline" href="#overview">{ar ? "اكتشف البرنامج" : "Explore the program"}<Arrow down/></a></div></div><div className="program-hero-media"><img src={programImages[item.slug]} alt={ar ? `صورة توضيحية تعبر عن برنامج ${item.ar}` : `Visual representing the ${item.en} program`}/><span>{item.code}</span></div></div><div className="program-facts"><span>{ar ? "الدرجة" : "Award"}<strong>{ar ? "بكالوريوس" : "Bachelor's degree"}</strong></span><span>{ar ? "نمط الدراسة" : "Study mode"}<strong>{ar ? "انتظام كامل" : "Full time"}</strong></span><span>{ar ? "منهج التعلم" : "Learning approach"}<strong>{ar ? "محاضرات وحالات ومشروعات" : "Classes, cases and projects"}</strong></span><span>{ar ? "لغة الدراسة" : "Language"}<strong>{ar ? "الإنجليزية والعربية حسب المقرر" : "English and Arabic by course"}</strong></span></div></div></section>

    <section className="section program-overview" id="overview"><div className="shell program-overview-grid"><div><Eyebrow>{ar ? "نظرة تفصيلية" : "PROGRAM OVERVIEW"}</Eyebrow><h2>{ar ? `كيف يصنع ${item.ar} طريقة تفكيرك؟` : `How ${item.en} shapes the way you think`}</h2></div><div className="program-long-copy">{overview.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div></section>

    <section className="section soft program-learning"><div className="shell program-learning-grid"><div><Eyebrow>{ar ? "نواتج التعلم" : "LEARNING OUTCOMES"}</Eyebrow><h2>{ar ? "ما الذي ستكون قادرًا على فعله؟" : "What will you be able to do?"}</h2><p>{ar ? "يبني البرنامج المعرفة والقدرة على استخدامها في مواقف تحتاج التحليل والحكم المهني والتواصل الواضح." : "The program builds knowledge and the ability to use it in situations that require analysis, professional judgement and clear communication."}</p></div><div className="learning-outcomes">{learning.map((outcome, i) => <article key={outcome}><span>{String(i + 1).padStart(2, "0")}</span><h3>{outcome}</h3></article>)}</div></div></section>

    <section className="section" id="study"><div className="shell detail-grid"><div><Eyebrow>{ar ? "مقررات مختارة" : "SELECTED COURSES"}</Eyebrow><h2>{ar ? "من الأساس إلى الممارسة المتخصصة" : "From foundation to specialist practice"}</h2><p>{ar ? "يمثل هذا الاختيار موضوعات أساسية تساعد على فهم بنية البرنامج وتدرجه. وتتداخل المقررات مع حالات ومهام وعروض تطبيقية." : "This selection shows core subjects and the progression of the program. Courses connect with cases, assignments and applied presentations."}</p></div><div className="course-list">{(ar ? item.coursesAr : item.coursesEn).map((course, i) => <span key={course}><b>{String(i + 1).padStart(2, "0")}</b>{course}</span>)}</div></div></section>

    <section className="section dark-section program-skills"><div className="shell"><SectionTitle lang={lang} eyebrow={ar ? "المهارات التي تبنيها" : "SKILLS YOU BUILD"} title={ar ? "أدوات تستخدمها داخل القاعة وخارجها" : "Capabilities for the classroom and workplace"}/><div className="skill-strip">{skills.map((skill, i) => <span key={skill}><b>{String(i + 1).padStart(2, "0")}</b>{skill}</span>)}</div></div></section>

    <section className="section program-projects"><div className="shell"><SectionTitle lang={lang} eyebrow={ar ? "تجارب تطبيقية" : "APPLIED EXPERIENCES"} title={ar ? "مشروعات تحوّل المعرفة إلى قرار" : "Projects that turn knowledge into decisions"} text={ar ? "أمثلة على نوع العمل الذي يمكن أن يقدمه الطالب خلال رحلة التخصص." : "Examples of the work students may complete during the program."}/><div className="project-grid">{projects.map(([title, body], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    <section className="section soft"><div className="shell"><SectionTitle lang={lang} eyebrow={ar ? "مسارات مهنية" : "CAREER DIRECTIONS"} title={ar ? "أين يمكن أن يقودك التخصص؟" : "Where can this major take you?"}/><div className="career-paths">{(ar ? item.careerAr : item.careerEn).map((career, i) => <article key={career}><span>{String(i + 1).padStart(2, "0")}</span><h3>{career}</h3><p>{ar ? "اتجاه مهني يمكنك استكشافه عبر المقررات والمشروعات والتدريب وبناء ملف أعمال يعكس قدراتك." : "A professional direction to explore through courses, projects, internships and a portfolio that demonstrates your capabilities."}</p></article>)}</div></div></section>

    <section className="cta compact"><div className="shell"><h2>{ar ? "هل هذا البرنامج يناسبك؟" : "Could this program fit you?"}</h2><p>{ar ? "قارن اهتماماتك بنواتج التعلم والمشروعات والمسارات المهنية، ثم اسأل فريق القبول عن الخطوة التالية." : "Compare your interests with the learning outcomes, projects and career directions, then ask Admissions about the next step."}</p><a className="button gold" href="/contact?topic=admissions">{ar ? "اسأل عن البرنامج" : "Ask about the program"}<Arrow/></a></div></section>
  </main></Layout>;
}

function Admissions({ lang, setLang }) {
  const ar = lang === "ar";
  const steps = [["01", ar ? "اختر برنامجك" : "Choose your program", ar ? "قارن التخصصات والمقررات واتجاهات العمل." : "Compare majors, courses and career directions."], ["02", ar ? "جهّز ملفك" : "Prepare your file", ar ? "راجع المؤهل والهوية والصور والمستندات الدراسية." : "Review your qualification, identification, photographs and academic records."], ["03", ar ? "قدّم الطلب" : "Submit your application", ar ? "أدخل بياناتك وارفع المستندات عبر قناة التقديم الرسمية." : "Enter your details and upload documents through the official application channel."], ["04", ar ? "تابع النتيجة" : "Track the result", ar ? "راقب حالة الطلب واستكمل أي متطلبات إضافية." : "Track your application and complete any additional requirements."]];
  const routes = [
    [ar ? "الطلاب الجدد" : "New applicants", ar ? "لخريجي الثانوية العامة والشهادات المعادلة." : "For secondary-school and equivalent qualification holders."],
    [ar ? "التحويل" : "Transfer students", ar ? "للطلاب الراغبين في الانتقال من جامعة أو برنامج آخر." : "For students moving from another university or program."],
    [ar ? "الطلاب الدوليون" : "International applicants", ar ? "للطلاب المتقدمين بمؤهلات من خارج مصر." : "For applicants holding qualifications from outside Egypt."],
    [ar ? "المنح والدعم" : "Scholarships and support", ar ? "للتعرف على فرص الدعم وقواعد الاستحقاق المتاحة." : "For available support opportunities and eligibility rules."],
  ];
  const checklist = ar
    ? ["شهادة المؤهل وبيان الدرجات", "شهادة الميلاد والهوية", "صور شخصية حديثة", "مستندات التحويل عند الحاجة", "بيانات تواصل صحيحة", "نسخ رقمية واضحة للمستندات"]
    : ["Qualification and transcript", "Birth certificate and identification", "Recent personal photographs", "Transfer documents when relevant", "Accurate contact details", "Clear digital copies of documents"];
  return <Layout lang={lang} setLang={setLang}><main>
    <PageHero lang={lang} image={admissionsImage} imagePosition="center" eyebrow={ar ? "القبول والتحويل" : "ADMISSIONS & TRANSFERS"} title={ar ? "خطوة واضحة" : "A clear first step"} accent={ar ? "نحو التخصص المناسب." : "toward the right program."} text={ar ? "استكشف المسارات، جهّز مستنداتك، واعرف ما تحتاجه قبل بدء طلب الالتحاق." : "Explore the routes, prepare your documents and understand what you need before starting an application."}/>
    <section className="section"><div className="shell"><SectionTitle lang={lang} eyebrow={ar ? "رحلة التقديم" : "APPLICATION JOURNEY"} title={ar ? "من الاختيار إلى بدء الدراسة" : "From choosing a program to starting study"}/><div className="admission-steps">{steps.map(([no, title, body]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section soft"><div className="shell routes-grid"><div><Eyebrow>{ar ? "مسارات الالتحاق" : "ENTRY ROUTES"}</Eyebrow><h2>{ar ? "اختر المسار الأقرب إلى وضعك" : "Choose the route that matches your situation"}</h2><p>{ar ? "تختلف المستندات وخطوات المراجعة حسب نوع المؤهل وحالة المتقدم." : "Documents and review steps vary by qualification and applicant status."}</p></div><div className="routes-list">{routes.map(([title, body], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>
    <section className="section"><div className="shell checklist"><div><Eyebrow>{ar ? "قائمة الاستعداد" : "PREPARATION CHECKLIST"}</Eyebrow><h2>{ar ? "ما تحتاجه قبل التقديم" : "What to prepare before applying"}</h2></div><div className="check-grid">{checklist.map(item => <span key={item}>✓ {item}</span>)}</div></div></section>
    <section className="section soft admissions-resources"><div className="shell"><SectionTitle lang={lang} eyebrow={ar ? "الرسوم والمنح" : "FEES & SCHOLARSHIPS"} title={ar ? "راجع التكلفة وفرص الدعم من المصدر الرسمي" : "Check costs and support at the official source"} text={ar ? "تختلف الرسوم وشروط المنح حسب عام التقديم. استخدم روابط الجامعة الرسمية، ثم أكد التفاصيل مع فريق القبول." : "Fees and scholarship criteria can change by entry year. Use the university's official pages, then confirm details with Admissions."}/><div className="admissions-resource-grid"><a href="https://buc.edu.eg/admission/tuition-fees/" target="_blank" rel="noopener noreferrer"><span>01</span><h3>{ar ? "الرسوم الدراسية" : "Tuition fees"}</h3><p>{ar ? "اطّلع على الرسوم المعلنة للعام الدراسي المناسب لطلبك." : "Review the published fees for your intended entry year."}</p><b>{ar ? "صفحة الرسوم الرسمية" : "Official fees page"}<Arrow/></b></a><a href="https://buc.edu.eg/admission/scholarships/" target="_blank" rel="noopener noreferrer"><span>02</span><h3>{ar ? "المنح الدراسية" : "Scholarships"}</h3><p>{ar ? "تحقق من فرص الدعم، ومعايير الأهلية والمواعيد." : "Check support opportunities, eligibility criteria and deadlines."}</p><b>{ar ? "صفحة المنح الرسمية" : "Official scholarships page"}<Arrow/></b></a></div></div></section>
    <section className="cta compact"><div className="shell"><h2>{ar ? "ابدأ باستكشاف البرنامج" : "Begin by exploring the program"}</h2><p>{ar ? "راجع محتوى التخصص واتجاهاته المهنية قبل اتخاذ الخطوة التالية." : "Review the program content and career directions before taking the next step."}</p><div><a className="button gold" href="/programs">{ar ? "استكشف البرامج" : "Explore programs"}<Arrow/></a><a className="button outline" href="/contact?topic=admissions">{ar ? "اسأل فريق القبول" : "Ask Admissions"}<Arrow/></a></div></div></section>
  </main></Layout>;
}

function StudentLife({ lang, setLang }) {
  const ar = lang === "ar";
  return <Layout lang={lang} setLang={setLang}><main><PageHero lang={lang} image={studentImage} imagePosition="center" eyebrow={ar ? "الحياة الطلابية والخدمات" : "STUDENT LIFE & SERVICES"} title={ar ? "تعلّمك لا يتوقف" : "Learning continues"} accent={ar ? "عند باب القاعة." : "beyond the classroom."} text={ar ? "أندية ومبادرات ومساحات دعم تساعدك على تكوين صداقات وتجربة أدوار جديدة وتنمية اهتماماتك." : "Clubs, initiatives and support spaces help you build friendships, try new roles and develop your interests."}/><section className="section"><div className="shell"><SectionTitle lang={lang} eyebrow={ar ? "مجتمع نشط" : "AN ACTIVE COMMUNITY"} title={ar ? "مساحات للمشاركة والانتماء" : "Spaces to participate and belong"}/><div className="experience-grid">{[["01", ar ? "نادي ريادة الأعمال" : "Entrepreneurship Club", ar ? "حوّل الأفكار إلى نماذج أولية وتعلّم من تجارب زملائك." : "Turn ideas into early concepts and learn from your peers."], ["02", ar ? "المناظرات والنقاش" : "Debate and Discussion", ar ? "طوّر الحجة والاستماع والثقة في عرض الرأي." : "Develop argument, listening and confidence in presenting a view."], ["03", ar ? "المبادرات المجتمعية" : "Community Initiatives", ar ? "شارك بوقتك ومهاراتك في مشروعات ذات أثر ملموس." : "Contribute time and skills to projects with visible community impact."], ["04", ar ? "الرياضة والرفاه" : "Sport and Wellbeing", ar ? "حافظ على توازنك من خلال الحركة والأنشطة الاجتماعية." : "Support your balance through movement and social activity."], ["05", ar ? "الإرشاد الأكاديمي" : "Academic Advising", ar ? "رتّب أولوياتك وافهم اختياراتك الدراسية في الوقت المناسب." : "Set priorities and understand your academic choices at the right time."], ["06", ar ? "دعم الطالب" : "Student Support", ar ? "احصل على توجيه عملي عندما تحتاج مساعدة في رحلتك الجامعية." : "Find practical guidance when you need help during university life."]].map(([no, title, body]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section><section className="section soft"><div className="shell split-story"><div className="story-image"><img src={studentImage} alt=""/></div><div className="story-copy"><Eyebrow>{ar ? "صوت الطالب" : "STUDENT VOICE"}</Eyebrow><h2>{ar ? "شارك في صنع التجربة" : "Take part in shaping the experience"}</h2><p>{ar ? "تمنح الأنشطة واللجان الطلاب مساحة لاقتراح المبادرات وتنظيم الفعاليات وتطوير مهارات القيادة والعمل ضمن فريق." : "Activities and student committees create space to propose initiatives, organise events and develop leadership and teamwork."}</p><a className="text-link" href="/news">{ar ? "شاهد الفعاليات القادمة" : "See upcoming events"}<Arrow/></a></div></div></section></main></Layout>;
}

function Career({ lang, setLang }) {
  const ar = lang === "ar";
  return <Layout lang={lang} setLang={setLang}><main><PageHero lang={lang} image={careerImage} imagePosition="center" eyebrow={ar ? "التدريب والتوظيف" : "CAREER & TRAINING"} title={ar ? "حوّل ما تعلّمته" : "Turn what you learn"} accent={ar ? "إلى خطوة مهنية." : "into a professional step."} text={ar ? "رحلة تطوير تبدأ باكتشاف نقاط القوة، وتمتد إلى التدريب والمشروعات والاستعداد للمقابلات." : "A development journey that begins with your strengths and extends to internships, projects and interview preparation."}/><section className="section"><div className="shell"><SectionTitle lang={lang} eyebrow={ar ? "من الدراسة إلى العمل" : "FROM STUDY TO WORK"} title={ar ? "دعم مهني على مدار الرحلة" : "Career support throughout your journey"}/><div className="career-process">{[["01", ar ? "اكتشف اتجاهك" : "Discover your direction", ar ? "افهم اهتماماتك ونقاط قوتك والمجالات التي تستحق الاستكشاف." : "Understand your interests, strengths and fields worth exploring."], ["02", ar ? "ابنِ أدواتك" : "Build your toolkit", ar ? "طوّر السيرة الذاتية والملف المهني وطريقة عرض خبراتك." : "Develop your CV, professional profile and how you present experience."], ["03", ar ? "جرّب الواقع" : "Experience the workplace", ar ? "استخدم التدريب والمشروعات لفهم طبيعة الأدوار والفرق." : "Use internships and projects to understand roles and teams."], ["04", ar ? "استعد للفرصة" : "Prepare for opportunity", ar ? "تدرّب على المقابلات والتقييمات واتخاذ القرار المهني." : "Practise interviews, assessments and career decision making."]].map(([no, title, body]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section><section className="section dark-section"><div className="shell career-services"><div><Eyebrow>{ar ? "خدمات التطوير" : "CAREER DEVELOPMENT"}</Eyebrow><h2>{ar ? "تجارب عملية تبني الثقة" : "Practical experiences that build confidence"}</h2></div><div>{(ar ? ["عيادات السيرة الذاتية", "مقابلات تجريبية", "جلسات استكشاف المهن", "تحديات وحالات أعمال", "لقاءات مهنية", "إرشاد للتدريب الصيفي"] : ["CV clinics", "Mock interviews", "Career exploration sessions", "Business cases and challenges", "Professional talks", "Internship guidance"]).map((item, i) => <span key={item}><b>{String(i + 1).padStart(2, "0")}</b>{item}</span>)}</div></div></section><section className="section"><div className="shell split-story reverse"><div className="story-image"><img src={learningImage} alt=""/></div><div className="story-copy"><Eyebrow>{ar ? "التعلم التطبيقي" : "APPLIED LEARNING"}</Eyebrow><h2>{ar ? "المشروع مساحة لاختبار قدراتك" : "Projects give your capabilities a real test"}</h2><p>{ar ? "عندما تحلل حالة وتعرض توصية وتجيب عن الأسئلة، فإنك تبني خبرة يمكن شرحها في مقابلة العمل." : "When you analyse a case, present a recommendation and answer questions, you build experience you can explain in an interview."}</p><a className="text-link" href="/news/career-readiness-week">{ar ? "اكتشف أسبوع الاستعداد المهني" : "Discover Career Readiness Week"}<Arrow/></a></div></div></section></main></Layout>;
}

function News({ lang, setLang }) {
  const ar = lang === "ar";
  return <Layout lang={lang} setLang={setLang}><main><section className="plain-hero news-hero"><div className="shell"><Eyebrow>{ar ? "الأخبار والفعاليات" : "NEWS & EVENTS"}</Eyebrow><h1>{ar ? "المعرفة تتحرك داخل مجتمعنا" : "Ideas in motion across our community"}</h1><p>{ar ? "تابع اللقاءات والتحديات والأنشطة التي تضيف إلى تجربة الطالب داخل الكلية." : "Follow the conversations, challenges and activities that add depth to the student experience."}</p></div></section><section className="section"><div className="shell news-archive"><a className="archive-feature" href={`/news/${news[0].slug}`}><img src={newsImage} alt=""/><div><Eyebrow>{ar ? news[0].categoryAr : news[0].categoryEn}</Eyebrow><h2>{ar ? news[0].titleAr : news[0].titleEn}</h2><p>{ar ? news[0].excerptAr : news[0].excerptEn}</p><span>{ar ? news[0].dateAr : news[0].dateEn}</span></div></a><div className="archive-grid">{news.slice(1).map((item, i) => <a href={`/news/${item.slug}`} key={item.slug}><span className="archive-no">{String(i + 2).padStart(2, "0")}</span><small>{ar ? item.categoryAr : item.categoryEn}</small><h3>{ar ? item.titleAr : item.titleEn}</h3><p>{ar ? item.excerptAr : item.excerptEn}</p><footer><span>{ar ? item.dateAr : item.dateEn}</span><Arrow/></footer></a>)}</div></div></section></main></Layout>;
}

function NewsDetail({ lang, setLang, item }) {
  const ar = lang === "ar";
  if (!item) return <NotFound lang={lang} setLang={setLang}/>;
  return <Layout lang={lang} setLang={setLang}><main><article className="article-page"><header className="article-header"><div className="shell"><a className="back-link" href="/news">← {ar ? "الأخبار والفعاليات" : "News & events"}</a><Eyebrow>{ar ? item.categoryAr : item.categoryEn}</Eyebrow><h1>{ar ? item.titleAr : item.titleEn}</h1><p>{ar ? item.excerptAr : item.excerptEn}</p><time>{ar ? item.dateAr : item.dateEn}</time></div></header><div className="article-image shell"><img src={newsImage} alt=""/></div><div className="article-body shell"><p>{ar ? item.bodyAr : item.bodyEn}</p><h2>{ar ? "ماذا سيأخذ المشاركون من التجربة؟" : "What will participants take from the experience?"}</h2><p>{ar ? "توفر الفعالية مساحة للتعلم من وجهات نظر متعددة، وتحويل النقاش إلى أسئلة عملية يمكن للطالب استخدامها في مشروعاته واختياراته المهنية." : "The event creates space to learn from multiple perspectives and turn discussion into practical questions students can use in projects and career decisions."}</p><div className="article-meta"><span>{ar ? "الفئة" : "Category"}<b>{ar ? item.categoryAr : item.categoryEn}</b></span><span>{ar ? "المكان" : "Venue"}<b>{ar ? "حرم الجامعة" : "University campus"}</b></span><span>{ar ? "الجمهور" : "Audience"}<b>{ar ? "طلاب الكلية والمهتمون" : "Faculty students and guests"}</b></span></div><a className="button navy" href="/contact?topic=event">{ar ? "استفسر عن الفعالية" : "Ask about the event"}<Arrow/></a></div></article></main></Layout>;
}

function Alumni({ lang, setLang }) {
  const ar = lang === "ar";
  return <Layout lang={lang} setLang={setLang}><main><PageHero lang={lang} image={alumniImage} imagePosition="center" eyebrow={ar ? "الخريجون وقصص النجاح" : "ALUMNI & STORIES"} title={ar ? "التخرج بداية" : "Graduation begins"} accent={ar ? "لفصل جديد." : "a new chapter."} text={ar ? "يبقى الخريج جزءًا من مجتمع الكلية، يشارك خبرته ويواصل التعلم ويبني روابط مهنية جديدة." : "Graduates remain part of the Faculty community, sharing experience, continuing to learn and building new professional connections."}/><section className="section"><div className="shell"><SectionTitle lang={lang} eyebrow={ar ? "قصص الخريجين" : "ALUMNI STORIES"} title={ar ? "خبرات بدأت من مشروع أو سؤال" : "Journeys that began with a project or question"}/><div className="alumni-grid">{alumniStories.map((story, i) => <article key={story.nameEn}><span>“</span><blockquote>{ar ? story.quoteAr : story.quoteEn}</blockquote><footer><b>{ar ? story.nameAr : story.nameEn}</b><small>{ar ? story.roleAr : story.roleEn}</small><em>{String(i + 1).padStart(2, "0")}</em></footer></article>)}</div></div></section><section className="section soft"><div className="shell alumni-network"><div><Eyebrow>{ar ? "شبكة الخريجين" : "ALUMNI NETWORK"}</Eyebrow><h2>{ar ? "تواصل مستمر بعد التخرج" : "Connection continues after graduation"}</h2><p>{ar ? "لقاءات مهنية، جلسات مشاركة خبرات وفرص للمساهمة في دعم الطلاب الحاليين." : "Professional gatherings, experience-sharing sessions and opportunities to support current students."}</p></div><div>{(ar ? ["تحديث بياناتك المهنية", "شارك قصة مسارك", "ساهم كمرشد مهني", "تابع لقاءات الخريجين"] : ["Update your professional details", "Share your career story", "Contribute as a mentor", "Follow alumni gatherings"]).map(item => <a href="/contact?topic=alumni" key={item}>{item}<Arrow/></a>)}</div></div></section></main></Layout>;
}

function Contact({ lang, setLang }) {
  const ar = lang === "ar";
  const [sent, setSent] = useState(false);
  const submit = e => { e.preventDefault(); setSent(true); e.currentTarget.reset(); };
  return <Layout lang={lang} setLang={setLang}><main><section className="contact-hero"><div className="shell contact-hero-grid"><div><Eyebrow>{ar ? "تواصل معنا" : "CONTACT US"}</Eyebrow><h1>{ar ? "كيف يمكننا مساعدتك؟" : "How can we help?"}</h1><p>{ar ? "اختر موضوع رسالتك واكتب التفاصيل التي تساعدنا على توجيه استفسارك إلى المسار المناسب." : "Choose your topic and share enough detail to help us direct your enquiry."}</p></div><img src={contactImage} alt=""/></div></section><section className="section contact-section"><div className="shell contact-grid"><aside><span>01</span><h2>{ar ? "بيانات التواصل" : "Contact details"}</h2><div><small>{ar ? "البريد الإلكتروني" : "Email"}</small><a href="mailto:business@buc.edu.eg">business@buc.edu.eg</a></div><div><small>{ar ? "الهاتف" : "Phone"}</small><a dir="ltr" href="tel:+20228650400">+20 2 2865 0400</a></div><div><small>{ar ? "ساعات الاستقبال" : "Office hours"}</small><p>{ar ? "الأحد إلى الخميس · 9:00 ص – 3:00 م" : "Sunday to Thursday · 9:00 AM – 3:00 PM"}</p></div><div><small>{ar ? "الموقع" : "Location"}</small><p>{ar ? "مدينة بدر، القاهرة" : "Badr City, Cairo"}</p></div></aside><form className="contact-form" onSubmit={submit}><div className="form-head"><span>02</span><h2>{ar ? "أرسل رسالة" : "Send a message"}</h2></div>{sent && <p className="success" role="status">{ar ? "شكرًا لتواصلك. تم تسجيل رسالتك بنجاح." : "Thank you for contacting us. Your message has been recorded."}</p>}<div className="field-row"><label>{ar ? "الاسم الكامل" : "Full name"}<input required autoComplete="name"/></label><label>{ar ? "البريد الإلكتروني" : "Email address"}<input required type="email" autoComplete="email"/></label></div><div className="field-row"><label>{ar ? "رقم الهاتف" : "Phone number"}<input type="tel" autoComplete="tel"/></label><label>{ar ? "موضوع الرسالة" : "Topic"}<select defaultValue={new URLSearchParams(location.search).get("topic") || "general"}><option value="general">{ar ? "استفسار عام" : "General enquiry"}</option><option value="admissions">{ar ? "القبول والتقديم" : "Admissions"}</option><option value="program">{ar ? "البرامج الأكاديمية" : "Academic programs"}</option><option value="event">{ar ? "الأخبار والفعاليات" : "News and events"}</option><option value="alumni">{ar ? "الخريجون" : "Alumni"}</option></select></label></div><label>{ar ? "رسالتك" : "Your message"}<textarea required minLength="10" rows="6"/></label><button className="button navy">{ar ? "إرسال الرسالة" : "Send message"}<Arrow/></button></form></div></section></main></Layout>;
}

function Portal({ lang, setLang }) {
  const ar = lang === "ar";
  const [notice, setNotice] = useState(false);
  const submit = e => { e.preventDefault(); setNotice(true); };
  return <div className="portal-page"><img className="portal-bg" src={portalImage} alt=""/><div className="portal-shade"/><a className="portal-brand" href="/"><Crest/><span><strong>{ar ? "كلية إدارة الأعمال والاقتصاد" : "Faculty of Business & Economics"}</strong><small>SMART FACULTY PORTAL</small></span></a><button className="portal-language" onClick={() => setLang(ar ? "en" : "ar")}>{ar ? "EN" : "ع"}</button><div className="portal-card"><Eyebrow>{ar ? "بوابة المجتمع الأكاديمي" : "ACADEMIC COMMUNITY PORTAL"}</Eyebrow><h1>{ar ? "مرحبًا بعودتك" : "Welcome back"}</h1><p>{ar ? "نقطة دخول موحدة لخدمات الطلاب وأعضاء هيئة التدريس." : "One access point for student and faculty services."}</p>{notice && <p className="success" role="status">{ar ? "تعذر التحقق من بيانات الدخول. راجع البريد الجامعي وكلمة المرور." : "We could not verify these details. Check your University email and password."}</p>}<form onSubmit={submit}><label>{ar ? "البريد الجامعي" : "University email"}<input type="email" required placeholder="name@buc.edu.eg"/></label><label>{ar ? "كلمة المرور" : "Password"}<input type="password" required/></label><div className="login-options"><label><input type="checkbox"/> {ar ? "تذكرني" : "Remember me"}</label><a href="/contact">{ar ? "تحتاج مساعدة؟" : "Need help?"}</a></div><button className="button gold">{ar ? "دخول البوابة" : "Sign in"}<Arrow/></button></form><a className="back-home" href="/">← {ar ? "العودة إلى الموقع العام" : "Back to public website"}</a></div></div>;
}

function NotFound({ lang, setLang }) {
  const ar = lang === "ar";
  return <Layout lang={lang} setLang={setLang}><main className="not-found"><span>404</span><h1>{ar ? "لم نجد هذه الصفحة" : "We could not find this page"}</h1><p>{ar ? "يمكنك العودة إلى الصفحة الرئيسية أو استكشاف البرامج الأكاديمية." : "Return to the homepage or explore the academic programs."}</p><a className="button navy" href="/">{ar ? "العودة للرئيسية" : "Back home"}<Arrow/></a></main></Layout>;
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("buc-showcase-lang") === "en" ? "en" : "ar");
  const path = decodeURI(location.pathname).replace(/\/$/, "") || "/";
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("buc-showcase-lang", lang);
    const program = path.startsWith("/programs/") ? programs.find(p => p.slug === path.split("/")[2]) : null;
    const story = path.startsWith("/news/") ? news.find(n => n.slug === path.split("/")[2]) : null;
    const meta = program ? [program.ar, program.en] : story ? [story.titleAr, story.titleEn] : pageMeta[path] || ["الصفحة غير موجودة", "Page not found"];
    document.title = `${lang === "ar" ? meta[0] : meta[1]} | BUC`;
    if (location.hash) {
      requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [lang, path]);
  const props = { lang, setLang };
  if (path === "/") return <Home {...props}/>;
  if (path === "/about") return <About {...props}/>;
  if (path === "/programs") return <Programs {...props}/>;
  if (path.startsWith("/programs/")) return <ProgramDetail {...props} item={programs.find(p => p.slug === path.split("/")[2])}/>;
  if (path === "/admissions") return <Admissions {...props}/>;
  if (path === "/student-life") return <StudentLife {...props}/>;
  if (path === "/career") return <Career {...props}/>;
  if (path === "/news") return <News {...props}/>;
  if (path.startsWith("/news/")) return <NewsDetail {...props} item={news.find(n => n.slug === path.split("/")[2])}/>;
  if (path === "/alumni") return <Alumni {...props}/>;
  if (path === "/contact") return <Contact {...props}/>;
  if (path === "/portal") return <Portal {...props}/>;
  return <NotFound {...props}/>;
}
