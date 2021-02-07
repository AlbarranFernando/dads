import {useState} from 'react';

import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import ProductHomeContainer from './components/ProductHomeContainer/ProductHomeContainer'
import ItemDetailContainer from './components/ProductHomeContainer/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import CheckOut from './components/Cart/CheckOut/CheckOut';
import Error404 from './components/utils/Error404/Error404';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import {CartContext} from './Store/Store';

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
        <Footer />  
      </BrowserRouter>
      </CartContext.Provider>
  );
}


export default App;
