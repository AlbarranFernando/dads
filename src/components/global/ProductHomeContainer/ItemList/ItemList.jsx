import './ItemList.css'
import ItemContainer from './ItemContainer/ItemContainer'
import  { useState, useEffect } from "react"
import dadsJson from '../../dadsJson.json';

const ItemList = ({catsel="all"}) => {

    let filterDetail = []
    
    //Busqueda del producto seleccionado
    if (catsel !== "all") filterDetail = dadsJson.filter(it =>  it.categoria === catsel)
    else filterDetail = dadsJson 

     //////////////////////////////





const [items, setItems] = useState([]);

const lookProd = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(filterDetail);
      }, 1000)
  })

  useEffect(() => {
    lookProd.then(rta => setItems(rta));
  
}, [catsel])

    return ( 
        
        items.length ?
        <>        
        <ul>
            {
            items.map((item) => (

                    <li key={item.id} >
                        <ItemContainer idd={item.id} img={item.img} producto={item.producto} precio={item.precio} cant={item.cant} />
                    </li>
            ))
            }         
        </ul>
        </> 
        : <h3>CARGANDO PRODUCTOS.......</h3>
    
    )
}
 
export default ItemList;
