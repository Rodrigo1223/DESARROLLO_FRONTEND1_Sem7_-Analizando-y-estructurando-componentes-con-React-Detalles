import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  const hasOffer = product.offerPrice && product.offerPrice < product.normalPrice;

  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.name} style={imageStyle} />
      <h3>{product.name}</h3>
      <p style={descStyle}>{product.shortDescription}</p>
      
      <div style={priceContainer}>
        {hasOffer ? (
          <>
            <span style={normalPriceStyle}>${product.normalPrice.toLocaleString('es-CL')}</span>
            <span style={offerPriceStyle}>${product.offerPrice.toLocaleString('es-CL')}</span>
          </>
        ) : (
          <span>${product.normalPrice.toLocaleString('es-CL')}</span>
        )}
      </div>

      <button style={buttonStyle} onClick={() => addToCart(product)}>
        Agregar al Carrito
      </button>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  width: '240px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};
const imageStyle = { width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' };
const descStyle = { fontSize: '0.9rem', color: '#666', height: '40px', overflow: 'hidden' };
const priceContainer = { margin: '10px 0', fontSize: '1.1rem' };
const normalPriceStyle = { textDecoration: 'line-through', color: '#888', marginRight: '8px', fontSize: '0.9rem' };
const offerPriceStyle = { color: '#e53935', fontWeight: 'bold' };
const buttonStyle = { backgroundColor: '#1976d2', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' };

export default ProductCard;