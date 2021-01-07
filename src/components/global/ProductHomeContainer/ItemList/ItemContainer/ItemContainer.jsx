import  { useState } from "react"
import './ItemContainer.css'
import ItemCount from './ItemCount/ItemCount'
import{Link} from 'react-router-dom'

const ItemContainer =({idd, img, producto, precio, cant}) => {
    
   return (
               
                <article className="Container">
                  
                    <img src={img} alt="foto producto"/>
                  
                    <h4>{producto}</h4>
                    <h4>$ {precio}</h4>
                    <Link to={`/detail/${idd}`}>
                    <button>Ver Detalles</button>
                    </Link>
                                       
                </article>
               
    )
}

export default ItemContainer  ;