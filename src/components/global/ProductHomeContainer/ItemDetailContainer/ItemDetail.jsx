import {useState} from 'react';
import {useHistory , Link} from 'react-router-dom';
import Cart from '../../Cart/Cart';
import ItemCount from '../../ProductHomeContainer/ItemList/ItemContainer/ItemCount/ItemCount'

const ItemDetail = ({item}) => {
    let history = useHistory();

    const [cartOrProducts, setCartOrProducts] = useState(true);

    function handleCart(){
       
        history.push("/cart")
    }

     return ( 
        <article>
            <h1>{item.producto}</h1>
           {/*  <p>El id de este producto es {item.id}</p> */}
            <img src={item.img} alt=""/>
            <p>Descripcion: <br/> {item.descripcion}</p>
            <p>Precio:   ${item.precio}</p>
            <ItemCount cant={item.cant}/>
            {
            cartOrProducts ?
            <button onClick={() => setCartOrProducts(!cartOrProducts)}>Agregar al carrito</button> :

            <div>
                <button onClick={handleCart}>Ir al carrito</button> 
                <Link to={"/"}>
                <button>Seguir Comprando</button> 
                </Link>
            </div>
            }

        </article>
     );
}
 
export default ItemDetail;