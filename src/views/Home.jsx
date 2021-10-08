import ItemList from '../Components/ItemList'
import Navegacion from '../Components/Navegacion'
import { Button } from 'reactstrap';

function Home() {
    return (
        <div>
            <Navegacion/>
            <ItemList/>
            <div> 
                <center style={{ backgroundColor: "black" }}>
                <h4 style={{ color: "white" }}><i>¿Estás listo para la aventura?</i></h4>
                    <img src="https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80" width="550px" alt="imagen" />
                        <p>
                            <Button style={{ marginTop: "1rem", marginBottom:"1rem" }}
                                            tag="a"
                                            color="light"
                                            size="large"
                                            href="http://localhost:3000/nosotros"
                                            target="_blank"
                                    
                            >
                                NAVEGAR
                            </Button>
                        </p>
                        </center>
            </div>
            
        </div>
    )
}

export default Home