import {useState, useContext} from 'react';
import {useHistory , Link} from 'react-router-dom';
import {CartContext} from '../../../store';

const Carrito = () => {
    const history = useHistory();    
    const [data,setData] = useContext(CartContext);
    
/*     let precSuma=0 
        for (let i = 0; i<data.cesta.items.length ;i++){
        precSuma=precSuma + data.cesta.items[i].precio * data.cesta.qty[i] ;
          } */
             
/*           setData({
           // ...data,
           // precTotal:precSuma
          });
 */



    return ( 
        <>
            <h1> Soy el Carrito</h1>
            
            {data.cesta.items.map((fat,i) => 

            <h2>
                {fat.producto}(${fat.precio})   
                {data.cesta.qty[i]} 
                <button onClick={() => {console.log(fat.id)}}>-</button>
            </h2>

            )}
        
            <h3> Total de productos:{data.cantidad}</h3>
            <h3> Precio Total:{data.precTotal} </h3>    
            <h2>
                <button onClick={() => history.push("/checkout")}>Terminar Compra</button>
                <button onClick={()=>history.push("/") }>Seguir Comprando</button>
            </h2>
        </>

    )
}
export default Carrito 