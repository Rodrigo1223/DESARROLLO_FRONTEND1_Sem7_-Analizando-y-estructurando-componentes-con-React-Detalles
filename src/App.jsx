import { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

const productsData = [
  {
    id: 1,
    name: 'Auriculares Bluetooth',
    description: 'Sonido envolvente con cancelación de ruido pasiva.',
    normalPrice: 45000,
    offerPrice: 29990,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
  },
  {
    id: 2,
    name: 'Reloj Inteligente',
    description: 'Monitoreo de frecuencia cardiaca y 50 modos deportivos.',
    normalPrice: 79990,
    offerPrice: 54990,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
  }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const priceToUse = product.offerPrice ?? product.price ?? 0;
    setCart((prev) => {
      const found = prev.find((item) => String(item.id) === String(product.id));
      if (found) {
        return prev.map((item) =>
          String(item.id) === String(product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, price: priceToUse, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prev) => {
      return prev
        .map((item) =>
          String(item.id) === String(productId)
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const handleDeleteItem = (productId) => {
    setCart((prev) => prev.filter((item) => String(item.id) !== String(productId)));
  };

  return (
    <div className="app-container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', color: '#111827' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>Mi comercio electrónico - Semana 7</h1>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <ProductList products={productsData} onAddToCart={handleAddToCart} />
        <ShoppingCart 
          cart={cart} 
          onRemove={handleRemoveFromCart} 
          onDelete={handleDeleteItem} 
          onAdd={handleAddToCart} 
        />
      </div>
    </div>
  );
}