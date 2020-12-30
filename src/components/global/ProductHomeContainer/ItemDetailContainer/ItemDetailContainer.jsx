import  { useState, useEffect } from "react"
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail'
import dadsJson from '../../dadsJson.json';


const ItemDetailContainer = () => {

const {idd} = useParams();
  
     //Busqueda del producto seleccionado
    const findDetail = dadsJson.find(it =>  it.id == idd);
  
    //////////////////////////////

const [detail, setDetail] = useState(null);
const lookProd = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(findDetail)
      }, 1000)
  });

  useEffect(() => {
    lookProd
    .then(rta => setDetail(rta)) //{const arta.filter(rta.id==='1') (setDetail(arta))})
    .catch(error => console.log(error));
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