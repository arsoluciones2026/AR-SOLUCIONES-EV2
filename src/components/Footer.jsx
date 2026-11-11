// Footer muestra datos de contacto y el carácter académico del proyecto.
export default function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container d-flex flex-column flex-lg-row justify-content-between gap-3 align-items-lg-center">
        <div>
          <strong>A.R SOLUCIONES INFORMÁTICAS</strong>
          <div className="small">La seguridad y conexión que necesitas · El Quisco, Chile</div>
        </div>
        <div className="d-flex flex-wrap gap-3">
          {/* target abre otra pestaña; rel protege el enlace externo. */}
          <a href="https://wa.me/56959297224" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://www.instagram.com/a.r_soluciones/" target="_blank" rel="noreferrer">Instagram</a>
          <span>Proyecto académico SAINF41 EV2</span>
        </div>
      </div>
    </footer>
  );
}
