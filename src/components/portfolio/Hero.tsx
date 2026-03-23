import { useState, useEffect } from "react";
import { DoodleStar, DoodleWave, DoodleCheck, DoodleCircle, DoodleArrow } from "./DoodleElements";

const roles = ["Diseño Gráfico", "Contenidos Digitales", "Marketing Digital", "Producción Gráfica"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 blur-[120px] gradient-bg" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-10 blur-[100px] bg-brand-cyan" />

      {/* Doodle decorations */}
      <DoodleStar className="absolute top-24 right-[15%] animate-float opacity-60" />
      <DoodleStar className="absolute bottom-32 left-[10%] animate-float-reverse opacity-40 scale-75" />
      <DoodleWave className="absolute top-1/3 left-[5%] animate-float opacity-40" />
      <DoodleCheck className="absolute bottom-1/4 right-[8%] animate-float-reverse opacity-50" />
      <DoodleCircle className="absolute top-1/2 right-[25%] animate-float opacity-30" />
      <DoodleArrow className="absolute bottom-1/3 left-[20%] animate-float opacity-40" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-6 font-body">
          Portafolio Creativo
        </p>

        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6 text-balance">
          Nicolle<br />
          <span className="gradient-text">Jiménez</span>
        </h1>

        <div className="h-10 md:h-12 flex items-center justify-center mb-10">
          <span className="text-lg md:text-2xl font-body text-secondary-foreground">
            {displayText}
            <span className="inline-block w-[2px] h-6 md:h-7 bg-primary ml-1 align-middle" style={{ animation: "blink-caret 1s step-end infinite" }} />
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portafolio"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-display font-semibold text-sm gradient-bg text-foreground hover:opacity-90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Ver Portafolio
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-display font-semibold text-sm border border-border text-foreground hover:bg-secondary active:scale-[0.97] transition-all duration-200"
          >
            Contactar
          </a>
          <a
            href="/Curriculum_Nicolle_Jimenez.pdf"
            download
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-display font-semibold text-sm border border-primary/30 text-primary hover:bg-primary/10 active:scale-[0.97] transition-all duration-200"
          >
            📄 Descargar CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
