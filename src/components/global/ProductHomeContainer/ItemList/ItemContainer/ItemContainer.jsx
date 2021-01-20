import  { useState } from "react"
import './ItemContainer.css'
import{Link} from 'react-router-dom'

const ItemContainer =({id,idd, img, producto, precio}) => {
    
   return (
               
                <article className="Container">
                  
                    <img src={img} alt="foto producto"/>
                  
                    <h4>{producto}</h4>
                    <h4>$ {precio}</h4>
                    <Link to={`/detail/${id}`}>
                    <button>Ver Detalles</button>
                    </Link>
                                       
                </article>
               
    )
}

export default ItemContainer  ;