import './NavBar.css';
import CartWidget from './CartWidget/CartWidget'
import{Link, NavLink} from 'react-router-dom'

function NavBar(){
   

return (
    <>
        <header>
            <div className="conHeader">
                <NavLink to={"/"}>
                 <h1 activeClassName="selectedLink"className="titulo-principal">DADS DRUGSTORE</h1>
                </NavLink >
                 <p className="subtitulo"  >Venta de Variedades</p>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={"/category/golosinas"}>
                                <p className="asff" activeClassName="selectedLink" >Golosinas</p>
                                </NavLink >
                            </li>
                            <li>
                                <NavLink to={"/category/gaseosas"}>
                                <p activeClassName="selectedLink">Gaseosas</p>
                                </NavLink >
                            </li>
                            <li>
                                <NavLink to={"/category/cervezas"}>
                                <p activeClassName="selectedLink">Cervezas</p>
                                </NavLink >
                            </li>
                            <li>
                                <NavLink to={"/category/almacen"}>
                                <p activeClassName="selectedLink">Almacen</p>
                                </NavLink >
                            </li>
                            <li>
                                <NavLink to={"/category/variedades"}>
                                <p activeClassName="selectedLink">Variedades</p>
                                </NavLink >
                            </li>
                        </ul>
                        <Link to={"/cart"}>
                        < CartWidget />
                        </Link>
                    </nav>


            </div>

        </header>
    </>
)

}

export default NavBar;
