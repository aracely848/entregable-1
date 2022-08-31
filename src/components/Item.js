import { useState } from 'react';

export default function Item({product, increasePurchasedProducts}) {

  const [stock, setStock] = useState(product.stock); 
  const buy = () => {
    setStock(stock - 1);    
    increasePurchasedProducts();
  }

  return (
    <div className='producto'>
      <h3>{product.producto.nombre}</h3>
      <p>{product.producto.descripcion}</p>
      <h5>En stock: {stock > 0 ? stock : <span>agotado</span>} </h5>
      <button 
        disabled={stock > 0 ? false : true} 
        onClick={buy}
      >
        {stock > 0 ? 'COMPRAR' : 'SIN STOCK'}
      </button>
    </div>
  )
}
