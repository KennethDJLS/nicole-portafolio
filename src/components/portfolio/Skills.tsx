import { useEffect, useRef, useState } from "react";

const categories = [
  { icon: "📱", title: "Marketing Digital", desc: "Estrategias de redes sociales y campañas digitales" },
  { icon: "🎨", title: "Contenidos", desc: "Creación de contenido visual y audiovisual" },
  { icon: "✏️", title: "Diseño Gráfico", desc: "Identidad visual, branding y piezas gráficas" },
  { icon: "📢", title: "Publicidad", desc: "Campañas publicitarias y comunicación visual" },
];

const programs = [
  { name: "Illustrator", level: 100 },
  { name: "Photoshop", level: 100 },
  { name: "Lightroom", level: 100 },
  { name: "After Effects", level: 100 },
  { name: "Canva", level: 100 },
  { name: "Premiere", level: 100 },
  { name: "Maya / 3D", level: 95 },
  { name: "InDesign", level: 80 },
  { name: "SketchUp", level: 70 },
  { name: "Blender", level: 70 },
];

const softSkills = [
  "Fotografía", "Producción de Video", "Ilustración", "Modelado 3D",
  "Animación 3D-2D", "Vectorización", "Redes Sociales",
];

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="habilidades" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-16 text-center">
          Habilidades & <span className="gradient-text">Skills</span>
        </h2>

        {/* Categories */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-200">{cat.icon}</span>
              <h3 className="font-display font-semibold text-sm mb-1">{cat.title}</h3>
              <p className="text-xs text-muted-foreground">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Progress bars */}
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-x-12 gap-y-5 mb-16">
          {programs.map((prog, i) => (
            <div key={prog.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-display font-medium">{prog.name}</span>
                <span className="text-xs text-muted-foreground tabular-nums">{prog.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full gradient-bg ${animated ? "skill-bar-fill" : ""}`}
                  style={{
                    width: animated ? `${prog.level}%` : "0%",
                    animationDelay: `${i * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div className="reveal flex flex-wrap justify-center gap-3">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm font-body bg-secondary rounded-full text-secondary-foreground hover:bg-primary/20 hover:text-foreground transition-colors duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
