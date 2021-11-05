import { useState } from 'react';

function Order({ guardarOrden, orden, setOrden }) {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTel] = useState('');

    function validarEmail(email) {
        const re = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function guardado() {
        if (nombre !== '' && validarEmail(email) && telefono !== '' && apellido !== '') {
            guardarOrden({ nombre, email, telefono });
        } else {
            setOrden("Los datos son incorrectos. Vuelve a intentarlo. ");
            orden();
        }
    }

    return (<div className="order">
        <div style={{ display: "flex", flexDirection: "column", }}>
            <p style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "4rem" }}>Debes completar con tus datos para concretar la compra :)</p>
            <input className="orderInput" placeholder="Nombre" onChange={event => setNombre(event.target.value)}></input>
            <input className="orderInput" placeholder="Apellido" onChange={event => setApellido(event.target.value)}></input>
            <input className="orderInput" placeholder="Email" onChange={event => setEmail(event.target.value)}></input>
            <input className="orderInput" placeholder="Teléfono" onChange={event => setTel(event.target.value)}></input>
        </div>
        <button type="button" className="botones" onClick={guardado}>Aceptar</button>
    </div>);
}
 
export default Order