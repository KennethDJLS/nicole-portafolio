export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="gradient-text font-display font-semibold">Nicolle Jiménez</span> — Todos los derechos reservados
      </p>
    </footer>
  );
}
