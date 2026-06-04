import { C } from "../lib/theme";

// Etiqueta de sección (eyebrow) con línea de acento.
export function Tag({ children }) {
  return (
    <div
      className="rt-d"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontSize: ".72rem",
        letterSpacing: ".28em",
        textTransform: "uppercase",
        color: C.neon,
        marginBottom: 18,
        fontWeight: 600,
      }}
    >
      <span style={{ width: 26, height: 1, background: C.neon }} />
      {children}
    </div>
  );
}

// Chip con icono para tarjetas de servicios/tecnologías.
export function IconChip({ Icon, size = 26 }) {
  return (
    <div
      className="rt-ico"
      style={{
        width: 56,
        height: 56,
        borderRadius: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(30,99,255,.12)",
        border: "1px solid " + C.line,
        color: C.blueBright,
        transition: "color .35s, border-color .35s",
      }}
    >
      <Icon size={size} strokeWidth={1.6} />
    </div>
  );
}

// Isotipo orbital de ROTSEN.
export function Logo({ size = 30, light = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <g style={{ transformOrigin: "50% 50%", animation: "rt-spin 16s linear infinite" }}>
        <circle cx="50" cy="50" r="44" fill="none" stroke={C.neon} strokeWidth="5" strokeLinecap="round" strokeDasharray="200 76" />
        <circle cx="50" cy="6" r="6" fill={C.neon} />
      </g>
      <g fill={light ? C.white : C.bg}>
        <rect x="30" y="26" width="9.5" height="48" rx="1.5" />
        <path d="M39.5 26 H56 a13 13 0 0 1 0 26 H39.5 v-8.5 H55 a4.5 4.5 0 0 0 0 -9 H39.5 Z" />
        <path d="M49 50 L70 74 H58.5 L41 53.5 Z" />
      </g>
    </svg>
  );
}
