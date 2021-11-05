import { useState } from 'react';

function ItemCuenta({ stock, initial, onAdd }) {

    const [Stock, setStock] = useState(stock)
    const [Valor, setValor] = useState(initial)

    function agregarItem () {
        if(Stock>0){ 
            setStock(Stock - 1)
            setValor(Valor + 1)
        }
    }

    function eliminarItem() {
        if(Valor>0){
            setValor(Valor - 1)
            setStock(Stock + 1)
        }
    }

    function confirmar() {
        onAdd(Valor);
    }

    return (<div>
        <div style={{ display: "flex", lineHeight: "2rem", marginBottom: "2rem" }}>
            <button onClick={eliminarItem} className="botonMenos">-</button>
            <p style={{ marginLeft: "1rem" }}>{Valor}</p>
            <button onClick={agregarItem} className="botonMenos" style={{ marginLeft: "1rem" }}>+</button>
        </div>
        <button onClick={confirmar} className="botones">Confirmar</button>
    </div>);
}
 
export default ItemCuenta