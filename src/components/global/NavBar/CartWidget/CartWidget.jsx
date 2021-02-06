import { useContext} from 'react';
import {CartContext} from '../../../../store';
import { TiShoppingCart } from 'react-icons/ti';
import './CartWidget.css';

function  CartWidget()  {
    const [data ] = useContext(CartContext);
   
    return ( 
       
        <>
        <div className="navCart">
               <TiShoppingCart size={80} color="red"  />
               <span>{data.cantidad}</span>

            <div>
               {data.cesta.items.length ?
                <p className="widget">
                    <h2>Carrito</h2>
                     {data.cesta.items.map((fat,i) => 

                    <h4>{data.cesta.qty[i]} {fat.producto}</h4>

                    )}
                    <h3>Total ${data.precTotal}</h3>
                </p>
                :<p></p>
            }
            </div>
        </div>

        </>
    )
}
export default CartWidget;