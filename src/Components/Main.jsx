import { Route, Switch } from 'react-router';
import Cart from './Cart';
import ItemDetalleContainer from './ItemDetalleContainer';
import ItemListContainer from './ItemListContainer';
import Modal from './Modal';
import { useModal } from './ModalContext';
import Section from './../Section';

function Main() {
    const { verModal, ocultModal, modalText } = useModal();
    const newLocal = <Route exact path="/Section" component={Section} />;
    return (
        <main className="container main">
            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route exact path="/categorias/:id" component={ItemListContainer} />
                <Route exact path="/item/:id" component={ItemDetalleContainer} />
                <Route exact path="/cart" component={Cart} />
                {newLocal}
            </Switch>
            <Modal verModal={verModal} ocultModal={ocultModal} modalText={modalText} />
        </main>
    );
}

export default Main