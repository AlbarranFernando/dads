import {useState, useContext} from 'react';
import {CartContext} from '../../../store';

const Carrito = () => {

    const [data ] = useContext(CartContext);
    let precTotal=0 
    
    for (let i = 0; i<data.cesta.items.length ;i++){
        precTotal=precTotal + data.cesta.items[i].precio * data.cesta.qty[i] ;
          }

    return ( 
        <>
            <h1> Soy el Carrito</h1>
            
            {data.cesta.items.map((fat,i) => 

            <h2>{fat.producto}(${fat.precio})   {data.cesta.qty[i]} <button onClick={() => {console.log(fat.id)}}>-</button></h2>

            )}
        
            <h3> Total de productos:{data.cantidad}</h3>
            <h3> Precio Total:{precTotal} </h3>    
        </>

    )
}
export default Carrito 