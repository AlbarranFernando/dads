import { TiShoppingCart } from 'react-icons/ti';
import './CartWidget.css';

function  CartWidget()  {
  
    return ( 
        <div className="navCart">
               <TiShoppingCart size={80} color="red"  />
               <span>0</span>
        </div>
    )
}
export default CartWidget;