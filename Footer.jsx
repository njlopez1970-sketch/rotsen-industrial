import { Logo } from "./ui";
import { C, SECTION } from "../lib/theme";

export default function Footer() {
  return (
    <footer style={{ background: C.bg, borderTop: "1px solid " + C.lineSoft, padding: "64px 0 36px" }}>
      <div style={SECTION}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 40, flexWrap: "wrap", paddingBottom: 36, borderBottom: "1px solid " + C.lineSoft }}>
          <div style={{ maxWidth: 320 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Logo size={34} />
              <span className="rt-d" style={{ fontWeight: 700, letterSpacing: ".18em", fontSize: "1.3rem" }}>ROTSEN</span>
            </div>
            <p style={{ color: C.gray, marginTop: 16, lineHeight: 1.6, fontSize: ".92rem" }}>
              Ingeniería y mantenimiento industrial de alta tecnología. En movimiento, hacia tu próximo objetivo.
            </p>
          </div>
          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            <div>
              <h4 className="rt-d" style={{ color: C.white, fontSize: ".74rem", letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 14 }}>Empresa</h4>
              {[["Servicios", "#servicios"], ["Tecnología", "#tecnologia"], ["Proyectos", "#proyectos"], ["Contacto", "#contacto"]].map(([l, h]) => (
                <a key={l} href={h} className="rt-link" style={{ display: "block", color: C.gray, textDecoration: "none", fontSize: ".9rem", marginBottom: 9 }}>{l}</a>
              ))}
            </div>
            <div>
              <h4 className="rt-d" style={{ color: C.white, fontSize: ".74rem", letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 14 }}>Contacto</h4>
              {["Cali, Colombia", "+57 300 000 0000", "contacto@rotsen.com"].map((l) => (
                <span key={l} style={{ display: "block", color: C.gray, fontSize: ".9rem", marginBottom: 9 }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 26, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, color: C.gray, fontSize: ".82rem" }}>
          <span>© 2026 ROTSEN. Todos los derechos reservados.</span>
          <span>Ingeniería avanzada · Industria 4.0</span>
        </div>
      </div>
    </footer>
  );
}
