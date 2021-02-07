import {useState, useContext} from 'react';
import {CartContext} from '../../../Store/Store';
import {getFirestore} from '../../../Db/Db';
import './CheckOut.css'

const Checkout = () => {
    
    const [ventOk,setVentOk] = useState(false);
    const [idCompra, setIdCompra] = useState('');
    const db = getFirestore();
    const [data, setData] = useContext(CartContext);
    const [clientData, setClientData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        repemail:'',
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
        items: data.cesta ,
        price: data.precTotal,
        date: Date(),
        state: 'GENERADA'
        }
      


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
            <h2>CHECKOUT</h2>

            {
                !ventOk ?
                <form onSubmit={handleGetForm}> 
                    <input type="text" value={clientData.nombre} onChange={handleChange} name="nombre" placeholder="Nombre" />
                    <input type="text" value={clientData.apellido} onChange={handleChange} name="apellido" placeholder="Apellido" />
                    <input type="email" value={clientData.email} onChange={handleChange} name="email" placeholder="E-mail" />
                    <input type="email" value={clientData.repemail} onChange={handleChange} name="repemail" placeholder="Repite el E-mail" />
                    <input type="tel" value={clientData.tel} onChange={handleChange} name="telefono" placeholder="Teléfono" />
                    

                    <div className="buttVal">
                        <div className="msgVal">Debe llenar todos los campos y los emails deben se iguales</div> 
                        <button 
                        disabled=
                        {Object.values(clientData).indexOf("")!==-1 
                        || 
                        clientData.email !== clientData.repemail 
                        ?'disable' 
                        : null 
                        }>Realizar Compra</button>
                         
                    </div>       
                </form> :
                <div>
                    <p>Felicitaciones!! El codigo de tu compra es:</p>
                    <br></br>
                    <p className="codComp">{idCompra}</p>
                </div>
            }
        </div>
    </section>

)

}

export default Checkout;