import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Drones from "./components/Drones";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="rt-root">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Technology />
      <Projects />
      <Drones />
      <Dashboard />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
