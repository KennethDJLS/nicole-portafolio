import { useState } from "react";
 
// ─── SOCIAL MEDIA ─────────────────────────────────────────────────────────────
import boschPreview from "@/assets/social-media/inmobiliaria-preview.png";
 
// ─── FOTOGRAFÍA ──────────────────────────────────────────────────────────────
import editorial1 from "@/assets/fotografia/editorial-1.jpg";
import editorial2 from "@/assets/fotografia/editorial-2.jpg";
import editorial3 from "@/assets/fotografia/editorial-3.jpg";
import exterior1 from "@/assets/fotografia/exterior-1.jpg";
import exterior2 from "@/assets/fotografia/exterior-2.jpg";
import exterior3 from "@/assets/fotografia/exterior-3.jpg";
import exterior4 from "@/assets/fotografia/exterior-4.jpg";
import largaExposicion1 from "@/assets/fotografia/larga-exposicion-1.jpg";
import largaExposicion2 from "@/assets/fotografia/larga-exposicion-2.jpg";
 
// ─── MODELADO 3D ─────────────────────────────────────────────────────────────
import claw1 from "@/assets/modelado-3d/claw-1.jpg";
import claw2 from "@/assets/modelado-3d/claw-2.jpg";
import claw3 from "@/assets/modelado-3d/claw-3.jpg";
import lowpoly1 from "@/assets/modelado-3d/lowpoly-1.jpg";
import lowpoly2 from "@/assets/modelado-3d/lowpoly-2.jpg";
import lowpoly3 from "@/assets/modelado-3d/lowpoly-3.jpg";
import buho1 from "@/assets/modelado-3d/buho-1.jpg";
import buho2 from "@/assets/modelado-3d/buho-2.jpg";
import robot1 from "@/assets/modelado-3d/robot-1.jpg";
import robot2 from "@/assets/modelado-3d/robot-2.jpg";
import tv1 from "@/assets/modelado-3d/tv-1.jpg";
import render1 from "@/assets/modelado-3d/render-1.jpg";
import render2 from "@/assets/modelado-3d/render-2.jpg";
 
// ─── DISEÑO GRÁFICO ───────────────────────────────────────────────────────────
import empaques from "@/assets/diseno-grafico/empaques.png";
import perfume from "@/assets/diseno-grafico/perfume.png";
import banner from "@/assets/diseno-grafico/banner.jpg";
import caja from "@/assets/diseno-grafico/caja.png";
import composicion from "@/assets/diseno-grafico/composicion.png";
import guarderia from "@/assets/diseno-grafico/guarderia.jpg";
 
// ─── VIDEOS ──────────────────────────────────────────────────────────────────
import previewBucle from "@/assets/videos/preview-bucle.png";
import previewComp from "@/assets/videos/preview-comp.png";
import previewFinal from "@/assets/videos/preview-final.png";
import previewHydraulic from "@/assets/videos/preview-hydraulic.png";
import previewPiramide from "@/assets/videos/preview-piramide.png";
 
import videoBucle from "@/assets/videos/bucle.mp4";
import videoComp from "@/assets/videos/comp.mp4";
import videoFinal from "@/assets/videos/final.mp4";
import videoHydraulic from "@/assets/videos/hydraulic.mp4";
import videoPiramide from "@/assets/videos/piramide.mp4";
import videoInmobiliaria from "@/assets/videos/inmobiliaria.mp4";
 
// ─── TIPOS ───────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  desc: string;
  category: string;
  image: string;
  video?: string;
  mobileVideo?: boolean;
}
 
const filters = ["Todos", "Social Media", "Fotografía", "Videos", "Modelado 3D", "Diseño Gráfico"];
 
const projects: Project[] = [
  // SOCIAL MEDIA
  {
    id: 1,
    title: "Social Media Inmobiliaria Bosch",
    desc: "Gestión de @inmobiliariabosch — diseño gráfico, producción y edición de contenido para redes sociales.",
    category: "Social Media",
    image: boschPreview,
    video: videoInmobiliaria,
    mobileVideo: true,
  },
 
  // FOTOGRAFÍA
  { id: 2,  title: "Sesión Editorial — Estudio I",    desc: "Fotografía de moda dramática en estudio con iluminación profesional y corona artesanal.", category: "Fotografía", image: editorial1 },
  { id: 3,  title: "Sesión Editorial — Estudio II",   desc: "Fotografía de moda en estudio, composición frontal con iluminación controlada.",          category: "Fotografía", image: editorial2 },
  { id: 4,  title: "Sesión Editorial — Perfil",       desc: "Toma de perfil con iluminación dramática y dirección de arte editorial.",                  category: "Fotografía", image: editorial3 },
  { id: 5,  title: "Sesión Exterior Caribeña I",      desc: "Fotografía de moda en exterior con ambiente caribeño y arquitectura colorida.",            category: "Fotografía", image: exterior1 },
  { id: 6,  title: "Sesión Exterior Caribeña II",     desc: "Sesión fotográfica exterior con luz natural y paleta de colores tropicales.",              category: "Fotografía", image: exterior2 },
  { id: 7,  title: "Sesión Exterior Caribeña III",    desc: "Fotografía editorial en entorno caribeño, composición vertical con gran formato.",         category: "Fotografía", image: exterior3 },
  { id: 8,  title: "Retrato Exterior",                desc: "Retrato fotográfico en entorno natural con luz suave y dirección artística.",               category: "Fotografía", image: exterior4 },
  { id: 9,  title: "Light Painting I",                desc: "Light painting con técnica de larga exposición, trazos de luz de colores sobre fondo negro.", category: "Fotografía", image: largaExposicion1 },
  { id: 10, title: "Light Painting II",               desc: "Fotografía de larga exposición capturando el movimiento de luces en la noche.",             category: "Fotografía", image: largaExposicion2 },
 
  // VIDEOS
  { id: 11, title: "Animación — Bucle 3D",    desc: "Loop de animación 3D con partículas y movimiento continuo.",                          category: "Videos", image: previewBucle,    video: videoBucle },
  { id: 12, title: "Composición 3D",          desc: "Composición animada 3D con efectos de movimiento y renderizado.",                     category: "Videos", image: previewComp,     video: videoComp },
  { id: 13, title: "Render Final",            desc: "Animación de render final con iluminación cinemática y efectos visuales.",            category: "Videos", image: previewFinal,    video: videoFinal },
  { id: 14, title: "Brazo Hidráulico",        desc: "Animación de brazo hidráulico industrial con movimiento mecánico preciso.",           category: "Videos", image: previewHydraulic, video: videoHydraulic },
  { id: 15, title: "Pirámide de Partículas",  desc: "Animación de partículas formando una pirámide con efectos de luz y sombra.",          category: "Videos", image: previewPiramide, video: videoPiramide },
 
  // MODELADO 3D
  { id: 16, title: "Máquina Claw — Vista Frontal", desc: "Máquina claw 3D con íconos de la suite de Adobe, renderizado en colores neón.",            category: "Modelado 3D", image: claw1 },
  { id: 17, title: "Máquina Claw — Vista Angular", desc: "Máquina claw con iluminación neón rosa y azul, perspectiva angular.",                       category: "Modelado 3D", image: claw2 },
  { id: 18, title: "Máquina Claw — Detalle",       desc: "Vista de detalle mostrando los íconos de Adobe en el interior de la máquina.",              category: "Modelado 3D", image: claw3 },
  { id: 19, title: "Cabra Low-Poly I",              desc: "Modelado low-poly de cabra con estética geométrica y color uniforme.",                      category: "Modelado 3D", image: lowpoly1 },
  { id: 20, title: "Cabra Low-Poly II",             desc: "Variación de pose del modelado low-poly en Blender.",                                       category: "Modelado 3D", image: lowpoly2 },
  { id: 21, title: "Cabra Low-Poly III",            desc: "Vista lateral del modelado low-poly con iluminación suave.",                                category: "Modelado 3D", image: lowpoly3 },
  { id: 22, title: "Búho 3D — Pose I",              desc: "Modelado de búho estilizado con ojos expresivos y diseño original.",                        category: "Modelado 3D", image: buho1 },
  { id: 23, title: "Búho 3D — Pose II",             desc: "Segunda pose del búho 3D modelado en Blender.",                                             category: "Modelado 3D", image: buho2 },
  { id: 24, title: "Robot Retro I",                 desc: "Robot estilo retro con materiales metálicos y diseño de juguete vintage.",                  category: "Modelado 3D", image: robot1 },
  { id: 25, title: "Robot Retro II",                desc: "Robot retro con variación de color y materiales en Blender.",                               category: "Modelado 3D", image: robot2 },
  { id: 26, title: "Televisor Vintage",             desc: "Modelado de televisor vintage con materiales oscuros y antena retro.",                      category: "Modelado 3D", image: tv1 },
  { id: 27, title: "Render Abstracto I",            desc: "Composición de render abstracto con formas geométricas y materiales especulares.",           category: "Modelado 3D", image: render1 },
  { id: 28, title: "Render Abstracto II",           desc: "Variación de render abstracto con iluminación diferente y perspectiva alterna.",             category: "Modelado 3D", image: render2 },
 
  // DISEÑO GRÁFICO
  { id: 29, title: "Diseño de Empaques",              desc: "Diseño de empaques para línea de productos con identidad visual coherente.",              category: "Diseño Gráfico", image: empaques },
  { id: 30, title: "Perfume Hades — Identidad Visual", desc: "Diseño de identidad visual para perfume Hades con estética oscura y elegante.",          category: "Diseño Gráfico", image: perfume },
  { id: 31, title: "Banner Publicitario",              desc: "Diseño de banner publicitario para campaña de marketing.",                                category: "Diseño Gráfico", image: banner },
  { id: 32, title: "Diseño de Caja",                  desc: "Diseño de packaging para caja de producto con ilustración y tipografía.",                 category: "Diseño Gráfico", image: caja },
  { id: 33, title: "Composición Gráfica",              desc: "Composición gráfica con elementos visuales y diseño editorial.",                          category: "Diseño Gráfico", image: composicion },
  { id: 34, title: "Diseño Gran Formato — Guardería",  desc: "Diseño de imagen a gran formato para guardería, impresión DTF.",                         category: "Diseño Gráfico", image: guarderia },
];
 
// ─── MODAL ───────────────────────────────────────────────────────────────────
function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className={`relative bg-card rounded-2xl overflow-hidden shadow-2xl ${
          project.mobileVideo ? "w-[320px]" : "max-w-4xl w-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-background/80 hover:bg-background text-foreground rounded-full w-9 h-9 flex items-center justify-center text-lg transition-colors"
          aria-label="Cerrar"
        >
          ✕
        </button>
 
        {/* ── Modal estilo celular ── */}
        {project.mobileVideo ? (
          <div className="flex flex-col items-center bg-zinc-900 px-3 pt-4 pb-4 rounded-2xl">
            {/* Notch */}
            <div className="w-20 h-4 bg-zinc-800 rounded-full mb-3" />
            {/* Video */}
            <div className="w-full rounded-2xl overflow-hidden" style={{ maxHeight: "72vh" }}>
              <video
                src={project.video}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            {/* Home bar */}
            <div className="w-20 h-1 bg-zinc-600 rounded-full mt-3" />
          </div>
        ) : (
          /* ── Modal normal ── */
          <div className="aspect-video w-full overflow-hidden bg-black">
            {project.video ? (
              <video src={project.video} controls autoPlay className="w-full h-full object-contain" />
            ) : (
              <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
            )}
          </div>
        )}
 
        {/* Info */}
        <div className="p-5">
          <span className="text-xs text-primary uppercase tracking-widest font-semibold">{project.category}</span>
          <h3 className="font-display font-bold text-lg mt-1 mb-1">{project.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
        </div>
      </div>
    </div>
  );
}
 
// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
export default function Projects() {
  const [active, setActive] = useState("Todos");
  const [selected, setSelected] = useState<Project | null>(null);
 
  const filtered = active === "Todos" ? projects : projects.filter((p) => p.category === active);
 
  return (
    <section id="portafolio" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-12 text-center">
          Mis <span className="gradient-text">Proyectos</span>
        </h2>
 
        {/* Filtros */}
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
              key={project.id}
              onClick={() => setSelected(project)}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black">
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
                <span className="mt-4 text-xs text-muted-foreground border border-border px-3 py-1 rounded-full">
                  {project.video ? "▶ Ver video" : "Click para ver →"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
 