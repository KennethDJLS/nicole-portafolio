import profileImg from "@/assets/nicolle-profile.jpg";

const quickFacts = [
  { icon: "📍", label: "Ubicación", value: "Barranquilla, Colombia" },
  { icon: "🎓", label: "Formación", value: "LCI Barranquilla" },
  { icon: "🌐", label: "Idiomas", value: "Inglés B2" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-16 text-center">
          Sobre <span className="gradient-text">Mí</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <div className="reveal-left flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full p-[3px] gradient-bg">
                <img
                  src={profileImg}
                  alt="Nicolle Jiménez"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-border opacity-40" />
            </div>
          </div>

          {/* Bio */}
          <div className="reveal-right">
            <p className="text-secondary-foreground text-base md:text-lg leading-relaxed mb-8 text-pretty">
              Tecnóloga en Producción Gráfica Digital con habilidades en diseño, edición y gestión de proyectos creativos. 
              Experiencia en atención y servicio al cliente, así como en gestión de redes sociales y estrategias digitales como Community Manager. 
              Capacidad para resolver problemas, trabajar en equipo y ofrecer soluciones personalizadas. 
              Apasionada por la creatividad y aprender.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/30 transition-colors duration-300"
                >
                  <span className="text-2xl mb-2 block">{fact.icon}</span>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{fact.label}</p>
                  <p className="text-sm font-display font-semibold">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
