//import ItemContainer from './ItemContainer/ItemContainer'

import  { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'


const jsonDetailItem = [
    {
        id: 1,
        img:'https://placehold.it/200x200',
        producto:'Galletas',
        precio:100,
        cant:5,
        descripcion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  ',
    } ,
    
    {
        id: 2,
        img:'https://placehold.it/200x200',
        producto:'Chocolate',
        precio:200,
        cant:8,
        descripcion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  ',
    },
    {
        id: 3,
        img:'https://placehold.it/200x200',
        producto:'Gaseosa',
        precio:180,
        cant:10,
        descripcion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  ',
    },
    {
        id: 4,
        img:'https://placehold.it/200x200',
        producto:'Licor',
        precio:300,
        cant:3,
        descripcion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  ',
    }, 
]

 //Busqueda del producto seleccionado
const filterDetail = jsonDetailItem.find(function(it) { 
    return it.id === 3;
  });
console.log(filterDetail)
//////////////////////////////
const ItemDetailContainer = () => {

const [detail, setDetail] = useState(null);
const lookProd = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(filterDetail)
      }, 2000)
  });

  useEffect(() => {
    lookProd
    .then(rta => setDetail(rta)) //{const arta.filter(rta.id==='1') (setDetail(arta))})
    .catch(error => console.log(error));
    
    console.log(detail);

    console.log(filterDetail)
}, [])



    return ( 
        
        
        detail ?
        <>
          <ItemDetail item={detail} />
         </>
      
        : <h3>CARGANDO PRODUCTO.......</h3>
    
    )
}
 
export default ItemDetailContainer;