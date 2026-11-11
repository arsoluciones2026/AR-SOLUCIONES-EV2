import {useEffect,useState} from 'react';
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';
import Buscador from './components/Buscador.jsx';
import Galeria from './components/Galeria.jsx';
import Servicios from './components/Servicios.jsx';
import Footer from './components/Footer.jsx';

const CATEGORIAS=['smartphones','laptops','tablets','mobile-accessories'];
export default function App(){
  const [productos,setProductos]=useState([]);
  const [busqueda,setBusqueda]=useState('');
  const [categoria,setCategoria]=useState('todas');
  const [cargando,setCargando]=useState(true);
  const [error,setError]=useState('');
  useEffect(()=>{
    const controlador=new AbortController();
    async function cargarProductos(){
      try{
        setCargando(true);setError('');
        const respuesta=await fetch('https://dummyjson.com/products?limit=0',{signal:controlador.signal});
        if(!respuesta.ok)throw new Error('Error HTTP '+respuesta.status);
        const datos=await respuesta.json();
        setProductos(datos.products.filter(p=>CATEGORIAS.includes(p.category)));
      }catch(e){if(e.name!=='AbortError')setError('No se pudieron cargar los equipos. Comprueba tu conexión y vuelve a intentar.');}
      finally{if(!controlador.signal.aborted)setCargando(false);}
    }
    cargarProductos();
    return ()=>controlador.abort();
  },[]);
  const termino=busqueda.trim().toLowerCase();
  const filtrados=productos.filter(p=>(categoria==='todas'||p.category===categoria)&&(p.title.toLowerCase().includes(termino)||(p.brand||'').toLowerCase().includes(termino)||p.category.toLowerCase().includes(termino)));
  return <><Header/><main className="container"><Landing/><Servicios/><section id="catalogo" className="catalog-section mb-5"><div className="section-kicker">CATÁLOGO EN LÍNEA</div><h2 className="fw-bold mb-2">Equipos tecnológicos</h2><p className="text-muted mb-4">Productos de demostración consultados en tiempo real desde DummyJSON. No representan stock ni precios de A.R Soluciones.</p><Buscador busqueda={busqueda} onBuscar={setBusqueda} categoria={categoria} onCategoria={setCategoria}/><p className="results-count" aria-live="polite">{cargando?'Consultando API...':`${filtrados.length} equipos encontrados`}</p>{cargando?<div className="alert alert-info">Cargando productos desde la API...</div>:error?<div className="alert alert-danger" role="alert">{error}</div>:<Galeria productos={filtrados}/>}</section></main><Footer/></>;
}