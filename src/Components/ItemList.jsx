import React, { useEffect, useState } from 'react'
import Item from './Item';

function ItemLIst() {

    const [items,setItems]=useState([]);

    const leerItems=()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((resp)=>{
            console.log(resp);
            setItems(resp)
        });
    }

    useEffect(() => {
        leerItems();
    },[])

    return (
        <div className="container">
            <div className="row">
                {items.length>0 && items.map((item)=>{
                    return <Item key={item.id} id={item.id} category={item.category} image={item.image} price={item.price} title={item.title}/>
                })
                }
            </div>
            
        </div>
    )
}

export default ItemLIst