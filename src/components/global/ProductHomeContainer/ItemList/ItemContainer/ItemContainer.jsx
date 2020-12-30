import  { useState } from "react"
import './ItemContainer.css'
import ItemCount from './ItemCount/ItemCount'
import{Link} from 'react-router-dom'

const ItemContainer =({idd, img, producto, precio, cant}) => {
    
   return (
               
                <article className="Container">
                  <Link to={`/detail/${idd}`}>
                    <img src={img} alt="foto producto"/>
                  </Link>
                    <h4>{producto}</h4>
                    <h4>{precio}</h4>
                    <ItemCount cant={cant}/>
                    
                </article>
               
    )
}

export default ItemContainer  ;