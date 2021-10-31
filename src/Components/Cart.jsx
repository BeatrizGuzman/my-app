import React from 'react'
import { firestore } from '../firebase'
import firebase from "firebase/app"
import "firebase/firestore"

function Cart() {

  const guardarOrden = () => {
    const orden_para_guardar = {
      buyer : {
        name : "Beatriz",
        phone : "3875048687",
        email : "titiguzman3@gmail.com"
      },
      items : [{id:1, title:"Pantalón"}],
      date : firebase.firestore.Timestamp.now(),
      total : 100 
    }

    const db = firestore
    const collection = db.collection("ordenes")
    const query = collection.add(orden_para_guardar)

    query
      .then((docRef)=>{
        console.log(docRef)
      })
  }
  return (
    <div className="wrapper">
      <h2 className="headline-1">MUCHAS GRACIAS POR TU COMPRA</h2>
      <p className="body">Ya sos parte de nuestra gran comunidad...</p>
      <div className="separador"></div>
      <button onClick={guardarOrden}>Guardar Compra</button>
    </div>
  )
}

export default Cart