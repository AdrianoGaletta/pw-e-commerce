import { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import Hero from './components/Hero';
import { StatsBand, Problems, Modules, WhyUnspread, Faq } from './components/Sections';
import SearchBox from './components/SearchBox';
import Plans from './components/Plans';
import Extras from './components/Extras';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';

let nextId = 1;

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [fabVisible, setFabVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFabVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const total = items.reduce((acc, item) => acc + item.precio, 0);

  function handleAddToCart(nombre, precio) {
    if (precio === 0) {
      console.log('Enterprise agregado (precio a medida)');
      alert('Plan Enterprise agregado.\nUn asesor te va a contactar para definir el precio.');
      return;
    }

    const nuevoItem = {
      id: nextId++,
      nombre,
      precio,
    };

    setItems((prev) => [...prev, nuevoItem]);
    setCartOpen(true);

    console.log('Agregaste: ' + nombre + ' — USD ' + precio);
    console.log('Total: USD ' + (total + precio) + ' / mes');
  }

  function handleRemove(id) {
    const item = items.find((i) => i.id === id);
    setItems((prev) => prev.filter((i) => i.id !== id));

    if (item) {
      console.log('Quitaste: ' + item.nombre);
    }
  }

  function handleCheckout() {
    let resumen = '¡Listo!\n\nResumen de tu suscripción:\n';
    resumen += 'Total: USD ' + total + ' / mes\n\n';
    resumen += 'Un asesor de Unspread te va a contactar para completar la contratación.';

    console.log('--- CHECKOUT --- Total: USD ' + total + ' / mes');
    alert(resumen);
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido principal
      </a>

      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        onRemove={handleRemove}
        total={total}
        onCheckout={handleCheckout}
      />

      <Navbar
        cantidadItems={items.length}
        onOpenCart={() => setCartOpen(true)}
      />

      <main id="main">
        <Hero />
        <StatsBand />
        <Problems />
        <Modules />
        <SearchBox />
        <Plans onAddToCart={handleAddToCart} />
        <Extras onAddToCart={handleAddToCart} />
        <WhyUnspread />
        <Faq />
        <DemoForm />
      </main>

      <Footer />

      <a
        className={`fab${fabVisible ? ' fab--visible' : ''}`}
        href="#demo"
        aria-label="Agendar una demo con Unspread"
      >
        <span className="fab__dot" aria-hidden="true">✉</span>
        Agendar demo
      </a>
    </>
  );
}