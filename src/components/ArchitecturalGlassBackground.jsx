import { memo } from "react";
import "./ArchitecturalGlassBackground.css";

const sheets = [
  {
    name: "light",
    path: "M-240 104 C90 35 280 120 550 82 C855 34 1045 115 1330 65 C1535 27 1720 80 1840 55 L1840 300 H-240 Z",
  },
  {
    name: "middle",
    path: "M-240 145 C85 96 305 150 570 112 C890 67 1070 145 1360 100 C1570 69 1735 116 1840 94 L1840 300 H-240 Z",
  },
  {
    name: "front",
    path: "M-240 188 C100 130 330 181 610 143 C915 105 1090 169 1380 130 C1585 104 1745 141 1840 125 L1840 300 H-240 Z",
  },
];

const ArchitecturalGlassBackground = memo(function ArchitecturalGlassBackground() {
  return <div className="architectural-glass" aria-hidden="true">
    <svg viewBox="0 0 1600 300" preserveAspectRatio="none" focusable="false">
      <defs>
        <linearGradient id="architectural-glass-light" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e4f3ff" stopOpacity=".24"/>
          <stop offset=".55" stopColor="#78b7e3" stopOpacity=".3"/>
          <stop offset="1" stopColor="#e4f3ff" stopOpacity=".18"/>
        </linearGradient>
        <linearGradient id="architectural-glass-middle" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#78b7e3" stopOpacity=".42"/>
          <stop offset=".6" stopColor="#1e4e79" stopOpacity=".66"/>
          <stop offset="1" stopColor="#78b7e3" stopOpacity=".42"/>
        </linearGradient>
        <linearGradient id="architectural-glass-front" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#102a43" stopOpacity=".76"/>
          <stop offset=".55" stopColor="#1e4e79" stopOpacity=".88"/>
          <stop offset="1" stopColor="#102a43" stopOpacity=".8"/>
        </linearGradient>
      </defs>
      {sheets.map(sheet => <path className={`architectural-glass__sheet architectural-glass__sheet--${sheet.name}`} key={sheet.name} d={sheet.path} fill={`url(#architectural-glass-${sheet.name})`}/>)}
      <path d="M-240 221 C135 167 420 218 755 179 C1090 140 1370 201 1840 160 L1840 300 H-240 Z" fill="#102a43" fillOpacity=".88"/>
    </svg>
  </div>;
});

export default ArchitecturalGlassBackground;
