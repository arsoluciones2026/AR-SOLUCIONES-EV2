# Guía para explicar el código durante la defensa oral

**App.jsx:** controla el estado, obtiene datos con `fetch` dentro de `useEffect` y filtra resultados sin alterar la lista original. `useEffect(..., [])` inicia la carga al montar el componente. `AbortController` cancela la petición si se desmonta.

**useState:** `productos` guarda el arreglo de la API; `busqueda` guarda el texto; `categoria` guarda el filtro; `cargando` y `error` controlan mensajes.

**Buscador.jsx:** `value` refleja el estado y `onChange` llama a la función enviada desde App. Por eso el resultado cambia mientras escribes.

**Filtrado:** `.filter()` devuelve un arreglo nuevo y `.includes()` verifica coincidencias. `trim()` elimina espacios extremos y `toLowerCase()` ignora mayúsculas.

**Galeria.jsx:** `.map()` convierte los objetos en tarjetas; `key={p.id}` identifica cada elemento para React.

**Servicios.jsx:** muestra datos locales de la empresa, distintos de los productos de la API.

**Landing.jsx y Header.jsx:** forman la portada y el menú de una SPA. `href="#catalogo"` salta a una sección sin recargar otra página.

**Bootstrap:** `row`, `col-md-8`, `col-sm-6`, `col-lg-4` y `col-xl-3` hacen que el diseño se adapte a diferentes pantallas.

**main.jsx:** inicia React dentro de `#root`, importa Bootstrap y los estilos propios.

**Preguntas frecuentes:**
1. ¿Qué es una API REST? Un servicio al que el cliente hace solicitudes HTTP para recibir datos.
2. ¿Qué hace `await respuesta.json()`? Convierte el cuerpo JSON de la respuesta a un objeto JavaScript.
3. ¿Por qué `useEffect`? Para realizar la petición cuando se monta el componente, sin hacerla en cada render.
4. ¿Por qué no guardamos `filtrados` en otro estado? Porque se puede calcular desde `productos`, `busqueda` y `categoria`.
5. ¿Qué ocurre si la API falla? Se muestra un mensaje de error en lugar de las tarjetas.

Para entregar: comprueba `npm install`, `npm run dev` y `npm run build`; no incluyas `node_modules` ni `dist` en el ZIP.
