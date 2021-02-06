import {useState, useContext} from 'react';
import { useHistory , Link} from 'react-router-dom';
import {CartContext} from '../../../../store';
import './ItemDetail.css'


const ItemDetail = ({item}) => {
    const history = useHistory();

    const [count, setCount] = useState(1);
    const [cartOrProducts, setCartOrProducts] = useState(true);
    const [data, setData] = useContext(CartContext);

      
    function handleCart(){
        let inProd=-1;
        data.cesta.items.map( 
            (ren,i)=>{
                if(ren.id===item.id) inProd=i
                return null
        });

     if  (inProd === -1)
     {
        setData({
            ...data, 
            cantidad: data.cantidad + count,
            cesta: {
                ...data.cesta,
                items:[...data.cesta.items,item], 
                qty:[...data.cesta.qty,count]},

            quantity:[...data.quantity, count],
            precTotal: data.precTotal +(item.precio * count),
        }); 
    }
        else {
           
            data.cesta.qty.splice( inProd, 1, data.cesta.qty[inProd] + count )
            data.quantity.splice( inProd, 1, data.quantity[inProd] + count )

        setData({
            ...data, 
            cantidad: data.cantidad + count,
            precTotal: data.precTotal +(item.precio * count),
        }); 
        }

       setCartOrProducts(!cartOrProducts)   ;
        
}

     return ( 
        <>
            <p className="breadcrum">
                <Link to={`/category/${item.categoria}`} >{item.categoria} </Link>
                &gt; {item.producto}
            </p>
        <article className="cardDetail">
            <h1>{item.producto}</h1>
            <div className="imDes">
                <img src={`/products/${item.img}`} alt={`${item.producto}`}/>
                <p>DESCRIPCION: <br/> {item.descripcion}</p>
            </div>
            <div className="comCard">
                <p>Precio:   ${item.precio}</p>
            
                <div className="BotCont">
                            <button  onClick={() => {
                                if (count > 1) setCount(count - 1)
                            }}>-</button>  
                            <span>
                                {count}
                            </span>  
                            <button onClick={() => {
                                if (count < item.cant) setCount(count + 1)
                            }}>+</button>   
                </div>
                
                
                <br/>
                {
                cartOrProducts ?
                <button onClick={handleCart}>Agregar al carrito</button> :
                
                <div className="duaButt">   
                    <button onClick={()=>history.push("/cart")}>Ir al carrito</button> 
                    <Link to={"/"}>
                    <button>Seguir Comprando</button> 
                    </Link>
                </div>
                }
            </div>
        </article>
        </>
     );
}
 
export default ItemDetail;