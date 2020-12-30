import './NavBar.css';
import CartWidget from './CartWidget/CartWidget'
import{Link} from 'react-router-dom'

function NavBar(){
return (
    <>
        <header>
            <div className="conHeader">
                <Link to={"/"}>
                 <h1 className="titulo-principal">DADS DRUGSTORE</h1>
                </Link >
                 <p className="subtitulo"  >Venta de Variedades</p>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/category/golosinas"}>
                                <p>Golosinas</p>
                                </Link >
                            </li>
                            <li>
                                <Link to={"/category/gaseosas"}>
                                <p>Gaseosas</p>
                                </Link >
                            </li>
                            <li>
                                <Link to={"/category/cervezas"}>
                                <p>Cervezas</p>
                                </Link >
                            </li>
                            <li>
                                <Link to={"/category/almacen"}>
                                <p>Almacen</p>
                                </Link >
                            </li>
                            <li>
                                <Link to={"/category/variedades"}>
                                <p>Variedades</p>
                                </Link >
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
