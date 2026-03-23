const education = [
  { icon: "🎓", title: "Tecnóloga en Producción Gráfica Digital", place: "LCI Barranquilla", period: "Nov 2022 – Dic 2024" },
  { icon: "🌐", title: "Inglés B2", place: "Colombo Americano", period: "2020" },
  { icon: "🏫", title: "Bachiller", place: "Colegio Nuestra Señora del Carmen", period: "2020" },
];

export default function Education() {
  return (
    <section id="educacion" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-16 text-center">
          <span className="gradient-text">Educación</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <div
              key={edu.title}
              className="reveal bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-4xl mb-4 block">{edu.icon}</span>
              <h3 className="font-display font-semibold text-base mb-1">{edu.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{edu.place}</p>
              <span className="text-xs text-primary">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
