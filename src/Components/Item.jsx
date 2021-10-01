// Listas

import React from 'react'
import { Card, CardImg, CardText, CardLink,  CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
export default function Item({id,tittle,description,precio,pictureUrl}) {
    return (
        <div>
        <Card style={ {width: '18rem'} }>
        <CardImg variant="top" src="https://holder.js/100px180?text=Imagecap" />
        <CardBody>
            <CardTitle>{tittle}</CardTitle>
            <CardText>{id}</CardText>
            <CardText>{description}</CardText>
            <CardText>{precio}</CardText>
            <CardImg src={pictureUrl}/>
            <CardText>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </CardText>
        </CardBody>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <CardBody>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
        </CardBody>
    </Card>
    </div>
    )
}



