import { Plane, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { Tag } from "./ui";
import { C, SECTION } from "../lib/theme";

const POINTS = [
  "Cámaras térmicas + 4K para inspección sin riesgo humano",
  "Mapeo fotogramétrico y modelos 3D de instalaciones",
  "Detección de puntos calientes en líneas de alta tensión",
  "Inspección de techos, tanques, torres y estructuras",
];

export default function Drones() {
  return (
    <section id="drones" style={{ padding: "120px 0", background: C.bg2, borderTop: "1px solid " + C.lineSoft, borderBottom: "1px solid " + C.lineSoft }}>
      <div style={{ ...SECTION, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 56, alignItems: "center" }}>
        <Reveal>
          <Tag>Drones & Inspección</Tag>
          <h2 className="rt-d" style={{ fontSize: "clamp(2rem,4.2vw,3.2rem)", fontWeight: 700, lineHeight: 1.08, margin: 0 }}>
            Vemos lo que nadie más puede.
          </h2>
          <p style={{ color: C.gray, marginTop: 18, lineHeight: 1.7, maxWidth: "48ch" }}>
            Inspección aérea autónoma para activos de difícil acceso. Datos precisos, cero riesgo y diagnósticos en tiempo récord.
          </p>
          <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 14 }}>
            {POINTS.map((p) => (
              <div key={p} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <CheckCircle2 size={20} style={{ color: C.neon, flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: C.grayLt, fontSize: ".96rem" }}>{p}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ position: "relative", borderRadius: 22, overflow: "hidden", border: "1px solid " + C.line, background: "linear-gradient(160deg,#0A1F4D,#05070E)", minHeight: 360, padding: 28 }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${C.lineSoft} 1px,transparent 1px),linear-gradient(90deg,${C.lineSoft} 1px,transparent 1px)`, backgroundSize: "34px 34px", opacity: 0.6 }} />
            <div style={{ position: "absolute", top: "50%", left: "50%", width: 260, height: 260, marginLeft: -130, marginTop: -130, borderRadius: "50%", border: "1px solid rgba(56,225,255,.3)" }} />
            <div style={{ position: "absolute", top: "50%", left: "50%", width: 160, height: 160, marginLeft: -80, marginTop: -80, borderRadius: "50%", border: "1px solid rgba(56,225,255,.25)", animation: "rt-pulse 3s ease-in-out infinite" }} />
            <Plane size={70} strokeWidth={1.2} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", color: C.neon, animation: "rt-float 5s ease-in-out infinite" }} />
            <div style={{ position: "absolute", left: 26, bottom: 24, display: "flex", gap: 18, alignItems: "center" }}>
              <span className="rt-d" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: C.neon, fontSize: ".75rem", letterSpacing: ".14em", textTransform: "uppercase" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.neon, animation: "rt-blink 1.4s infinite" }} /> Live feed
              </span>
              <span style={{ color: C.gray, fontSize: ".78rem" }}>ALT 42m · 36.4°C · OK</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
