import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav className="navBar" style={{ backgroundColor: "grey", height: "10rem" }}>
            <Link className="button navBar__home" to="/">
                <h1 style={{ color: "white", fontSize: "3rem", fontFamily: "monospace" }}>COMODYET</h1>
                <h3 style={{ color: "white" }}><em>Prendas únicas destinadas especialmente para vos</em></h3>
            </Link>
            <div className="navBar__links" style={{ color: "white" }}>
                <Link style={{ color: "white" }} to="/categorias/verano">Verano :)</Link>
                <Link style={{ color: "white" }} to="/categorias/otoño">Otoño</Link>
                <Link style={{ color: "white" }} to="/categorias/invierno">Invierno </Link>
                <Link style={{ color: "white" }} to="/categorias/primavera">¡Primavera!</Link>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar