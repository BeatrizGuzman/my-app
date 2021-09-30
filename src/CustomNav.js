import Nav from "react-bootstrap/Nav"

const {Link,Item} = Nav

const CustomNav = () => {
    return (
        <Nav>
            <Item>
                <Link href="/">Categoria 1</Link>
            </Item>
            <Item>
                <Link href="/">Categoria 2</Link>
            </Item>
        </Nav>
    );
}

export default CustomNav;