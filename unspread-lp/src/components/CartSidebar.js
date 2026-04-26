import { useEffect } from 'react';

export default function CartSidebar({
  isOpen,
  onClose,
  items,
  onRemove,
  total,
  onCheckout,
}) {
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <>
      <div
        className={`cart-overlay${isOpen ? ' open' : ''}`}
        aria-hidden={!isOpen}
        onClick={onClose}
      />

      <aside
        className={`cart-sidebar${isOpen ? ' open' : ''}`}
        aria-label="Carrito de compras"
        aria-hidden={!isOpen}
      >
        <div className="cs-head">
          <h2>Carrito</h2>
          <button
            className="cs-close"
            type="button"
            aria-label="Cerrar carrito"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cs-empty">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <p>
              Tu carrito está vacío.
              <br />
              Agregá un plan o funcionalidad.
            </p>
          </div>
        ) : (
          <>
            <ul className="cs-items">
              {items.map((item) => (
                <li className="cs-item" key={item.id}>
                  <div className="cs-item__info">
                    <p className="cs-item__name">{item.nombre}</p>
                    <p className="cs-item__type">USD {item.precio} / mes</p>
                  </div>

                  <span className="cs-item__price">USD {item.precio}</span>

                  <button
                    className="cs-item__remove"
                    type="button"
                    aria-label={`Quitar ${item.nombre}`}
                    onClick={() => onRemove(item.id)}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            <div className="cs-foot">
              <div className="cs-total-row">
                <span className="cs-total-label">Total / mes</span>
                <span
                  className="cs-total-num"
                  dangerouslySetInnerHTML={{
                    __html: `USD ${total} <small>/ mes</small>`,
                  }}
                />
              </div>

              <p className="cs-note">Sin costos de implementación ocultos.</p>

              <button
                className="btn btn--primary btn--full"
                type="button"
                onClick={onCheckout}
              >
                Continuar contratación
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}