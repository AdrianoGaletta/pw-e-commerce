export default function Plans({ onAddToCart }) {
  return (
    <section id="planes" className="section" aria-labelledby="plans-h2">
      <div className="container">
        <div className="sh">
          <p className="sh__eye">Planes de suscripción</p>
          <h2 id="plans-h2">Elegí el plan que mejor se adapte a tu operación</h2>
          <p className="sh__sub">
            Sin costos de implementación ocultos. Podés cambiar de plan cuando quieras.
          </p>
        </div>

        <div className="plans-grid">
          <article className="plan">
            <div className="plan__img">
              <img
                src="https://placehold.co/640x300/f8fafc/0f1117?text=Starter"
                alt="Plan Starter"
                width="640"
                height="300"
                loading="lazy"
              />
            </div>

            <div className="plan__body">
              <header>
                <h3>Starter</h3>
                <p className="plan__sub">Para PyMEs ordenando su operación.</p>
              </header>

              <p className="plan__price">USD 20 <small>/ mes</small></p>

              <ul className="plan__list">
                <li>Hasta 5 usuarios</li>
                <li>Compras, Ventas e Inventario</li>
                <li>Gestión de proveedores y clientes</li>
                <li>Reportes básicos</li>
              </ul>

              <div className="plan__action">
                <button
                  className="btn btn--dark btn--full"
                  type="button"
                  onClick={() => onAddToCart('Plan Starter', 20)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </article>

          <article className="plan plan--feat">
            <div className="plan__img">
              <img
                src="https://placehold.co/640x300/eff6ff/1e3a8a?text=Growth"
                alt="Plan Growth"
                width="640"
                height="300"
                loading="lazy"
              />
            </div>

            <div className="plan__body">
              <header>
                <span className="plan__tag">Más elegido</span>
                <h3 style={{ marginTop: '.5rem' }}>Growth</h3>
                <p className="plan__sub">Control total de la operación.</p>
              </header>

              <p className="plan__price">USD 50 <small>/ mes</small></p>

              <ul className="plan__list">
                <li>Usuarios ilimitados</li>
                <li>Compras, Ventas, Inventario y Finanzas</li>
                <li>Dashboard ejecutivo</li>
                <li>Soporte prioritario</li>
                <li>Onboarding personalizado</li>
              </ul>

              <div className="plan__action">
                <button
                  className="btn btn--primary btn--full"
                  type="button"
                  onClick={() => onAddToCart('Plan Growth', 50)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </article>

          <article className="plan">
            <div className="plan__img">
              <img
                src="https://placehold.co/640x300/f8fafc/0f1117?text=Enterprise"
                alt="Plan Enterprise"
                width="640"
                height="300"
                loading="lazy"
              />
            </div>

            <div className="plan__body">
              <header>
                <h3>Enterprise</h3>
                <p className="plan__sub">Para operaciones con integraciones específicas.</p>
              </header>

              <p className="plan__price" style={{ fontSize: '1.28rem' }}>A medida</p>

              <ul className="plan__list">
                <li>Todo lo de Growth</li>
                <li>Integraciones con sistemas existentes</li>
                <li>SLA y soporte dedicado</li>
                <li>Capacitación del equipo</li>
              </ul>

              <div className="plan__action">
                <button
                  className="btn btn--dark btn--full"
                  type="button"
                  onClick={() => onAddToCart('Plan Enterprise', 0)}
                >
                  Consultar precio
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}