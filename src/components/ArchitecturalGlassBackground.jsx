import { memo } from "react";
import "./ArchitecturalGlassBackground.css";

const sheets = [
  {
    name: "light",
    path: "M-240 112 Q40 28 310 122 Q505 174 730 98 Q960 24 1190 108 Q1435 176 1630 86 Q1765 38 1840 72 L1840 300 H-240 Z",
  },
  {
    name: "middle",
    path: "M-240 146 Q35 69 320 155 Q520 202 748 132 Q978 61 1210 142 Q1450 201 1640 121 Q1770 76 1840 106 L1840 300 H-240 Z",
  },
  {
    name: "front",
    path: "M-240 180 Q45 105 338 188 Q540 233 768 166 Q995 99 1230 176 Q1460 229 1654 156 Q1780 116 1840 138 L1840 300 H-240 Z",
  },
  {
    name: "deep",
    path: "M-240 214 Q55 143 355 220 Q560 260 790 200 Q1015 140 1250 210 Q1475 256 1668 192 Q1788 158 1840 174 L1840 300 H-240 Z",
  },
  {
    name: "base",
    path: "M-240 248 Q70 185 375 254 Q590 286 810 232 Q1030 182 1270 242 Q1490 278 1680 228 Q1795 198 1840 208 L1840 300 H-240 Z",
  },
];

const ArchitecturalGlassBackground = memo(function ArchitecturalGlassBackground() {
  return <div className="architectural-glass" aria-hidden="true">
    <svg viewBox="0 0 1600 300" preserveAspectRatio="none" focusable="false">
      <defs>
        <linearGradient id="architectural-glass-light" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#102a43" stopOpacity=".2"/>
          <stop offset=".55" stopColor="#102a43" stopOpacity=".28"/>
          <stop offset="1" stopColor="#102a43" stopOpacity=".2"/>
        </linearGradient>
        <linearGradient id="architectural-glass-middle" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#102a43" stopOpacity=".36"/>
          <stop offset=".6" stopColor="#102a43" stopOpacity=".46"/>
          <stop offset="1" stopColor="#102a43" stopOpacity=".36"/>
        </linearGradient>
        <linearGradient id="architectural-glass-front" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#102a43" stopOpacity=".55"/>
          <stop offset=".55" stopColor="#102a43" stopOpacity=".66"/>
          <stop offset="1" stopColor="#102a43" stopOpacity=".56"/>
        </linearGradient>
        <linearGradient id="architectural-glass-deep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#102a43" stopOpacity=".74"/>
          <stop offset=".55" stopColor="#102a43" stopOpacity=".84"/>
          <stop offset="1" stopColor="#102a43" stopOpacity=".76"/>
        </linearGradient>
        <linearGradient id="architectural-glass-base" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#102a43" stopOpacity=".94"/>
          <stop offset=".5" stopColor="#102a43" stopOpacity=".99"/>
          <stop offset="1" stopColor="#102a43" stopOpacity=".96"/>
        </linearGradient>
      </defs>
      {sheets.map(sheet => <path className={`architectural-glass__sheet architectural-glass__sheet--${sheet.name}`} key={sheet.name} d={sheet.path} fill={`url(#architectural-glass-${sheet.name})`}/>)}
    </svg>
  </div>;
});

export default ArchitecturalGlassBackground;
