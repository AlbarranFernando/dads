import  { useState } from "react"
import './ItemContainer.css'
import ItemCount from './ItemCount/ItemCount'

const ItemContainer =({img, producto, precio, cant}) => {
    
   return (
               
               
                <article className="Container">
                    <img src={img} alt="foto producto"/>
                    <h4>{producto}</h4>
                    <h4>{precio}</h4>
                    <ItemCount cant={cant}/>
                </article>

               
    )
}

export default ItemContainer  ;