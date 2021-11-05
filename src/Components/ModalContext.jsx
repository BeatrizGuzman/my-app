import { createContext , useState , useContext} from 'react';

const context = createContext()

const {Provider} = context

export const useModal = () => useContext(context)

function ModalContext({ children }) {

    let [verModal, setModal] = useState(false);
    let [modalText, setOrden] = useState("");

    function orden() {
        setModal(true);
    }

    function ocultModal() {
        setModal(false);
    }

    const contextValue = {
        verModal,
        modalText,
        orden,
        ocultModal,
        setOrden
    };

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    );
}
 
export default ModalContext