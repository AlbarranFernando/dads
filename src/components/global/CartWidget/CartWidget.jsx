import { TiShoppingCart } from 'react-icons/ti';
import './CartWidget.css';
function  CartWidget()  {
  
    return ( 
        <div className="navCart">
               <TiShoppingCart size={80} color="red"  />
               
        </div>
    )
}
export default CartWidget;