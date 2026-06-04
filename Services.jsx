import Reveal from "./Reveal";
import { Tag, IconChip } from "./ui";
import { SERVICES } from "../data/services";
import { C, SECTION } from "../lib/theme";

export default function Services() {
  return (
    <section id="servicios" style={{ padding: "120px 0" }}>
      <div style={SECTION}>
        <Reveal>
          <Tag>Servicios</Tag>
          <h2 className="rt-d" style={{ fontSize: "clamp(2rem,4.5vw,3.4rem)", fontWeight: 700, lineHeight: 1.06, maxWidth: "20ch", margin: 0 }}>
            Ingeniería integral para toda la planta.
          </h2>
          <p style={{ color: C.gray, maxWidth: "56ch", marginTop: 18, lineHeight: 1.7 }}>
            Desde el sensor hasta la sala de control: cubrimos todo el ciclo de vida de tus activos con tecnología de punta.
          </p>
        </Reveal>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 18 }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 70}>
              <div className="rt-svc" style={{ height: "100%", padding: "30px 26px", borderRadius: 18, background: "rgba(14,21,40,.6)", border: "1px solid " + C.line, position: "relative", overflow: "hidden" }}>
                <IconChip Icon={s.icon} />
                <h3 className="rt-d" style={{ marginTop: 22, fontSize: "1.18rem", fontWeight: 600, lineHeight: 1.25 }}>{s.t}</h3>
                <p style={{ color: C.gray, fontSize: ".92rem", lineHeight: 1.6, marginTop: 10 }}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
