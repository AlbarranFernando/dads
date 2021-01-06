
import './components/global/NavBar/NavBar';
import NavBar from './components/global/NavBar/NavBar';
import ProductHomeContainer from './components/global/ProductHomeContainer/ProductHomeContainer'
import ItemDetailContainer from './components/global/ProductHomeContainer/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/global/Cart/Cart';
import Error404 from './components/global/Error404';
//import logoDads from './assets/dona2.png';
//<img src={logoDads} alt="logo dads drugstore"/>
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
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
          <Route path="*">
          <Error404 />
          </Route>
        </Switch>      
      </BrowserRouter>
    </>
  );
}


export default App;
