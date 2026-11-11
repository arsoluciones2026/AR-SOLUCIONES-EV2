// Componente controlado: recibe valores y callbacks desde App mediante props.
export default function Buscador({ busqueda, onBuscar, categoria, onCategoria }) {
  return (
    <div className="row g-3 align-items-end mb-3">
      <div className="col-md-8">
        <label htmlFor="buscar" className="form-label">Buscar equipos</label>
        <input
          id="buscar"
          className="form-control form-control-lg"
          type="search"
          value={busqueda} // El input muestra el valor del estado.
          onChange={e => onBuscar(e.target.value)} // Actualiza el estado en cada tecla.
          placeholder="Ej.: Samsung, laptop, teléfono..."
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="categoria" className="form-label">Categoría</label>
        <select
          id="categoria"
          className="form-select form-select-lg"
          value={categoria}
          onChange={e => onCategoria(e.target.value)} // Actualiza el filtro de categoría.
        >
          <option value="todas">Todas las categorías</option>
          <option value="smartphones">Celulares</option>
          <option value="laptops">Computadores</option>
          <option value="tablets">Tablets</option>
          <option value="mobile-accessories">Accesorios</option>
        </select>
      </div>
    </div>
  );
}
