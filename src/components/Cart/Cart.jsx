import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {CartContext} from '../../Store/Store';
import './Cart.css'

const Carrito = () => {
    const history = useHistory();    
    const [data,setData] = useContext(CartContext);
    

    function eraseCart(i){
       
        let itAux = data.cesta.items[i]
        let qtyAux = data.cesta.qty[i]
        
        data.cesta.items.splice( i, 1)
        data.cesta.qty.splice( i, 1)
        data.quantity.splice( i, 1)
                      

        setData({
            ...data, 
            cantidad: data.cantidad - qtyAux,
            precTotal: data.precTotal - (itAux.precio * qtyAux),
        });



    }


    return ( 
        <>
        <div className="cartPpal">
            <h1 className="titCar">CARRITO</h1>
             
            {data.cesta.items.map((fat,i) => 

            <h2>
                {fat.producto}(${fat.precio})   
                 x {data.cesta.qty[i]}{" "}        
                <button onClick={()=>eraseCart(i)}>-</button>
            </h2>

            )}
        
            <h3 className="titCar"> Total de productos: {data.cantidad}</h3>
            <h3 className="titCar"> Precio Total: ${data.precTotal} </h3>    
            <h2>
                <button disabled={data.cantidad < 1 ? 'disabled' : null } onClick={() => history.push("/checkout")}>Terminar Compra</button>
                <button onClick={()=>history.push("/") }>Seguir Comprando</button>
            </h2>
        </div>    
        </>

    )
}
export default Carrito 