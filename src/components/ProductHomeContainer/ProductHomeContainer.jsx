import './ProductHomeContainer.css'
import ItemList from './ItemContainer/ItemList/ItemList'
import {useParams} from 'react-router-dom';

function ProductHomeContainer() {
    
    const {cate} = useParams();
 
    return (
        <>     
           <ItemList catsel={cate}/>
        </>
    );
}
 
export default ProductHomeContainer;