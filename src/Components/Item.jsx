// Listas

import { Card, ListGroup, ListGroupItem } from 'reactstrap';

const Item = ({id,tittle,description,precio,pictureUrl}) => {
    return (
                <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>
        <Card.Body>
            <Card.Title>{tittle}</Card.Title>
            <Card.id>{id}</Card.id>
            <Card.description>{description}</Card.description>
            <Card.precio>{precio}</Card.precio>
            <Card.pictureUrl>{pictureUrl}</Card.pictureUrl>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem >Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    )
}

export default Item;

