
import './components/global/NavBar/NavBar';
import NavBar from './components/global/NavBar/NavBar';
import ItemListContainer from './components/global/ItemListContainer/ItemListContainer'
//import logoDads from './assets/dona2.png';
//<img src={logoDads} alt="logo dads drugstore"/>

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Hola, Sea Bienvenido a DADS Drugstore!!" />
    </>
  );
}


export default App;
