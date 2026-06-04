import { useState, useEffect } from "react";
import { Activity } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Reveal from "./Reveal";
import { Tag } from "./ui";
import { C, SECTION } from "../lib/theme";

const ASSETS = [
  { n: "Motor #1 — Bomba A", h: 96, s: "OK" },
  { n: "Compresor #3", h: 88, s: "OK" },
  { n: "Reductor Línea 2", h: 64, s: "Atención" },
  { n: "Ventilador Torre", h: 91, s: "OK" },
  { n: "Tablero Principal", h: 47, s: "Crítico" },
];

const stColor = (s) => (s === "OK" ? "#22D3EE" : s === "Atención" ? "#F4B740" : "#FF5230");

function Kpi({ label, value, suffix, dec = 1, accent }) {
  return (
    <div style={{ flex: "1 1 150px", background: "rgba(8,12,24,.6)", border: "1px solid " + C.line, borderRadius: 14, padding: "18px 20px" }}>
      <div style={{ color: C.gray, fontSize: ".74rem", letterSpacing: ".1em", textTransform: "uppercase" }}>{label}</div>
      <div className="rt-d" style={{ fontSize: "1.9rem", fontWeight: 700, marginTop: 6, color: accent || C.white }}>
        {value.toFixed(dec)}
        <span style={{ fontSize: "1rem", color: C.gray }}>{suffix}</span>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [data, setData] = useState(() =>
    Array.from({ length: 24 }, (_, i) => ({
      h: i,
      vib: 2 + Math.sin(i / 2) + Math.random(),
      temp: 52 + Math.sin(i / 3) * 6 + Math.random() * 2,
    }))
  );
  const [kpi, setKpi] = useState({ avail: 99.2, vib: 2.8, temp: 56.4, thd: 3.1 });

  useEffect(() => {
    const id = setInterval(() => {
      setData((d) => {
        const next = d.slice(1);
        const i = d[d.length - 1].h + 1;
        next.push({ h: i, vib: 2 + Math.sin(i / 2) + Math.random() * 1.4, temp: 52 + Math.sin(i / 3) * 6 + Math.random() * 2 });
        return next;
      });
      setKpi((k) => ({
        avail: Math.min(99.9, Math.max(98.4, k.avail + (Math.random() - 0.5) * 0.2)),
        vib: Math.max(1.8, k.vib + (Math.random() - 0.5) * 0.4),
        temp: Math.max(50, k.temp + (Math.random() - 0.5) * 1.2),
        thd: Math.max(2.2, k.thd + (Math.random() - 0.5) * 0.3),
      }));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="dashboard" style={{ padding: "120px 0" }}>
      <div style={SECTION}>
        <Reveal>
          <Tag>Plataforma · Industria 4.0</Tag>
          <h2 className="rt-d" style={{ fontSize: "clamp(2rem,4.5vw,3.4rem)", fontWeight: 700, lineHeight: 1.06, maxWidth: "20ch", margin: 0 }}>
            Tu planta entera, en una sola pantalla.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ marginTop: 44, borderRadius: 22, border: "1px solid " + C.line, background: "linear-gradient(160deg,rgba(18,27,51,.7),rgba(5,7,14,.9))", padding: "clamp(18px,3vw,30px)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22, flexWrap: "wrap", gap: 12 }}>
              <div className="rt-d" style={{ display: "flex", alignItems: "center", gap: 10, color: C.neon, letterSpacing: ".14em", textTransform: "uppercase", fontSize: ".78rem" }}>
                <Activity size={18} /> ROTSEN Live · Monitoreo en tiempo real
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#22D3EE", fontSize: ".8rem" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22D3EE", animation: "rt-blink 1.5s infinite" }} /> Conectado
              </span>
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 18 }}>
              <Kpi label="Disponibilidad" value={kpi.avail} suffix="%" accent="#22D3EE" />
              <Kpi label="Vibración RMS" value={kpi.vib} suffix=" mm/s" />
              <Kpi label="Temperatura" value={kpi.temp} suffix=" °C" />
              <Kpi label="THD Energía" value={kpi.thd} suffix=" %" accent={C.neon} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
              <div style={{ background: "rgba(8,12,24,.55)", border: "1px solid " + C.lineSoft, borderRadius: 14, padding: "16px 14px 6px" }}>
                <div style={{ color: C.grayLt, fontSize: ".82rem", marginBottom: 8, paddingLeft: 6 }}>Vibración / Temperatura (24h)</div>
                <div style={{ width: "100%", height: 200 }}>
                  <ResponsiveContainer>
                    <AreaChart data={data} margin={{ top: 6, right: 8, left: -18, bottom: 0 }}>
                      <defs>
                        <linearGradient id="gV" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={C.neon} stopOpacity={0.5} />
                          <stop offset="100%" stopColor={C.neon} stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="gT" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={C.blue} stopOpacity={0.4} />
                          <stop offset="100%" stopColor={C.blue} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke={C.lineSoft} vertical={false} />
                      <XAxis dataKey="h" tick={{ fill: C.gray, fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: C.gray, fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ background: C.panel, border: "1px solid " + C.line, borderRadius: 10, color: C.white }} labelStyle={{ color: C.gray }} />
                      <Area type="monotone" dataKey="temp" stroke={C.blue} strokeWidth={2} fill="url(#gT)" />
                      <Area type="monotone" dataKey="vib" stroke={C.neon} strokeWidth={2} fill="url(#gV)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div style={{ background: "rgba(8,12,24,.55)", border: "1px solid " + C.lineSoft, borderRadius: 14, padding: "16px 14px" }}>
                <div style={{ color: C.grayLt, fontSize: ".82rem", marginBottom: 12, paddingLeft: 6 }}>Salud de activos</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {ASSETS.map((a) => (
                    <div key={a.n}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".82rem", marginBottom: 5 }}>
                        <span style={{ color: C.grayLt }}>{a.n}</span>
                        <span style={{ color: stColor(a.s), fontWeight: 600 }}>{a.s}</span>
                      </div>
                      <div style={{ height: 7, borderRadius: 6, background: "rgba(255,255,255,.06)", overflow: "hidden" }}>
                        <div style={{ width: a.h + "%", height: "100%", borderRadius: 6, background: stColor(a.s) }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
