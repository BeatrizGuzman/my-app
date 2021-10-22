import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

const Detalle = () => {
    let {id} = useParams();
    const [datos,setDatos] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
       firestore.collection('productos').doc(id).get()
        .then( (resultado) => {
            setDatos({id: resultado.id, ...resultado.data()})
        })
        .catch( error => console.log(error)) 
    },[id])

    useEffect(()=>{
       datos && setLoading(false)
    },[datos])

return (
    loading ? <h1>Loading</h1> : 
    <div className="col">
    <div className="card" style={{ width: "18rem" }}>
    <img className="card-img-top" src={datos.image} alt="imagen_producto" />
    <div className="card-body">
        <h5 className="card-title">{datos.title}</h5>
        <p className="card-text">
            {datos.description} 
        </p>
        <p> $ {datos.price} </p>
    </div>
    </div>
  </div>
)
}

export default Detalle


