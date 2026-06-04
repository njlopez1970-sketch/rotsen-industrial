import { useState, useEffect, useRef } from "react";

// Devuelve [ref, visible]: visible pasa a true cuando el elemento entra en viewport.
export default function useInView(opts = { threshold: 0.18 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setSeen(true);
          observer.unobserve(e.target);
        }
      });
    }, opts);
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, seen];
}
