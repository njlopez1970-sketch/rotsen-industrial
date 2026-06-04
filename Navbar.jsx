import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./ui";
import { C, SECTION } from "../lib/theme";

const LINKS = [
  ["Servicios", "#servicios"],
  ["Tecnología", "#tecnologia"],
  ["Proyectos", "#proyectos"],
  ["Drones", "#drones"],
  ["Plataforma", "#dashboard"],
  ["Contacto", "#contacto"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: solid ? "rgba(5,7,14,.82)" : "transparent",
        backdropFilter: solid ? "blur(14px)" : "none",
        borderBottom: solid ? "1px solid " + C.lineSoft : "1px solid transparent",
        transition: "background .3s, border-color .3s",
      }}
    >
      <div style={{ ...SECTION, display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: C.white }}>
          <Logo size={30} />
          <span className="rt-d" style={{ fontWeight: 700, letterSpacing: ".18em", fontSize: "1.1rem" }}>ROTSEN</span>
        </a>

        <div className="rt-navlinks" style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {LINKS.map(([l, h]) => (
            <a key={l} href={h} className="rt-nav-l" style={{ color: C.grayLt, textDecoration: "none", fontSize: ".88rem" }}>{l}</a>
          ))}
        </div>

        <a
          href="#contacto"
          className="rt-btn rt-nav-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 20px",
            borderRadius: 100,
            background: C.blue,
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: ".88rem",
            boxShadow: "0 8px 30px -8px " + C.blue,
          }}
        >
          Cotizar <ArrowRight size={16} />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rt-menu-btn"
          aria-label="Menú"
          style={{ background: "none", border: "none", color: C.white, cursor: "pointer", display: "none" }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(8,12,24,.97)", borderTop: "1px solid " + C.line, padding: "12px 24px 22px" }}>
          {LINKS.map(([l, h]) => (
            <a
              key={l}
              href={h}
              onClick={() => setOpen(false)}
              style={{ display: "block", color: C.grayLt, textDecoration: "none", padding: "13px 0", borderBottom: "1px solid " + C.lineSoft, fontSize: "1rem" }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
