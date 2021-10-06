import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './views/Home';
import Main from "./Main";
import Footer from "./Footer";
import Nosotros from './views/Nosotros';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalle from './views/Detalle';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/nosotros" component={Nosotros}/>
          <Route exact path="/producto/:id" component={Detalle}/>
        </Switch>
        <Main></Main>
        <Footer></Footer> 
      </BrowserRouter>
    </div>

  );
}

export default App;



