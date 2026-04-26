// ============================================================
// UNSPREAD — main.js
// Clase 1: variables, strings, numbers, prompt, alert, console.log
// ============================================================


// ────────────────────────────────────────────────────────────
// 1. VARIABLES DE PRECIOS (const — valores que no cambian)
//    Clase 1: declaración e inicialización con const
// ────────────────────────────────────────────────────────────

const PRECIO_STARTER    = 20;   // number — Plan Starter en USD
const PRECIO_GROWTH     = 50;   // number — Plan Growth en USD
const PRECIO_WHATSAPP   = 5;    // number — Extra WhatsApp en USD
const PRECIO_DASHBOARD  = 10;   // number — Extra Dashboard en USD
const PRECIO_SOPORTE    = 19;   // number — Extra Soporte en USD

// Nombre del producto (string)
const NOMBRE_PRODUCTO = "Unspread";


// ────────────────────────────────────────────────────────────
// 2. VARIABLES DEL CARRITO (let — valores que sí cambian)
//    Clase 1: let puede recibir múltiples asignaciones
// ────────────────────────────────────────────────────────────

let planSeleccionado     = "Growth";   // string — plan activo
let precioBase           = PRECIO_GROWTH; // number — precio del plan
let extraWhatsapp        = PRECIO_WHATSAPP;  // number
let extraDashboard       = PRECIO_DASHBOARD; // number
let extraSoporte         = PRECIO_SOPORTE;   // number

// Operación matemática: suma de todos los ítems del carrito
// Clase 1: operaciones básicas con numbers
let totalCarrito = precioBase + extraWhatsapp + extraDashboard + extraSoporte;

// Mostramos el total en consola para verificar
// Clase 1: console.log para ver resultados durante el desarrollo
console.log("Plan seleccionado: " + planSeleccionado);
console.log("Precio base: USD " + precioBase);
console.log("Extra WhatsApp: USD " + extraWhatsapp);
console.log("Extra Dashboard: USD " + extraDashboard);
console.log("Extra Soporte: USD " + extraSoporte);
console.log("Total del carrito: USD " + totalCarrito);


// ────────────────────────────────────────────────────────────
// 3. BUSCADOR DE PLANES
//    Clase 1: prompt, variables string, concatenación, alert
// ────────────────────────────────────────────────────────────

// Agarramos el formulario del buscador por su id
let formBuscador = document.getElementById("form-buscador");

// Cuando el usuario hace submit en el buscador
formBuscador.addEventListener("submit", function(evento) {

  // Evitamos que la página recargue (comportamiento normal del form)
  evento.preventDefault();

  // Leemos lo que escribió el usuario en el campo
  // Clase 1: asignación de variable string
  let busqueda = document.getElementById("busqueda").value;

  // Si el campo está vacío, pedimos el dato con prompt
  // Clase 1: prompt() solicita un dato al usuario
  if (busqueda === "") {
    busqueda = prompt("¿Qué plan o funcionalidad estás buscando?");
  }

  // Si después del prompt sigue vacío o cancela, no hacemos nada
  if (busqueda === "" || busqueda === null) {
    return;
  }

  // Convertimos a minúsculas para comparar sin importar mayúsculas
  let busquedaMinusculas = busqueda.toLowerCase();

  // Variables para guardar el resultado de la búsqueda (string)
  let resultadoBusqueda = "";

  // Comparamos la búsqueda contra los planes y extras disponibles
  // Clase 1: concatenación de strings con +
  if (busquedaMinusculas === "starter") {
    resultadoBusqueda = "Plan Starter — USD " + PRECIO_STARTER + " / mes. Incluye: hasta 5 usuarios, Compras, Ventas e Inventario.";

  } else if (busquedaMinusculas === "growth") {
    resultadoBusqueda = "Plan Growth — USD " + PRECIO_GROWTH + " / mes. Incluye: usuarios ilimitados, todos los módulos, dashboard y soporte prioritario.";

  } else if (busquedaMinusculas === "enterprise") {
    resultadoBusqueda = "Plan Enterprise — Precio a medida. Incluye: todo de Growth más integraciones, SLA dedicado y capacitación.";

  } else if (busquedaMinusculas === "whatsapp") {
    resultadoBusqueda = "Extra: Integración WhatsApp — USD " + PRECIO_WHATSAPP + " / mes. Automatizá avisos y seguimiento comercial.";

  } else if (busquedaMinusculas === "dashboard") {
    resultadoBusqueda = "Extra: Dashboard Ejecutivo — USD " + PRECIO_DASHBOARD + " / mes. Visualizá indicadores clave.";

  } else if (busquedaMinusculas === "soporte") {
    resultadoBusqueda = "Extra: Soporte Prioritario — USD " + PRECIO_SOPORTE + " / mes. Respuestas más rápidas ante incidencias.";

  } else {
    // Si no encontró nada, concatenamos el término buscado en el mensaje
    resultadoBusqueda = "No encontramos resultados para \"" + busqueda + "\". Probá con: Starter, Growth, Enterprise, WhatsApp, Dashboard o Soporte.";
  }

  // Mostramos el resultado en consola y con alert
  // Clase 1: console.log y alert para mostrar salida al usuario
  console.log("Búsqueda realizada: " + busqueda);
  console.log("Resultado: " + resultadoBusqueda);
  alert(resultadoBusqueda);
});


// ────────────────────────────────────────────────────────────
// 4. FORMULARIO DE DEMO
//    Clase 1: leer valores string de inputs, concatenación, alert
// ────────────────────────────────────────────────────────────

let formDemo = document.getElementById("form-demo");

formDemo.addEventListener("submit", function(evento) {

  // Evitamos recarga de página
  evento.preventDefault();

  // Leemos cada campo del formulario
  // Clase 1: variables string — cada campo es un dato de texto
  let nombre  = document.getElementById("nombre").value;
  let empresa = document.getElementById("empresa").value;
  let email   = document.getElementById("email").value;

  // Armamos el mensaje de confirmación concatenando strings y variables
  // Clase 1: concatenación con + para unir strings
  let mensajeConfirmacion = "¡Gracias, " + nombre + "!" +
    "\n\nRecibimos tu solicitud de demo para " + empresa + "." +
    "\nTe vamos a contactar a " + email + " en menos de 24 hs." +
    "\n\n— Equipo " + NOMBRE_PRODUCTO;

  // Mostramos en consola (útil para desarrollo)
  console.log("Formulario enviado por: " + nombre);
  console.log("Empresa: " + empresa);
  console.log("Email: " + email);

  // Mostramos el mensaje de confirmación al usuario
  // Clase 1: alert() muestra una salida al usuario
  alert(mensajeConfirmacion);
});


// ────────────────────────────────────────────────────────────
// 5. TOTAL DEL CARRITO — mostramos en consola al cargar la página
//    Clase 1: operaciones con numbers, console.log
// ────────────────────────────────────────────────────────────

// Calculamos cuánto ahorra el usuario si elige Growth vs Starter
// Clase 1: operación matemática de resta
let diferenciaPrecio = PRECIO_GROWTH - PRECIO_STARTER;

// Armamos un resumen con concatenación de string + number
let resumenCarrito = "=== RESUMEN DEL CARRITO ===" +
  "\nPlan " + planSeleccionado + ": USD " + precioBase +
  "\nExtra WhatsApp: USD " + extraWhatsapp +
  "\nExtra Dashboard: USD " + extraDashboard +
  "\nExtra Soporte: USD " + extraSoporte +
  "\n--------------------------" +
  "\nTOTAL: USD " + totalCarrito + " / mes";

// Clase 1: console.log para mostrar el resumen completo
console.log(resumenCarrito);
console.log("Growth cuesta USD " + diferenciaPrecio + " más que Starter por mes.");