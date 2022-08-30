import React from 'react';
import products from './data.json';
import Item from './Item';

export default function Listado({increasePurchasedProducts}) {
  return (
    <div className='container'>
      {products.map(product => {
        return (
          <Item 
            product={product} 
            key={product.id} 
            increasePurchasedProducts={increasePurchasedProducts}>            
          </Item>
        )
      })}      
    </div>
  )
}
