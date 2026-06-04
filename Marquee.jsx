import { C } from "../lib/theme";

const ITEMS = ["Confiabilidad", "Vibraciones", "Termografía", "IoT", "Drones", "IA Predictiva", "Industria 4.0", "Impresión 3D", "Eficiencia Energética", "Automatización"];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div style={{ borderTop: "1px solid " + C.lineSoft, borderBottom: "1px solid " + C.lineSoft, background: C.bg2, overflow: "hidden", padding: "20px 0" }}>
      <div style={{ display: "flex", whiteSpace: "nowrap", animation: "rt-marquee 28s linear infinite", width: "max-content" }}>
        {row.map((w, i) => (
          <span key={i} className="rt-d" style={{ display: "inline-flex", alignItems: "center", gap: 28, padding: "0 28px", color: i % 2 ? C.gray : C.grayLt, fontSize: "1.05rem", letterSpacing: ".06em", textTransform: "uppercase", fontWeight: 500 }}>
            {w}
            <span style={{ color: C.neon }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
