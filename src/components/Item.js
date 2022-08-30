export default function Item({product, increasePurchasedProducts}) {

  const buy = () => {
    product.stock = product.stock - 1;    
    increasePurchasedProducts();
  }

  return (
    <div className='producto'>
      <h3>{product.producto.nombre}</h3>
      <p>{product.producto.descripcion}</p>
      <h5>En stock: {product.stock > 0 ? product.stock : <span>agotado</span>} </h5>
      <button 
        disabled={product.stock > 0 ? false : true} 
        onClick={buy}
      >
        {product.stock > 0 ? 'COMPRAR' : 'SIN STOCK'}
      </button>
    </div>
  )
}
