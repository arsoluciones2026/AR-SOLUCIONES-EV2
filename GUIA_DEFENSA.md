# Guía breve de defensa oral (5 a 10 minutos)

1. **Presentación**: Soy Andrés Ramírez, esta SPA representa A.R Soluciones Informáticas, con servicios de soporte técnico y seguridad.
2. **Vite**: configura el entorno de desarrollo; `index.html` contiene el nodo `root`; `main.jsx` monta React; `App.jsx` organiza la aplicación.
3. **Componentes**: Header, Landing, Servicios, Buscador, Galeria y Footer. `App` envía propiedades (props) al Buscador y a Galeria.
4. **useState**: `productos` guarda el arreglo original de la API; `busqueda` el texto; `categoria` la selección; `cargando` y `error` los estados de interfaz. Al cambiar un estado React vuelve a renderizar.
5. **useEffect**: se ejecuta al montar el componente; el arreglo `[]` indica que no depende de estados cambiantes. En modo desarrollo StrictMode puede ejecutar el efecto más de una vez para detectar problemas; AbortController cancela solicitudes anteriores.
6. **fetch**: hace una solicitud HTTP GET a DummyJSON. `await respuesta.json()` convierte la respuesta JSON en objeto JavaScript. Se verifica `respuesta.ok` y se captura cualquier error.
7. **filter/includes**: `filter` devuelve un nuevo arreglo sin modificar `productos`. `includes` verifica si el título, marca o categoría contienen el texto escrito. `toLowerCase` hace que la búsqueda ignore mayúsculas.
8. **onChange**: actualiza `busqueda` al escribir y `categoria` al cambiar el selector. Los resultados se recalculan automáticamente.
9. **map**: transforma cada producto filtrado en una tarjeta React; `key={p.id}` da identidad estable a cada tarjeta.
10. **Bootstrap**: `container`, `row`, `col-sm-6`, `col-lg-4`, `col-xl-3`, `form-control`, `form-select` y `btn` permiten diseño responsivo.
11. **Diferencia entre API y contenido local**: los productos se obtienen en tiempo real desde DummyJSON; los servicios del negocio son información estática en Servicios.jsx.
12. **Demostración**: abrir app, buscar "Samsung", seleccionar celulares, borrar texto, mostrar resultados y reducir la ventana para ver diseño móvil.

**Preguntas clave**
- ¿Por qué no modificas el arreglo original? Porque `filter` crea otro arreglo y conserva los datos originales para futuras búsquedas.
- ¿Qué pasa si falla internet? Se muestra el mensaje de error en vez de una página en blanco.
- ¿Por qué useEffect? Para cargar datos al iniciar sin ejecutar la solicitud durante cada renderizado.
- ¿Por qué props? Para compartir datos y funciones entre componentes de manera explícita.
