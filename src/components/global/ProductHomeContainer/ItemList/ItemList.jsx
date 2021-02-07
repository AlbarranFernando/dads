import './ItemList.css'
import ItemContainer from './ItemContainer/ItemContainer'
import  { useState, useEffect } from "react"
import {getFirestore} from '../../../../db';

const ItemList = ({catsel="all"}) => {

    let db = getFirestore();
    const [itemsB, setItemsB] = useState([]);
    let compa
    if (catsel === "all") (compa ='!=')
    else (compa ='==')
        
    const getProducstFromDB = () => {
        db.collection('productos').where('categoria', compa , catsel ).get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })
            setItemsB(arr);
        })
        .catch(e => console.log(e));
        
    }
   
    useEffect(() => {
        getProducstFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [catsel])


    return ( 
        
        itemsB.length ?
        <>        
        <ul>
            {
            itemsB.map((item) => (

                    <li key={item.data.id} >
                        <ItemContainer 
                            id={item.id}
                            idd={item.data.id} 
                            img={item.data.img} 
                            producto={item.data.producto} 
                            precio={item.data.precio} 
                            cant={item.data.cant} />
                    </li>
            ))
            }         
        </ul>
        </> 
        : <h3>CARGANDO PRODUCTOS.......</h3>
    
    )
}
 
export default ItemList;
