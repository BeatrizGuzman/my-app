import ItemList from './ItemList';
import { useModal } from './ModalContext';
import { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { useParams } from 'react-router';

function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const { setOrden, orden } = useModal();

    useEffect(() => {

        const collectionRef = firestore.collection("productos");
        let query;

        if (id === undefined) {
            query = collectionRef.get();
        } else {
            query = collectionRef.where('category', '==', id).get();
        }


        query
            .then((result) => {
                setProducts(result.docs.map(p => ({ id: p.id, ...p.data() })));
            })
            .catch(error => {
                setOrden("Ocurrió un error al tratar de obtener los productos");
                orden();
            });
    }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

    return (<div className="lista">
        <ItemList items={products} />
    </div>);
}
 
export default ItemListContainer