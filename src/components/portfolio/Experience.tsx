const experiences = [
  { period: "Feb 2024 – Presente", title: "Community Manager", company: "Inmobiliaria Bosch", desc: "Gestión de redes sociales, creación de contenido y estrategias digitales." },
  { period: "2024", title: "Asistente Administrativa & Diseñadora Auxiliar", company: "Gráficas Navarro", desc: "Diseñadora junior en diseño de material publicitario, papelería en general, imagen a gran formato DTF y para sublimación." },
  { period: "2024", title: "Operaria de Inventarios", company: "FYGP", desc: "Encargada de verificar la presencia y estado de las máquinas en el local, asegurando el control y registro del inventario físico." },
  { period: "2023", title: "Pasantía", company: "Escenarium Events", desc: "Edición de videos y material gráfico. Apoyo en la ejecución de proyectos de diseño digital y gestión de tareas del equipo." },
  { period: "2021 – 2023", title: "Diseñadora Gráfica / CM / Atención al Cliente", company: "Freelance", desc: "Diseño y edición de material gráfico para campañas. Atención y soporte a clientes. Gestión y creación de contenido para redes sociales." },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-16 text-center">
          <span className="gradient-text">Experiencia</span> Profesional
        </h2>

        <div className="relative">
          {/* Central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`reveal relative flex flex-col md:flex-row md:items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full gradient-bg -translate-x-1/2 mt-1.5 z-10 shadow-lg shadow-primary/30" />

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}>
                <span className="text-xs font-body text-primary tracking-wider uppercase">{exp.period}</span>
                <h3 className="font-display font-semibold text-lg mt-1">{exp.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">🏢 {exp.company}</p>
                <p className="text-sm text-secondary-foreground">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
