// Galeria recibe el arreglo ya filtrado desde App.
export default function Galeria({ productos }) {
  // Mensaje cuando no hay coincidencias.
  if (!productos.length) {
    return <div className="empty-state">No encontramos equipos con esos filtros. Prueba otra búsqueda.</div>;
  }

  return (
    <div className="row g-4">
      {/* .map() recorre el arreglo y genera una tarjeta por producto. */}
      {productos.map(p => (
        <div className="col-sm-6 col-lg-4 col-xl-3" key={p.id}>
          {/* key identifica cada tarjeta para que React actualice la lista. */}
          <article className="product-card h-100">
            <div className="product-image">
              <img src={p.thumbnail} alt={p.title} loading="lazy" />
            </div>
            <div className="p-3">
              <span className="category-label">{p.category.replaceAll('-', ' ')}</span>
              <h3 className="h6 fw-bold mt-2 mb-2">{p.title}</h3>
              <p className="text-muted small mb-3">{p.brand || 'Equipo tecnológico'}</p>
              <div className="price">US$ {Number(p.price).toFixed(2)}</div>
              <small className="text-muted">Precio referencial de API, no precio de venta local</small>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
