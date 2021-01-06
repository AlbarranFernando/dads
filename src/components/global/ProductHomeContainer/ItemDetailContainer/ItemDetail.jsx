import {useHistory} from 'react-router-dom';
import Cart from '../../Cart/Cart';


const ItemDetail = ({item}) => {
    let history = useHistory();

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
            <button onClick={handleCart}>Agregar al carrito</button> 
        </article>
     );
}
 
export default ItemDetail;