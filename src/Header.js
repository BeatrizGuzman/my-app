import Nav from "./Nav"

const Header = ({param1,param2,param3,param4}) => {

    console.log(param1)
    console.log(param2)
    console.log(param3)

    return (
        <header>
            <h1>E-Commerce</h1>
            <img src="https://image.freepik.com/psd-gratis/maqueta-papeleria-oscura-cobre_23-2149052439.jpg" width="50px" alt="imagen" />
            <i className="material-icons">HOLA COMO TAS</i>
            <Nav></Nav>
        </header>
    );
}

export default Header;