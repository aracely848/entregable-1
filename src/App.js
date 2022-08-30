import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

import { useState } from 'react';

function App() {

  const [purchasedProducts, setPurchasedProducts] = useState(0);

  const increasePurchasedProducts = () => {
    setPurchasedProducts(purchasedProducts + 1)
  }

  return (
    <div className="App">
      <Cabecera 
        purchasedProducts={purchasedProducts}
      />
      <Listado 
        increasePurchasedProducts={increasePurchasedProducts}
      />
    </div>
  );
}

export default App;
