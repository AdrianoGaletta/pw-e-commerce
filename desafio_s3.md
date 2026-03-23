# Desafío Semana 3 - HTML Semántico y Accesibilidad

## Nombre del proyecto
Unspread - Landing page de ERP SaaS con lógica de e-commerce de software

## Descripción
Para este desafío desarrollé una landing page para mi proyecto Unspread, un ERP orientado a negocios con stock.  
Como no se trata de una tienda online tradicional de productos físicos, adapté la lógica de e-commerce a una tienda de software: los productos principales son planes de suscripción y además existen funcionalidades extra que se pueden agregar a un carrito.

## Estructura semántica utilizada
En la página utilicé etiquetas semánticas de HTML para organizar correctamente el contenido:

- `header`: encabezado principal del sitio
- `nav`: navegación principal y navegación del footer
- `main`: contenido principal de la página
- `section`: agrupación temática de bloques de contenido
- `article`: planes, extras, problemas, beneficios y preguntas frecuentes
- `aside`: carrito de compra
- `figure`: agrupación de imágenes de planes y extras
- `figcaption`: descripción breve de las imágenes
- `footer`: pie de página del sitio
- `address`: información de contacto
- `details` y `summary`: preguntas frecuentes desplegables

## Productos principales
Los tres productos principales del sitio son los planes de suscripción:

1. Unspread Starter
2. Unspread Growth
3. Unspread Enterprise

Además, agregué funciones extra que pueden sumarse por separado:

- Integración con WhatsApp
- Dashboard Ejecutivo
- Soporte Prioritario

## Decisiones de accesibilidad aplicadas
Para mejorar la accesibilidad del sitio, incorporé:

- texto alternativo `alt` en imágenes
- etiquetas `label` vinculadas correctamente con `for` e `id`
- botones reales con `button` para acciones
- `aria-label` en botones de agregar al carrito
- un enlace para “Saltar al contenido principal”
- `role="search"` en el formulario de búsqueda
- `loading="lazy"` en imágenes

## Pruebas de accesibilidad realizadas
Realicé las siguientes pruebas:

1. Navegación con teclado usando la tecla Tab
2. Revisión de labels en formularios
3. Revisión de textos alternativos en imágenes
4. Prueba de zoom del navegador al 200%
5. Validación de estructura HTML

## Observaciones
El carrito se presenta de manera estática, ya que en esta etapa el foco del desafío está en HTML semántico y accesibilidad.  
La lógica dinámica de agregar o quitar elementos del carrito podría implementarse más adelante con JavaScript.

## Conclusión
La página mantiene la identidad de una landing B2B/SaaS, pero al mismo tiempo cumple la estructura solicitada para el desafío, reinterpretando el e-commerce como una tienda de software con planes, extras y carrito.