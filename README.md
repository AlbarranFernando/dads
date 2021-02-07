# E-commerce "DADS Drugstore, Venta de Variedades"💻

_[ESP] Proyecto de e-commerce realizado con React JS  y Firebase :blue_heart:

El Proyecto implementa un e-commerce de productos varios, como los ofrecidos en un negocio tipo drugstore.

El proyecto implementa las siguientes funcionalidades:
> <li>Un usuario debe poder ingresar, navegar por los productos e ir a sus detalles.
> <li>Desde el detalle se debe poder ver la descripción, foto y precio e ingresarlo al carrito. 
> <li>Una vez que el carrito tenga al menos un producto, se deberá visualizar un listado compacto de la orden con el precio total. 
> <li>Al ingresar su nombre, apellido, teléfono e e-mail (ingresándolo dos veces para corroborar que sea correcto), debe activarse el botón de ‘realizar compra’.
> <li>Al clickear ‘realizar compra’ debe guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden.

## Screenshots
![DADSDrugstore](https://github.com/AlbarranFernando/dads/blob/main/dadsDrugstore.gif)

## Estructura de Componentes
	\components
		\Cart
			\CheckOut
		\Footer
        \NavBar
			\CartWidget
		\ProductHomeContainer
			\ItemContainer
				\ItemList
			\ItemDetailContainer
				\ItemDetail
		\utils

## Dependencias usadas (node_modules) 🛠️

#### firebase: Servicio de base de datos no relacional en la nube desarrollada por Google.
* "firebase": "^8.0.2",
#### react-icons: Pack de iconos para usar en react.
* "react-icons": "^4.1.0",
#### react-router-dom: Librería para obtener un enrutamiento dinámico con rutas que renderizan un componente.
* "react-router-dom": "^5.2.0",
