import Nav from "./Nav"

const Header = ({param1,param2,param3,param4}) => {

    console.log(param1)
    console.log(param2)
    console.log(param3)

    return (
        <header>
            <center>
            <h1>COMODYET</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" width="21px" alt="imagen" />
            <i className="material-icons"> Una E-commerce destinada especialmente para vos</i>
            </center>
            <Nav></Nav>
        </header>
    );
}

export default Header;