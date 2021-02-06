import {useState} from 'react';

import './components/global/NavBar/NavBar';
import NavBar from './components/global/NavBar/NavBar';
import ProductHomeContainer from './components/global/ProductHomeContainer/ProductHomeContainer'
import ItemDetailContainer from './components/global/ProductHomeContainer/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/global/Cart/Cart';
import CheckOut from './components/global/Cart/CheckOut/CheckOut';
import Error404 from './components/global/Error404';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CartContext} from './store';

function App() {
  const [data, setData] = useState({
    cesta: {items: [], qty:[]},
    quantity:[],
    cantidad: 0,
    precTotal:0,
  })

  return (
    <CartContext.Provider value={[data, setData]}>
      <BrowserRouter>
        <NavBar />
        < Switch>
  
          <Route  exact path="/">
              <ProductHomeContainer />
          </Route>
          <Route exact path="/detail/:idd">
              <ItemDetailContainer />
          </Route>
          <Route exact path="/category/:cate">
              <ProductHomeContainer />
          </Route>
          <Route exact path="/cart">
              <Cart />
          </Route>   
          <Route exact path="/checkout">
              <CheckOut />
          </Route>      
          <Route path="*">
          <Error404 />
          </Route>
        </Switch>      
      </BrowserRouter>
      </CartContext.Provider>
  );
}


export default App;
