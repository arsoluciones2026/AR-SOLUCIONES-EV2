// Landing es la portada comercial. No necesita consultar la API.
export default function Landing() {
  return (
    <section className="hero mb-4" id="inicio" aria-label="A.R Soluciones Informáticas">
      {/* Imagen guardada en public/: Vite la sirve desde la raíz del sitio. */}
      <img
        className="hero-banner"
        src="/banner-ar-soluciones.png"
        alt="A.R Soluciones: león azul neón, servicio técnico, cámaras y alarmas, gráfica, Bazar Arte Abby Mar y reciclaje tecnológico"
      />
      <div className="hero-content">
        <div className="eyebrow">TU PARTNER TECNOLÓGICO · EL QUISCO</div>
        <h1 className="fw-bold mt-2">Tecnología, seguridad y creatividad <span>en un solo lugar.</span></h1>
        <p className="hero-copy">
          Servicio técnico, cámaras y alarmas, gráfica publicitaria y reciclaje tecnológico.
          Explora además nuestro catálogo demostrativo conectado a una API REST.
        </p>
        {/* Bootstrap da estilo a los botones; href apunta a secciones de la página. */}
        <div className="d-flex flex-wrap gap-2">
          <a href="#servicios" className="btn btn-primary px-4">Ver servicios</a>
          <a href="#catalogo" className="btn btn-outline-info px-4">Explorar catálogo</a>
        </div>
      </div>
    </section>
  );
}
