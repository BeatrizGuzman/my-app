import React, {useState, useContext} from 'react'
import firebase from "firebase/app"
import "firebase/firestore"
import { CartContext } from "./../CartContext"
import { firestore } from '../firebase'

export const Checkout = () => {

  const {carrito, total} = useContext(CartContext)

  const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    email: '',
    tel: ''
})

const handleInputChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {

    e.preventDefault()

    if (values.nombre.length < 3) {
      alert("Nombre inválido")
      return
  }

  if (values.apellido.length < 3) {
    alert("Apellido inválido")
    return
  }
  if (values.email.length < 3) {
      alert("Email inválido")
      return
  }
  if (values.tel.length < 7) {
      alert("Teléfono inválido")
      return
  }

//     const orden = {

//     buyer: {
//         ...values
//       },
//     items : carrito, 
//     total : total,
//     }

//     console.log(orden)
// }

 
    const orden_para_guardar = {
      buyer : {
        name : "Beatriz",
        phone : "3875048687",
        email : "titiguzman3@gmail.com"
      },
      items : [{id:1, title:"Pantalón"}],
      date : firebase.firestore.Timestamp.now(),
      total : 100, 
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
     <div>
     <h2>Complete sus datos</h2>
     <hr/>
     {/* listado de la compra */}
     <div className="container my-5">
     <form onSubmit={handleSubmit}>
         <h2>Formulario</h2>
         <input
             className="form-control my-2"
             type="text"
             placeholder="Nombre"
             name="nombre"
             value={values.nombre}
             onChange={handleInputChange}
             />
         {values.nombre.length === 0 && <small>Este campo es obligatorio</small>}

         <input
             className="form-control my-2"
             type="text"
             placeholder="Apellido"
             name="apellido"
             value={values.apellido}
             onChange={handleInputChange}
             />
         {values.apellido.length === 0 && <small>Este campo es obligatorio</small>}

         <input
             className="form-control my-2"
             type="email"
             placeholder="Email"
             name="email"
             value={values.email}
             onChange={handleInputChange}
         />
         {values.email.length === 0 && <small>Este campo es obligatorio</small>}

         <input
             className="form-control my-2"
             type="tel"
             placeholder="Teléfono"
             name="tel"
             value={values.tel}
             onChange={handleInputChange}
         />
         {values.tel.length === 0 && <small>Este campo es obligatorio</small>}

         <button className="btn btn-success" type="submit">Finalizar</button>
     </form>
 </div>
 </div>
  )
}

export default Checkout