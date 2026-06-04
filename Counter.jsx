import { useState, useEffect } from "react";
import useInView from "../hooks/useInView";

// Anima un número de 0 a `to` cuando entra en viewport.
export default function Counter({ to, suffix = "", decimals = 0, duration = 1600 }) {
  const [ref, seen] = useInView();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!seen) return;
    let raf;
    let start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}
