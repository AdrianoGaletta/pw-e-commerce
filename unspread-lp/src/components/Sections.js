export function StatsBand() {
  return (
    <div className="stats-band" aria-label="Estadísticas clave del mercado">
      <div className="container">
        <div className="stats-band__grid">
          <div className="stats-band__item">
            <p className="stats-band__num">73<span>%</span></p>
            <p className="stats-band__lbl">
              de las PyMEs con stock trabaja con planillas desconectadas
            </p>
          </div>

          <div className="stats-band__item">
            <p className="stats-band__num">4,2<span>hs</span></p>
            <p className="stats-band__lbl">
              promedio semanal perdido conciliando información entre sistemas
            </p>
          </div>

          <div className="stats-band__item">
            <p className="stats-band__num">1<span> sistema</span></p>
            <p className="stats-band__lbl">
              reemplaza compras, ventas, inventario y control financiero
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Problems() {
  return (
    <section id="problemas" className="section" aria-labelledby="prob-h2">
      <div className="container">
        <div className="sh">
          <p className="sh__eye">¿Te suena familiar?</p>
          <h2 id="prob-h2">Problemas que frenan la operación</h2>
          <p className="sh__sub">
            Los errores más comunes que Unspread está diseñado para eliminar.
          </p>
        </div>

        <div className="grid-3">
          <article className="card">
            <div className="card__icon" aria-hidden="true">📦</div>
            <h3>Stock desactualizado</h3>
            <p>
              Se vende sin saber qué hay disponible y los errores aparecen en el peor momento.
            </p>
          </article>

          <article className="card">
            <div className="card__icon" aria-hidden="true">🔄</div>
            <h3>Doble carga de datos</h3>
            <p>
              Una cosa en Excel, otra en facturación, otra en WhatsApp. Tiempo y claridad perdidos.
            </p>
          </article>

          <article className="card">
            <div className="card__icon" aria-hidden="true">🛒</div>
            <h3>Compras sin control</h3>
            <p>
              Cuesta saber cuánto se compró, a quién y qué quedó pendiente de pago o recepción.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Modules() {
  return (
    <section
      id="producto"
      className="section"
      style={{
        background: 'var(--bg-subtle)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
      aria-labelledby="prod-h2"
    >
      <div className="container">
        <div className="sh">
          <p className="sh__eye">El producto</p>
          <h2 id="prod-h2">Los módulos que hacen funcionar a Unspread</h2>
          <p className="sh__sub">
            Cuatro áreas integradas para controlar toda la operación desde un solo sistema.
          </p>
        </div>

        <div className="grid-2">
          <article className="card">
            <p className="mod-num">01</p>
            <h3>Compras</h3>
            <p className="mod-sub">Proveedores, órdenes y recepciones.</p>
            <p>
              Centralizá el ciclo de compras y eliminá la pérdida de visibilidad sobre deuda,
              entregas y condiciones pactadas.
            </p>
          </article>

          <article className="card">
            <p className="mod-num">02</p>
            <h3>Ventas</h3>
            <p className="mod-sub">Del pedido al cobro, conectado al stock real.</p>
            <p>
              Registrá operaciones, clientes y comprobantes con lógica simple y vinculada
              a la disponibilidad real.
            </p>
          </article>

          <article className="card">
            <p className="mod-num">03</p>
            <h3>Inventario</h3>
            <p className="mod-sub">Sabé qué tenés, dónde está y qué se mueve.</p>
            <p>
              El stock se actualiza junto con compras y ventas para reducir errores
              y mejorar la toma de decisiones.
            </p>
          </article>

          <article className="card">
            <p className="mod-num">04</p>
            <h3>Finanzas</h3>
            <p className="mod-sub">Cuentas a cobrar, a pagar y resultados.</p>
            <p>
              Unificá la información económica del negocio sin tener que cerrar todo
              a mano al final del mes.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function WhyUnspread() {
  return (
    <section id="diferencial" className="section" aria-labelledby="why-h2">
      <div className="container">
        <div className="sh">
          <p className="sh__eye">Por qué Unspread</p>
          <h2 id="why-h2">No es un ERP genérico adaptado</h2>
          <p className="sh__sub">
            La mayoría de los sistemas intenta servir para todo. Unspread se enfoca en negocios con stock.
          </p>
        </div>

        <div className="grid-3">
          <article className="card">
            <div className="card__icon" aria-hidden="true">🎯</div>
            <h3>Pensado para stock</h3>
            <p>
              Flujos diseñados para empresas que compran, venden, almacenan y necesitan trazabilidad real.
            </p>
          </article>

          <article className="card">
            <div className="card__icon" aria-hidden="true">⚡</div>
            <h3>Implementación simple</h3>
            <p>
              Ordenar la operación sin proyectos largos ni meses de consultoría innecesaria.
            </p>
          </article>

          <article className="card">
            <div className="card__icon" aria-hidden="true">📊</div>
            <h3>Data útil para decidir</h3>
            <p>
              No solo registrar información, sino volverla clara y accionable para el negocio.
            </p>
          </article>
        </div>

        <div className="table-wrap">
          <table>
            <caption>Unspread vs ERPs tradicionales</caption>
            <thead>
              <tr>
                <th scope="col">Criterio</th>
                <th scope="col">Unspread</th>
                <th scope="col">ERPs tradicionales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enfoque</td>
                <td>Negocios con stock</td>
                <td>Generalista</td>
              </tr>
              <tr>
                <td>Implementación</td>
                <td>Rápida</td>
                <td>Lenta</td>
              </tr>
              <tr>
                <td>Curva de aprendizaje</td>
                <td>Baja</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>Complejidad</td>
                <td>Necesaria</td>
                <td>Excesiva</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section
      id="faq"
      className="section"
      style={{
        background: 'var(--bg-subtle)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
      aria-labelledby="faq-h2"
    >
      <div className="container">
        <div className="sh">
          <p className="sh__eye">Preguntas frecuentes</p>
          <h2 id="faq-h2">Respuestas antes de agendar una demo</h2>
        </div>

        <div className="faq-list">
          <article className="faq">
            <details>
              <summary>¿Cuánto tarda la implementación?</summary>
              <p className="faq__body">
                Depende del volumen de datos inicial, pero la propuesta de Unspread es
                reducir tiempos de adopción y evitar implementaciones eternas.
              </p>
            </details>
          </article>

          <article className="faq">
            <details>
              <summary>¿Puedo contratar un plan y después sumar extras?</summary>
              <p className="faq__body">
                Sí. Primero elegís el plan base y podés agregar funcionalidades en cualquier
                momento, sin interrumpir la operación.
              </p>
            </details>
          </article>

          <article className="faq">
            <details>
              <summary>¿Cómo funciona el carrito?</summary>
              <p className="faq__body">
                Hacé clic en "Agregar al carrito" en cualquier plan o extra.
                El carrito se despliega desde el ícono en el header y muestra el total actualizado automáticamente.
              </p>
            </details>
          </article>

          <article className="faq">
            <details>
              <summary>¿Qué pasa con mis datos?</summary>
              <p className="faq__body">
                El objetivo es centralizar la información del negocio y mantenerla ordenada,
                accesible y exportable en todo momento.
              </p>
            </details>
          </article>
        </div>
      </div>
    </section>
  );
}