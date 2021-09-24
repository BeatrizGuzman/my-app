import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    
} from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                   <center>
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="#">NOTICIAS &gt;&gt;</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Lab de ideas</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">TIPS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contacto :)</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>¡BIENVENIDO!</h1>
                                <span className="myClass" style={{float : 'left', paddingRight : '5px'}} > ♥♥♥</span>
                                <p>¿Estás listo para la aventura?</p>
                                <img src="https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80" width="550px" alt="imagen" />
                                <p>
                                    <Button style={{ marginTop: "1rem" }}
                                        tag="a"
                                        color="dark"
                                        size="large"
                                        href="#"
                                        target="_blank"
                                      
                                    >
                                        NAVEGAR
                                    </Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                </center>
            </div>
        );
    }
}

export default App;
