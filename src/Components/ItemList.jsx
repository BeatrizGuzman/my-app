import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase';
import { useParams } from "react-router";
import Item from './Item';



function ItemLIst() {

    const [items,setItems]=useState([]);
    const {id} = useParams();

    useEffect(() => {

    const db = firestore
    const collection = db.collection("productos")
    const query = collection.get()
        query
        .then((resultado)=>{
            const documentos = resultado.docs

            const array_final_de_productos = []

            documentos.forEach(producto=>{
                const id = producto.id
                const el_resto = producto.data()
                const producto_final= {id,...el_resto}
                array_final_de_productos.push(producto_final)
            })

            setItems(array_final_de_productos)
        })
        .catch(error=>{
            console.log(error)
        })

    },[id])

    return (
        <div className="container">
            <div className="row">
                {items.length>0 && items.map((item)=>{
                    return <Item key={item.id} id={item.id} category={item.category} price={item.price} image={item.image} title={item.title}/>
                })
                }
            </div>
        </div>
    )
}

export default ItemLIst