import {useState, useContext} from 'react';
import {CartContext} from '../../../store';

const Carrito = () => {

    const [data, setData] = useContext(CartContext);
   
    return ( 
        <>
            <h1> Soy el Carrito</h1>
            
            {data.items.map(item => <h2>{item.producto}</h2>)}
            <h3> Total de productos:{data.cantidad}</h3>

        </>

    )
}
export default Carrito 