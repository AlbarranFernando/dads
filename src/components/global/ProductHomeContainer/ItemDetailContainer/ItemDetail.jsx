const ItemDetail = ({item}) => {
    console.log(item.id)
     return ( 
        <article>
            <h1>{item.producto}</h1>
            <p>El id de este producto es {item.id}</p>
            <img src={item.img} alt=""/>
            <p>Descripcion: <br/> {item.descripcion}</p>
            <p>Precio:   ${item.precio}</p>
            <button>Agregar al carrito</button>
        </article>
     );
}
 
export default ItemDetail;