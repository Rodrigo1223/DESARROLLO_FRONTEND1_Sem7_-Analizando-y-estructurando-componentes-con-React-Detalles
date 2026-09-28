import React from 'react';

/**
 * Calcula y muestra el monto total acumulado usando reduce.
 */
export default function CartTotal({ cart }) {
  const totalAmount = cart.reduce((acc, item) => acc + (item.offerPrice || 0), 0);

  return (
    <div style={{ marginTop: '16px', borderTop: '2px solid #333', paddingTop: '12px' }}>
      <h3 style={{ margin: 0, display: 'flex', justifyContent: 'space-between' }}>
        <span>Total a Pagar:</span>
        <span style={{ color: '#28a745' }}>${totalAmount.toLocaleString('es-CL')}</span>
      </h3>
    </div>
  );
}