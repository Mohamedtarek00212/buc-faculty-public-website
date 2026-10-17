# Image asset register

Internal production list for the public website showcase. These assets support the presentation and should later be replaced or formally approved by the Faculty before public launch.

| File | Website use | Composition requirement |
| --- | --- | --- |
| `hero-business-lecture-hall.jpg` | Current homepage hero | Conceptual Cairo business-and-economics lecture theatre without people, readable text or BUC branding; not a photograph of the real campus |
| `hero-academic-atrium.jpg` | Retired homepage hero asset | Former unbranded academic library atrium, kept in the asset library but no longer used |
| `hero-business-campus.jpg` | Retired homepage hero asset | Former wide editorial scene with students; kept in the asset library but no longer used on the homepage |
| `about-collaboration.jpg` | About page and faculty story | Business students collaborating in a modern seminar room |
| `student-life.jpg` | Student life page | Candid campus-club activity with a lively but refined mood |
| `applied-learning.jpg` | Programs and practical learning | Case-study discussion with laptops and business charts without readable text |
| `career-studio.jpg` | Career and training | Interview coaching and employer conversation in a professional setting |
| `graduation-alumni.jpg` | Alumni stories | Elegant graduation moment with diverse graduates |
| `news-event.jpg` | News and events | Academic business forum audience and speaker, no branding or text |
| `admissions-welcome.jpg` | Admissions page | Welcoming student-adviser conversation with room for page copy |
| `contact-campus.jpg` | Contact page | Contemporary university reception and consultation scene |
| `portal-login.jpg` | Smart Faculty Portal sign-in | Quiet study setting with laptop, premium dark-blue lighting |

## Shared art direction

- Photorealistic editorial photography in a modern Egyptian or Middle Eastern private-university environment.
- Natural student diversity, realistic expressions and modest contemporary clothing.
- Warm daylight, deep navy accents and restrained gold details matching the BUC showcase palette.
- No visible logos, no generated text, no copied real campus architecture, and no implication that the pictured building is the real BUC campus.
- Each image should remain usable in responsive crops and compress well for the web.

## Generation prompt set

All assets used the built-in image generation tool with the `photorealistic-natural` use case. The shared prompt requested premium editorial university photography in a contemporary Egyptian or Middle Eastern setting, natural student diversity, authentic skin and fabric texture, warm daylight or refined evening lighting, deep navy accents, restrained gold details, and responsive composition. Every prompt prohibited text, logos, emblems, watermarks, copied real-campus architecture and distorted hands.

Scene-specific prompts:

1. Homepage hero: students walking beside generic contemporary academic architecture, grouped on the right with negative space for copy.
2. About: four business students discussing a case study around laptops in a modern seminar room.
3. Student life: a student-led entrepreneurship activity on a shaded campus terrace.
4. Applied learning: a case-study presentation with abstract, unreadable business charts.
5. Career: a student practising an interview with a career adviser and industry mentor.
6. Alumni: graduates in navy gowns with understated gold trim walking together at sunset.
7. News: an academic business forum with a speaker and engaged student audience.
8. Admissions: a prospective student and parent speaking with an admissions adviser.
9. Contact: a student speaking with a faculty reception team member.
10. Portal: a student using a laptop in a quiet evening study lounge, with deep-blue negative space for the sign-in panel.

The current homepage hero was generated separately with the built-in image-generation tool in new-image mode. Final prompt: “Photorealistic wide editorial architectural photograph of a premium contemporary university library atrium in warm daylight, graceful interior colonnade, bookshelves and quiet study tables, refined neutral stone and subtle deep-navy accents, generous uncluttered negative space across the foreground for website headline, sophisticated academic atmosphere. No people, no faces, no logos, no university emblems, no signage, no readable text, no map or charts, no watermark, no recognizable real campus architecture.” It is illustrative, not documentary imagery of BUC.

## Academic program image set

The ten program pages use a second built-in generation set saved under `src/assets/images/programs/`. Each wide 16:10 image communicates the discipline through its tools, data, documents and professional environment rather than generic meeting scenes. The shared direction uses deep navy, warm-neutral styling, restrained gold details and a responsive center-safe crop. Every prompt explicitly prohibits people, faces, hands and silhouettes, as well as readable text, logos, university names and watermarks.

| File | Scene-specific prompt |
| --- | --- |
| `accounting.jpg` | Ledger, calculator, audit marks, financial statements and a brass balance scale. |
| `accounting-finance.jpg` | Valuation dashboard, cash-flow evidence, report binders, calculator and investment-growth objects. |
| `banking-finance.jpg` | Vault geometry, blank payment card, mobile-banking dashboard, coins, risk gauge and security shield. |
| `marketing.jpg` | Campaign analytics, social-ad mockups, unlabelled packaging, camera, content calendar, funnel and brand palette. |
| `human-resources.jpg` | Empty interview setting, CV folders, organisation chart, competency matrix, training plan and blank ID badges. |
| `hospitality-management.jpg` | Luxury hotel reception, service bell, key cards, reservation screen, luggage trolley, linens and room-service tray. |
| `economics.jpg` | Global trade map, supply-and-demand curves, economic indicators, coins, containers and policy reports. |
| `business-information-systems.jpg` | ERP workflow, databases, cloud integration, process maps, dashboard screens and server stack. |
| `data-science.jpg` | Scatter plots, distributions, heatmaps, predictive curves, analytics dashboards and a translucent data cube. |
| `artificial-intelligence.jpg` | AI processor, neural network, decision flow, KPI dashboard, automation blocks and governance symbols. |
