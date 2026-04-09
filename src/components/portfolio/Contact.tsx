import { useState } from "react";
 
export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };
 
  return (
    <section id="contacto" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-16 text-center">
          <span className="gradient-text">Contacto</span>
        </h2>
 
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal-left space-y-5">
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground mb-1.5 block">Nombre</label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-muted-foreground mb-1.5 block">Mensaje</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Tu mensaje..."
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-bg text-foreground font-display font-semibold py-3.5 rounded-lg hover:opacity-90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/20"
            >
              {sent ? "✓ Mensaje Enviado" : "Enviar Mensaje"}
            </button>
          </form>
 
          {/* Contact info */}
          <div className="reveal-right space-y-6">
            <div>
              <h3 className="font-display font-semibold text-lg mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📞</span>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Teléfono</p>
                    <p className="text-sm">301 473 6239</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📧</span>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <a href="mailto:nicojimeneznavarro@gmail.com" className="text-sm hover:text-primary transition-colors">
                      nicojimeneznavarro@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
 
            <div>
              <h3 className="font-display font-semibold text-base mb-3">Redes Sociales</h3>
              <a
                href="https://instagram.com/nia_artdesing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-primary/20 transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
                @nia_artdesing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}