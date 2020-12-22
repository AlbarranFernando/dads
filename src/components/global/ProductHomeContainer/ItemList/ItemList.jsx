import ItemContainer from './ItemContainer/ItemContainer'
import  { useState, useEffect } from "react"


const jsonItem = [
    {
        id: 1,
        img:'https://placehold.it/200x200',
        producto:'Galletas',
        precio:100,
        cant:5,
    },
    {
        id: 2,
        img:'https://placehold.it/200x200',
        producto:'Chocolate',
        precio:200,
        cant:8,
    },
    {
        id: 3,
        img:'https://placehold.it/200x200',
        producto:'Gaseosa',
        precio:180,
        cant:10,
    },
    {
        id: 4,
        img:'https://placehold.it/200x200',
        producto:'Licor',
        precio:300,
        cant:3,
    },
]


const ItemList = () => {

const [items, setItems] = useState([]);
const lookProd = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(jsonItem);
      }, 5500)
  })

  useEffect(() => {
    lookProd.then(rta => setItems(rta));
  
}, [])



    return ( 
    
        
         items.length ?
        <>
        <ul>
            {
            items.map((item) => (

                    <li key={item.id} >
                            <ItemContainer img={item.img} producto={item.producto} precio={item.precio} cant={item.cant} />
                    </li>
            ))
            }         
        </ul>
        </> 
        : <h3>CARGANDO PRODUCTOS.......</h3>
    
    )
}
 
export default ItemList;
