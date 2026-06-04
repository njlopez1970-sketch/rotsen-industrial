import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { Tag } from "./ui";
import { C, SECTION } from "../lib/theme";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmpresa: ${form.empresa}\nEmail: ${form.email}\n\n${form.mensaje}`
    );
    window.open(`mailto:contacto@rotsen.com?subject=Solicitud%20de%20cotización%20-%20ROTSEN&body=${body}`, "_blank");
    setSent(true);
  };

  const info = [
    [MapPin, "Cali, Valle del Cauca — Colombia"],
    [Phone, "+57 300 000 0000"],
    [Mail, "contacto@rotsen.com"],
  ];

  return (
    <section id="contacto" style={{ padding: "120px 0", background: C.bg2, borderTop: "1px solid " + C.lineSoft }}>
      <div style={{ ...SECTION, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 50 }}>
        <Reveal>
          <Tag>Contacto</Tag>
          <h2 className="rt-d" style={{ fontSize: "clamp(2rem,4.2vw,3.2rem)", fontWeight: 700, lineHeight: 1.06, margin: 0 }}>
            Pongamos tu operación en marcha.
          </h2>
          <p style={{ color: C.gray, marginTop: 18, lineHeight: 1.7, maxWidth: "44ch" }}>
            Cuéntanos tu reto y un ingeniero te contactará en menos de 24 horas.
          </p>
          <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 16 }}>
            {info.map(([Icon, txt]) => (
              <div key={txt} style={{ display: "flex", gap: 14, alignItems: "center", color: C.grayLt }}>
                <span style={{ width: 42, height: 42, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(30,99,255,.12)", border: "1px solid " + C.line, color: C.neon }}>
                  <Icon size={20} />
                </span>
                {txt}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, borderRadius: 16, overflow: "hidden", border: "1px solid " + C.line, height: 220 }}>
            <iframe
              title="Ubicación ROTSEN Cali"
              src="https://www.google.com/maps?q=Cali,Valle%20del%20Cauca,%20Colombia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(.3) invert(.92) hue-rotate(180deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div style={{ background: "rgba(14,21,40,.6)", border: "1px solid " + C.line, borderRadius: 20, padding: "32px 30px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input className="rt-input" placeholder="Nombre completo" value={form.nombre} onChange={upd("nombre")} />
              <input className="rt-input" placeholder="Empresa" value={form.empresa} onChange={upd("empresa")} />
              <input className="rt-input" type="email" placeholder="Correo electrónico" value={form.email} onChange={upd("email")} />
              <textarea className="rt-input" placeholder="¿En qué podemos ayudarte?" rows={4} value={form.mensaje} onChange={upd("mensaje")} style={{ resize: "vertical" }} />
              <button onClick={submit} className="rt-btn" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "16px", borderRadius: 12, background: C.blue, color: "#fff", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "1rem", boxShadow: "0 14px 40px -14px " + C.blue }}>
                {sent ? "¡Abriendo tu correo!" : "Enviar solicitud"} <ArrowRight size={18} />
              </button>
              <p style={{ color: C.gray, fontSize: ".78rem", textAlign: "center" }}>Respuesta garantizada en menos de 24 horas hábiles.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
