import './ProductHomeContainer.css'
import ItemContainer from './ItemContainer/ItemContainer'

function ProductHomeContainer() {
    return (
        <>
            <ul>
                <li><ItemContainer img={'https://placehold.it/200x200'} producto={'Galletas'} precio={'$100'} cant={5} /></li>
                <li><ItemContainer img={'https://placehold.it/200x200'} producto={'Chocolate'} precio={'$200'} cant={8} /></li>
                <li><ItemContainer img={'https://placehold.it/200x200'} producto={'Gaseosa'} precio={'$180'} cant={10} /></li>
                <li><ItemContainer img={'https://placehold.it/200x200'} producto={'Licor'} precio={'$300'} cant={3} /></li>
            </ul>
        </>
    );
}
 
export default ProductHomeContainer;