import  { useState, useEffect } from "react"
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail'
import {getFirestore} from '../../../Db/Db';

const ItemDetailContainer = () => {

const {idd} = useParams();
const [detail, setDetail] = useState(null);
let db = getFirestore();

const getProducstFromDB = () => {
    db.collection('productos').doc(idd).get()
    .then(doc => {
        if(doc.exists) {
            setDetail({id: doc.id, data: doc.data()});
        }
    }) //eslint-disable-next-line react-hooks/exhaustive-deps
    .catch(e => console.log(e));
}

useEffect(() => {
    getProducstFromDB();
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


    return ( 
        detail ?
        <>
          <ItemDetail item={detail.data} />
         </>
      
        : <h3>CARGANDO PRODUCTO.......</h3>
    )
}
 
export default ItemDetailContainer;