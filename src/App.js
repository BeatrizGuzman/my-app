import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './views/Home';
import Main from "./Main";
import Footer from "./Footer";
import Nosotros from './views/Nosotros';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalle from './views/Detalle';
import Carrito from './views/Carrito';
import { CartProvider } from './CartContext';
import Cart from './Components/Cart';


function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/nosotros" component={Nosotros}/>
          <Route exact path="/producto/:id" component={Detalle}/>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/carrito" component={Carrito}/>
        </Switch>
        <Main></Main>
        <Footer></Footer> 
      </BrowserRouter>
      </CartProvider>
    </div>

  );
}

export default App;



