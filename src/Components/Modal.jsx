function Modal({ verModal, ocultModal, modalText }) {
    return (
        verModal ?
            (<div className="modal">
                <p className="modalTexto">{modalText}</p>
                <div>
                    <button className="botones" onClick={ocultModal} style= {{marginTop:"2rem", marginLeft: "9rem"}}>  Cerrar </button>
                </div>
            </div>)
            : <></>)
}
 
export default Modal