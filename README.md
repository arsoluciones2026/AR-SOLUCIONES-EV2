# A.R Soluciones Informáticas | Evaluación 2 SAINF41

SPA en React + Vite con Bootstrap. Tema: servicio técnico, cámaras de seguridad y catálogo de equipos tecnológicos.

## Ejecutar
1. Instalar Node.js 20.19+ o 22.12+.
2. Abrir esta carpeta en Visual Studio Code.
3. Ejecutar `npm install` y `npm run dev`.
4. Abrir la dirección local que muestra Vite (normalmente http://localhost:5173/).
5. Para comprobar la compilación: `npm run build`.

## API
`https://dummyjson.com/products?limit=0` devuelve un objeto con `products` (array). Se filtran las categorías de tecnología para el catálogo. Requiere internet. Los precios son referenciales en USD, no son ofertas reales del negocio.

## Estructura
- `src/App.jsx`: estado, consumo de API y filtro.
- `src/components/Header.jsx`: encabezado.
- `src/components/Landing.jsx`: presentación.
- `src/components/Servicios.jsx`: servicios locales (contenido estático).
- `src/components/Buscador.jsx`: input controlado y selector de categoría.
- `src/components/Galeria.jsx`: tarjetas dinámicas con `.map()`.
- `src/components/Footer.jsx`: pie de página.
- `src/styles.css`: estilos complementarios a Bootstrap.

## Entrega
Subir repositorio a GitHub y entregar ZIP sin `node_modules` ni `dist`. Se recomienda renombrar el ZIP según la pauta del docente.


## Personalización de marca
El banner original proporcionado por el propietario está en `public/banner-ar-soluciones.png`. La sección de catálogo continúa consultando DummyJSON mediante fetch/useEffect.
