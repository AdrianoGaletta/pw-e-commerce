import { useState } from 'react';

const PRECIO_STARTER = 20;
const PRECIO_GROWTH = 50;
const PRECIO_WHATSAPP = 5;
const PRECIO_DASHBOARD = 10;
const PRECIO_SOPORTE = 15;

export default function SearchBox() {
  const [busqueda, setBusqueda] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const textoBuscado = busqueda.trim().toLowerCase();

    if (textoBuscado === '') {
      alert('Por favor escribí algo para buscar.');
      return;
    }

    let mensajeResultado = '';

    if (textoBuscado.includes('starter')) {
      mensajeResultado = '✅ Plan Starter — USD ' + PRECIO_STARTER + ' / mes\nIdeal para PyMEs ordenando su operación.';
    } else if (textoBuscado.includes('growth')) {
      mensajeResultado = '✅ Plan Growth — USD ' + PRECIO_GROWTH + ' / mes\nControl total de la operación. El más elegido.';
    } else if (textoBuscado.includes('enterprise')) {
      mensajeResultado = '✅ Plan Enterprise — Precio a medida\nPara operaciones con integraciones específicas.';
    } else if (textoBuscado.includes('whatsapp')) {
      mensajeResultado = '✅ Extra: WhatsApp — USD ' + PRECIO_WHATSAPP + ' / mes\nAutomatizá avisos y seguimiento comercial.';
    } else if (textoBuscado.includes('dashboard')) {
      mensajeResultado = '✅ Extra: Dashboard Ejecutivo — USD ' + PRECIO_DASHBOARD + ' / mes\nIndicadores clave para decidir.';
    } else if (textoBuscado.includes('soporte')) {
      mensajeResultado = '✅ Extra: Soporte Prioritario — USD ' + PRECIO_SOPORTE + ' / mes\nRespuestas rápidas ante incidencias.';
    } else {
      mensajeResultado = '❌ No encontramos "' + textoBuscado + '".\nProbá: Starter, Growth, Enterprise, WhatsApp, Dashboard o Soporte.';
    }

    console.log('--- BUSCADOR ---');
    console.log('Buscó: ' + textoBuscado);
    console.log('Resultado: ' + mensajeResultado);

    alert(mensajeResultado);
  }

  return (
    <section className="section-tight" aria-labelledby="search-h2">
      <div className="container">
        <div className="search-box">
          <div className="sh" style={{ marginBottom: '1.1rem' }}>
            <p className="sh__eye">Buscador</p>
            <h2 id="search-h2" style={{ fontSize: '1.45rem' }}>
              Encontrá planes y funcionalidades
            </h2>
          </div>

          <form onSubmit={handleSubmit} role="search">
            <div className="search-row">
              <div className="field">
                <label htmlFor="busqueda">Buscar plan o funcionalidad</label>
                <input
                  type="search"
                  id="busqueda"
                  name="busqueda"
                  placeholder="Ej: Growth, WhatsApp, dashboard…"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
              </div>

              <button className="btn btn--primary" type="submit">
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}