import useInView from "../hooks/useInView";

// Envoltura que aplica una animación de aparición (fade + subida) al entrar en viewport.
export default function Reveal({ children, delay = 0, style = {} }) {
  const [ref, seen] = useInView();
  return (
    <div
      ref={ref}
      className={"rt-reveal" + (seen ? " rt-in" : "")}
      style={{ transitionDelay: delay + "ms", ...style }}
    >
      {children}
    </div>
  );
}
