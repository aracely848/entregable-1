import React from 'react'

export default function Cabecera({purchasedProducts}) {
  
  return (
    <header>
      <h1>Carritos de compras</h1>
      <p>Cantidad de productos
        <span>
          {purchasedProducts}
        </span>
      </p>  
    </header>
  )
}
