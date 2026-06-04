import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { Tag } from "./ui";
import { PROJECTS } from "../data/projects";
import { C, SECTION } from "../lib/theme";

export default function Projects() {
  return (
    <section id="proyectos" style={{ padding: "120px 0" }}>
      <div style={SECTION}>
        <Reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
          <div>
            <Tag>Proyectos</Tag>
            <h2 className="rt-d" style={{ fontSize: "clamp(2rem,4.5vw,3.4rem)", fontWeight: 700, lineHeight: 1.06, maxWidth: "18ch", margin: 0 }}>
              Operaciones de misión crítica.
            </h2>
          </div>
          <a href="#contacto" className="rt-link" style={{ color: C.grayLt, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 600 }}>
            Ver todos <ArrowUpRight size={18} />
          </a>
        </Reveal>
        <div style={{ marginTop: 50, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 20 }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 70}>
              <div className="rt-proj" style={{ borderRadius: 18, overflow: "hidden", border: "1px solid " + C.line, background: C.panel }}>
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <div className="rt-proj-img" style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg,${p.g[0]},${p.g[1]})` }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${C.lineSoft} 1px,transparent 1px),linear-gradient(90deg,${C.lineSoft} 1px,transparent 1px)`, backgroundSize: "28px 28px", opacity: 0.5 }} />
                    <p.icon size={64} strokeWidth={1.2} style={{ position: "absolute", right: 22, bottom: 18, color: "rgba(255,255,255,.85)" }} />
                  </div>
                </div>
                <div style={{ padding: "22px 24px" }}>
                  <div className="rt-d" style={{ color: C.neon, fontSize: ".72rem", letterSpacing: ".18em", textTransform: "uppercase" }}>{p.c}</div>
                  <h3 className="rt-d" style={{ fontSize: "1.25rem", fontWeight: 600, marginTop: 10 }}>{p.t}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
