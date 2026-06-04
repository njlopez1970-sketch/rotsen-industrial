import Reveal from "./Reveal";
import { Tag, IconChip } from "./ui";
import { TECH } from "../data/technologies";
import { C, SECTION } from "../lib/theme";

export default function Technology() {
  return (
    <section id="tecnologia" style={{ padding: "110px 0", background: C.bg2, borderTop: "1px solid " + C.lineSoft, borderBottom: "1px solid " + C.lineSoft }}>
      <div style={SECTION}>
        <Reveal>
          <Tag>Tecnología</Tag>
          <h2 className="rt-d" style={{ fontSize: "clamp(2rem,4.5vw,3.4rem)", fontWeight: 700, lineHeight: 1.06, maxWidth: "22ch", margin: 0 }}>
            El stack que mueve la <span style={{ color: C.neon }}>Industria 4.0</span>.
          </h2>
        </Reveal>
        <div style={{ marginTop: 54, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
          {TECH.map((t, i) => (
            <Reveal key={t.t} delay={(i % 3) * 70}>
              <div className="rt-svc" style={{ display: "flex", gap: 18, padding: "26px 24px", borderRadius: 16, background: "rgba(18,27,51,.45)", border: "1px solid " + C.line, height: "100%" }}>
                <IconChip Icon={t.icon} />
                <div>
                  <h3 className="rt-d" style={{ fontSize: "1.1rem", fontWeight: 600 }}>{t.t}</h3>
                  <p style={{ color: C.gray, fontSize: ".9rem", lineHeight: 1.6, marginTop: 6 }}>{t.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
