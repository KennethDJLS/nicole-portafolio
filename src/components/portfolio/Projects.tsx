import { useState } from "react";
import socialMediaImg from "@/assets/project-social-media.jpg";
import editorialImg from "@/assets/project-editorial.jpg";
import exteriorImg from "@/assets/project-exterior.jpg";
import longExposureImg from "@/assets/project-long-exposure.jpg";
import video3dImg from "@/assets/project-video-3d.jpg";
import models3dImg from "@/assets/project-3d-models.jpg";
import clawImg from "@/assets/project-claw.jpg";

const filters = ["Todos", "Social Media", "Fotografía", "Videos", "Modelado 3D", "Diseño Gráfico"];

const projects = [
  { title: "Social Media Inmobiliaria Bosch", desc: "Gestión de @inmobiliariabosch — diseño gráfico, producción y edición de videos para redes sociales", category: "Social Media", image: socialMediaImg },
  { title: "Sesión Fotografía Editorial", desc: "Fotografía de moda dramática en estudio, iluminación profesional", category: "Fotografía", image: editorialImg },
  { title: "Sesión Fotografía Exterior", desc: "Ambiente caribeño, estilo editorial", category: "Fotografía", image: exteriorImg },
  { title: "Fotografía Larga Exposición", desc: "Light painting y efectos de movimiento", category: "Fotografía", image: longExposureImg },
  { title: "Videos & Animación 3D", desc: "Motion graphics, animación de personajes, renderizado", category: "Videos", image: video3dImg },
  { title: "Modelado 3D — Colección Objetos", desc: "Robots, animales low-poly, objetos cotidianos en Blender/Maya", category: "Modelado 3D", image: models3dImg },
  { title: "Máquina Claw 3D", desc: "Pieza conceptual con íconos Adobe, renderizado en colores neón", category: "Diseño Gráfico", image: clawImg },
];

export default function Projects() {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portafolio" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-12 text-center">
          Mis <span className="gradient-text">Proyectos</span>
        </h2>

        {/* Filters */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 text-sm rounded-full font-body transition-all duration-200 active:scale-[0.96] ${
                active === f
                  ? "gradient-bg text-foreground shadow-md shadow-primary/20"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="reveal group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-display font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-secondary-foreground">{project.desc}</p>
                <span className="mt-3 text-xs text-primary uppercase tracking-wider">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
