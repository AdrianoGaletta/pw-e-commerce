export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="hero__eye">ERP para negocios con stock</p>

          <h1>
            El sistema operativo
            <br />
            de <strong>tu negocio.</strong>
          </h1>

          <p className="hero__copy">
            Unspread unifica compras, ventas, inventario y finanzas en un solo lugar.
            Sin planillas paralelas, sin información desconectada.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#planes">Ver planes</a>
            <a className="btn btn--ghost" href="#producto">Ver módulos</a>
          </div>

          <ul className="hero__pills">
            <li className="hero__pill">Sin tarjeta de crédito</li>
            <li className="hero__pill">Demo personalizada</li>
            <li className="hero__pill">Implementación simple</li>
          </ul>
        </div>

        <figure className="hero-visual" aria-label="Vista previa del panel operativo de Unspread">
          <div className="dash">
            <div className="dash__bar">
              <div className="dash__brand">
                <img src="/logo-unspread.png" alt="" width="26" height="26" />
                Panel operativo Unspread
              </div>
              <span className="dash__badge">● Sistema activo</span>
            </div>

            <div className="dash__metrics">
              <article className="dash__tile">
                <p className="dash__tile-lbl">Stock total</p>
                <p className="dash__tile-val">12.840</p>
              </article>

              <article className="dash__tile">
                <p className="dash__tile-lbl">Órdenes / mes</p>
                <p className="dash__tile-val">1.248</p>
              </article>

              <article className="dash__tile">
                <p className="dash__tile-lbl">Margen op.</p>
                <p className="dash__tile-val">18,4%</p>
              </article>
            </div>

            <div className="dash__bottom">
              <section className="dash__card" aria-labelledby="proc-h">
                <h4 id="proc-h">Procesos conectados</h4>
                <ul className="proc-list">
                  <li className="proc-item"><strong>Compras</strong><span>24 abiertas</span></li>
                  <li className="proc-item"><strong>Ventas</strong><span>58 en curso</span></li>
                  <li className="proc-item"><strong>Inventario</strong><span>Sincronizado</span></li>
                </ul>
              </section>

              <section className="dash__card" aria-labelledby="rend-h">
                <h4 id="rend-h">Rendimiento</h4>
                <div className="bars" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </section>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}