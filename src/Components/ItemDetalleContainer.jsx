import ItemDetalle from './ItemDetalle';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { firestore } from './../firebase';
import { useModal } from './ModalContext';

function ItemDetalleContainer() {
    const { id } = useParams();
    const nonProduct = { title: "Cargando", id: "-", price: "-", description: "Cargando" };
    const [product, setProduct] = useState(nonProduct);
    const { orden, setOrden } = useModal();

    useEffect(() => {

        const query = firestore.collection('productos').doc(id).get();
        query
            .then((result) => {
                setProduct({ id: result.id, ...result.data() });
            })
            .catch(error => {
                setOrden("Ocurrió un error, vuelve a intentarlo.");
                orden();
            });
    }, [id]); // eslint-disable-line react-hooks/exhaustive-deps


    return (<ItemDetalle item={product} />);
}
 
export default ItemDetalleContainer