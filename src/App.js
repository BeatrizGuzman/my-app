import {BrowserRouter} from 'react-router-dom'
import Footer from './Footer';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import ModalProvider from './Components/ModalContext';
import Section from './Section';
import CartProvider from './CartContext';

const App = () =>{
  return (
    <CartProvider>
            <ModalProvider>
                <BrowserRouter>
                    <div className="container">
                        <NavBar />
                        <Main /> 
                    </div>
                    <Section />
                    <Footer /> 
                </BrowserRouter>
            </ModalProvider>
        </CartProvider>
  );
}

export default App;