// App es el componente principal: coordina la API, los estados y la pantalla.
import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';
import Buscador from './components/Buscador.jsx';
import Galeria from './components/Galeria.jsx';
import Servicios from './components/Servicios.jsx';
import Footer from './components/Footer.jsx';

// Solo mostramos categorías relacionadas con el rubro tecnológico.
const CATEGORIAS = ['smartphones', 'laptops', 'tablets', 'mobile-accessories'];

export default function App() {
  // useState guarda información y actualiza la interfaz cuando cambia.
  const [productos, setProductos] = useState([]); // Lista original obtenida de la API.
  const [busqueda, setBusqueda] = useState(''); // Texto ingresado en el buscador.
  const [categoria, setCategoria] = useState('todas'); // Categoría seleccionada.
  const [cargando, setCargando] = useState(true); // Indica si la consulta está en curso.
  const [error, setError] = useState(''); // Mensaje si falla la consulta.

  // useEffect con [] se ejecuta al montar el componente.
  useEffect(() => {
    // Permite cancelar la petición si el componente se desmonta.
    const controlador = new AbortController();

    // async/await espera la respuesta de la API sin bloquear la interfaz.
    async function cargarProductos() {
      try {
        setCargando(true);
        setError('');
        // fetch solicita datos a una API REST pública (GET).
        const respuesta = await fetch('https://dummyjson.com/products?limit=0', {
          signal: controlador.signal,
        });
        // Si la respuesta HTTP indica error, pasamos al catch.
        if (!respuesta.ok) throw new Error('Error HTTP ' + respuesta.status);
        // Convertimos el JSON recibido en un objeto de JavaScript.
        const datos = await respuesta.json();
        // .filter() selecciona productos tecnológicos de la lista recibida.
        setProductos(datos.products.filter(p => CATEGORIAS.includes(p.category)));
      } catch (e) {
        // AbortError es una cancelación normal, no un fallo de internet.
        if (e.name !== 'AbortError') {
          setError('No se pudieron cargar los equipos. Comprueba tu conexión y vuelve a intentar.');
        }
      } finally {
        // Finaliza el indicador de carga cuando termina la petición.
        if (!controlador.signal.aborted) setCargando(false);
      }
    }

    cargarProductos();
    // Función de limpieza: cancela la petición al desmontar App.
    return () => controlador.abort();
  }, []);

  // Normalizamos el texto para buscar sin distinguir mayúsculas y minúsculas.
  const termino = busqueda.trim().toLowerCase();

  // .filter() crea una lista nueva: NO modifica el estado original productos.
  // .includes() comprueba si título, marca o categoría contienen el texto.
  const filtrados = productos.filter(p =>
    (categoria === 'todas' || p.category === categoria) &&
    (p.title.toLowerCase().includes(termino) ||
      (p.brand || '').toLowerCase().includes(termino) ||
      p.category.toLowerCase().includes(termino))
  );

  // JSX define lo que React dibuja en pantalla.
  // Pasamos datos y funciones a los componentes hijos mediante props.
  return (
    <>
      <Header />
      <main className="container">
        <Landing />
        <Servicios />
        <section id="catalogo" className="catalog-section mb-5">
          <div className="section-kicker">CATÁLOGO EN LÍNEA</div>
          <h2 className="fw-bold mb-2">Equipos tecnológicos</h2>
          <p className="text-muted mb-4">
            Productos de demostración consultados en tiempo real desde DummyJSON.
            No representan stock ni precios de A.R Soluciones.
          </p>
          {/* El buscador recibe los estados y las funciones para cambiarlos. */}
          <Buscador
            busqueda={busqueda}
            onBuscar={setBusqueda}
            categoria={categoria}
            onCategoria={setCategoria}
          />
          <p className="results-count" aria-live="polite">
            {cargando ? 'Consultando API...' : `${filtrados.length} equipos encontrados`}
          </p>
          {/* Renderizado condicional: carga, error o resultados. */}
          {cargando ? (
            <div className="alert alert-info">Cargando productos desde la API...</div>
          ) : error ? (
            <div className="alert alert-danger" role="alert">{error}</div>
          ) : (
            <Galeria productos={filtrados} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
