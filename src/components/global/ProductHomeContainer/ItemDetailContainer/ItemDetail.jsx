import {useState, useContext} from 'react';
import {useHistory , Link} from 'react-router-dom';
import {CartContext} from '../../../../store';
import './ItemDetail.css'



const ItemDetail = ({item}) => {
    const history = useHistory();

    const [count, setCount] = useState(1);
    const [cartOrProducts, setCartOrProducts] = useState(true);
    const [data, setData] = useContext(CartContext);

      
    function handleCart(){
    
     if  (data.cesta.items.indexOf(item) === -1)
     {
        setData({
            ...data, 
            cantidad: data.cantidad + count,
            cesta: {
                ...data.cesta,
                items:[...data.cesta.items,item], 
                qty:[...data.cesta.qty,count]},

            quantity:[...data.quantity, count]
        }); 
    }
        else {
            let inProd = data.cesta.items.indexOf(item)
            data.cesta.qty.splice( inProd, 1, data.cesta.qty[inProd] + count )
            data.quantity.splice( inProd, 1, data.quantity[inProd] + count )

        setData({
            ...data, 
            cantidad: data.cantidad + count,
        }); 
        }

       setCartOrProducts(!cartOrProducts)   ;
        
}

     return ( 
        <article>
            <Link to={`/category/${item.categoria}`} className="breadcrum">{item.categoria} </Link>
            &gt; {item.producto}

            <h1>{item.producto}</h1>
           {/*  <p>El id de este producto es {item.id}</p> */}
            <img src={item.img} alt=""/>
            <p>Descripcion: <br/> {item.descripcion}</p>
            <p>Precio:   ${item.precio}</p>
           
            <div className="BotCont">
                        <button onClick={() => {if (count < item.cant) setCount(count + 1)}}>+</button> 
                        <span>{count}</span>   
                        <button  onClick={() => {if (count > 1) setCount(count - 1)}}>-</button>    
            </div>
            
            
            <br/>
            {
            cartOrProducts ?
            <button onClick={handleCart}>Agregar al carrito</button> :
            
            <div>   
                <button onClick={()=>history.push("/cart")}>Ir al carrito</button> 
                <Link to={"/"}>
                <button>Seguir Comprando</button> 
                </Link>
            </div>
            }

        </article>
     );
}
 
export default ItemDetail;