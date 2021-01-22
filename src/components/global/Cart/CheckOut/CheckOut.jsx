import {useState, useContext} from 'react';
import {CartContext} from '../../../../store';
import {getFirestore} from '../../../../db';
import firebase from 'firebase/app';
import './CheckOut.css'

const Checkout = () => {
    
    const [ventOk,setVentOk] = useState(false);
    const [idCompra, setIdCompra] = useState('');
  //  const [factura, setFactura] = useState[];
    const db = getFirestore();
    const [data, setData] = useContext(CartContext);
    const [clientData, setClientData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
    })
    const clearCart=()=>{
        setData({
            ...data, 
            cantidad: 0,
            cesta: {items: [], qty:[]},
            quantity:[],
            precTotal: 0,
        }); 
    }

    const handleChange = (e) => {
    setClientData({...clientData, [e.target.name]: e.target.value});
    }

    let factura ={
        client: clientData,
        items: data.cesta.items ,
        precio: data.precTotal,
        }
        console.log(factura.client)


    const handleGetForm = (e) => {
        e.preventDefault();

        db.collection('ventas').add(factura)
        .then(({id}) => {
            setVentOk(true);
            setIdCompra(id);
            clearCart();
        })
        .catch(e => console.log(e));
    }

return (
    <section className="checkout">
        <div>
            <h2>Checkout</h2>

            {
                !ventOk ?
                <form onSubmit={handleGetForm}> 
                    <input type="text" value={clientData.nombre} onChange={handleChange} name="nombre" placeholder="Nombre" />
                    <input type="text" value={clientData.apellido} onChange={handleChange} name="apellido" placeholder="Apellido" />
                    <input type="email" value={clientData.email} onChange={handleChange} name="email" placeholder="E-mail" />
                    <input type="tel" value={clientData.tel} onChange={handleChange} name="telefono" placeholder="Teléfono" />
                    
                    <button>Pagar</button>
                </form> :
                <p>Felicitaciones!! El codigo de tu compra es: {idCompra}</p>
            }
        </div>
    </section>

)

}

export default Checkout;