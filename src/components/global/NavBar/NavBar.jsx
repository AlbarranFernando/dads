import './NavBar.css';
import CartWidget from './CartWidget/CartWidget'

function NavBar(){
return (
    <>
        <header>
            <div className="conHeader">
                 <h1 className="titulo-principal">DADS DRUGSTORE</h1>
                 <p className="subtitulo"  >Venta de Variedades</p>
                    <nav>
                        <ul>
                            <li>
                                <a href='#'>Golosinas</a>
                            </li>
                            <li>
                                <a href='#'>Gaseosas</a>
                            </li>
                            <li>
                                <a href='#'>Cervezas</a>
                            </li>
                            <li>
                                <a href='#'>Almacen</a>
                            </li>
                            <li>
                                <a href='#'>Variedades</a>
                            </li>
                        </ul>
                        < CartWidget />
                     
                    </nav>


            </div>

        </header>
    </>
)

}

export default NavBar;
