import './ItemContainer.css'
import{Link} from 'react-router-dom'

const ItemContainer =({id,idd, img, producto, precio}) => {
    
   return (
               
                <article className="Container">
                  
                    <img src={`/products/${img}`} alt={`${producto}`}/>
                  
                    <h4 className="textProd">{producto}</h4>
                    <h4 className="textProd">$ {precio}</h4>
                    <Link to={`/detail/${id}`}>
                    <button>Ver Detalles</button>
                    </Link>
                                       
                </article>
               
    )
}

export default ItemContainer  ;