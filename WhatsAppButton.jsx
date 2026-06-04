import { MessageCircle } from "lucide-react";

// ⚠️ Reemplaza el número 573000000000 por tu WhatsApp real (código país + número, sin "+").
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573000000000?text=Hola%20ROTSEN,%20quiero%20más%20información"
      target="_blank"
      rel="noreferrer"
      className="rt-wa"
      aria-label="WhatsApp"
      style={{
        position: "fixed",
        right: 22,
        bottom: 22,
        zIndex: 70,
        width: 58,
        height: 58,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 12px 34px -8px rgba(37,211,102,.7)",
        textDecoration: "none",
      }}
    >
      <MessageCircle size={28} color="#fff" fill="#fff" />
    </a>
  );
}
