import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { STATS } from "../data/stats";
import { C, SECTION } from "../lib/theme";

export default function Hero() {
  return (
    <header id="top" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* grilla animada */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${C.lineSoft} 1px,transparent 1px),linear-gradient(90deg,${C.lineSoft} 1px,transparent 1px)`,
          backgroundSize: "56px 56px",
          animation: "rt-grid 9s linear infinite",
          maskImage: "radial-gradient(circle at 60% 30%, #000 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at 60% 30%, #000 0%, transparent 75%)",
        }}
      />
      {/* glows */}
      <div style={{ position: "absolute", width: 720, height: 720, borderRadius: "50%", top: -220, right: -180, background: "radial-gradient(circle,rgba(30,99,255,.28),transparent 60%)", filter: "blur(10px)" }} />
      <div style={{ position: "absolute", width: 560, height: 560, borderRadius: "50%", bottom: -240, left: -160, background: "radial-gradient(circle,rgba(56,225,255,.18),transparent 60%)", filter: "blur(10px)" }} />
      {/* anillo orbital */}
      <svg width="560" height="560" viewBox="0 0 100 100" style={{ position: "absolute", right: "-6%", bottom: "-18%", opacity: 0.5 }}>
        <g style={{ transformOrigin: "50% 50%", animation: "rt-spin 26s linear infinite" }}>
          <circle cx="50" cy="50" r="46" fill="none" stroke={C.neon} strokeWidth=".5" strokeDasharray="220 70" />
          <circle cx="50" cy="4" r="1.6" fill={C.neon} />
        </g>
      </svg>

      <div style={{ ...SECTION, position: "relative", zIndex: 2, paddingTop: 120, paddingBottom: 80 }}>
        <Reveal>
          <div className="rt-d" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "7px 14px", borderRadius: 100, border: "1px solid " + C.line, background: "rgba(30,99,255,.08)", color: C.neon, fontSize: ".72rem", letterSpacing: ".22em", textTransform: "uppercase", marginBottom: 30 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.neon, animation: "rt-blink 1.6s infinite" }} />
            Ingeniería avanzada · Cali, Colombia
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="rt-d" style={{ fontSize: "clamp(2.6rem,7vw,5.6rem)", lineHeight: 1.02, fontWeight: 700, letterSpacing: "-.01em", maxWidth: "16ch", margin: 0 }}>
            La industria que <span style={{ color: C.neon }}>no se detiene</span> empieza aquí.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p style={{ marginTop: 26, maxWidth: "54ch", color: C.grayLt, fontSize: "clamp(1rem,1.6vw,1.2rem)", lineHeight: 1.7 }}>
            Mantenimiento predictivo, monitoreo en tiempo real e inteligencia artificial para mantener cada activo de tu planta operando al máximo. Ingeniería de clase mundial, ejecutada en marcha.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#contacto" className="rt-btn" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 30px", borderRadius: 100, background: C.blue, color: "#fff", textDecoration: "none", fontWeight: 600, boxShadow: "0 14px 44px -12px " + C.blue }}>
              Agenda un diagnóstico <ArrowRight size={18} />
            </a>
            <a href="#dashboard" className="rt-btn" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 30px", borderRadius: 100, background: "transparent", border: "1px solid " + C.line, color: C.white, textDecoration: "none", fontWeight: 600 }}>
              Ver plataforma 4.0
            </a>
          </div>
        </Reveal>
        <Reveal delay={320}>
          <div style={{ marginTop: 64, display: "flex", gap: 40, flexWrap: "wrap" }}>
            {STATS.map((s) => (
              <div key={s.l}>
                <div className="rt-d" style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 700, color: C.white }}>
                  <Counter to={s.n} suffix={s.s} decimals={s.dec || 0} />
                </div>
                <div style={{ color: C.gray, fontSize: ".84rem", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
}
