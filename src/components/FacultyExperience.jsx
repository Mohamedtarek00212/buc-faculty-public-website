import { useState } from "react";

export default function FacultyExperience({ videos, lang }) {
  const ar = lang === "ar";
  const [selected, setSelected] = useState(0);
  const video = videos[selected];
  return <section className="section faculty-experience" id="experience" aria-labelledby="experience-heading"><div className="shell">
    <div className="editorial-section-heading"><div><span className="eyebrow">{ar ? "تجربة الدراسة" : "THE FACULTY EXPERIENCE"}</span><h2 id="experience-heading">{ar ? "تعرّف على الكلية عن قرب" : "Get to know your Faculty"}</h2></div><p>{ar ? "شاهد فيديوهات الكلية، ثم استكشف الحياة الطلابية والدعم الذي يهمك خلال الدراسة وبعدها." : "Watch the Faculty films, then explore student life and support for your next steps."}</p></div>
    <div className="faculty-film-layout"><div className="faculty-film-player"><iframe key={video.id} src={video.embed} title={ar ? video.titleAr : video.titleEn} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/><a href={video.url} target="_blank" rel="noopener noreferrer">{ar ? "مشاهدة على يوتيوب" : "Watch on YouTube"} ↗</a></div>
    <div className="faculty-film-list" role="group" aria-label={ar ? "اختر فيديو" : "Choose a film"}>{videos.map((item,index)=><button key={item.id} onClick={()=>setSelected(index)} aria-pressed={selected === index}><span>{String(index+1).padStart(2,"0")}</span><div><strong>{ar ? item.titleAr : item.titleEn}</strong><small>{ar ? item.captionAr : item.captionEn}</small></div><b aria-hidden="true">▷</b></button>)}</div></div>
    <div className="faculty-support-links">{[
      ["/student-life", ar ? "الحياة الجامعية" : "Student life", ar ? "الأنشطة والمشاركة والإرشاد الأكاديمي" : "Activities, involvement and academic guidance"],
      ["/career", ar ? "التدريب والمسار المهني" : "Career & training", ar ? "استكشف خطوات الاستعداد لسوق العمل" : "Explore your preparation for the workplace"],
    ].map(([href,title,body])=><a href={href} key={href}><div><h3>{title}</h3><p>{body}</p></div><span aria-hidden="true">↗</span></a>)}</div>
  </div></section>;
}
